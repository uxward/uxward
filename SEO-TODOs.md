# SEO / GEO — Remaining TODOs

Baseline after PR #2 (merged) + code review fixes: **~65–70/100** (up from 40/100).
Breaking 80 requires off-site brand presence — no amount of local schema fixes can substitute.

---

## Off-site (biggest remaining lever)

- [ ] **Submit sitemap to Google Search Console** — `https://uxward.com/sitemap-index.xml`
- [ ] **Submit sitemap to Bing Webmaster Tools** — same URL
- [ ] **Create a Wikidata entry** for Brandon E. B. Ward — direct entity recognition signal for AI systems; takes ~15 min at wikidata.org
- [ ] **Get cited on third-party sites** — industry articles, podcast appearances, speaking credits, LinkedIn thought leadership with engagement. AI systems learn who you are from corroborating third-party mentions.
- [ ] **Cross-post essays** to LinkedIn Articles, Medium, or Substack — increases surface area for AI training data and citation

---

## Code / content (in the repo)

### High priority

- [ ] **FAQ schema on `about.astro`** — Add 4–5 Q&As like "What is Brandon Ward's background?", "What companies has he led design at?", "What is a Chief Experience Officer?" The about page is most likely to surface in AI answers about Brandon.
- [ ] **Verify `self.deck` is populated** on all 5 work pages — run `npm run preview` and check source of a case study; confirm meta description isn't `undefined`.

### Medium priority

- [ ] **`speakable` schema on homepage + about** — Google uses `SpeakableSpecification` for AI Overviews and voice. Points at the CSS selectors of the most quotable content blocks.
- [ ] **`articleBody` field on Article schema** — Currently essays have `headline` + `description` but not `articleBody`. Adding a 50–100 word summary gives AI systems more to quote without crawling the full page.
- [ ] **`sameAs` expansion on Person schema** in `Base.astro` — currently has LinkedIn and GitHub; add any other authoritative profiles (Twitter/X, Speaker deck, etc.)
- [ ] **Image alt text audit** — grep for `<img` tags missing `alt` across the work case study pages; descriptive alts are read by AI crawlers.
- [x] **Default OG image** — done 2026-08-29. `public/og-default.png` (1200×630, built out of the site's own system: Archivo 900, off-white canvas, signature red, hairline spec bar) is now the fallback in `Base.astro`; `twitter:card` upgraded to `summary_large_image` and `twitter:image` added. Per-page overrides still work — case studies should pass their own hero shot. `apple-touch-icon.png` added at the same time.

### Lower priority

- [ ] **Internal linking** — Link essays to relevant work pages and vice versa where topically related. Helps AI systems understand content relationships.
- [ ] **`dateModified` on Article schema** — essays currently only have `datePublished`; adding `dateModified` signals freshness when content is updated.

---

## Validation (post-launch)

- [ ] **Google Rich Results Test** — Paste 3–4 page URLs to confirm JSON-LD renders correctly
- [ ] **Schema.org validator** — `validator.schema.org` for a deeper structural check
- [ ] **Perplexity / ChatGPT search** — After indexing, search "Brandon Ward UX designer" and "Brandon Ward CXO" to see if the site surfaces

---

## Reference

- GEO audit baseline report: `GEO-AUDIT-REPORT.md`
- PR #2 merged: robots.txt, llms.txt, sitemap, global Person + WebSite JSON-LD, OG/Twitter meta, Article + BreadcrumbList on all 23 essays, BreadcrumbList on all 5 work pages, FAQPage on contact
- Code review fixes (post-PR #2): ogType="article" on essay pages, ogImage prop infrastructure, /404 excluded from sitemap, quarterToISODate returns undefined on mismatch, domain hardcoding replaced with import.meta.env.SITE, FAQPage co-located with HTML in contact.astro
- Score breakdown at baseline (40/100):
  - AI Citability: 52/100
  - Brand Authority: 15/100
  - Content E-E-A-T: 58/100
  - Technical GEO: 0/100 (fixed in PR #2)
  - Schema & Structured Data: 0/100 (fixed in PR #2)
  - Platform Optimization: 20/100
