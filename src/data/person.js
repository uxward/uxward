// Single source of truth for Brandon's identity as machines read it.
//
// This exists because `sameAs` and the Person description were duplicated in
// two places — the global Person graph in Base.astro and the ProfilePage on
// /about — and two copies of an identity claim drift. Same reason the essay
// JSON-LD moved into essays.js.

export const PERSON_NAME = 'Brandon E. B. Ward';
export const PERSON_JOB_TITLE = 'Chief Experience Officer';

// Kept in sync with the "20+ years" wording used in meta and body copy.
// If this number is ever revised it has to move everywhere at once — see
// SEO-TODOs.md 1.2 for the full list of locations.
export const PERSON_DESCRIPTION =
  'Executive design leader. 20+ years building design practices from scratch. CXO at Precocity. Founder of Speakeazy. Based in Dallas, Texas.';

// `sameAs` means "this URL identifies the same entity" — it is an identity
// claim, not a link list. Every entry below was checked to resolve and to
// belong to Brandon before it was added.
//
// URLs are the canonical destination, not what was pasted: tracking params are
// stripped (IMDb `?ref_=`) and redirects are followed to their target
// (www.brandonebward.com 301s to the apex).
//
// Deliberately NOT here: speakeazy.pro. That is a product Brandon built, not
// Brandon — putting it in sameAs would assert he *is* the application.
export const PERSON_SAME_AS = [
  // Professional / identity
  'https://www.linkedin.com/in/brandonebward/',
  'https://github.com/uxward',
  'https://x.com/uxward',
  'https://bsky.app/profile/uxward.bsky.social',
  'https://c.im/@uxward',
  'https://www.threads.com/@uxward',
  'https://www.instagram.com/uxward',

  // Writing
  'https://medium.com/@uxward',
  'https://substack.com/@uxward',

  // Work / portfolio
  'https://www.behance.net/brandonebward',
  'https://dribbble.com/uxward',
  'https://www.slideshare.net/uxward',
  'https://www.youtube.com/@uxward',

  // The performing-arts identity. Same person, second professional site.
  // IMDb is the bridge: brandonebward.com's own Person schema also lists it,
  // so entity resolvers can merge the two identities rather than treat
  // "design leader" and "voice actor" as two different Brandon E.B. Wards.
  'https://brandonebward.com',
  'https://www.imdb.com/name/nm14664733/',
];
