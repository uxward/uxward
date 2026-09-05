// Single source of truth for the writing essays.
// Mirrors src/data/slate.js. One entry per src/pages/writing/<slug>.astro page.
//
// `title` may contain <em> markup (rendered with set:html). A plain-text version
// for search/data-* attributes is derived by stripping tags at render time.
//
// Array order below is the WRITING-INDEX DISPLAY ORDER — grouped by section
// (leadership → craft → ai), each section newest-first as shown on /writing.
// Consumers that want chronological order use `essaysNewestFirst` (sorted by
// quarter, descending, stable). The homepage "recent writing" uses the first
// three of that list.
//
// Adding an essay: create src/pages/writing/<slug>.astro, then add one entry
// here in its section's display position. Counts and the home recent-writing
// cards derive from this file — nothing else to update.
export const essays = [
  // ---- On Leadership ----
  { slug: 'the-race', section: 'leadership', quarter: 'Q2 2021',
    title: 'The <em>Race.</em>',
    deck: 'A poem by Dr. D.H. Groberg, shared here because it matters.',
    image: '/images/writing/the-race.jpg' },
  { slug: 'i-failed-but-im-getting-better', section: 'leadership', quarter: 'Q2 2018',
    title: "I Failed. But <em>I'm Getting Better.</em>",
    deck: 'On being the villain in a story you thought you were the hero of.',
    image: '/images/writing/hiker.jpeg' },
  { slug: 'the-triforce-of-ux-part-iii-humility', section: 'leadership', quarter: 'Q1 2016',
    title: 'The Triforce of UX: Part III — <em>Humility.</em>',
    deck: "The third essential quality: knowing what you don't know, and being open to learning it from the user.",
    image: '/images/writing/triforce-ux.jpeg' },
  { slug: 'the-triforce-of-ux-part-ii-curiosity', section: 'leadership', quarter: 'Q1 2016',
    title: 'The Triforce of UX: Part II — <em>Curiosity.</em>',
    deck: "The second essential quality: the relentless drive to understand what you don't yet know.",
    image: '/images/writing/triforce-ux.jpeg' },
  { slug: 'the-triforce-of-ux-part-i-empathy', section: 'leadership', quarter: 'Q1 2016',
    title: 'The Triforce of UX: Part I — <em>Empathy.</em>',
    deck: 'The first of three essential qualities: the ability to get into the heads and hearts of users.',
    image: '/images/writing/dangerous.jpeg' },
  { slug: 'great-power', section: 'leadership', quarter: 'Q4 2014',
    title: 'Great <em>Power.</em>',
    deck: 'With great power comes great responsibility — applied to the stewardship of design.',
    image: '/images/writing/the-sphinx.jpeg' },
  { slug: 'how-to-succeed-towards-failure', section: 'leadership', quarter: 'Q4 2014',
    title: 'How to Succeed <em>Towards Failure.</em>',
    deck: 'What makes you successful will ultimately be your doom — knowing this ahead of time is the advantage.',
    image: '/images/writing/icarus.webp' },
  { slug: 'who-are-you', section: 'leadership', quarter: 'Q4 2014',
    title: 'Who Are <em>You?</em>',
    deck: 'We are not merely the sum of our experiences and expertise. Tell people who you actually are.',
    image: '/images/writing/people.jpeg' },
  { slug: 'dont-die-with-your-music-still-in-you', section: 'leadership', quarter: 'Q4 2014',
    title: "Don't die with your <em>music still in you.</em>",
    deck: 'Don\'t leave your ideas, designs, and passions unexpressed.',
    image: '/images/writing/typing.jpeg' },
  { slug: 'flight-of-the-buffalo', section: 'leadership', quarter: 'Q4 2014',
    title: 'Flight of <em>the Buffalo.</em>',
    deck: 'When things go wrong with your team, the first question should be: what am I doing wrong?',
    image: '/images/writing/appa.jpeg' },

  // ---- On Experience Design ----
  { slug: 'the-truth-about-simplicity-why-clarity-beats-the-buzzword', section: 'craft', quarter: 'Q1 2026',
    title: 'The Truth About Simplicity: <em>Why Clarity Beats the Buzzword.</em>',
    deck: '"Keep it simple" is the most overused advice in design. Clarity is what you actually want — and it\'s harder.',
    image: '/images/writing/image3.jpg' },
  { slug: 'only-you-can-prevent-dumpster-fires', section: 'craft', quarter: 'Q1 2026',
    title: 'Only You Can Prevent <em>Dumpster Fires.</em>',
    deck: 'A design ethics manifesto in five parts. The fires are preventable. The choice to prevent them is yours.',
    image: '/images/writing/dumpster-fires.jpg' },
  { slug: 'can-great-ux-be-novel-and-risky-too', section: 'craft', quarter: 'Q3 2021',
    title: 'Can Great UX Be <em>Novel and Risky Too?</em>',
    deck: "We've been sacrificing experiential pleasure at the altar of usability. The web is boring. We did that.",
    image: '/images/writing/DangerBoringWebsite.webp' },
  { slug: 'define-success-to-achieve-it', section: 'craft', quarter: 'Q2 2021',
    title: 'Define Success <em>to Achieve It.</em>',
    deck: 'Failing to define success is planning to fail — and this is the story of both.',
    image: '/images/writing/great-wall.jpg' },
  { slug: 'delivering-quality-experiences', section: 'craft', quarter: 'Q2 2021',
    title: 'Delivering <em>Quality Experiences.</em>',
    deck: 'Most design processes look good on paper. The road to destruction is paved with good intentions — and HiPPO feedback.',
    image: '/images/writing/michaela-baum-VnM6_liIRJ0-unsplash.jpg' },
  { slug: 'how-to-curate-arte-5-steps-to-agile-repeated-testing-enhanced', section: 'craft', quarter: 'Q2 2021',
    title: 'How To Curate ARTE: <em>5 Steps to Agile Repeated Testing for Enhancement.</em>',
    deck: 'A lightweight usability testing framework that fits inside sprints. Five steps to running it.',
    image: '/images/writing/kyre-song-kEw9MHWuz5Y-unsplash.jpg' },
  { slug: 'the-service-design-of-nest', section: 'craft', quarter: 'Q4 2014',
    title: 'The Service Design <em>of Nest.</em>',
    deck: 'How Nest surprised and delighted at every touchpoint — from the website to the first error message.',
    image: '/images/writing/nest-wall.jpeg' },
  { slug: 'empathy-in-your-interface', section: 'craft', quarter: 'Q4 2014',
    title: 'Empathy In Your <em>(inter)Face.</em>',
    deck: 'People respond emotionally to interfaces the same way they respond to people. Design accordingly.',
    image: '/images/writing/angry-man.jpg' },
  { slug: 'hey-ui-say-what-you-mean', section: 'craft', quarter: 'Q4 2014',
    title: 'Hey UI: Say what you mean, and <em>mean what you said.</em>',
    deck: "A UX critique of Redbox Instant: what happens when labels don't describe what they control.",
    image: '/images/writing/redbox.jpeg' },
  { slug: 'arrr-know-yer-personae', section: 'craft', quarter: 'Q4 2014',
    title: 'Arrr, Know Yer <em>Personæ.</em>',
    deck: "If you don't know your users better than they know themselves, your designs will miss the mark.",
    image: '/images/writing/pirates.jpeg' },
  { slug: 'the-ux-ui-design-process', section: 'craft', quarter: 'Q4 2014',
    title: 'The UX / UI <em>Design Process.</em>',
    deck: 'A systematic walkthrough of the full UX process, from stakeholder interviews to hi-fi comps.' },

  // ---- On AI ----
  { slug: 'human-centered-robot-driven-ethical-considerations-for-ai-in-design', section: 'ai', quarter: 'Q1 2023',
    title: 'Human-Centered, Robot-Driven: <em>Ethical Considerations for ML in Design.</em>',
    deck: "Bias, transparency, accountability — and why ethical AI in design is your problem, not someone else's.",
    image: '/images/writing/ai-ethics-header.jpg' },
  { slug: 'the-designers-secret-weapon-how-ai-is-revolutionizing-web-design', section: 'ai', quarter: 'Q1 2023',
    title: "The Designer's Secret Weapon: <em>How AI is Revolutionizing Web Design.</em>",
    deck: 'How AI tools are reshaping design workflows — and what the shift actually means for designers.',
    image: '/images/writing/ai-design-abstract.jpg' },
];

// Section labels + display order, for the writing index.
export const essaySections = [
  { key: 'leadership', title: 'On Leadership', descriptor: '— Hiring, scaling, holding the bar, telling the truth.' },
  { key: 'craft', title: 'On Experience Design', descriptor: '— The craft itself — IA, interaction, visual, systems.' },
  { key: 'ai', title: 'On AI', descriptor: '— Notes from working at the frontier.' },
];

// "Q1 2026" -> sortable integer (year*4 + quarter). Higher = newer.
function quarterRank(q) {
  const m = /Q([1-4])\s+(\d{4})/.exec(q);
  if (!m) return 0;
  return parseInt(m[2], 10) * 4 + parseInt(m[1], 10);
}

// Chronological, newest first (stable for same-quarter ties — preserves display order).
export const essaysNewestFirst = essays
  .map((e, i) => ({ e, i }))
  .sort((a, b) => quarterRank(b.e.quarter) - quarterRank(a.e.quarter) || a.i - b.i)
  .map(({ e }) => e);

// Plain-text title (strip <em>) for search/data-* attributes.
export function plainTitle(t) {
  let prev;
  do {
    prev = t;
    t = t.replace(/<[^>]+>/g, '');
  } while (t !== prev);
  return t;
}

// "Q1 2026" → "2026-01-01" (first day of the quarter) for schema datePublished.
export function quarterToISODate(q) {
  const m = /Q([1-4])\s+(\d{4})/.exec(q);
  if (!m) return undefined;
  const months = { 1: '01', 2: '04', 3: '07', 4: '10' };
  return `${m[2]}-${months[parseInt(m[1], 10)]}-01`;
}

// Full JSON-LD graph for one essay page (Article + BreadcrumbList).
// Lives here rather than in each page because all 23 essay pages were carrying a
// byte-identical copy — they differ only by the data above, so a change to the
// shape had to be made 23 times or not at all.
//
// `image` falls back to the site plate for the one essay with no inline art.
// `dateModified` is emitted only when an entry carries `updated: 'YYYY-MM-DD'`.
// Nothing is backfilled: there is no reliable record of past edits, and a
// fabricated dateModified is worse than none.
export function essaySchema(essay, site) {
  const article = {
    "@type": "Article",
    "headline": plainTitle(essay.title),
    "description": essay.deck,
    "datePublished": quarterToISODate(essay.quarter),
    "inLanguage": "en",
    "image": `${site}${essay.image ?? '/og-default.png'}`,
    "author": { "@type": "Person", "name": "Brandon E. B. Ward", "url": `${site}/about` },
    "publisher": { "@type": "Person", "name": "Brandon E. B. Ward", "url": site },
    "url": `${site}/writing/${essay.slug}`
  };
  if (essay.updated) article.dateModified = essay.updated;

  return {
    "@context": "https://schema.org",
    "@graph": [
      article,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": site },
          { "@type": "ListItem", "position": 2, "name": "Writing", "item": `${site}/writing` },
          { "@type": "ListItem", "position": 3, "name": plainTitle(essay.title), "item": `${site}/writing/${essay.slug}` }
        ]
      }
    ]
  };
}
