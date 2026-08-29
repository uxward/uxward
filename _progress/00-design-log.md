# Design Log — uxward.com

WDS strategic process log. Most recent at top.

## Phase status

| Phase | Status |
|---|---|
| A — Product Brief | ✓ complete (2026-06-08) |
| B — Trigger Map | ✓ complete (2026-06-08) |
| C — UX Scenarios | ✓ complete (2026-06-09) |
| D — UX Design | ✓ complete (2026-06-10) — all scenario pages designed then built; Home fold formally specced (reviewed + tokens), rest designed-in-build |
| E — Development | ✓ PRD 001 + PRD 002 (Writing index) merged to master. REQ-009 portrait done (2026-06-11). REQ-010 (Speakeazy artifacts) still asset-blocked. |

## Current

**Impeccable — polish pass: posture, the fold, and the craft floor (2026-08-29).** Triggered by three peer reviews (`~/Desktop/portfolio review notes.txt`, Charlie Pratt / Charlie Trotter / Justin Williams), which converged on two things the owner had already suspected.

*Posture — the ask is gone.* The site declared availability in four places (masthead `Status: Open to the right conversation`, the Home §04 closing clause, the Home §05 CTA headline, and Contact's `OPEN TO / The right senior design leadership role`), plus a hiring FAQ and "recruiter-deep" as a link descriptor in three places. Owner's call: **remove the ask entirely.** The Contact FAQ survives, re-framed from interest to terms ("What tier do you work at?", "What makes a company worth the conversation?"); the take-home answer is kept verbatim because it was already the right register. The About page's `Currently → Considering` row is gone and the bio's recruiter framing with it. Contact's red field moved from opening the page to closing it, so the page reads notes-first and ends on the address. Home §05 is now *"Everything above is the argument. This is the address."*

*The fold — a live masthead and a portrait plate.* The four masthead cells stopped being written and became derived: `Last ship` (from `slate[0].shipped`), `Last essay` (from `essaysNewestFirst[0]`), `Source` (a build-time `git log -1` via the new `src/data/build-info.js`, hash linked to the public commit), `Based`. Nothing there can go stale between builds, which is aimed squarely at Vivian's staleness force. The hero keeps its full-measure display headline — Trotter's favourite move — and splits below it into lede + portrait plate, so the face lands in the first screen without shrinking the type. New asset `BrandonEBWard-003-full.jpg` (owner-supplied, the warm frame) replaces the stern `-002` that two reviewers flagged. Owner later supplied `BrandonEBWard-006-full.jpg` — the same cap frame as the About portrait but shot in situ rather than knocked out — which now runs on About, so both plates hold an environmental photograph instead of one photo and one cutout. Both converted to WebP (96 KB → 50 KB, 91 KB → 44 KB). `-002.png`, `-006.png`, and the two `.jpg` sources are now unreferenced but left on disk; the owner's originals aren't mine to delete. Home §04 loses its portrait entirely, which also kills the worst craft defect on the site — `padding-bottom: 0` was guillotining the old portrait against the red band. Same fix applied to the About portrait.

*Imagery guardrail, opened deliberately.* Owner approved portrait-in-fold **plus** work previews. `slate.js` gains a `preview` field; the home and work lists now carry a small hairline plate of a real artifact from each case, all 800px WebP derivatives of images that already ship on the case pages (808 KB → 124 KB for the set). Autoco's plate uses the usability-lab photo rather than the closed-loop diagram, which read as a pale smudge at 148px. The rows stay a catalog — no lift, no shadow, no scale on hover.

*Craft floor.* Word-spacing compensation on every display role (negative tracking was welding "Senior design" into one word); `text-wrap: balance`/`pretty`; the mobile catalog rows stopped squeezing titles into four and five lines; hover gated behind `@media (hover: hover)` with focus given the same colour; skip link + single `<main>` + Tab trap and Escape on the mobile overlay; `<html data-theme="light">` removed so `prefers-color-scheme` actually reaches a first-time visitor (it was unreachable); all de-opacified text removed from the red field (0.82 → 3.43:1 and 0.72 → 2.85:1 both failed AA; full offwhite is 4.76:1); a real 1200×630 OG card built out of the site's own system, plus `apple-touch-icon`; fonts moved from an `@import` to `<link>` + `preconnect` and requested as variable axes; portraits converted to WebP.

*Cleanup made necessary by the above.* The retired `§`-marker rail's markup was still shipping on every page — 60 dead `<div class="marker">` nodes removed along with the six CSS rules that supported them (which supersedes the 2026-06-12 marker-alignment work below; those fixes are now moot). Dead tokens removed (the whole `--bg`/`--fg`/`--line`/`--surface`/`--accent` alias layer, all four `--w-*` widths, `--space-1`, the unapplied `.theme-dark`). Copy/count errors fixed: 404's "seven selected pieces" now derives from `slate.length`, "dillution", "a scrupulous CEO" (which read as its opposite), four inline tags welded to adjacent words by Astro's HTML compressor, Speakeazy's artifact-02 alt text describing an image that wasn't there, the wordmark's `E.B.` vs `E. B.`, four different tenure framings, and the stale `#6B6B6B` tertiary, which turned out to be in five places, not one — the Colophon swatch, `DESIGN.md`'s frontmatter *and* its Colors prose, the `.impeccable/design.json` sidecar (including two component snippets), and two label rules in `ink.astro` that were hardcoding the pre-fix value instead of `var(--tertiary)`. The code has shipped `#646464` since 2026-08-25; the documentation never caught up. Archive category tags demoted from red to tertiary — thirty static red labels were spending the signature colour as decoration, against the two-register rule.

*Confirmed with the owner:* hosting is **Cloudflare** (PRODUCT.md's IONOS note was wrong; the colophon was right); the archive is **29** projects; Speakeazy shipped **1 Jan 2026**.

**Sidecar refresh (same day, follow-up).** `.impeccable/design.json` refreshed on the sanctioned sidecar-only path (`document.md` §4b: *"If the user only asks to refresh the sidecar, preserve DESIGN.md and write only .impeccable/design.json"*) — `DESIGN.md` was corrected surgically for the tertiary value and otherwise left exactly as hand-written, rather than regenerated. Synced: the stamp, `colorMeta.tertiary`, the narrative (new Word-Space Rule, revised imagery characteristic, three new Do's), the Catalog Item Link snippet (preview column, gated hover, word-spacing), a new Artifact / Portrait Plate component, and the Spec-Bar Cell description.

Also added the **dark palette to `colorMeta`** (`dark-canvas` … `dark-rule-faint`). Dark has always been a documented peer of Light in the prose but was never machine-readable, so every literal dark value read as drift to the detector. Worth recording the trap: `colorMeta` feeds the detector's allowed-colour set through `colorsClose()` at ±6 per channel, so an 8-step *synthesized* tonal ramp per token adds 64 tolerance points — the first attempt silently absorbed three bespoke `ink.astro` values that were legitimately flagged. Corrected by dropping the invented ramps and keeping canonical + note, which is exactly the shape the incumbent `neon-*` entries already used. **Ramps are decoration for the panel; canonicals are what the detector trusts. Never synthesize a ramp for an override palette.**

*Verified:* `impeccable doctor` reports no drift; the detector now recognises `#9A958C` (a real dark token) and still flags `#C9C6C0` in `ink.astro` (genuine drift — a bespoke dark body value, left standing rather than silently changed, since altering it is a visual decision on the easter-egg page and nobody asked for one).

*Confirmed by inspection:* refreshing the sidecar does **not** move the 45 `design-system-font-size` findings. Only three sidecar contributors exist (`addSidecarColors`, `addSidecarRadii`, `addSidecarShadows`); the type ramp is read exclusively from `DESIGN.md` frontmatter. The type-scale job is still open and still separate.

*Trap worth remembering:* both plates are 5:4 boxes holding sources wider than 5:4 (1.302 and 1.268), so `object-fit: cover` crops horizontally and the vertical half of `object-position` never applies. The `50% 22%` / `50% 26%` values written into the first pass were dead config and were removed — verified no-op by screenshot before and after.

*Left standing, deliberately:* the site has no shared type-scale token set — every small size is a literal (10.5 / 11 / 12 / 13 / 14 / 16 / 17 …) and page-scoped styles use five different mobile breakpoints (600 / 640 / 720 / 880 / 900). Both are pre-existing and systemic; consolidating them is a separate job. `--signature` also has no contrast headroom on the red field (4.76:1, AA-passing but no more) — darkening it for the field register is a brand decision, not a defect fix.

**Freya — UX Design (refinement): gutter-marker baseline alignment (2026-06-12).** Owner flagged the left-gutter section markers (`§ NN`, `— About —`, `— Featured —`) drifting ~10–12px below the content label they pair with — a near-miss that reads as a mistake, not an intentional offset. Diagnosis: `.grid > .marker` carried `padding-top: 10px` (writing featured `.featured-mark`: 12px) while the same-size mono eyebrow/label starts at row-top (0). Fix: zeroed the global marker nudge (baseline-aligns every label/eyebrow context at once — case studies `§NN`↔`NN — Section —`, About `§00`↔`— About —`, meta-strip `§✻`↔field labels, back-home bars) and **preserved the offset only on `.title-block .marker`** (case-study hero, where `§00` sits beside the 132px case number with no label to align to). `.featured-mark` → 0. Verified all five contexts via Playwright screenshots. Featured-marker wrap (was: `— Featured —` broke at the dashes in the 100px gutter, stacking them top/bottom) — **resolved by owner: dropped the dashes**, leaving a single-line `Featured` red tab. (Widening the gutter was rejected — all page grids share `--gutter-mark: 100px`, so it would have misaligned the featured content's left edge.) **Follow-up (same day):** zeroing the global nudge over-corrected the back-home/breadcrumb bars (`§ ↩` ↔ `— Back home`/`— Back to all work`) — their label is an inline link in an 18px-strut line box, so it sits lower than a block eyebrow and the old 10px was compensating. Fixed with `.grid:has(> div > a:only-child) { align-items: baseline }` — baseline-aligns the marker to the link in every bar (work index, case studies, about, contact, colophon, writing) without touching eyebrow sections. Verified via screenshots.

**Freya — UX Design (Design Loop): Case-study Product-Preview hero (pilot on Speakeazy).** New pattern — promote design proof into the case-study fold instead of burying screenshots at the bottom of the scroll. Extends Home's shipped *proof-forward* thesis one level down. Decisions: **Preview band** layout (full-width framed still under the deck, above the meta-strip, in the content column); **single still** clickable to the existing lightbox (not the carousel); money shot = `projects-6.11.26.png` (library cover-art grid — strongest glance value). Two assets / two jobs: hero still = the *lede*; §04 carousel = the *build story* (unchanged). Built on Speakeazy (`hero-preview` reuses the `.artifact .frame` treatment + lightbox binding). **Rolled out to all cases (2026-06-12):** insurco, porte, precocity, autoco each get a `hero-preview` band under the deck — **placeholder frames for now** (owner supplying real hero shots later), matching each page's existing 16:9 placeholder-frame convention. Note: those four pages still carry the original `.artifact .frame` (aspect-ratio 16:9, no lightbox JS) — when real images land, port Speakeazy's frame treatment (natural size + lightbox) for parity, or accept the simpler 16:9 framed still.

**Freya — UX Design (Design Loop): Writing Index redesign.** Replacing the accordion/collapse list with a typographic editorial index (table-of-contents leader-dots pattern). Spec written; awaiting owner read before wireframe.

**System decision: red-on-hover convention (2026-06-10 → universal 2026-06-11).** Owner promoted red from "never a hover state" to the standard hover/focus colour, then extended it to **every** hover that changes text colour site-wide (links, nav, footer, breadcrumbs, back-links, controls) — one-property swap across global.css + all pages. `visual-direction.md` / `design-tokens.md` updated. Red now has two registers: *event red* (rationed full-volume placements) and *interaction red* (universal transient hover splash). Home-page follow-up resolved as part of the universal sweep.

Design Loop Status:
| Page | Status |
|---|---|
| Writing Index | ✓ complete + **merged to master** (R+T). PRD 002 REQ-001..007: leader-dots TOC, Topic/Date toggle (persisted), controls band below featured, featured stays visible while filtering, count-only filter (× only), placeholder fade, filter+view motion. 21/21 browser checks; tokens extracted. |
| Home (fold) | ✓ complete. Built (REQ-007), browser-reviewed, tokens extracted. Direction C (REQ-008) descoped; finding #1 delivered by the proof-forward deck. |
| About · Colophon · Contact · Work (index + 6 cases) | ✓ designed-in-build — live and accepted as-built; no separate spec file. |

Direction shipped: **A** — proof-forward deck (leads with Speakeazy "live to real users since Jan 2026", inline link to the case). **C descoped** (H1 drives fold height; not worth altering the signature H1).

Step-7 review: deck/link/H1/voice all match spec; inline link is ink (not red), navigates to /work/speakeazy; mobile wraps clean. `/writing` refactor (REQ-002) spot-checked — renders identically, count fixed, search/collapse work.

Deliverables: `D-UX-Design/home.md` (spec), `wireframes/home.excalidraw` + `home.png`, `design-tokens.md` (registry seeded from global.css — 0 new tokens from the fold).

**Still open (assets from Brandon):** 3 Speakeazy artifact images → Mimir REQ-010. *(About portrait REQ-009 done 2026-06-11.)*

## Log

### 2026-06-11 — Universal red hover + writing-index back-home link — Freya
Two site-consistency changes merged to master. (1) **Universal red hover:** owner extended the red-hover convention to *every* colour-changing hover site-wide — swapped all `:hover` tertiary/ink colours to `--signature` across global.css + 35 pages (resting styles untouched); 6/6 hover spots browser-verified; `visual-direction.md` + `design-tokens.md` synced. Note: a `/work` case now reddens both title and number on hover (heavier red — flagged, easy to dial back). (2) **Back-home link:** the writing index was the only top-level page missing the `§ ↩ — Back home` bar that about/contact/colophon/work-index carry; added with matching markup/styling.

### 2026-06-11 — Writing index merged + About portrait — Freya/Mimir
PRD 002 (Writing index editorial redesign) closed the full loop — built, step-7 reviewed (21/21 browser checks across desktop/mobile/light/dark/keyboard/reduced-motion), step-8 tokens extracted — and **merged to master** (`build/writing-index`). Final feature set: leader-dots TOC, Topic/Date view toggle (persisted in localStorage, cross-fade), controls band below the featured pull, featured stays visible while filtering, count-only filter with in-field ×, placeholder fade, and filter fade+reflow motion. New token-registry patterns: leader-dots-row, view-toggle, controls-band, topic-tag, list-filter-motion (+ t-quick 120ms candidate).

**REQ-009 unblocked:** Brandon supplied the About portrait (`public/images/BrandonEBWard-006.jpg`, 1200×1712). Wired into About §01 in a 1px rule frame at natural aspect; placeholder removed; merged (`build/about-portrait`). Only REQ-010 (Speakeazy artifact images) remains asset-blocked.

### 2026-06-10 — UX Design: Writing Index redesign + red-hover system decision — Freya
Owner asked for a UX/UI elevation pass; took the Writing page through the full Design Loop. Replaced the accordion/collapse list with a **typographic editorial index** (table-of-contents leader-dots: title · dotted leader · quarter, three always-open argued sections with § numerals). Discuss → 3 decisions locked (topic groups / keep quarter / minimal filter) → spec (`D-UX-Design/writing-index.md`) → wireframe (`wireframes/writing-index.png`, two deck options) → approved: **Option A** (decks reveal on hover/focus, space reserved, reduced-motion safe).

**System decision:** owner promoted **red-on-hover to the site-wide convention** (was forbidden — "never a hover state"). `visual-direction.md` updated: red now has two registers — *event red* (rationed, persistent, full-volume) vs *interaction red* (transient hover/focus splash). Writing rows + pivot hover ink→signature; home page to follow (bundled into WO-003 §B).

**Featured pull:** owner directed it be left **exactly as built** — out of scope, do-not-touch (stated 3× in spec + WO).

Handoff: **WO-003** written (`E-Development/WO-003-writing-index.md`) — full redesign of `src/pages/writing/index.astro` + small site-wide hover edit on `index.astro`; `essays.js` and masthead voice untouched. Open (non-blocking): exact leader-dot rendering (build judgment); "On AI" only 2 essays (owner content gap). Next: wake Mimir to build.

### 2026-06-09 — Build: PRD 001 (credibility quick wins + home fold) — Mimir
Tech audit → master PRD → feature PRD 001 → build loop on branch `build/credibility-and-fold` (7 commits, one per requirement, browser/build-verified).

Implemented & verified: REQ-001 essays.js data file (new single source of truth, mirrors slate.js) · REQ-002 writing index renders list+count from it ("23 essays", was "Thirty") · REQ-003 work pivot count ("23 pieces", was "Twelve") · REQ-004 home recent-writing now 3 newest real essays (was 3 dead links) · REQ-005 speakeazy.com→.pro · REQ-006 Speakeazy case live links (meta strip + outcomes) · REQ-007 proof-forward fold deck with inline Speakeazy link.

REQ-008 (fold-height crest, Direction C) DESCOPED by owner: Playwright measurement showed the H1 drives the fold height (767–879px across widths), so cresting Block 02 would require altering the signature H1 — and REQ-007 already puts shipped proof in the fold (finding #1's core). Asset-blocked, not built: REQ-009 portrait, REQ-010 Speakeazy artifact images (await images from Brandon).

Awaiting: Freya step-7 browser review, then merge `build/credibility-and-fold` → master.

### 2026-06-09 — UX Scenarios suite (retroactive / Option A) — Freya
Brownfield: site fully built before any UX layer existed, so scenarios document the as-built sunshine paths and audit build-vs-strategy as a byproduct. Three scenarios, one per archetype, all linear happy paths through existing pages.

Deliverables:
- `C-UX-Scenarios/00-ux-scenarios.md` (index, 8 unique pages inventoried)
- `01-vivian-the-vp.md` — Home → Speakeazy → About → Contact
- `02-tessa-the-talent-partner.md` — Home → Work → Contact → forward
- `03-pierce-the-peer.md` — Essay → Writing → About/Colophon → vouch
- `audit-notes.md` — 5 findings, kept separate so scenarios stay pure sunshine-path

Audit findings (for Freya/UX Design or a Mimir WO): (1) proof-below-fold — Vivian's shipped-proof payoff sits below the fold and her doubts clear only on About; (2) Speakeazy claims "live" but has placeholder artifacts and no link to Speakeazy.pro; (3) portrait still a placeholder — no headshot asset for Tessa to forward; (4) verification gap hurts Tessa most (reputation risk) + home "recent writing" dead links; (5) count inflation — "Thirty essays" vs 23 actual vs "Twelve pieces," hardcoded counts.

### 2026-06-08 — Product Brief suite (brownfield extraction) — Saga
Brownfield entry: existing Astro site, no prior strategic foundation. Ran condensed discovery (Option A) — extracted the brief from the live site plus the user-supplied `uxward-design-strategy-brief.md`.

Key decision: **Speakeazy is the hero of the slate**, not Precocity. The supplied strategy brief is stale on this point; the as-built site is authoritative. Precocity is a complete but orphaned case (missing from `src/data/slate.js`) and should be wired in as the deepest supporting case.

Deliverables written:
- `A-Product-Brief/product-brief.md`
- `A-Product-Brief/content-language.md`
- `A-Product-Brief/visual-direction.md`

Divergences logged for later cleanup (not strategy work): orphaned Precocity case, slate at 4 vs. planned 5–7, colophon palette hexes don't match `global.css`, homepage "recent writing" links point to not-yet-existing essays.

### 2026-06-08 — Trigger Map suite — Saga
Five workshops. Vision: Brandon is the proven design leader you bring into any vertical. Three goals (land the right role / make the case undeniable / be sought) × three SMART objectives each. Three personas: Vivian the VP (primary decision-maker), Tessa the Talent Partner (secondary amplifier), Pierce the Peer (tertiary voucher).

Key read: Vivian owns the entire 14–15 force tier, positive and negative equally — a trust-by-disqualification audience. Top features by impact: plainspoken voice (7.3), shipped-proof hero (6.9), low-friction scan (6.5), Speakeazy hero case (6.4). Gaps flagged for Freya: social proof can be displayed but not manufactured (slow-burn via writing); AI-recency proof leans entirely on Speakeazy (FORGE not yet a case).

Deliverables: `00-trigger-map.md`, `01-business-goals.md`, `02/03/04-persona-*.md`, `feature-impact.md`.
