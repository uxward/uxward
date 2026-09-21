// Single source of truth for the tools I'm building. Order here is order
// everywhere: the homepage "Building now" grid, the about page's tools list,
// and the "Other tools built" section of /llms.txt.
//
// `desc` is the homepage sentence and may contain markup (rendered with
// set:html) — but no links on a tool with an `href`, since the whole card is
// already a link. `short` is the plain-text fragment used on the about page and in
// llms.txt. `href` marks a tool as Live and links it; without one it's Private.
// `caseStudy` is a slug under /work — the about page links there instead, and
// llms.txt skips the tool because it's already listed with the case studies.
export const building = [
  {
    name: 'Speakeazy',
    desc: 'Character prep for audiobook narrators, done by AI. Live, with working narrators using it.',
    short: 'live, real users',
    href: 'https://speakeazy.pro',
    caseStudy: 'speakeazy',
  },
  {
    name: 'Design Library Showcase Generator',
    desc: 'A Figma plugin to instantly create a showcase of all library components and their variants.',
    short: 'a Figma plugin to help you instantly create a showcase of all library components and their variants',
    href: 'https://www.figma.com/community/plugin/1355255111922370746/design-library-showcase-generator-by-precocity',
  },
  {
    name: 'FORGE',
    desc: 'Feed it content and context, get a built, functioning website: IA, Design System, and code.',
    short: 'a content-driven, AI-powered IA, UX, UI, and Build tool',
  },
  {
    name: 'Verity',
    desc: "The beginnings of a complete UX research and reporting platform for agencies and enterprises. The most ambitious thing I'm working on.",
    short: 'a comprehensive UX Research platform',
  },
  {
    name: 'RAD',
    desc: 'A dashboard for running and reporting moderated usability studies.',
    short: 'a visualization and reporting tool for moderated usability studies',
  },
  {
    name: 'RADAR',
    desc: "An in-house client research tool to perform deep research on a company and its customers to quickly understand their makeup, needs, and pain points, and how Precocity can best serve them.",
    short: 'a client research tool to perform deep research on a company and its customers',
  },
  {
    name: 'Motion-Lab',
    desc: "A sandbox of illustrations, animations, and other motion assets for use in web projects. You can configure the style and type of animation, then export files to use in your project.",
    short: 'a sandbox of illustrations, animations, and other motion assets for use in web projects',
  },
  {
    name: 'Isocraft',
    desc: "An isometric 3D icon generation and editing tool. It allows us to quickly create hundreds of unique icons for our projects based on basic building blocks and brief descriptions.",
    short: 'an isometric 3D icon generation and editing tool',
  },
  {
    name: 'Marksman',
    desc: 'An in-house macOS markdown converter, built with <a href="https://github.com/microsoft/markitdown" target="_blank" rel="noopener">Markitdown</a> at Precocity.',
    short: 'a macOS Markdown converter mini-app Precocity uses internally for AI projects',
  },
];
