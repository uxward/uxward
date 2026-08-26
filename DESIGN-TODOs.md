# Design — Remaining TODOs

Baseline after the 2026-08-25 `/impeccable critique` + fix pass: **25/32 (Good, 78%)**, before this pass's fixes (typo, Precocity employment-status ambiguity, contrast, heading order, side-tab/layout-thrash cleanup, sitewide em-dash pass on the 10 core pages).

**Verdict: not top-tier yet, but closer than most.** The site has a real governing idea ("the work is the brand," source public on GitHub as literal proof), one genuinely distinctive content format (Speakeazy's "CHOSE TO / CHOSE NOT TO" decision log), and a disciplined, non-templated visual system. That's a real floor most design-leader portfolios never clear. What's below closes the specific gap to best-in-class, ranked by how much each one matters.

---

## Highest leverage — proof depth

- [ ] **Get real product/artifact imagery into Precocity and at least one other case study.** The site's whole thesis is "proof over persuasion," but 4 of 5 case studies (autoco, precocity, porte, insurco) are running on placeholder frames or prose alone — only Speakeazy has real screenshots. A VP believes the ten-year Precocity build because it's argued well, not because she's seen it. This is the single highest-ceiling fix on this list, and needs real assets — cannot be fabricated.
- [ ] **Unify the visual frame treatment across case-study imagery.** Precocity's client deliverable screenshots have no consistent frame (unlike Speakeazy's clean device-frame treatment), and some are dense multi-panel collages illegible at page width. Reads as "the flagship case got the attention and the rest didn't."

## High priority — restraint discipline

- [ ] **Curate the Work archive instead of dumping it.** "Fewer things, executed better" is the founding rule, then `/work/` drops into 29 unfiltered items with no further pacing beyond bare category eyebrows. A top-tier site's restraint holds all the way down, not just on the homepage. Consider a hard cap plus a genuinely separate "wider archive" surface, or add sub-grouping.
- [ ] **Curate the Writing index the same way.** "On Leadership" and "On Experience Design" groups run 9–11 essays each in one unbroken list — a decision point disguised as content. Same fix pattern as Work: progressive disclosure, sub-grouping, or a curated "start here" subset per topic.

## High priority — accessibility floor

- [ ] **Add a skip-to-content link.** No page has one currently; every page forces a full tab-through of the nav before reaching main content. For a design leader's own site, this is exactly the kind of gap the audience is qualified to notice.
- [ ] **Re-verify contrast and heading order sitewide**, not just on the pages fixed this session (Speakeazy's H2→H4 skip, the `--tertiary` token). Run a full audit pass across all 36 pages including the 23 essays, which haven't been touched yet.

## Medium priority — signature moment

- [ ] **Give the real buyer journey one memorable interaction moment.** The Night City easter egg is genuinely delightful but hidden and irrelevant to the actual hiring decision — everything in the visible, default-mode journey is flat by design. That's a legitimate choice, but best-in-class sites in this category usually have one moment (in Light/Dark, not the easter egg) that makes someone screenshot it and forward it to a colleague. Needs a concept, not just an execution pass.

## Medium priority — content mechanics carried over from the critique

- [ ] **Extend the em-dash / rule-of-three copy pass to the 23 essays.** This session's pass covered the 10 core pages (Home, Work index, 5 case studies, About, Contact, Colophon) only, by explicit scope decision. Essay counts ran 7–18 em-dashes each at last measurement.
- [ ] **Line length / leading on dense prose.** `p.cap` elements on Speakeazy ran ~121 characters/line (target ~80), and pull-quote/essay-title leading sits at 1.20× against a 1.3× readability floor.
- [ ] **Reposition Contact's full-bleed red CTA.** It currently opens the page rather than closing it, unlike Home's earned-moment placement — weakens the "high-commitment field" framing DESIGN.md assigns that color register.
- [ ] **Fix `404.astro`'s stale copy.** Line 47 says "seven selected pieces, ten years apiece" — the site has 5 curated cases, not 7.
- [ ] **Resolve inconsistent client anonymization.** Real names appear for Neiman Marcus, Deloitte, NOKIA, HKS, and American Heart Association, while automotive work is anonymized as "a global automaker" four times — worth one explicit decision (all named or all anonymized where NDA allows) rather than an unexplained split.

---

## Reference

- Full critique snapshot: `.impeccable/critique/2026-08-26T02-21-02Z__whole-site-light-mode.md`
- Fixed this session: "occaisionally" typo (3 files), Precocity employment-status framing on Home, `--tertiary` contrast (`#6B6B6B` → `#646464`), Speakeazy H2→H4 heading skip, `.featured-mark` side-tab border, Writing-index filter layout-thrash (now `grid-template-rows`), em-dash/rule-of-three copy pass on the 10 core pages (Home, Work index, 5 case studies, About, Contact, Colophon).
- Explicitly deferred, not a defect: essay hero illustrations (sketch/poster-style art) — confirmed intentional editorial choice, not a design-system violation.
