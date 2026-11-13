import { getCollection, type CollectionEntry } from 'astro:content';

type Name = 'research' | 'publications' | 'projects' | 'history';

// Drafts are visible in `npm run dev` and hidden from the production build.
export async function published<N extends Name>(name: N): Promise<CollectionEntry<N>[]> {
  const all = await getCollection(name);
  return all.filter((e) => !(import.meta.env.PROD && e.data.draft));
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
