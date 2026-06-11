# Design Tokens — uxward.com
Last updated: 2026-06-10 — after Writing Index (PRD 002)

Source of truth is `src/styles/global.css` (the implemented token set). This registry mirrors it for design reference. The Writing-index Design Loop introduced **0 new colour/spacing tokens** (all reused from global.css), **1 new motion value** (a 120ms view cross-fade, flagged below), and several new component patterns.

## Colors
| Token | Value (light) | Value (dark) | First seen |
|---|---|---|---|
| color-canvas | #FFFFFF | #121212 | global.css |
| color-ink | #040404 | #FFFFFF | global.css |
| color-body | #282828 | #E8E6E1 | global.css |
| color-tertiary | #6B6B6B | #9A958C | global.css |
| color-rule | #E4E1DC | #2A2A2A | global.css |
| color-paper | #FAF8F4 | #1A1A1A | global.css |
| color-signature | #CC0006 | #E5263A | global.css |

Note (**updated 2026-06-10**): signature red now works in **two registers** (see `A-Product-Brief/visual-direction.md`) — **event red** (rationed, persistent, full-volume placements) and **interaction red** (the standard link/title **hover & focus** colour, site-wide). *This supersedes the earlier note that red was "never a link/button/hover color."* Still never a button fill, divider, or body copy. As of 2026-06-11 **every** hover that changes text colour resolves to signature site-wide (links, nav, footer, breadcrumbs, back-links, controls). The view-toggle's *active/resting* state still uses ink/underline (no red), but its hover follows the universal convention.

## Typography
Two families only: **Fraunces** (`--font-serif`, all editorial type), **JetBrains Mono** (`--font-mono`, meta/labels).

| Token | Value | First seen |
|---|---|---|
| text-display-h1 | Fraunces, clamp(64px, 8.4vw, 116px), wght 300, opsz 144, line 0.94 | Home fold |
| text-deck | Fraunces italic, 24px, wght 300, opsz 36 / SOFT 80 / WONK 1, line 1.42 | Home fold |
| text-section-h2 | Fraunces, 40px, wght 300, opsz 96 | global.css |
| text-section-h2-sm | Fraunces, 36px, wght 300, opsz 96 / SOFT 30 | Writing index (section heads) |
| text-toc-title | Fraunces, 22px, wght 400, opsz 96 / SOFT 30, line 1.2 (em → SOFT 100 / WONK 1) | Writing index (row title) |
| text-body | Fraunces, 18px, line 1.68, opsz 14 | global.css |
| text-eyebrow / text-meta | JetBrains Mono, 11px, 0.2em tracking, uppercase | Home fold |
| text-meta-sm | JetBrains Mono, 10.5px, 0.22em tracking, uppercase (quarter, topic tag, toggle) | Writing index |

## Spacing
| Token | Value | First seen |
|---|---|---|
| space-1…11 | 4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64 · 96 · 128 px | global.css |
| layout-container | 1180px max | global.css |
| layout-gutter-x | 32px (20px ≤720) | global.css |
| layout-gutter-mark | 100px (the editorial § marker column) | global.css |
| width-prose | 720px | global.css |

No new spacing tokens — the Writing index composes entirely from `space-*` and the gutter-mark grid.

## Motion
| Token | Value | First seen |
|---|---|---|
| t-fast | 150ms (link/hover, deck reveal, filter fade) | global.css (`--t-fast`) |
| t-mode | 200ms (light/dark cross-fade, toggle glyph) | global.css (`--t-mode`) |
| t-quick *(candidate)* | 120ms — Topic↔Date view cross-fade dip | Writing index — **not yet a global token**; promote to `--t-quick` if reused |

Filter motion uses staggered `t-fast`: opacity 150ms, then max-height/padding 150ms (delayed 150ms) so rows fade *then* collapse. All motion is gated by `prefers-reduced-motion: reduce`.

## Component Candidates
Flagged for a future design-system phase — do not extract yet.

| Pattern | Pages | Notes |
|---|---|---|
| inline-proof-link | Home fold | Quiet serif inline link inside body copy (ink, underline). Reusable for "proof" mentions. |
| live-cta | Speakeazy case | White-on-signature outbound CTA to a live product. |
| essay-card | Home | Title (serif, optional em) + deck + meta; data-driven from `essays.js`. *(Writing index no longer uses this — see leader-dots-row.)* |
| case-card | Home, Work index | Slate entries; data-driven from `slate.js`. |
| ~~section-accordion~~ | ~~Writing index~~ | **Removed (PRD 002).** Superseded by leader-dots-row + always-open sections. |
| **leader-dots-row** | Writing index | TOC row: serif title · radial-gradient dotted leader (~1px dot, 8px period, `--rule`) · mono meta cluster. Hover/focus → signature title + deck reveal (deck space reserved, no reflow). The page's signature pattern. |
| **view-toggle** | Writing index | Quiet mono two-state toggle (`Topic | Date`), active = ink + underline, no red; `aria-pressed`; choice persisted in `localStorage`. Cross-fades between rendered-both arrangements. |
| **controls-band** | Writing index | Full-width band between content blocks: toggle (left) + filter (right), result line beneath; stacks ≤880px. |
| **topic-tag** | Writing index (Date view) | Mono uppercase topic label in the row meta cluster (`TOPIC · QUARTER`), derived from `essaySections`. |
| **list-filter-motion** | Writing index | Filtered rows fade (150ms) then collapse so the rest reflow; reduced-motion-safe. Reusable for any filterable list. |
