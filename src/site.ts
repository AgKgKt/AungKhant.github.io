// Single place for facts that appear across the site.
// A value of `null` means "not yet confirmed": the site shows a TODO note
// (or hides the link) instead of inventing something. See TODO.md.

export const site = {
  name: 'Aung Khant',
  role: 'PhD Researcher · Electrical & Electronic Engineer',
  institution: 'Edge Hill University',
  researchTitle: 'A Novel System and Control Strategies for Hybrid Multi-Microgrid Systems',
  statement:
    'Researching intelligent control and power exchange in hybrid AC/DC microgrids, with wider interests in engineering education and the documented history of Arakan.',
  description:
    'Aung Khant — PhD researcher and electrical and electronic engineer working on hybrid AC/DC microgrids, power electronics and model predictive control.',

  // Set to false to hide every "To confirm" note on the public site.
  showTodos: true,

  // TODO: a public contact address (not a private one). Example: 'name@example.ac.uk'
  email: null as string | null,

  // TODO: put the PDF in public/documents/ and set e.g. '/documents/aung-khant-cv.pdf'
  cvPdf: null as string | null,

  // Only verified profile URLs. These also feed the JSON-LD `sameAs` list.
  profiles: {
    orcid: null as string | null, // TODO
    scholar: null as string | null, // TODO
    linkedin: null as string | null, // TODO
    github: 'https://github.com/AgKgKt' as string | null,
  },
};

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research/' },
  { label: 'Publications', path: '/publications/' },
  { label: 'Teaching', path: '/teaching/' },
  { label: 'History', path: '/history/' },
  { label: 'About', path: '/about/' },
];

export const profileLinks = () =>
  (
    [
      ['ORCID', site.profiles.orcid],
      ['Google Scholar', site.profiles.scholar],
      ['LinkedIn', site.profiles.linkedin],
      ['GitHub', site.profiles.github],
    ] as [string, string | null][]
  ).filter((p): p is [string, string] => Boolean(p[1]));
