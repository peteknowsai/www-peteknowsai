#!/bin/sh
# Puts the site live. Only from a clean checkout of main, so what is live is always a commit on main.
set -e
[ "$(git branch --show-current)" = main ] || { echo "deploy: this checkout is not on main" >&2; exit 1; }
[ -z "$(git status --porcelain)" ] || { echo "deploy: commit or stash your changes first" >&2; exit 1; }
npm run check
exec wrangler pages deploy dist --project-name peteknowsai --branch main
