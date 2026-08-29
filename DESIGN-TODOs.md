# Design — Remaining TODOs

> **Owner decisions — 2026-08-29.** Every item below was ruled on directly. Implementation detail is in `_progress/00-design-log.md`.

---

## Done

- [x] **Unify the visual frame treatment across case-study imagery.** There were three treatments across five cases: Speakeazy bled its artifacts 60px past the column with no frame at all; the other four letterboxed real screenshots onto a 16:9 `--paper` field with `object-fit: contain`; Porte had a third variant for its hero. All five now use one plate — a 1px hairline directly around the image, no fill, no aspect lock, no bleed — matching the plate on the home fold, About, and the work index. Verified safe: every case image is landscape (1.55–1.78), so natural height is well-behaved. The placeholder-container CSS this replaced (`.placeholder-label` / `.placeholder-detail`) had no markup anywhere and was removed.
- [x] **Add a skip-to-content link.** Present on all 36 pages, revealed on `:focus`, targeting the single `<main id="main">` in `Base.astro`.
- [x] **Remove "Back home" links and breadcrumbs.** Gone from About, Contact, Colophon, Work index and Writing index, along with their now-empty wrappers and dead CSS; the top-of-page rhythm was rebalanced (the wrappers were carrying 72px of the 104px gap under the header). Kept where there is a real parent: **Back to all work** on the 5 case studies, **Back to writing** on the 23 essays. `ink.astro` keeps "Back to the colophon" — it is a genuine breadcrumb to the only page that links there, so removing it would strand the visitor. Say the word if you want it gone too.
- [x] **Re-verify contrast, light and dark.** Full token matrix computed for both themes. Ten failing pairs found, all fixed, both themes now clean — see the Contrast section below.
- [x] **Re-verify heading order sitewide.** Audited all 36 built pages. Fixed: the homepage's five numbered sections had no heading at all (the label was a `<span>`, so the page ran h1 → h3); Contact's section heads were h3 with no h2; four case studies used h4 for artifact captions where Speakeazy uses h3; the `MoreArticles` block had no heading, so essays without body h2s jumped h1 → h3; and `who-are-you` marked a decorative "?" as a second `<h1>`. All 36 pages now clean. (The colophon reports two `h1`s to a naive scan — they are the light and cyber title variants, and the inactive one is `display:none`, which assistive tech ignores. Not a defect.)
- [x] **Reposition Contact's full-bleed red CTA.** It now closes the page instead of opening it, so Contact reads notes-first and ends on the address.
- [x] **Fix `404.astro`'s stale copy.** The count now derives from `slate.length`, so it cannot drift again. The essay count derives from `essays.length` too.

## Archive — rebuilt (option C)

29 entries → **8 featured cards + a 21-row register**, grouped into five disciplines. The data showed why it read as a dump: 29 entries carried **26 distinct category tags**, so nothing grouped because everything was its own group. Those collapsed to Research & testing / Product & platform / Immersive / Systems & interface / Growth & brand.

Above it, a spec plate in the homepage masthead's own form — `SHIPPED 100+ · SHOWN HERE 29 · CLIENTS 20 · SPAN 2000–2026`. "29 shown of more than 100" is the restraint argument made in figures instead of adjectives, and it's the only framing where the big number costs nothing. No logos, per your call; the automaker stays anonymised.

## Signature moments — built

- [x] **Print fidelity.** A real `@media print`: screen furniture dropped, red fields inverted to ruled blocks (a solid fill turns grey and wastes toner), artifacts and captions kept from breaking across pages, link destinations printed after their text, `@page` margins set. A case study now PDFs as a typeset document.
- [x] **Night City hints.** Four placements: the theme toggle held for 5s (hover *or* keyboard focus) leaks a flickering tooltip in Night City's own palette, cycling the five modes by **name** — `GOD MODE`, `KONAMI CODE`, `CHONK`, `BRAWNDO`, `WHOAH`. The two famous ones are a knowledge check rather than an instruction; the three word-codes give themselves away; the footer fleuron goes hot magenta on hover; the 404 stamp carries a redacted `iddqd` that reveals on selection or hover; the Colophon's build spec lists a "Night City" row marked *undocumented*. The tooltip is `aria-hidden` and honours `prefers-reduced-motion` (no flicker, all five codes at once) — nothing is gated behind a hover, since the modes are documented on the Colophon.
- [x] ~~Revision apparatus~~ and ~~grid reveal~~ — declined.

## Contrast — measured, both themes

The audit turned up a structural problem, not just loose values.

**Provable:** dark mode cannot use a single red. Red text on the dark canvas needs luminance ≥ 0.2022; offwhite on a red field needs ≤ 0.1387. No value satisfies both. Light mode gets away with one red only because its canvas and its on-field text are both `#E7E7E7`, so both registers impose the same ceiling — and `#CC0006` sits just under it.

So `--signature` was split into the two registers DESIGN.md already described in prose:

| Token | Light | Dark | Job |
|---|---|---|---|
| `--signature` | `#CC0006` | `#F03C4E` (was `#E5263A`, 4.17 → **4.87**) | red text: link/nav hover, section numerals |
| `--signature-field` | `#CC0006` | `#C4001C` (was `#E5263A`, 3.64 → **5.05**) | offwhite text on a red fill |

Also fixed: four de-opacified foregrounds on the case-study outcomes band (`rgba(…,.85)` → 3.64, `rgba(…,.82)` → 4.19, `rgba(…,.80)` → 3.32) — the same defect already fixed on Home and Contact but missed there. Hierarchy on the field now comes from size and weight, never alpha.

*Visible cost, worth a look:* in dark mode the interaction red and the field red are now noticeably different reds where they sit near each other (the footer wordmark under the red field). They read as one family, but if you want them closer I can trade headroom — `#F03C4E`/`#C4001C` are the minimum values that clear AA, and anything nearer collapses one of them back under 4.5.

While fixing this, the dark palette was **de-duplicated**. It had been written twice (attribute selector + `prefers-color-scheme`), and the media copy silently won on source order at equal specificity — it reverted the first signature fix. Values now live once as `--dk-*`; each selector only remaps.

## Open — needs your input

- [x] **~~Decision logs "in some other places."~~ Done 2026-08-29.** Case studies already carried one each (six rows, all five). Added a sixth section to the **Colophon** — the site documenting its own decisions: no availability language, the masthead wired to the repo, 29 shown of 100+, no client logos, no fabricated imagery, two reds after dark. The `.choices` pattern moved from `case.css` to `global.css` in the process, since it is a site component rather than a case-study one.
- [ ] **The "100+" figure.** Currently rendered literally as `100+` in the archive spec plate, using your words. If you'd defend a tighter number in an interview, say so and I'll set it.

## Declined — closed by owner decision

- [x] ~~Get real product/artifact imagery into Precocity and at least one other case study.~~ **Incorrect premise.** All imagery in all case studies is real work; there are no placeholders. Confirmed in code: every `.frame` on every case page contains a real `<img>`, and the shared placeholder markup was never used. The item was wrong, not deferred.
- [x] ~~Curate the Writing index.~~ Leave as is for now.
- [x] ~~Extend the em-dash / rule-of-three copy pass to the 23 essays.~~ Leave the essays alone.
- [x] ~~Line length / leading on dense prose.~~ Leave alone.
- [x] ~~Resolve inconsistent client anonymization.~~ Leave as is.

## Still open — logged, not yet scheduled

- [x] **~~No shared type scale.~~ Built 2026-08-29.** The audit found **47 distinct values across 180 fixed declarations, plus 35 distinct `clamp()`s** for roughly eight conceptual roles. Replaced with one declared ramp: 19 fixed steps (`--fs-11` … `--fs-152`) and 10 fluid steps (`--fs-lede`, `--fs-d1` … `--fs-d8`, `--fs-num`), whose maxima mirror the fixed ramp exactly. All 217 declarations migrated to tokens; the only literals left are the essay drop-cap (`4.2em`, relative by design), two print-only `9pt` rules, and three Neon-mode values kept as documented exceptions. Detector font-size findings: **38 → 0**. Verified across 42 page/width/theme combinations with zero text overflow and zero horizontal scroll.
- [ ] **Five mobile breakpoints** (600 / 640 / 720 / 880 / 900) across page-scoped styles. Same class of problem as the type scale, not yet consolidated.
- [ ] **Dense multi-panel collages.** Precocity's journey-map artifact is a 4-up montage that is legible but tight at page width. The lightbox mitigates it. Re-cropping your client deliverables is a content decision, not a CSS one.
- [ ] **`#C9C6C0` in `ink.astro`.** A bespoke dark body value that isn't a token. Left standing rather than silently changed, since altering it is a visual decision on the easter-egg page.

---

## Reference

- Full critique snapshot: `.impeccable/critique/2026-08-26T02-21-02Z__whole-site-light-mode.md`
- Implementation log for all of the above: `_progress/00-design-log.md`
- Explicitly deferred, not a defect: essay hero illustrations (sketch/poster-style art) — confirmed intentional editorial choice, not a design-system violation.
