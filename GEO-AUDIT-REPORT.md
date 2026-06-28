# GEO Audit Report: uxward.com

**Audit Date:** 2026-06-27
**URL:** https://uxward.com (pre-launch — audited from local source)
**Business Type:** Agency/Services — Executive Design Leader Portfolio
**Pages Analyzed:** 30 (Home, About, Contact, Colophon, Ink, 404, Work index + 5 case studies, Writing index + ~17 essays sampled)

---

## Executive Summary

**Overall GEO Score: 40/100 (Poor)**

uxward.com has genuinely strong, quotable content — a specific career narrative, verifiable credential claims, FTC expert witness work, a live shipped product, and case studies with concrete numbers. The content foundation is well above average for a personal portfolio site. The problem is that almost none of the technical infrastructure required for AI discoverability is in place: no schema markup of any kind, no robots.txt, no llms.txt, no sitemap, and no Open Graph tags. These are all pre-launch gaps, and most are 1–2 hour fixes. The site is invisible to AI systems not because the content is weak, but because the pipes haven't been laid.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 52/100 | 25% | 13.0 |
| Brand Authority | 38/100 | 20% | 7.6 |
| Content E-E-A-T | 62/100 | 20% | 12.4 |
| Technical GEO | 30/100 | 15% | 4.5 |
| Schema & Structured Data | 0/100 | 10% | 0.0 |
| Platform Optimization | 25/100 | 10% | 2.5 |
| **Overall GEO Score** | | | **40/100** |

---

## Critical Issues (Fix Before Launch)

**1. No llms.txt**
- **Impact:** AI systems that respect llms.txt conventions cannot find a curated, machine-readable summary of who you are and what the site covers. This is the single most impactful GEO file missing.
- **Fix:** Create `/public/llms.txt` with a structured overview of Brandon's credentials, the site's purpose, key pages, and a summary of content categories. See Quick Wins section for template.

**2. No schema markup anywhere**
- **Impact:** Zero. No JSON-LD, no microdata, no schema.org markup on any page. AI systems use structured data to extract entities, validate identity claims, and build knowledge graph relationships. Without a `Person` schema, Brandon isn't reliably recognized as an entity.
- **Fix:** Add `Person` + `WebSite` JSON-LD to `Base.astro`. Add `Article` to essay pages. Add `FAQPage` to the contact page. See Medium Issues for the full list.

**3. No robots.txt**
- **Impact:** No explicit guidance for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.). While the absence doesn't block them, the presence signals intentional openness and is expected by some AI indexing pipelines.
- **Fix:** Create `/public/robots.txt` explicitly allowing all crawlers.

---

## High Priority Issues

**4. No sitemap.xml**
- AI crawlers and search engines cannot efficiently discover all content without a sitemap. With ~30 pages across `/work/`, `/writing/`, and core pages, a sitemap is especially important for the essay archive.
- **Fix:** Add `@astrojs/sitemap` to astro.config.mjs. One npm install + one line of config.

**5. No Open Graph or Twitter Card meta tags**
- Every page shares the same generic fallback when shared or indexed. No `og:title`, `og:description`, `og:image`, `og:type`, `twitter:card`. This affects how AI platforms preview and summarize content.
- **Fix:** Add OG/Twitter meta slots to `Base.astro` with per-page overrides via props.

**6. Single default meta description on all pages**
- `Base.astro` has a good default but every page — home, essays, case studies, about — shares the same one unless explicitly overridden. Essay and case study pages pass only a title; no page-specific descriptions are set.
- **Fix:** Thread `description` as a required (or well-defaulted) prop through each page's frontmatter. Each essay has a `deck` field in `essays.js` that's perfect for this.

**7. No canonical URL meta tag**
- No `<link rel="canonical">` is emitted. Astro can handle this automatically with the `site` config already set (`https://uxward.com`).
- **Fix:** Add `<link rel="canonical" href={Astro.url.href} />` to `Base.astro`.

---

## Medium Priority Issues

**8. No Article/Essay schema on writing pages**
- All 22 essays lack `Article` schema. AI systems use this to identify publishable content, associate it with an author, and determine freshness. The essays already have `quarter` metadata and an author — the schema practically writes itself.
- **Fix:** Add JSON-LD `Article` schema in each essay's `<Base>` head slot, using `essay.quarter` as a proxy for `datePublished`.

**9. No FAQPage schema on the contact page**
- The contact page has 5 excellent FAQ rows (role types, geography, target companies, take-home policy, side work). This is a natural `FAQPage` schema candidate and would make these Q&As directly quotable in AI responses about recruiting Brandon.
- **Fix:** Add `FAQPage` JSON-LD to `contact.astro`.

**10. No BreadcrumbList schema on case studies or essays**
- Both page types have breadcrumb navigation ("Back to all work", "Back to writing") but no structured equivalent.
- **Fix:** Add `BreadcrumbList` JSON-LD to `work/[slug].astro` and `writing/[slug].astro` templates.

**11. Essay publish dates are quarter-only, not ISO dates**
- Essays show "Q1 2026" but no machine-readable `datePublished`. AI systems value content freshness signals. Quarter strings require AI to interpret; ISO dates are parsed directly.
- **Fix:** Add an optional `date` field to each essay entry (e.g., `date: '2026-01-15'`). Use it in Article schema when present; fall back to quarter string for display.

**12. Essay pages have no author schema link**
- Essays say "By Brandon E. B. Ward" in text but there's no machine-readable author link back to the About page or a `Person` entity.
- **Fix:** Once the `Person` schema is in `Base.astro`, reference it from the `Article` schema's `author` field.

---

## Low Priority Issues

**13. Service Design Network co-founding not linked to authoritative source**
- The bio and About page mention co-founding the Dallas SDN chapter (~5,000 members, hosted 2025 global conference). This is a strong authority signal, but there's no link to an official SDN page that reciprocates the relationship.
- **Recommendation:** Find and link to the official SDN Dallas page, and get a link back. This strengthens entity recognition.

**14. FTC v. Match.com credential not externally linked**
- The most distinctive authority signal on the site — UX expert witness in a landmark FTC case — has no external link or citation. AI systems can't verify unlinked claims.
- **Recommendation:** Link to a public court document, FTC press release, or news coverage of the case. Even a PACER reference adds verifiability.

**15. No testimonials or third-party validation**
- The site has no client quotes, colleague recommendations, or case study outcomes with external validation. This is by design (the work speaks for itself) but it's a gap for E-E-A-T.
- **Recommendation:** Even one or two brief quotes from Precocity clients or the automaker engagement (anonymized if needed) would add trustworthiness signals.

**16. No privacy policy**
- Not required legally for a contact-form-free static site, but its absence is a mild trust signal gap. Even a one-line "This site doesn't collect any data" statement would cover it.

**17. Some 2014 essays show their age**
- About half the writing corpus is from 2014. While still substantively relevant, the content covers tools (Redbox Instant) and practices that are dated. AI systems de-prioritize stale content.
- **Recommendation:** Add a visible "originally published / last revised" note to older essays. A light revision pass on the most-linked 2014 essays would also help.

**18. No `<meta name="author">` tag**
- A minor signal, but missing from `Base.astro`.

---

## Category Deep Dives

### AI Citability (52/100)

The content is richer than most personal portfolio sites. Several passages are highly quotable by AI systems:

> "I shipped Speakeazy solo — live to real users since January 2026. Before that, years standing up design practice at four startups, two agencies, and a decade at Precocity." (homepage lede)

> "You can't learn on page 200 that the character you've voiced en français for 199 pages is from Paris, Texas." (Speakeazy case pullquote)

> "The problem: the most critical prep in audiobook narration is also the most tedious and the least paid — and in 2025 no tool existed to do it." (Speakeazy §02)

The case studies use a "Chose to / Chose not to" format that's highly extractable for AI comparison responses. The contact page FAQ answers are direct and quotable.

**What's missing:** No summary boxes, key-takeaway sections, or structured Q&A blocks in essays. Essays use narrative form throughout — engaging for humans, harder for AI to excerpt accurately. The writing archive has no excerpt/teaser text available as machine-readable content outside of the `deck` field in `essays.js`.

**Rewrite suggestion for the homepage hero:** The current lede is good but buries the specificity. Consider a version that front-loads the entity claim:

> Current: "I shipped Speakeazy solo — live to real users since January 2026."
> GEO-optimized: "Brandon E. B. Ward shipped Speakeazy solo — an AI-native audiobook prep tool live since January 2026."

Third-person framing on key intro sentences helps AI systems attribute the claim correctly.

---

### Brand Authority (38/100)

**What's there:** LinkedIn profile, GitHub profile, co-founding of SDN Dallas (~5,000 members), hosted the 2025 SDN global conference, FTC v. Match.com expert witness, Speakeazy (live product with real users), Precocity CXO for 10 years.

**What's not there:** No Wikipedia entity, no YouTube channel, no Reddit presence, no press coverage, no industry publication bylines, no podcast appearances (deliberately — "Not doing: A podcast"). The Service Design Network affiliation is the strongest third-party authority signal on the site and it's under-leveraged.

**Platform presence map:**

| Platform | Status | Notes |
|---|---|---|
| LinkedIn | Linked | /in/brandonebward — exists but not verified from here |
| GitHub | Linked | /uxward — public, the site itself is the main repo |
| YouTube | None | — |
| Reddit | None | — |
| Wikipedia | None | SDN Dallas chapter might have one |
| Medium/Substack | None | Deliberately absent |
| Dribbble/Behance | None | Worth considering for design portfolio signals |
| Service Design Network | Mentioned | Not linked to official SDN page |

The FTC expert witness credential is exceptional for brand authority and completely unlinked. This is the highest-leverage single-item fix for the authority score.

---

### Content E-E-A-T (62/100)

**Experience:** Strong. 20+ years, multiple roles clearly described. Speakeazy is live and verifiable. The "Chose to / Chose not to" case study format demonstrates real decision-making experience.

**Expertise:** Strong in text. The bio and case studies read as the work of someone who actually did these things, not someone describing a methodology. The FTC case is a remarkable signal of recognized expertise.

**Authoritativeness:** Moderate. Single-author site, clear identity, LinkedIn + GitHub. The SDN co-founding is the strongest external authority signal. No inbound links from industry publications (pre-launch, expected).

**Trustworthiness:** Moderate. No privacy policy, no testimonials, no external links to verify key claims (FTC case, SDN conference). The contact page is notably specific ("I read every email that arrives at this address. I reply inside two business days, including the ones I'm declining") which reads as trustworthy.

**Author attribution on essays:** Essays show "By Brandon E. B. Ward" in the essay header but there's no link to the About page, no credential byline, and no author schema. For E-E-A-T, the author needs to be verifiably connected to the content.

---

### Technical GEO (30/100)

| Check | Status |
|---|---|
| robots.txt | ❌ Missing |
| llms.txt | ❌ Missing |
| sitemap.xml | ❌ Missing |
| Open Graph tags | ❌ Missing |
| Twitter/X Cards | ❌ Missing |
| Canonical URLs | ❌ Missing |
| JSON-LD schema | ❌ Missing |
| lang="en" on html | ✅ Present |
| Server-side rendering | ✅ Astro static build — excellent |
| Mobile-responsive | ✅ Media queries throughout |
| Images with alt text | ✅ Present on inspected pages |
| HTTPS | ✅ Configured (uxward.com in astro.config) |
| Favicon | ✅ SVG favicon |
| No blocking scripts | ✅ white-rabbit.js is deferred |

The good news: the Astro static build is ideal for AI crawlers — pure HTML with no JavaScript rendering required. Everything renders server-side. The gaps are all configuration, not architecture.

---

### Schema & Structured Data (0/100)

No structured data of any kind was found in the source. Zero.

**Missing schema opportunities by page:**

| Page | Schema Type | Priority |
|---|---|---|
| All pages (Base.astro) | `WebSite`, `Person` (sameAs: LinkedIn, GitHub) | Critical |
| About | `Person` (full — career history, credentials) | High |
| Contact | `FAQPage` | High |
| /writing/[slug] | `Article` (author, datePublished, headline) | High |
| /work/[slug] | `CreativeWork` or `Article` | Medium |
| /work/[slug] | `BreadcrumbList` | Medium |
| /writing/[slug] | `BreadcrumbList` | Medium |
| Home | `WebPage` | Low |

**Example `Person` schema for Base.astro:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Brandon E. B. Ward",
  "url": "https://uxward.com",
  "jobTitle": "Chief Experience Officer",
  "description": "Executive design leader with 20+ years building design practices from scratch. CXO at Precocity. Founder of Speakeazy. Based in Dallas, Texas.",
  "sameAs": [
    "https://linkedin.com/in/brandonebward",
    "https://github.com/uxward"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "addressCountry": "US"
  }
}
```

---

### Platform Optimization (25/100)

The site links to LinkedIn and GitHub, which is good. The absence of any content on platforms that AI systems commonly cite (YouTube, Reddit, industry publications, Wikipedia) is a structural gap.

The **Service Design Network** is the highest-leverage platform opportunity. If the SDN has a page for the Dallas chapter or Brandon's involvement, a reciprocal link relationship would significantly boost entity recognition. The **2025 SDN global conference** is a citable event — if there's any press coverage or an SDN blog post about it, that's a potential inbound authority link.

For a design leader, absence from **Dribbble, Behance, or Figma Community** (aside from the Figma plugin) is a gap — these are platforms AI design-query responses frequently cite.

---

## Quick Wins (Implement Before Launch)

1. **Add `robots.txt`** (30 min) — Create `/public/robots.txt` with `User-agent: * / Allow: /`. Explicitly list GPTBot, ClaudeBot, PerplexityBot as allowed. No disallow rules needed.

2. **Add `llms.txt`** (1–2 hours) — Create `/public/llms.txt` with a structured plain-text overview: who Brandon is, what the site covers, key pages with one-line descriptions, and notable credentials. This is the highest-ROI single GEO file.

3. **Add sitemap.xml** (30 min) — `npm install @astrojs/sitemap`, add `import sitemap from '@astrojs/sitemap'` and `integrations: [sitemap()]` to `astro.config.mjs`. Done.

4. **Add `Person` JSON-LD to `Base.astro`** (1 hour) — One `<script type="application/ld+json">` block in the layout head. Include `sameAs` links to LinkedIn and GitHub.

5. **Add Open Graph + Twitter meta to `Base.astro`** (1–2 hours) — Add `ogImage?: string` to the Base props, default OG tags in the head, and thread the essay `deck` as the `description` prop in each essay page's `<Base>` call.

6. **Thread unique meta descriptions** (2–3 hours) — The `deck` field in `essays.js` and `slate.js` are perfect meta descriptions. Pass them as `description` props in each page's `<Base>` usage. Each case study already has a `deck` in the slate data.

7. **Add `FAQPage` schema to contact.astro** (1 hour) — The 5 FAQ rows in the contact page map directly to `mainEntity` items. This is the page most likely to appear in AI responses to "how to contact Brandon Ward" or "is Brandon Ward available for senior design roles."

8. **Add canonical URL tag** (15 min) — One line in `Base.astro`: `<link rel="canonical" href={Astro.url.href} />`.

---

## 30-Day Action Plan

### Week 1: Technical Foundation (the stuff that gates everything else)
- [ ] Create `robots.txt` — allow all crawlers
- [ ] Create `llms.txt` — structured site overview with credential summary
- [ ] Install `@astrojs/sitemap` and configure
- [ ] Add `<link rel="canonical">` to `Base.astro`
- [ ] Add `Person` + `WebSite` JSON-LD to `Base.astro`

### Week 2: Per-Page Metadata
- [ ] Add Open Graph meta tags to `Base.astro` (title, description, type, url)
- [ ] Thread `description` prop through all page templates
- [ ] Use `deck` from `essays.js` as meta description for each essay
- [ ] Use `deck` from `slate.js` as meta description for each case study
- [ ] Add a social share image (OG image) — even a simple text-on-red SVG would work

### Week 3: Schema Rollout
- [ ] Add `Article` JSON-LD to essay template (`writing/[slug].astro`)
- [ ] Add `BreadcrumbList` JSON-LD to essay and case study templates
- [ ] Add `FAQPage` JSON-LD to `contact.astro`
- [ ] Add `<meta name="author" content="Brandon E. B. Ward">` to `Base.astro`

### Week 4: Authority and Platform
- [ ] Find and link to the official SDN Dallas page; request a reciprocal link
- [ ] Link FTC v. Match.com claim to a public record (FTC press release or PACER)
- [ ] Add a brief "last revised" note to the top 5 oldest essays
- [ ] Consider adding a Dribbble or Behance link to the About page "Elsewhere" section if profiles exist
- [ ] Add one-line privacy notice to the footer or colophon

---

## Appendix: Pages Analyzed

| URL | Title | Key GEO Issues |
|---|---|---|
| / | uxward — Brandon E. B. Ward | No schema, no OG tags, no canonical |
| /about | About — Brandon E. B. Ward · uxward | No Person schema, no OG, no canonical |
| /contact | Contact — uxward | No FAQPage schema, unique meta description missing |
| /colophon | Colophon · uxward | No schema, unique meta missing |
| /work | Work · uxward | No schema, unique meta missing |
| /work/speakeazy | Speakeazy… · uxward | No Article/CreativeWork schema, no BreadcrumbList |
| /work/precocity | Precocity… · uxward | No schema, unique meta missing |
| /work/autoco | Global automaker… · uxward | No schema, unique meta missing |
| /work/porte | Porte… · uxward | No schema, unique meta missing |
| /work/insurco | Major insurance broker… · uxward | No schema, unique meta missing |
| /writing | Writing · uxward | No schema, unique meta missing |
| /writing/only-you-can-prevent-dumpster-fires | Essay | No Article schema, no author schema link |
| /writing/the-truth-about-simplicity-* | Essay (Q1 2026) | No Article schema, no author schema link |
| /writing/human-centered-robot-driven-* | Essay (Q1 2023) | No Article schema, no author schema link |
| (14 additional essays) | Essays (2014–2021) | Same schema/meta gaps; some content freshness concerns |

---

*Audit performed against local source at `/Users/uxward/Apps/uxward` on 2026-06-27, prior to deployment. All issues are pre-launch and correctable. No live URL was fetched.*
