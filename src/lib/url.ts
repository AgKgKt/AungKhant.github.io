// Base-path-safe links. Always use href('/research/') instead of '/research/'
// so the site works both under /AungKhant.github.io and on a custom domain.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function href(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

// True when `current` (Astro.url.pathname) is inside the section at `path`.
export function isActive(current: string, path: string): boolean {
  const target = href(path);
  if (path === '/') return current === target || current === `${target}/`.replace('//', '/');
  return current.startsWith(target);
}
