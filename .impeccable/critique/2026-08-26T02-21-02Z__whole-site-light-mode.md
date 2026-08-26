---
target: whole site (light mode)
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-08-26T02-21-02Z
slug: whole-site-light-mode
---
Method: dual-agent (A: aebbb6fb8238bbc3d · B: a7392a1ba495fd472)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Live/Private/Open status tags are clear; no dynamic states to test on a static site |
| 2 | Match System / Real World | 4 | Plain first-person voice throughout, zero jargon |
| 3 | User Control and Freedom | 3 | Clear "back to" links and prev/next case nav |
| 4 | Consistency and Standards | 2 | Signature red leaks past its own documented two-register rule in at least 3 undocumented spots (see Priority Issues) |
| 5 | Error Prevention | 3 | No forms beyond mailto; little to get wrong |
| 6 | Recognition Rather Than Recall | 3 | Persistent nav, consistent back-links |
| 7 | Flexibility and Efficiency of Use | n/a | Persuade-mode career asset, not a repeat-use tool — no power-user path expected |
| 8 | Aesthetic and Minimalist Design | 3 | Chrome is restrained; undercut by essay illustrations and a dense unreadable image collage on `/work/precocity/` |
| 9 | Error Recovery | 4 | The 404 page is the best copy on the site: "Most things don't." + 5 numbered escape routes |
| 10 | Help and Documentation | n/a | Not a task tool; the colophon covers this role adequately for the reader who wants it |
| **Total** | | **25/32** | **Good** (78%) |

## Design Specificity Verdict

**LLM assessment:** Not dropped-in-unchanged, but not fully authored-for-this-brief either. The structural chrome — numbered sections, spec-bar masthead, hairline dividers, one grotesque, red rationed to hover/full-bleed — is a genuine, disciplined system applied consistently at the skeleton level. It breaks down at the edges: both essay hero images inspected (`/writing/the-truth-about-simplicity-why-clarity-beats-the-buzzword/`, `/writing/only-you-can-prevent-dumpster-fires/`) are illustrative, colorful, stock/AI-generic art that directly contradicts the site's own stated rule that "the only photo on the whole site is Brandon's own portrait." That's the tell: the IA and typographic skeleton were designed specifically for this brief; the imagery wasn't held to the same bar.

**Deterministic scan:** 135 raw findings from `detect.mjs` (120 advisory, 15 warning) across `src/pages`, `src/components`, `src/layouts`. After excluding Neon/Dark-mode-only findings (out of scope for this light-mode review) and a likely parser gap in the font-size rule (it appears to check only 5 of DESIGN.md's 7 documented type roles), the light-mode-relevant signal is: 5× identical `<img alt="" />` with no `src` on every case-study page (autoco, insurco, porte, precocity, speakeazy — all at a nearly identical line number), 2× `side-tab` (signature-red left borders used outside the documented pull-quote/blockquote context, on `work/index.astro` and `writing/index.astro`), and 1× `em-dash-overuse` flag on the colophon (17 in body text) that the live browser scan showed is a site-wide pattern, not a one-off — 11 to 29 em-dashes per page across Home, Speakeazy, Writing index, About, and Colophon.

**Visual overlays:** Browser injection succeeded on 5 pages (Home, Speakeazy, Writing index, About, Colophon) with light mode independently confirmed clean (no leftover dark/cyber `localStorage` state) before each scan. The live overlay found `low-contrast` (4.3:1, below the 4.5:1 AA floor) on tertiary-gray text on 4 of the 5 pages scanned, `tight-leading` (1.20× line-height, below the 1.3× recommended floor) on the Speakeazy pull-quote and Writing-index essay titles, and a `skipped-heading` (H2→H4) on Speakeazy that exactly matches what Assessment A found independently by reading source. One `gray-on-color` finding (offwhite text on signature-red background) is a false positive: that's the documented "bleed-field" pattern (DESIGN.md `components.bleed-field`) and measures ~7.6:1 contrast, well past AA. No user-visible overlay screenshot survives past the initial capture — the live server was started, injected, and cleanly stopped per protocol, but tab contention between the two assessment agents (both using the same Chrome extension session) meant only the Home-page screenshot and console reads were reliably captured before later tabs were closed mid-action; this is an environmental artifact of running two browser agents concurrently, not a site defect.

## Overall Impression

The bones are genuinely good — a disciplined, consistently-applied Unigrid system that reads as authored, not templated, and a Home page that builds a real peak-end arc (facts → thesis → proof → depth → red CTA). But the site currently undersells itself with three self-inflicted wounds a 30-second skeptical reader will actually hit: a live spelling error that shows up in her likely scan path three separate times, an ambiguous employment-status story that muddies the single fact she cares most about (can I hire this person), and a "no imagery except the portrait" rule that the essays quietly break. None of these are hard to fix. The single biggest opportunity is tightening the gap between what the colophon claims the system is and what's actually shipped — right now the system's own documentation page is where two of the violations live.

## What's Working

- **The Speakeazy case study's "CHOSE TO / CHOSE NOT TO" decision log** — a specific, checkable-facts format that shows judgment, not just output, exactly matching what a skeptical VP wants to see.
- **The 404 page** — "This page doesn't exist. Most things don't." plus a five-item numbered escape hatch. On-voice, useful, the single best piece of copy on the site.
- **The Contact page's FAQ** — specific, unhedged, names real constraints (target company tiers, no take-homes, no relocation for runway-funded startups). This is the "checkable facts, not adjectives" register the whole brief is built on.
- **Progressive disclosure on Home/Work/Writing** — each index teases 3-5 curated items with a clear "see all N" path to the fuller archive. Well executed and the strongest cognitive-load win on the site.

## Priority Issues

**[P0] Live spelling error in three places, above the fold**
*What:* "occaisionally" instead of "occasionally," verified in three source files: `src/pages/writing/index.astro:177`, `src/pages/about.astro:291`, `src/pages/colophon.astro:90`. It appears in the Writing index's eyebrow line ("WRITING · 23 ESSAYS · OCCAISIONALLY") and the About page's "currently" stamp — both squarely in a 30-second skimmer's path.
*Why it matters:* The audience this site is built for is explicitly described as repelled by carelessness and staleness. A visible typo, repeated three times, is a credibility hit inside the exact window the whole site is optimized for.
*Fix:* Correct the spelling in all three files — same copy-pasted string, one fix propagates.
*Suggested command:* `/impeccable clarify`

**[P0] Employment-status story contradicts itself between Home and About**
*What:* Home's hero copy frames Precocity in the past tense ("Before that... a decade at Precocity"). About's career timeline lists Precocity as "2016 — Present · Chief Experience Officer," running concurrently with "2024 — Present · Founder, builder." Contact's FAQ references "contract work outside Precocity's existing book," implying an ongoing but non-exclusive relationship.
*Why it matters:* A skeptical VP fact-checking availability — the single most important question on the page — will hit this ambiguity inside the 30-second window, and it undermines the one fact that determines whether she replies at all.
*Fix:* Pick one framing and state it plainly on the timeline itself (e.g., an explicit end/transition date, or a one-line clarifier on the Precocity row).
*Suggested command:* `/impeccable clarify`

**[P1] Essay hero illustrations contradict the site's own "portrait is the only image" rule**
*What:* Both essays inspected (`the-truth-about-simplicity-why-clarity-beats-the-buzzword`, `only-you-can-prevent-dumpster-fires`) open with full-color, illustrative hero art — a figurative sketch, a vintage-poster-style illustration — that reads as generic stock/AI illustration, not evidence of Brandon's own work.
*Why it matters:* This is the strongest evidence against design specificity found in this review. The rest of the system earns its restraint claim; these images spend it. They also sit at direct odds with DESIGN.md's own stated constraint that the portrait is the sole photographic asset on the site.
*Fix:* Drop hero art from essays entirely (text-only, consistent with the rest of the system), or replace with something evidentiary rather than decorative.
*Suggested command:* `/impeccable distill`

**[P1] Broken/placeholder `<img alt="" src="">` tags on all 5 case-study pages**
*What:* Detector-confirmed, identical pattern at a near-identical line number on every case study: `src/pages/work/autoco.astro:420`, `insurco.astro:417`, `porte.astro:420`, `precocity.astro:461`, `speakeazy.astro:590` — an `<img>` with empty `alt` and no visible `src`. This likely traces to the "placeholder frames" PRODUCT.md notes for case studies without artifact imagery yet, but a genuinely empty `src` renders a broken-image icon in the browser rather than a clean placeholder.
*Why it matters:* A visibly broken image icon on a case-study page — the site's core proof surface — reads as an unfinished build to a time-poor visitor scanning for signs of care.
*Fix:* Verify whether these render as broken-image icons in production; if so, replace with an actual placeholder treatment (frame + label, no `<img>` tag) rather than an empty image element.
*Suggested command:* `/impeccable harden`

**[P2] Tertiary-gray text fails WCAG AA contrast, site-wide**
*What:* Two independent measurements converge on the same number: Assessment A's computed-style check (4.31:1) and the live detector's contrast calc (4.3:1, flagged "need 4.5:1") both find `#6B6B6B` on `#E7E7E7` canvas below the AA floor for normal text. This color is documented as the token for labels, timestamps, and captions — meaning it's used on the Speakeazy meta labels, the Writing-index descriptors and pivot marks, the About "currently" stamp, and the Colophon hex-value captions. It's not a one-off; it's systemic.
*Why it matters:* This is the color carrying nearly every piece of small metadata across the site (dates, roles, eyebrows) — a real accessibility gap for low-vision readers, not a cosmetic nit.
*Fix:* Darken `--tertiary` slightly (target ≥4.5:1 against both `#E7E7E7` canvas and `#FAF8F4` paper) and re-check the Dark-mode equivalent token separately.
*Suggested command:* `/impeccable audit`

## Persona Red Flags

**Vivian (skeptical VP, ~30-second skim):** Home itself performs well for her — masthead facts in under 2 seconds, one thesis, one proof link, one closing CTA. The risk is what happens the moment she clicks anywhere else: the "occaisionally" typo sits directly in her likely scan path on Writing and About; the Precocity-tenure ambiguity directly threatens the one question she's actually there to answer (can I hire this person); and if she follows through to Work or Writing, she hits a 29-item flat archive or two 9-11-item lists with no further pacing — a break from the discipline Home just promised her.

**Sam (accessibility-dependent, keyboard/screen-reader, needs 4.5:1 contrast):** No skip-to-content link was found on any page — every page forces a full tab-through of the nav before reaching main content, a repeated cost across an 8-page site. Focus states are genuinely good where checked (a clear red-outline ring on nav links), and alt text on the Speakeazy image gallery is specific and well-written. But the tertiary-gray contrast failure hits Sam hardest since it's used for metadata everywhere, and the H2→H4 heading skip on the flagship Speakeazy case study breaks heading-based navigation on the single page most likely to be read start-to-finish.

## Minor Observations

- Signature red creeps past its documented two registers (hover/focus, full-bleed field) in at least two more places: `/about/`'s `✦` list bullets render in `#CC0006`, and both `work/index.astro` and `writing/index.astro` use a signature-red left border (`side-tab`) on "featured" markers — outside the pull-quote/blockquote context DESIGN.md documents as red's only left-border use. Worth deciding whether to formally extend the rule or restyle these to ink/tertiary.
- Em-dash usage runs 11-29 per page across every page scanned (Home, Speakeazy, Writing index, About, Colophon) — not banned by the voice rules, but "wit lives in precision of language" and the New Yorker reference voice both argue for restraint here; worth a pass if the count feels high on a re-read.
- Line length runs ~121 characters on `p.cap` elements (Speakeazy), well past the ~80-character readability guideline, and essay-title/pull-quote line-height sits at 1.20× against a 1.3× recommendation — both compound the "not chunked for skimming" cognitive-load gap Assessment A flagged independently.
- Real client names appear unmasked in the wider archive (Neiman Marcus, Deloitte, NOKIA, HKS, American Heart Association) while automotive work is anonymized as "a global automaker" four times — the inconsistency may prompt a "why is this one hidden" question even with a legitimate NDA reason behind it.
- `/contact/`'s full-bleed red CTA field appears at the very top of the page rather than as an earned closing moment (as on Home), weakening the "high-commitment moment" framing DESIGN.md assigns it.
- `404.astro:47` hardcodes "seven selected pieces" but Home and the Work index both show exactly 5 curated cases — minor copy drift from a non-data-driven string.
- Precocity's case study embeds real client deliverable screenshots with no unifying frame treatment (unlike Speakeazy's consistent device frame), and some are dense multi-panel collages illegible at page width.

## Questions to Consider

- What if the Work index led with a hard cap of 5 cases and moved the 29-item archive to its own page entirely, so the archive isn't a bail-out scroll at the bottom of the page Vivian is most likely to actually read?
- What if the "CHOSE TO / CHOSE NOT TO" decision-log format — the site's best idea — became a repeated signature move (Home, Work index, About) instead of appearing only inside two case studies?
- Does the Precocity relationship need one authoritative sentence somewhere central (About's timeline row itself), rather than three pages implying three slightly different versions of it?
