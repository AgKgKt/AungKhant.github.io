# Aung Khant — personal website

Academic portfolio (research, publications, teaching) with a separate history
collection. Built with [Astro](https://astro.build) and published to GitHub Pages.

**Live URL:** https://agkgkt.github.io/AungKhant.github.io/

This is a GitHub Pages *project* site: the account is `AgKgKt`, so the address is
`agkgkt.github.io/<repository name>/`. `https://aungkhant.github.io` does not point here.

## Local commands

Requires Node.js 22 or newer.

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Local preview at `http://localhost:4321/AungKhant.github.io/` — drafts visible |
| `npm run build` | Production build into `dist/` — drafts hidden |
| `npm run preview` | Serve the production build locally |

## Where things live

```text
src/site.ts              Name, role, email, CV file, profile links (one place)
src/content.config.ts    Content schemas — the build fails if a field is missing or wrong
src/content/research/    Research strands        → /research/<file-name>/
src/content/publications/ Publication records    → /publications/
src/content/projects/    Projects                → /projects/
src/content/history/     Arakan articles         → /history/arakan/<file-name>/
src/pages/               One file per page
src/styles/global.css    Design tokens (colours, type, spacing) and all styles
public/documents/        Downloadable files such as the CV PDF
TODO.md                  Everything still awaiting your confirmation
```

## Adding content

Each entry is a Markdown file with a block of settings at the top. Three flags work everywhere:

- `draft: true` — visible in `npm run dev`, left out of the published site
- `featured: true` — eligible for the homepage
- `placeholder: true` — shown with a "placeholder" notice and hidden from search engines

**A publication** — add `src/content/publications/<short-name>.md`:

```yaml
---
title: "Full paper title"
authors: ["A. Khant", "Co-author"]
venue: "Conference or journal name"
year: 2025
type: conference        # conference | journal | thesis | presentation | poster | other
status: published       # published | accepted | under-review | in-preparation | to-confirm
doi: "10.xxxx/xxxxx"    # optional
featured: true
---
```

**A history article** — copy `src/content/history/sample-article-template.md`, rename it
(the file name becomes the URL), fill in every field and set `placeholder: false`.
Footnotes use `[^1]` in the text and `[^1]: Source…` at the end. The Sources and Image
credits pages update themselves from each article's `bibliography` and `cover` fields.
A cover image requires alt text, caption, source and rights; set `reconstruction: true`
for any reconstructed or AI-generated image.

**Links inside pages** must use the helper so they work under the project path:

```astro
import { href } from '../lib/url';
<a href={href('/research/')}>Research</a>
```

In Markdown content, use relative links (`../control-methods/`) rather than links starting with `/`.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

One-time setup: **Settings → Pages → Build and deployment → Source → GitHub Actions.**
Do this at the same moment you merge the redesign into `main`; until then Pages keeps
serving files straight from the branch.

### Moving to a custom domain or a renamed account later

1. In `astro.config.mjs`, set `site` to the new origin and delete the `base` line.
2. Custom domain only: add `public/CNAME` containing the domain, and configure DNS and
   **Settings → Pages → Custom domain**.
3. Update the live URL at the top of this file.

No page or link needs editing — everything goes through `src/lib/url.ts`.

## Do not commit

Secrets or API keys, unpublished or supervisor-restricted research material, student
data, personal identity documents, or copyrighted PDFs without permission. This
repository is public.
