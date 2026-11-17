# Pete Knows AI

The source of [www.peteknowsai.xyz](https://www.peteknowsai.xyz), the personal site of Pete McCarthy.

It is one page, written as a letter: who he is, the four AI products he has live, the clients he builds for, twenty years of history as a short list, and how to reach him.

## How it is built

- `index.html` is the whole page. `src/site.css` is all of its styles.
- The words on the page are the storyboard's, and a test compares the two. To change the copy, change `specs/designs/2026-11-17-site-redo.html` first.
- Vite builds it into `dist/`. There is no framework and no JavaScript on the page.
- Fonts are Roboto Slab and Archivo, served from the site itself. Nothing loads from another host, and there is no tracking.
- Pictures live in `public/images/`: the painted portrait and each product's own character.

## Run it

```bash
npm install
npm run dev
```

## Check it

```bash
npm run check
```

This builds the site and runs the tests in `test/` against `dist/`. It needs `pdftotext`, which comes with poppler (`brew install poppler`). They check the links, that the only booking link is the free 30-minute call, that nothing loads from another host, the link preview tags and the icons.

## Put it live

```bash
npm run deploy
```

This runs the checks, then uploads `dist/` to the Cloudflare Pages project `peteknowsai` with `wrangler`. A push to main deploys nothing on its own.

## Files that are made, not written

- `public/og.png`, the link preview picture, is rendered from `scripts/og.html`. The command is in the comment at the top of that file, and it needs the dev server running.
- `public/resume.pdf` is printed from a resume source kept outside this repo, with the phone number removed.

## Design

The design of record is `specs/designs/2026-11-17-site-redo.html`, a storyboard of every screen. `DESIGN.md` holds the colors, type and rules the page follows, and `PRODUCT.md` says who the site is for.
