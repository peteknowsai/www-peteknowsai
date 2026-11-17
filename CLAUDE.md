# www-peteknowsai

The personal site of Pete McCarthy at https://www.peteknowsai.xyz. It is one static page:
`index.html` and `src/site.css`, built by Vite into `dist/`. No framework, no JavaScript on the
page, and no request to any other host. This repo is public: keep phone numbers and anything
private out of files, commits and PR text.

Docs home is `specs/`. The design of record is `specs/designs/2026-11-17-site-redo.html` and
`DESIGN.md`. Product truth is `PRODUCT.md`.

## Ship contract

- gates: `npm run check` (builds, then runs `node --test` over `dist/`; needs `pdftotext` from poppler)
- dev: `npm run dev -- --port <port> --strictPort`
- test-auth: none
- backend: none
- preview: on demand. `npm run build && wrangler pages deploy dist --project-name peteknowsai --branch <branch>` prints a private preview URL. Use it when a check needs a production build, such as load time.
- deploy: `npm run deploy`
- live: a push to main deploys nothing. `npm run deploy` uploads `dist/` to the Cloudflare Pages project `peteknowsai`, which serves https://www.peteknowsai.xyz and https://peteknowsai.xyz. Load both after an upload.
- land: pr

## Rules that are easy to break

- The page names no town.
- The only booking link is the free 30-minute call, `https://cal.com/peteknowai/30min`. The account name has no "s" after "know".
- Nothing loads from another host. Fonts come from `node_modules/@fontsource-variable/*` at build time.
- Nothing moves except on hover or focus, and nothing at all under reduced motion.
- The words on the page are the storyboard's. A test compares them, so a copy change starts in the storyboard.
- `public/resume.pdf` is printed from a source kept outside this repo, with the phone number removed. Never commit the source.
- There is no `404.html`, so the host serves the page itself for any unknown path. Old links land on the letter.
