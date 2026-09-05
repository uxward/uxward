// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { essays, essaysNewestFirst, quarterToISODate } from './src/data/essays.js';
import { slate } from './src/data/slate.js';

// `lastmod` per URL, derived from the same data the pages render from.
//
// Google uses lastmod to decide what is worth re-crawling, but ignores it when it
// looks unreliable — and stamping every URL with the build date is exactly that
// pattern. So a page gets a lastmod only where a real content date exists, and
// pages without one (home, about, contact, colophon, four of the five case
// studies) are emitted with none rather than a fabricated date.
const essayDate = (e) => e.updated ?? e.published ?? quarterToISODate(e.quarter);

const lastmod = new Map([
  ...essays.map((e) => [`/writing/${e.slug}/`, essayDate(e)]),
  ...slate.filter((c) => c.shipped).map((c) => [`/work/${c.slug}/`, c.shipped]),
  // The archive index genuinely changes whenever an essay lands, so it carries
  // the newest essay's date.
  ['/writing/', essayDate(essaysNewestFirst[0])],
]);

export default defineConfig({
  site: 'https://uxward.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/ink'),
      serialize(item) {
        const date = lastmod.get(new URL(item.url).pathname);
        if (date) item.lastmod = date;
        return item;
      },
    }),
  ],
});
