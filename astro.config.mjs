import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// DEPLOYMENT TARGET
// This repository is currently a GitHub Pages *project* site:
//   https://agkgkt.github.io/AungKhant.github.io/
//
// If you later connect a custom domain (or rename the repo to
// <username>.github.io), change `site` to the new origin and delete `base`.
// Every internal link goes through src/lib/url.ts, so nothing else changes.
export default defineConfig({
  site: 'https://agkgkt.github.io',
  base: '/AungKhant.github.io',
  trailingSlash: 'always',
  // Placeholder samples (files named sample-*) stay out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/sample-') })],
});
