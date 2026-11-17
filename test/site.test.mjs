// Checks the built site in dist/. Run with `npm run check`, which builds first.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

const html = readFileSync('dist/index.html', 'utf8')
const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1])

// Visible words only: tags out, spaces collapsed, no space left before punctuation.
const text = (s) =>
  s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').replace(/ ([,.:;])/g, '$1').trim()

const pngSize = (file) => {
  const b = readFileSync(file)
  return [b.readUInt32BE(16), b.readUInt32BE(20)]
}

const PRODUCTS = [
  'https://www.cells.md/',
  'https://www.homezero.md/',
  'https://www.ttowns.org/',
  'https://www.yeoman.md/',
]
const FOOT = [
  'https://www.linkedin.com/in/peteknowsai',
  'https://github.com/peteknowsai',
  'https://x.com/peteknowsai',
]
const BOOKING = 'https://cal.com/peteknowai/30min'
const SITE = 'https://www.peteknowsai.xyz/'

test('one h1 with the headline', () => {
  const h1 = html.match(/<h1[ >][\s\S]*?<\/h1>/g) || []
  assert.equal(h1.length, 1)
  assert.match(text(h1[0]), /I build AI agents and ship them myself\./)
})

test("the words are the storyboard's", () => {
  const board = readFileSync('specs/designs/2026-11-17-site-redo.html', 'utf8')
  const frame = (id) =>
    board.match(new RegExp(`<template data-frame="${id}"[^>]*>([\\s\\S]*?)</template>`))[1]
  const pieces = ['L1', 'L2'].flatMap((id) =>
    [
      /<div class="bar">[\s\S]*?<\/div>/g,
      /<h1>[\s\S]*?<\/h1>/g,
      /<p[ >][\s\S]*?<\/p>/g,
      /<div class="crew">[\s\S]*?<\/div>/g,
      /<div class="r">[\s\S]*?<\/div>/g,
      /<div class="foot2">[\s\S]*?<\/div>/g,
    ].flatMap((re) => [...frame(id).matchAll(re)].map((m) => text(m[0]))),
  )
  assert.ok(pieces.length >= 20, `only ${pieces.length} pieces read from the storyboard`)
  const page = text(html)
  for (const piece of pieces) assert.ok(page.includes(piece), `missing or reworded: ${piece}`)
})

test('four products link to their live sites, in order', () => {
  assert.deepEqual(hrefs.filter((h) => PRODUCTS.includes(h)), PRODUCTS)
})

test('the only booking is the free 30-minute call', () => {
  const cal = hrefs.filter((h) => h.includes('cal.com'))
  assert.ok(cal.length >= 1, 'no booking link')
  assert.deepEqual([...new Set(cal)], [BOOKING])
  assert.doesNotMatch(html, /consult/i)
})

test('email, resume and the foot links', () => {
  assert.ok(hrefs.includes('mailto:pete@peteknowsai.xyz'))
  assert.ok(hrefs.includes('/resume.pdf'))
  for (const link of FOOT) assert.equal(hrefs.filter((h) => h === link).length, 1, link)
  assert.ok(existsSync('dist/resume.pdf'))
})

test('names no town', () => {
  assert.doesNotMatch(html, /Paonia|Colorado/i)
  assert.doesNotMatch(readFileSync('scripts/og.html', 'utf8'), /Paonia|Colorado/i)
})

test('nothing loads from another host, no script, no form', () => {
  assert.doesNotMatch(html, /<script/i)
  assert.doesNotMatch(html, /<form/i)
  const local = /^\/(?!\/)/
  const srcs = [...html.matchAll(/\ssrc="([^"]*)"/g)].map((m) => m[1])
  assert.ok(srcs.length >= 6, `only ${srcs.length} pictures`)
  for (const src of srcs) assert.match(src, local)
  const loading = [...html.matchAll(/<link\b[^>]*>/g)]
    .map((m) => m[0])
    .filter((l) => /rel="(stylesheet|preload|modulepreload|icon|apple-touch-icon)"/.test(l))
  assert.ok(loading.some((l) => l.includes('rel="stylesheet"')), 'no stylesheet')
  for (const link of loading) assert.match(link.match(/href="([^"]*)"/)[1], local)
  for (const file of readdirSync('dist/assets').filter((f) => f.endsWith('.css'))) {
    const css = readFileSync(`dist/assets/${file}`, 'utf8')
    assert.doesNotMatch(css, /url\(\s*['"]?(https?:)?\/\//)
    assert.doesNotMatch(css, /@import/)
  }
})

test('link preview points at www', () => {
  const meta = (key) =>
    (html.match(new RegExp(`<meta (?:property|name)="${key}" content="([^"]*)"`)) || [])[1] || ''
  for (const key of ['og:url', 'og:image', 'twitter:image']) {
    assert.ok(meta(key).startsWith(SITE), `${key} is "${meta(key)}"`)
  }
  assert.match(html, new RegExp(`<link rel="canonical" href="${SITE}"`))
  assert.deepEqual(pngSize('dist/og.png'), [1200, 630])
})

test('icons', () => {
  assert.deepEqual(pngSize('dist/icon.png'), [48, 48])
  assert.deepEqual(pngSize('dist/apple-touch-icon.png'), [180, 180])
})

test('the old pages are gone', () => {
  assert.ok(!existsSync('dist/whatsapp.html'))
  assert.ok(!existsSync('dist/images/whatsapp.png'))
})

test('every image has an alt attribute', () => {
  for (const img of html.matchAll(/<img\b[^>]*>/g)) assert.match(img[0], /\salt="/)
})

test('history has eight rows with the career break', () => {
  const hist = html.match(/<ul class="hist"[^>]*>([\s\S]*?)<\/ul>/)
  assert.ok(hist, 'no history list')
  assert.equal((hist[1].match(/<li\b/g) || []).length, 8)
  assert.match(hist[1], /Career break/)
})

test('the resume has no phone number', () => {
  let words
  try {
    words = execFileSync('pdftotext', ['dist/resume.pdf', '-'], { encoding: 'utf8' })
  } catch (e) {
    assert.fail(e.code === 'ENOENT' ? 'pdftotext not found: install poppler' : String(e))
  }
  assert.doesNotMatch(words, /\(?\d{3}\)?[ .-]\d{3}[ .-]\d{4}/)
  assert.match(words, /Cells/)
})
