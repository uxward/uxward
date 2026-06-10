# Design Tokens — uxward.com
Last updated: 2026-06-09 — after Home fold

Source of truth is `src/styles/global.css` (the implemented token set). This registry mirrors it for design reference. The Home-fold Design Loop introduced **0 new tokens** — it reused existing ones.

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

Note: signature red is rationed to five sanctioned uses (see `A-Product-Brief/visual-direction.md`) — never a link/button/hover color. The Home fold's inline "Speakeazy" link correctly uses `color-ink`, not signature.

## Typography
Two families only: **Fraunces** (`--font-serif`, all editorial type), **JetBrains Mono** (`--font-mono`, meta/labels).

| Token | Value | First seen |
|---|---|---|
| text-display-h1 | Fraunces, clamp(64px, 8.4vw, 116px), wght 300, opsz 144, line 0.94 | Home fold |
| text-deck | Fraunces italic, 24px, wght 300, opsz 36 / SOFT 80 / WONK 1, line 1.42 | Home fold |
| text-section-h2 | Fraunces, 40px, wght 300, opsz 96 | global.css |
| text-body | Fraunces, 18px, line 1.68, opsz 14 | global.css |
| text-eyebrow / text-meta | JetBrains Mono, 11px, 0.2em tracking, uppercase | Home fold |

## Spacing
| Token | Value | First seen |
|---|---|---|
| space-1…11 | 4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64 · 96 · 128 px | global.css |
| layout-container | 1180px max | global.css |
| layout-gutter-x | 32px (20px ≤720) | global.css |
| layout-gutter-mark | 100px (the editorial § marker column) | global.css |
| width-prose | 720px | global.css |

## Component Candidates
Flagged for a future design-system phase — do not extract yet.

| Pattern | Pages | Notes |
|---|---|---|
| inline-proof-link | Home fold | Quiet serif inline link inside body copy (ink, underline). Reusable for "proof" mentions. |
| live-cta | Speakeazy case | White-on-signature outbound CTA to a live product. |
| essay-card | Home, Writing index | Title (serif, optional em) + deck + meta; now data-driven from `essays.js`. |
| case-card | Home, Work index | Slate entries; data-driven from `slate.js`. |
| section-accordion | Writing index | Section heading toggles focus/collapse; search-filterable rows. |
