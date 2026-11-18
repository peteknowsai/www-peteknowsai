---
name: checks
description: How to prove a change to www-peteknowsai works, the way Pete would check it by hand. Start the site, walk the one page at desktop and phone widths, and meet the pass lines below. Use before calling any change in this repo done, inside a ship run or not.
---

# Checks for www-peteknowsai

What every session that proves a change here starts from. A QA run reads it first and
writes back what it learned, in the same branch as the change.

**One line per lesson, about 300 characters.** A new lesson on a subject a line already
covers replaces that line. **Cap: 150 lines or 40 KB, whichever comes first.** A run that
takes the file over it prunes in the same edit, and a file already over ends each edit
smaller: merge lines on one subject, drop a line whose screen or code is gone, or move a
subject to `.claude/skills/checks/<topic>.md` behind one line saying when to read it.

## Start it

- `npm run dev -- --port <port> --strictPort` from the worktree; it prints its URL. Ready when the URL answers 200 with the title "Pete McCarthy · Pete Knows AI".
- Production build, for load time and Lighthouse: `npm run build`, copy `dist/` out of the tree, then from the copy `wrangler pages deploy dist --project-name peteknowsai --branch qa-<slug>`. Anyone who has the link it prints can open it.

## Sign in

- None. The page is public.

## Walk

- **The letter, desktop**: open `/` at 1280 by 800 → the bar with Email, Book a call and Resume; "Hi, I'm Pete."; the headline on two lines with the round portrait in line one; two green highlights; four product characters in one row; eight history rows; "Pete"; LinkedIn, GitHub, X. At 1440 the page is 1280 wide and centered.
- **The letter, phone**: 390 wide → only Resume in the bar, the portrait beside "Hi, I'm Pete.", none in the headline, products as four rows, history with years on the right and each job title on its own line under the company. Nothing scrolls sideways down to 320.
- **In between**: products go two by two at 1000 and below; job titles sit under the description from 641 to 1000.
- **Links**: each product opens its own site; both booking links open the free 30-minute Cal.com page; Resume and "read my resume" serve `/resume.pdf`, two pages.
- **Keyboard**: Tab from the top visits all 13 links in reading order, each with a 2px ring; the Resume button also lightens.
- **Hover**: a product's picture lifts and tilts; with reduced motion on, its computed `transform` stays `none`.
- **Unknown paths**: `/whatsapp.html` or any other path shows the letter, since there is no `404.html`. `/robots.txt` is a real file.

## Pass lines

| Check | When | Passes when | On a fail |
|---|---|---|---|
| Gates | every change | `npm run check` passes | the failing test names what broke |
| No sideways scroll | any CSS or markup change | `document.documentElement.scrollWidth` equals the window width at 320, 390, 768, 1024, 1280 and 1440 | the three media blocks in `src/site.css` |
| Layout shift | any change, on a production build | under 0.1 at 1440, and at 390 on Slow 4G with 4x CPU | Noise has the font swap's number |
| Load time | any change, on a production build | largest paint under 2.5 s at 390 on Slow 4G with 4x CPU | the trace's breakdown |
| Lighthouse | any change, on a production build | Accessibility 100 and Best Practices 100, desktop and mobile | the node it flags |
| Requests | any change | every request goes to the page's own host, and the console is empty on a production build | the allow list in `test/site.test.mjs` |
| Resume | when `public/resume.pdf` changes | `pdftotext` finds no phone number and no town | reprint from the source kept outside the repo |

## Noise

What every run sees that is not the change: skip it, never chase it.

| Noise | Where it shows | Why it isn't the change |
|---|---|---|
| Two "preloaded using link preload but not used" warnings for the fonts | dev server console, only after a reload with the cache off | that reload fetches the fonts twice; a normal load and the production build print none |
| Layout shift up to 0.05 at 390 on Slow 4G | performance trace | the two web fonts arrive after first paint and swap in; it reads 0.00 when they arrive first |
| `is-crawlable` fails | Lighthouse SEO on a preview link | Cloudflare adds `x-robots-tag: noindex` to preview links only |
| `llms-txt` and `ard-schema` fail | Lighthouse Agentic Browsing | the host serves the page for those paths; the site has neither file |
| `/cdn-cgi/scripts/.../email-decode.min.js`, a script from `static.cloudflareinsights.com` and a POST to `/cdn-cgi/rum` | requests on the live domain only | Cloudflare adds its email protection and its visit counter at the edge; the build and `pages.dev` links have neither |
| The bare domain will not resolve right after its DNS record is added | curl or a browser on the machine that looked it up just before | the system resolver remembers the earlier miss for up to 30 minutes; `dig` and a `curl --resolve` pinned to the public answer prove it meanwhile |
| LinkedIn answers 999 | curl of the foot link | LinkedIn's bot block; the link opens in a browser |

## Learned

- Frames: `specs/designs/2026-11-17-site-redo.html` holds L1, L2, P1 and P2 in `<template data-frame>`, each a fixed `data-h` tall, so a change that adds lines must raise it (the frame's `scrollHeight` says by how much). Frame 2 starts with its own top margin: shift it 30px on desktop, 22px on a phone, before comparing pixels. (history-titles, 2026-11-18)
- Link preview: redraw `public/og.png` with the command at the top of `scripts/og.html` while the dev server runs. A redraw drops the picture's embedded origin note, so embed it again. (site-redo, 2026-11-17)
- Hidden picture: an `<img>` with `width` and `height` attributes that is `display: none` at desktop fails Lighthouse's aspect-ratio audit, so the phone-only portrait is sized in CSS. (site-redo, 2026-11-17)
- Resume: check `/resume.pdf` with `fetch` from the page and `pdftotext` on the file, not by clicking; a headless browser has no PDF viewer. (site-redo, 2026-11-17)
- Production build: after `npm run check`, `npx vite preview --port <port> --strictPort` serves `dist/` locally, enough to walk a wording or CSS change on the real build with no Cloudflare upload. (history-titles, 2026-11-18)
