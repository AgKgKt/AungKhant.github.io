# Content awaiting confirmation

Nothing on the site has been invented. Each item below is either a visible
"To confirm" note on the page or a hidden link. Set `showTodos: false` in
`src/site.ts` to hide all the notes at once.

## Identity and contact — `src/site.ts`
- [ ] Public contact email (`email`) — currently none shown
- [ ] CV as PDF: add to `public/documents/`, then set `cvPdf`
- [ ] ORCID URL
- [ ] Google Scholar URL
- [ ] LinkedIn URL
- [ ] Confirm the GitHub link (https://github.com/AgKgKt) should be shown

## Images and diagrams
- [ ] Higher-resolution profile photograph (current file is 400 × 400 px) — replace `src/assets/profile-photo.jpg`
- [ ] Hybrid multi-microgrid system diagram (homepage and Research page)
- [ ] Any further figures cleared for publication

## Research — `src/pages/research/index.astro`, `src/content/research/`
- [ ] Research questions and contributions in your own words
- [ ] Proposed architecture description (`hybrid-multi-microgrid.md`)
- [ ] Specific control strategies and what is new (`control-methods.md`)
- [ ] Simulators, controllers and facilities used (`hardware-validation.md`)
- [ ] Results that are published or cleared for release
- [ ] Supervisor's agreement on what may be public
- [ ] Set `placeholder: false` on each research file once reviewed

## Publications — `src/content/publications/`
- [ ] ECCE Europe 2025 record: confirm it is a paper (not attendance only), then title, authors, DOI/link
- [ ] Any other papers, posters or presentations

## Projects — `src/content/projects/`
- [ ] Replace `sample-project.md` with at least one real project

## Teaching — `src/pages/teaching.astro`
- [ ] Teaching philosophy statement
- [ ] Modules, levels, institutions and dates
- [ ] Dissertation level and project areas
- [ ] Teaching materials you own and may share
- [ ] Engineering roles, organisations and dates you wish to name

## About and CV — `src/pages/about.astro`, `src/pages/cv.astro`
- [ ] Education (degrees, institutions, years)
- [ ] Employment history to publish

## History — `src/content/history/`
- [ ] First two fully sourced Arakan articles
- [ ] Remove or keep `sample-article-template.md` (it is excluded from search engines and the sitemap)
- [ ] Image permissions for any pictures used

## Deployment decisions
- [ ] Switch Pages source to "GitHub Actions" when merging
- [ ] Decide: custom domain, account rename, or keep the project URL
- [ ] Search Console verification once the address is final
