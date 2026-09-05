# SEO / GEO — TODOs

**Last audited:** 2026-09-04 (against `main` @ 2cbc199, built output, and the live domain)
**Previous audits:** 2026-08-31 (pre-cutover), 2026-06-27 (`GEO-AUDIT-REPORT.md`, baseline 40/100)

> **The headline finding is gone.** As of 2026-09-04, `uxward.com` serves the Astro site in
> this repo from the Cloudflare Worker `uxward`. Squarespace is no longer authoritative.
> Every schema, meta, sitemap, and `llms.txt` improvement in this repo is now live and
> visible to search engines and AI crawlers.
>
> Repo score and live score have converged for the first time. The gap now is the work
> below, not the deployment.

---

## Tier 0 — The blocker — ✅ RESOLVED 2026-09-04

- [x] **Deploy the Astro site to `uxward.com`.** Nameservers moved IONOS → Cloudflare
      (`anahi`/`sam.ns.cloudflare.com`); apex bound to the `uxward` Worker as a custom domain.
      Universal SSL issued in under two minutes (Google Trust Services, apex + wildcard).
      Registration and billing stay at IONOS — only the nameservers moved.
- [x] **Canonical host decided: the apex.** `www` is a proxied `AAAA 100::` placeholder whose
      only job is to let a Cloudflare Redirect Rule 301 it to the apex, query string preserved.
      `astro.config.mjs`, canonical tags, and `llms.txt` all already agreed on the apex, so
      nothing in the repo had to change.
- [x] **Redirect map written and verified.** `public/_redirects` measured against all 119 live
      Squarespace URLs: **118 covered, 1 uncovered** (`/404`, correctly). Every destination
      resolves to a real page in the build. All 27 explicit rules re-tested over the live
      domain post-cutover: **27/27 pass**, single-hop 301, zero mismatches. Wildcards for
      tag/category/dated permalinks confirmed working.

**Mail survived the move.** IONOS still runs email; its records now live in Cloudflare —
MX `mx00`/`mx01.ionos.com`, SPF, `_dmarc` CNAME, `autodiscover` CNAME. No DKIM selector exists.
These were rebuilt by hand and diffed against IONOS *before* the nameserver change.
**Deleting any of them breaks mail.**

> ⚠️ **One check never completed:** port 25 is blocked from the dev machine, so mail was
> verified by DNS only — never by an actual delivered message. Send a test to `@uxward.com`
> and tick this off.

---

## Tier 1 — Technical, in the repo

### 1.1 Correctness bugs — ✅ ALL RESOLVED

- [x] **`/colophon` two `<h1>` elements.** Was already fixed before this pass — `:90` is now
      `<p class="title">`, not a second `<h1>`. Page ships exactly one `<h1>`.
- [x] **Work-index headings concatenated their count.** The count `<span>` moved out of the
      `<h3>` into the flex wrapper (`.reg-head` is now a `div`, `.reg-title` is the `h3`).
      Verified in built output: headings extract as `'Research & testing'`, `'Product &
      platform'`, `'Immersive'`, `'Systems & interface'`, `'Growth & brand'` — no trailing digit.
- [x] **Lightbox `<img>` never got an `alt`.** All 5 case pages now carry the source image's
      alt across on open. Four share one implementation; `speakeazy` needed a different fix
      because its carousel passes an array — `group` now holds `{src, alt}` objects.
- [x] **Empty alt on `cave.jpeg`** (`i-failed-but-im-getting-better.astro:252`) — described.
- [x] **`/ink` indexable with no description.** Excluded from the sitemap alongside `/404`,
      and given its own meta description instead of inheriting the site default.
      **Sitemap is now 34 URLs, not 35.**

*The only `alt=""` left in the built output are the 5 lightbox placeholders, which are
correct — they are empty until JS populates them on open.*

### 1.2 Entity consistency

- [x] **Years of experience — resolved 2026-09-04. Standardised on "20+ / over twenty".**
      Brandon's call. Two registers, deliberately:

      | Form | Used in | Where |
      |---|---|---|
      | `20+ years` | meta descriptions, Person schema | `Base.astro:13`, `Base.astro:26`, `index.astro:57`, `llms.txt:5` |
      | `Over 20 years` | body prose | `about.astro:82` |
      | `Over twenty years` | body prose (number spelled out to match voice) | `work/index.astro:372`, `writing/index.astro:287` |

      The two `Twenty-five years` outliers are gone. Swept the whole shipped tree for
      `twenty-five` / `25 years` / `quarter century` / `N years of experience` — no variants
      remain. (`porte.astro:369` says "two decades" but is describing banking apps, not a
      career, and was left alone. `src/stuff/` still says 25 years; it is gitignored and
      does not ship.)

      **If this number is ever revised, all seven locations must move together** — the
      inconsistency this item fixed arose from updating some and not others.

- [x] **`llms.txt` essay count.** Verified accurate against `essays.js`: **23 essays,
      2014–2026**, three sections (leadership 10, craft 11, ai 2). The "22" in the old audit
      is stale. Note that this file is hand-maintained: update the count and range whenever
      `writing/` or `slate.js` gains an entry.

### 1.3 Schema gaps — ✅ ALL RESOLVED 2026-09-04

- [x] **`ProfilePage` on `/about`.** Shipped with `mainEntity` → Person, plus `jobTitle`,
      `homeLocation`, `worksFor` (Precocity, `precocityllc.com`), `memberOf` (Service Design
      Network, `service-design-network.org`), two `hasOccupation` entries, and a 10-item
      `knowsAbout`. Every value comes from the timeline already rendered on the page.
      Both organisation URLs were supplied by Brandon and verified to return 200 — not guessed.

      > **Deliberate deviation from the 08-31 audit:** it called for `award` covering the FTC
      > expert-witness and SDN roles. That is the wrong type — those are roles held, not
      > prizes won. Modelled as `hasOccupation` and `memberOf` instead. Don't "fix" this back.

- [x] **`CollectionPage` + `ItemList` on `/work` and `/writing`.** `/work` enumerates the 5
      cases in slate order; `/writing` enumerates all 23 essays newest-first, matching the
      Date view. Verified: every URL in both lists resolves to a real built page.
- [x] **`Article` now carries `image`** — 22 essays use their own hero art; the one essay with
      no inline art (`the-ux-ui-design-process`) falls back to `og-default.png`. `inLanguage`
      added at the same time.
- [x] **`dateModified` mechanism added — deliberately not backfilled.** An essay entry may
      carry `updated: 'YYYY-MM-DD'` and `dateModified` is then emitted. **No values were set:**
      there is no reliable record of which essays were revised when, and a fabricated
      `dateModified` is worse than an absent one. Set it going forward when an essay is
      genuinely revised.
- [x] **`speakable` on homepage + `/about`.** Homepage points at `.hero h1` / `.hero .lede`;
      `/about` at `.name` / `.name-deck`. All four selectors verified to match real elements
      in the built HTML — a `speakable` selector that matches nothing is silently useless.

**Structural change made while doing this:** all 23 essay pages were carrying a byte-identical
copy of their JSON-LD block, so any schema change had to be made 23 times or not at all. That
now lives in one place — `essaySchema(essay, site)` in `src/data/essays.js` — and the pages
call it. `essays.js` also gained an `image` field per entry. **Add both to any new essay.**

*Validation after the change: all JSON-LD across all 36 pages parses; node types now
Person 36, WebSite 36, BreadcrumbList 31, Article 23, CollectionPage 2, ProfilePage 1,
WebPage 1, FAQPage 1.*

### 1.4 Performance / Core Web Vitals

- [x] **Images optimized — 2026-09-04.** Total raster payload **9.82 MB → 7.37 MB (−25%)**;
      the 37 files that were actually worth converting went **6.14 MB → 3.69 MB (−40%)**.
      Nothing on the site exceeds **1 MB** (Brandon's hard ceiling); largest asset is now
      555 KB. See the `image-optimization-rule` memory for the standing policy.

      **Resizing was the real win, not the format.** 36 of 98 images were 2000–2560px wide
      for slots that never render past the 680px reading column. Caps applied, derived from
      the CSS: **1600px** for essay/portrait art, **2000px** for case artifacts (they open in
      a lightbox at 92vw and need the headroom). Then WebP at q82 / effort 6; the animated
      GIF converted to animated WebP at q75.

      > **Measured finding worth keeping:** most JPEGs here came off Squarespace already
      > aggressively compressed. **61 of 98 got _larger_ as WebP at q82**, and dropping to
      > q72 only made 25 of them smaller — for ~0.1 MB total, at real quality cost. So the
      > conversion carries a guard: **if the WebP isn't smaller, the original ships.**
      > Convert PNGs eagerly (they came in at 60–70% savings); measure JPEGs first.

      Superseded originals were deleted (recoverable from git). All 115 image references in
      the built HTML verified to resolve; zero broken.

- [x] **`width`/`height` on images.** The 08-31 audit said only 10 images carried intrinsic
      dimensions; the real number is **117**, so CLS was already largely handled. All 38
      rewritten `<img>` tags had their `width`/`height` updated to the new intrinsic sizes —
      a resized file behind a stale dimension hint would have *introduced* the CLS problem
      this item exists to prevent.

- [ ] **`loading="lazy"` on 26 of 125 images.** Untouched by this pass. Lower value now that
      payload is down 25%, but still worth doing for below-the-fold art.

- [x] **Unreferenced images deleted — 2026-09-04.** Brandon's call. `public/` ships
      wholesale, so four files nothing linked to were still being stored and served by the
      Worker: `BrandonEBWard-006.png` (259 KB), `BrandonEBWard-002.png` (248 KB),
      `BrandonEBWard-006-full.jpg` (94 KB), `BrandonEBWard-003-full.jpg` (89 KB). The two
      `-full.jpg` files were leftovers — `.webp` twins of both are referenced and stay.

      **691 KB removed. Image payload is now 6.69 MB across 114 files, down from 9.82 MB
      across 118 — a 32% reduction overall.**

      Verified both directions after deleting: nothing referenced is missing, and nothing
      present is unreferenced. Worth re-running that check after any bulk image change —
      a first, narrower scan wrongly flagged `make+the+logo+bigger.webp` as dead when it is
      in fact referenced. Grep the filename directly before deleting anything.

---

## Tier 2 — Needs a decision

### 2.1 FAQ schema on `/about` — recommendation stands: *don't*

Google requires FAQ markup to match visible on-page content, and `/about` has no FAQ section —
so schema alone would be a structured-data violation, not just a wasted tag. FAQ rich results
were also restricted in Aug 2023 to government and health sites, so the SERP payoff is gone.

**Recommended: (b) skip FAQ, ship `ProfilePage` instead** (1.3). Alternatives: (a) add a real
visible FAQ section then mark it up; (c) both, `ProfilePage` now and FAQ later.

### 2.2 Work-page meta descriptions run 214–339 characters

They reuse `slate.deck`, written as editorial copy, not meta copy. Google truncates ~155–160.

| Page | Length |
|---|---|
| `/work/autoco` | 339 |
| `/work/insurco` | 291 |
| `/work/speakeazy` | 273 |
| `/work/porte` | 259 |
| `/work/precocity` | 214 |

Genuine tension: **long is good for AI extraction, bad for SERP display.** Either add a
separate short `metaDescription` field to `slate.js` (best of both), or accept truncation as a
deliberate GEO-first trade. Same question applies to three essay titles running 79–80 chars.

### 2.3 `articleBody` on Article schema

`description` already holds the deck; a near-duplicate `articleBody` adds little, and a *real*
one means shipping full essay text in JSON-LD (doubling page weight). Recommend spending the
effort on `image` + `wordCount` + `inLanguage` instead. **`image` and `inLanguage` shipped
2026-09-04** (see 1.3). `wordCount` was skipped on purpose: it would have to be hardcoded and
would silently go stale on the first edit. Say so if you want `articleBody` or `wordCount` anyway.

### 2.4 `sameAs` expansion — ✅ RESOLVED 2026-09-04

Went from 2 entries (LinkedIn, GitHub) to **15**. Brandon supplied the URLs; each was checked
to resolve and to belong to him before being added. URLs stored as the **canonical
destination**, not as pasted — IMDb's `?ref_=` tracking param stripped, and
`www.brandonebward.com` followed through its 301 to the apex.

Independently confirmed by page title or profile content: X, Bluesky, Mastodon (c.im),
LinkedIn, YouTube, Behance, Dribbble, GitHub, Substack, IMDb, brandonebward.com.
Exist and return 200 but are login-walled or bot-blocked, so taken on Brandon's word:
Threads, Instagram, SlideShare, Medium (profile is live but has no posts).

**Deliberately excluded: `speakeazy.pro`.** `sameAs` asserts *identity*. Speakeazy is a
product Brandon built, not Brandon — listing it would claim he is the application. It can be
modelled separately if wanted.

**Structural change:** `sameAs`, the Person name, job title, and description were duplicated
across `Base.astro` and the `/about` ProfilePage. They now live in **`src/data/person.js`**
and both schemas import them, so the two cannot drift. Verified in the built output: all 36
pages carry the same 15 entries, and the global Person and ProfilePage Person match exactly.

**Bonus find — X corroborates the site's claims.** The @uxward bio reads "CXO @precocityllc,
Speaker, Co-Founder @sdnetwork Dallas, Teacher @smu_pro, Actor, Singer…" and links back to
uxward.com. That is live, public, third-party-hosted corroboration of both the Precocity role
and the SDN Dallas co-founding — the two claims Tier 3 could not otherwise source. It also
surfaces a credential the site does not mention: **teaching at SMU professional education.**

### 2.4a Two personal sites, not yet connected — open

`brandonebward.com` is Brandon's performing-arts site (actor, voice talent, audiobook
narrator). It carries its own Person + Audiobook + WebSite schema, with `sameAs` to IMDb,
Voices.com, Audible, ACX, Actors Access, and Casting Networks.

- [x] **uxward.com → brandonebward.com** — done, via `sameAs`. **IMDb is the bridge**: it now
      appears in *both* sites' `sameAs` lists, which is what lets an entity resolver merge the
      two identities instead of reading them as two different men named Brandon E.B. Ward.
- [ ] **brandonebward.com → uxward.com** — **not done; that site is outside this repo.** It
      currently has no link back. Adding `https://uxward.com` to its Person `sameAs` closes
      the loop and roughly doubles the strength of the association.
- [ ] ⚠️ **The two sites contradict each other on experience.** brandonebward.com says
      **"24+ years"**; uxward.com now says **"20+ years"** (§1.2). Same person, same class of
      problem that §1.2 just fixed — only across two domains, where it is harder to spot and
      more damaging, because a resolver comparing them sees conflicting facts about one
      entity. Pick one number and make both sites agree.

### 2.5 Six essays exist on the old live site but not in the rebuild

`the-billion-dollar-idea`, `a-credo`, `my-unlimited-signature`, `when-im-the-ceo`,
`open-letter-to-lego…`, `my-impossible-list`.

**Currently 301'd to `/writing`** — that shipped in the redirect map, so nothing is broken and
their inbound authority flows to the archive index. But that was the reversible default, not a
decision. Restoring them as real pages is still on the table and would recover the specific
authority each one holds.

### 2.6 Security headers — ✅ RESOLVED

`public/_headers` ships and is live: CSP, HSTS (`max-age=31536000; includeSubDomains`),
`X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, COOP, plus
cache policy for `/_astro/*`, images, video, and the machine-readable surfaces. Verified on
the live domain post-cutover.

> **Deliberately not done:** `preload` is *not* on the HSTS header. Don't add it until the
> TLS setup has been stable for a while — HSTS preload is genuinely hard to unwind.

### 2.7 `/about` reads as one 527-word block

Citability scored it **C (63/100)** — one `<h1>`, one `<h2>`, 527 words underneath. AI systems
cite discrete passages under specific headings. Breaking the bio into 3–4 subheaded passages
("Early startups", "The agency years", "Precocity", "FTC v. Match.com") would raise
extractability substantially. This is a change to Brandon's own writing, so it stays untouched
unless asked.

---

## Tier 3 — Off-site

Still the biggest remaining lever. Brand mentions correlate ~3x more strongly with AI citation
than backlinks do.

- [x] **Submit sitemap to Google Search Console** — done 2026-09-04. Domain property
      (`sc-domain:uxward.com`), verified by DNS TXT.
- [x] **Submit sitemap to Bing Webmaster Tools** — done 2026-09-04, via GSC import.
      *The import did not carry the sitemap across; it had to be submitted separately.*
- [x] **IndexNow** *(new — wasn't on the old list)*. Key `f8bc191fff1b4a06656f367a6ec80188`
      served from `public/`. 62 URLs submitted: the 34 live pages plus the 27 old Squarespace
      URLs, so the 301s get discovered rather than waiting on a recrawl. Covers Bing, Yandex,
      Seznam. Re-ping after publishing anything new.
- [ ] **Wikidata entry — deferred 2026-09-04, Brandon's call. Blocked on sources, not effort.**
      Researched before filing. Wikidata keeps items on living people only when they can be
      "described using serious and publicly available references," and right now they cannot be:

      | Intended source | Status |
      |---|---|
      | SDN Dallas chapter page | **dead** — redirects to a generic chapter listing |
      | SDN member page (`brandon-ward-15870`) | **dead** — same redirect |
      | Precocity "Spotlight: Brandon E.B. Ward" | **404** |
      | SDGC volunteers page | live, but **does not name Brandon** (it lists the SDGC26 team) |
      | FTC v. Match.com expert-witness role | **no public source found** |
      | uxward.com, LinkedIn | live, but **self-published** |
      | ZoomInfo / RocketReach / The Org / SignalHire | live, but **data brokers — not admissible** |

      Two structural problems beyond sourcing: **neither Service Design Network nor Precocity
      has a Wikidata item**, so `employer` and `member of` would be bare strings rather than
      linked entities; and there is no Wikipedia sitelink. An item with no sitelink, no live
      independent references, and self-published sourcing is the most-deleted category on
      Wikidata — and deletion discussions are public, permanent, and attached to the name.
      Filing now risks a worse outcome than not filing.

      Also worth knowing: **SDN's site rebuild (Bubble) broke deep links that existed as
      recently as the last search-engine crawl.** The sources didn't cease to be true; the
      URLs died.

- [ ] **Three fixes that would unblock Wikidata — all within Brandon's reach.** Any two make
      the item defensible:
      1. **Ask Precocity to restore the spotlight post.** An employer bio is a legitimate
         citable source and it already existed; someone broke the URL.
      2. **Ask SDN to fix the Dallas chapter and member pages.** A working page naming
         Brandon as chapter co-founder is exactly the independent reference the item needs.
      3. **Get the SDGC25 hosting role documented somewhere durable.** Hosting the 2025
         global conference is genuinely notable and is currently invisible on the open web.

      *These are worth doing on their own merits — they are citable third-party corroboration
      for claims the site already makes, whether or not a Wikidata item ever gets filed.*

- [ ] **Get cited on third-party sites** — the FTC v. Match.com role is a genuinely citable
      credential most people don't have. Industry write-ups, podcasts, conference bios.
- [ ] **Cross-post essays** to LinkedIn Articles, Medium, or Substack.
- [ ] **Claim/verify the Service Design Network Dallas association publicly** where it can be
      crawled — it corroborates the ~5,000-member claim in `llms.txt`.

---

## Watch list — cutover artifacts that resolve on their own

Not bugs. Recheck in a few days; escalate only if they persist.

- [ ] **Google still holds the old canonical.** URL inspection on 2026-09-04 showed Google's
      last crawl was **Aug 11, 2026**, when Squarespace redirected apex → `www`. It therefore
      still records `https://www.uxward.com/` as canonical — **the opposite of the current
      setup**. A recrawl was requested for the homepage. Expect several days of lag.
- [ ] **GSC sitemap row reads "Couldn't fetch."** Confirmed cosmetic: the sitemap returns
      200 as Googlebot, correct `application/xml`, valid XML, 34 URLs. This is GSC's
      placeholder before its first real fetch.
- [ ] **Squarespace is still running.** Don't cancel until well clear of propagation.
      Nothing depends on it, but there's no upside to pulling it early.

---

## Validation

- [x] **Confirm `llms.txt` and `sitemap-index.xml` return 200** on the live domain — both 200,
      along with `robots.txt`, `sitemap-0.xml`, and the IndexNow key file.
- [ ] **Google Rich Results Test** — 3–4 URLs, confirm JSON-LD renders. *Do this after 1.3.*
- [ ] **Schema.org validator** — `validator.schema.org`. *Also after 1.3.*
- [ ] **Re-run `/geo audit https://uxward.com`** — this is now finally a valid thing to do.
      Both prior audits scored a site that no longer exists at this domain; this will be the
      first real baseline for the Astro site.
- [ ] **Perplexity / ChatGPT search** — "Brandon Ward UX designer", "Brandon Ward CXO",
      "FTC v Match.com UX expert witness". *Give crawlers a couple of weeks first.*

---

## Verified complete

Confirmed against built output and the live domain, not assumed:

- [x] **Live on the apex** — HTTP 200, valid TLS, ~60ms, correct `<title>`, canonical
      `https://uxward.com/`.
- [x] **`www` → apex 301** with query strings preserved.
- [x] **27/27 explicit redirects pass** on the live domain; wildcards confirmed.
- [x] **Security headers live** (see 2.6).
- [x] **Sitemap correct** — 34 URLs, `/404` and `/ink` both excluded.
- [x] **`robots.txt` names ~20 crawlers explicitly** — Googlebot, Bingbot, GPTBot,
      OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended,
      meta-externalagent and others. Explicit groups are load-bearing: **a crawler that
      matches its own `User-agent` ignores the `*` group entirely**, so a general "allow all"
      can accidentally mean "not you."
- [x] **Default OG image** — `og-default.png` resolves absolute on every page;
      `twitter:card` is `summary_large_image`; `apple-touch-icon.png` present.
      *No page overrides it yet — case studies still fall back to the default plate.*
- [x] **`self.deck` populated on all 5 work pages** — zero `undefined` in built HTML.
- [x] **All JSON-LD parses cleanly** across all pages.
- [x] **Build is clean** — 36 pages, no errors.
- [x] PR #2 foundation: robots.txt, llms.txt, sitemap, global Person + WebSite JSON-LD,
      OG/Twitter meta, Article + BreadcrumbList on all 23 essays, BreadcrumbList on all
      5 work pages, FAQPage on `/contact`.

---

## Reference

- June baseline: `GEO-AUDIT-REPORT.md` — **audited the Squarespace site; not a valid baseline.**
- August findings: `GEO-AUDIT-2026-08-31.md` — **pre-cutover; Tier 0 is now historical.**
- Infrastructure facts (zone IDs, mail records, deploy flow) are in agent memory under
  `uxward-dns-and-hosting` and `uxward-search-submission`.
