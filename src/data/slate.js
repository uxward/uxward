// Single source of truth for the selected slate (the case-study set).
// Order here is order everywhere: index rows and numbering, each case page's
// case number, prev/next wiring, "Back to all N" counts, and the homepage
// "See all N" count.
//
// Adding a case: create src/pages/work/<slug>.astro, then add one entry here
// in slate position — everything else derives. slate[0] is the hero of the
// slate; `eyebrow`, `pullout`, and `stamps` beyond the first entry are used
// by the work-index listing only. `title` and `pullout` may contain <em>
// markup (rendered with set:html).
export const slate = [
  {
    slug: 'speakeazy',
    client: 'Speakeazy',
    title: 'Speakeazy — the tool that <em>should have existed.</em>',
    deck: 'AI-native dialogue attribution and character analysis for audiobook narrators. I went looking for a tool to do the unpaid prep, found that none existed, and built one myself — three abandoned prototypes, a two-week ground-up rewrite, launched to real users in January 2026.',
    eyebrow: '2025 — Present · Designer & developer · Solo',
    pullout: "You can't learn on page 200 that the character you've voiced as a man for <em>199 pages</em> is a woman.",
    stamps: ['Solo build', '3 prototypes → 1 product', 'Live January 2026'],
  },
  {
    slug: 'autoco',
    client: 'a global automaker',
    title: 'a global automaker — testing like an <em>outsider.</em>',
    deck: 'A carmaker celebrated for consumer research realized it was being out-designed by the tech industry. Across 17 studies and 3,500 hours of testing, I built and led the independent, bias-free usability practice that turned guesswork into a closed-loop design process — and that a global automaker eventually brought in-house.',
    stamps: ['Director of UX', '2017 — 2022', 'Rotating 3–5 person teams'],
  },
  {
    slug: 'porte',
    client: 'Porte',
    title: 'Porte — tested before a <em>line of code.</em>',
    deck: "Populous's first mobile-only bank had to stand out in a saturated market, for a generation it had never designed for. We researched and tested every layer — app, card, mailer, brand — before a line of code was written, and shipped a 1.0 that earned 4.8 stars.",
    stamps: ['Director of UX', '2019', 'Lead of a 3-person UX team'],
  },
  {
    slug: 'insurco',
    client: 'a major insurance broker',
    title: 'a major insurance broker — when white-glove met <em>scale.</em>',
    deck: "a major insurance broker's white-glove service was cracking under its own growth, and the data that could explain why was locked inside Salesforce. I led the service-design engagement that diagnosed the breakdown, freed the data, and handed leadership a KPI-tied roadmap they backed in full.",
    stamps: ['Chief Experience Officer', '2024', 'Engagement lead, cross-functional team'],
  },
];
