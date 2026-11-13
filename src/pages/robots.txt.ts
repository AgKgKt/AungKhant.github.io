import type { APIRoute } from 'astro';
import { href } from '../lib/url';

// Note: crawlers only read robots.txt at the root of a host. While this is a
// project site (under /AungKhant.github.io/) the file is informational; it
// takes effect once the site moves to a custom domain or a user-site repo.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(href('/sitemap-index.xml'), site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
