# SEO / GEO — TODOs

**Last audited:** 2026-08-31 (against `main` @ b269172, built output, and the live domain)
**Previous audit:** 2026-06-27 (`GEO-AUDIT-REPORT.md`, baseline 40/100)

> **The headline finding, up front:** `uxward.com` still serves the **old Squarespace site**.
> The Astro site in this repo has never been deployed to the domain. Every schema, meta,
> sitemap, and `llms.txt` improvement below is currently invisible to search engines and
> AI crawlers. See [Tier 0](#tier-0--the-blocker).
>
> Repo score (what deploys): **~72/100**. Live score (what AI sees today): **~38/100**.

---

## Tier 0 — The blocker

Nothing else on this list changes a single AI answer until this is resolved.

- [ ] **Deploy the Astro site to `uxward.com`.** Verified 2026-08-31:
  - `https://uxward.com` → `301` → `https://www.uxward.com`, `server: Squarespace`
  - `/about` → **404**, `/work` → **404** (they don't exist on the live site)
  - `/llms.txt` → **404**, `/sitemap-index.xml` → **404**
  - Live page title is `Brandon E.B. Ward`; live sitemap has 119 Squarespace URLs
  - `wrangler.json` is configured for Cloudflare but the domain isn't pointed at it

- [ ] **Decide the canonical host: apex or `www`.** `Base.astro` sets
  `site: 'https://uxward.com'` (apex) and emits apex canonicals. The live site redirects
  apex → `www`. If that redirect survives the cutover, **every canonical URL will 301**,
  which leaks authority and confuses AI crawlers. Pick one and make `astro.config.mjs`,
  the canonical tags, `llms.txt`, and the DNS/redirect agree.

- [ ] **Write the redirect map before cutover.** There is no `public/_redirects` file.
  Measured against the live sitemap — 119 live URLs:

  | Bucket | Count | Action |
  |---|---|---|
  | Direct match (same path) | 11 | nothing needed |
  | Dated → flat slug | 13 | **301 required** |
  | Content dropped in rebuild | 6 essays | 301 to `/writing` or restore |
  | Squarespace sections | 8 | map `/design*`, `/leadership`, `/speaking`, `/home` |
  | Tag/category archives | 80 | 301 to `/writing` (or 410) |

  The 13 dated → flat redirects:

  ```
  /writing/2014/10/13/the-ux-ui-design-process              /writing/the-ux-ui-design-process/            301
  /writing/2014/10/16/arrr-know-yer-personae                /writing/arrr-know-yer-personae/              301
  /writing/2014/10/28/flight-of-the-buffalo                 /writing/flight-of-the-buffalo/               301
  /writing/2014/10/30/the-service-design-of-nest            /writing/the-service-design-of-nest/          301
  /writing/2014/11/26/empathy-in-your-interface             /writing/empathy-in-your-interface/           301
  /writing/2014/12/16/dont-die-with-your-music-still-in-you /writing/dont-die-with-your-music-still-in-you/ 301
  /writing/2014/12/18/who-are-you                           /writing/who-are-you/                         301
  /writing/2014/12/29/how-to-succeed-towards-failure        /writing/how-to-succeed-towards-failure/       301
  /writing/2014/12/30/great-power                           /writing/great-power/                         301
  /writing/2016/03/10/the-triforce-of-ux-part-i-empathy     /writing/the-triforce-of-ux-part-i-empathy/    301
  /writing/2016/03/28/the-triforce-of-ux-part-ii-curiosity  /writing/the-triforce-of-ux-part-ii-curiosity/ 301
  /writing/2016/03/30/the-triforce-of-ux-part-iii-humility  /writing/the-triforce-of-ux-part-iii-humility/ 301
  /writing/2018/05/22/i-failed-but-im-getting-better        /writing/i-failed-but-im-getting-better/       301
  ```

  **One slug changed and needs a bespoke redirect** — the live essay is
  `hey-ui-say-what-you-mean-and-mean-what-you-said`, the repo slug is
  `hey-ui-say-what-you-mean`.

---

## Tier 1 — Technical, in the repo (I can do these now)

Ordered by GEO impact per unit of effort. None require a decision from you.

### 1.1 Correctness bugs found in this audit

- [ ] **`/colophon` ships two `<h1>` elements.** `colophon.astro:81` (`A note on the
  making.`) and `:90` (`A note on the breach.`). Only one is *visible* — the cyber-mode
  block is hidden with CSS — but **both are in the DOM**, so crawlers and AI extractors
  read the Night City copy as page content. Fix: demote one, or render conditionally.
- [ ] **Work-index headings concatenate their count.** `<h3><span>Research &amp;
  testing</span><span>4</span></h3>` extracts as `"Research & testing4"` — same for
  `Product & platform7`, `Immersive2`, `Systems & interface3`, `Growth & brand5`. Move
  the count out of the heading, or give it `aria-hidden` plus a visually-hidden label.
- [ ] **Lightbox `<img>` never gets an `alt`.** All 5 case pages ship
  `<img alt="" />` and the JS sets only `src` on open. Carry the source image's alt across.
- [ ] **One content image has an empty alt** —
  `writing/i-failed-but-im-getting-better.astro:252`, `cave.jpeg`. The other 119 `<img>`
  tags are correctly described; this is the only real gap.
- [ ] **`/ink` is indexable and has no description of its own.** It inherits the
  site-default meta description and sits in the sitemap. It's an easter-egg page —
  exclude it from the sitemap the way `/404` is, or give it real metadata.

### 1.2 Entity consistency (cheap, and AI systems are unusually sensitive to it)

- [ ] **Years of experience contradicts itself in three places.** Schema and homepage say
  **25 years**; `llms.txt` says **20+ years**; `/about` says **"Many years"**. Conflicting
  claims about the same entity make AI systems hedge or omit. Pick one number, use it
  everywhere.
- [ ] **`llms.txt` says 22 essays; there are 23.** Also still describes the archive as
  "2014–2026" — verify that's the real range against `essays.js`.

### 1.3 Schema gaps

- [ ] **`/about` has no page-level schema at all** — only the global Person + WebSite
  graph. This is the page most likely to be the source of an AI answer about you.
  Add `ProfilePage` with `mainEntity` → Person, plus `hasOccupation`, `worksFor`,
  `knowsAbout`, and `award` for the FTC expert-witness and SDN roles. The career
  timeline already on the page supplies every value; nothing needs inventing.
  *(This supersedes the old "FAQ schema on about" item — see Tier 2.1 for why.)*
- [ ] **`/work` and `/writing` have no collection schema.** Add `CollectionPage` +
  `ItemList` so AI systems can enumerate the 5 cases and 23 essays as sets rather than
  discovering them one page at a time.
- [ ] **`Article` schema has no `image`.** All 23 essays carry `headline`,
  `description`, `datePublished`, `author`, `publisher`, `url` — but no image, which
  weakens rich-result eligibility.
- [ ] **`dateModified` on `Article`.** Needs a new field in `essays.js`; currently only
  `datePublished` exists (derived from `quarter`, so it resolves to the first day of the
  quarter — an approximation worth knowing about).
- [ ] **`speakable` on homepage + `/about`.** Points AI/voice surfaces at the most
  quotable blocks.

### 1.4 Performance / Core Web Vitals

- [ ] **Images are unoptimized: 9.2 MB of raster across 101 files.** Only 16 WebP
  (557 KB) versus 4.6 MB JPG + 3.7 MB PNG. Worst offenders:
  `writing/kyre-song-…-unsplash.jpg` **832 KB**, `speakeazy/projects-6.11.26.png` **493 KB**,
  `writing/paved-path.jpg` **491 KB**, `writing/dumpster-fires.jpg` **385 KB**.
  Converting to WebP/AVIF via Astro's `<Image>` would cut most of this.
- [ ] **`loading="lazy"` on 26 of 125 images; `width`/`height` on only 10.** Missing
  intrinsic dimensions is a direct CLS penalty.

---

## Tier 2 — Needs a decision from you before I build it

### 2.1 FAQ schema on `/about` — I'd recommend *against* it as written

The old TODO called for 4–5 Q&As in `FAQPage` schema on `/about`. Two problems:

1. **Google requires FAQ markup to match visible on-page content.** `/about` has no FAQ
   section, so adding the schema alone would be invisible-content markup — a structured-data
   violation, not just a wasted tag.
2. **FAQ rich results were restricted in Aug 2023** to authoritative government and health
   sites. The SERP payoff is gone; only the AI-extraction benefit remains.

**Three ways forward — your call:**
- **(a)** Add a real, visible FAQ section to `/about`, then mark it up. Most work, fully legitimate.
- **(b)** Skip FAQ on `/about`; ship `ProfilePage` instead (Tier 1.3). **My recommendation** —
  it's the correct type for the page and is what AI systems actually consume for entity facts.
- **(c)** Both: `ProfilePage` now, visible FAQ later if you want the section anyway.

### 2.2 Work-page meta descriptions run 214–339 characters

They reuse `slate.deck`, which is written as editorial copy, not meta copy. Google truncates
around 155–160.

| Page | Length |
|---|---|
| `/work/autoco` | 339 |
| `/work/insurco` | 291 |
| `/work/speakeazy` | 273 |
| `/work/porte` | 259 |
| `/work/precocity` | 214 |

Genuine tension: **long is good for AI extraction, bad for SERP display.** Options —
add a separate short `metaDescription` field to `slate.js` (best of both), or accept
truncation as a deliberate GEO-first trade. Same question applies to three essay titles
running 79–80 chars (`how-to-curate-arte…`, `human-centered-robot-driven…`,
`the-designers-secret-weapon…`).

### 2.3 `articleBody` on Article schema

The old TODO suggested a 50–100 word summary. But `description` already holds the deck —
putting a near-duplicate in `articleBody` adds little, and a *real* `articleBody` means
shipping full essay text in JSON-LD (doubling page weight). I'd rather spend the effort on
`image` + `wordCount` + `inLanguage`. Tell me if you want `articleBody` anyway.

### 2.4 `sameAs` expansion

Currently LinkedIn + GitHub only. I can't invent profiles. Send me any of: X/Twitter,
Speaker Deck, Medium, Substack, Dribbble, Behance, ADPList, Bluesky, a Crunchbase or
speaker-bio page — plus `speakeazy.pro` if you want the product linked to your entity.

### 2.5 Six essays exist on the live site but not in the rebuild

`the-billion-dollar-idea`, `a-credo`, `my-unlimited-signature`, `when-im-the-ceo`,
`open-letter-to-lego…`, `my-impossible-list`. Restore them, or 301 them to `/writing`?
They currently have indexed history and inbound authority.

### 2.6 No security headers

No `public/_headers`. Cloudflare will serve without CSP, HSTS, `X-Frame-Options`, or
`Referrer-Policy`. You have a `SECURITY.md` but no enforcement. Worth adding at cutover —
minor SEO trust signal, real security value.

### 2.7 `/about` reads as one 527-word block

Citability scored it **C (63/100)** — one `<h1>`, one `<h2>`, and 527 words underneath.
AI systems cite discrete passages under specific headings. Breaking the bio into 3–4
subheaded passages ("Early startups", "The agency years", "Precocity", "FTC v. Match.com")
would raise extractability substantially. This is a content-structure change to your
writing, so I won't touch it unasked.

---

## Tier 3 — Off-site, only you can do these

Still the biggest remaining lever, and unchanged from the last audit. Brand mentions
correlate ~3x more strongly with AI citation than backlinks do.

- [ ] **Submit sitemap to Google Search Console** — *after* deploy, `https://uxward.com/sitemap-index.xml`
- [ ] **Submit sitemap to Bing Webmaster Tools** — same URL, and Bing feeds ChatGPT search
- [ ] **Create a Wikidata entry** for Brandon E. B. Ward — the single highest-leverage
  entity-recognition signal; ~15 min at wikidata.org. The FTC expert-witness role and the
  SDN Dallas founding are exactly the kind of verifiable facts Wikidata wants.
- [ ] **Get cited on third-party sites** — the FTC v. Match.com role is a genuinely
  citable credential most people don't have. Industry write-ups, podcasts, conference bios.
- [ ] **Cross-post essays** to LinkedIn Articles, Medium, or Substack
- [ ] **Claim/verify the Service Design Network Dallas association publicly** where it can
  be crawled — it corroborates the ~5,000-member claim in `llms.txt`

---

## Validation (after deploy, not before)

- [ ] **Google Rich Results Test** — 3–4 URLs, confirm JSON-LD renders
- [ ] **Schema.org validator** — `validator.schema.org`
- [ ] **Confirm `llms.txt` and `sitemap-index.xml` return 200** on the live domain
- [ ] **Re-run `/geo audit https://uxward.com`** — the June baseline audited Squarespace,
  so it is not a valid baseline for the new site
- [ ] **Perplexity / ChatGPT search** — "Brandon Ward UX designer", "Brandon Ward CXO",
  "FTC v Match.com UX expert witness"

---

## Verified complete

Confirmed against built output on 2026-08-31, not just assumed:

- [x] **Default OG image** (2026-08-29) — `og-default.png` resolves to an absolute URL on
      every page; `twitter:card` is `summary_large_image`; `apple-touch-icon.png` present.
      *Note: no page overrides it yet — case studies still fall back to the default plate.*
- [x] **`self.deck` populated on all 5 work pages** — all five bind `description={self.deck}`
      and **zero occurrences of `undefined` appear anywhere in the built HTML**.
- [x] **All 120 `<img>` tags carry an `alt` attribute** — 5 empty ones are lightbox
      placeholders (see 1.1), 1 is a real gap.
- [x] **All JSON-LD parses cleanly** — every block across all 36 pages is valid JSON.
- [x] **Sitemap correct** — 35 URLs, `/404` properly excluded.
- [x] **Build is clean** — 36 pages, no errors.
- [x] PR #2 foundation: robots.txt, llms.txt, sitemap, global Person + WebSite JSON-LD,
      OG/Twitter meta, Article + BreadcrumbList on all 23 essays, BreadcrumbList on all
      5 work pages, FAQPage on `/contact`.

---

## Reference

- June baseline report: `GEO-AUDIT-REPORT.md` — **note: this audited the Squarespace site.**
- Full findings from this pass: `GEO-AUDIT-2026-08-31.md`
- Repo-vs-live comparison is the key artifact; re-run after cutover.
