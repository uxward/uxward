---
name: uxward.com
description: A working journal for a design executive, run as a Swiss/Unigrid catalog system — one grotesque, exposed rules, big tight numerals, and a single color used with nerve.
colors:
  canvas: "#E7E7E7"
  paper: "#FAF8F4"
  ink: "#040404"
  body: "#282828"
  tertiary: "#646464"
  rule: "#E4E1DC"
  rule-faint: "rgba(4, 4, 4, 0.10)"
  signature: "#CC0006"
  signature-field: "#CC0006"
  offwhite: "#E7E7E7"
typography:
  # The enumerated ramp. Every size on the site is one of these; nothing is a
  # literal any more. Fixed steps carry the label/body band, the d1–d7 fluid
  # steps carry display type. Neon (.cyber) keeps its own display sizes.
  scale:
    fs-11: "11px"
    fs-12: "12px"
    fs-13: "13px"
    fs-14: "14px"
    fs-16: "16px"
    fs-18: "18px"
    fs-20: "20px"
    fs-22: "22px"
    fs-26: "26px"
    fs-30: "30px"
    fs-34: "34px"
    fs-40: "40px"
    fs-48: "48px"
    fs-56: "56px"
    fs-64: "64px"
    fs-80: "80px"
    fs-96: "96px"
    fs-120: "120px"
    fs-152: "152px"
    cyber-fold: "94px"
    cyber-hero-min: "46px"
    cyber-hero: "85px"
    cyber-toast-min: "13px"
    cyber-toast-max: "26px"
  display:
    fontFamily: "Archivo, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "clamp(48px, 7.6vw, 120px)"   # --fs-d8
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "clamp(48px, 7vw, 96px)"      # --fs-d7
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "clamp(34px, 4.6vw, 56px)"    # --fs-d4
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  numeral:
    fontFamily: "Archivo, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "clamp(40px, 5.6vw, 80px)"    # --fs-d6
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "0.005em"
  lede:
    fontFamily: "Archivo, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "clamp(19px, 2.2vw, 24px)"    # --fs-lede
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.05em"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  7: "32px"
  8: "48px"
  9: "64px"
  10: "96px"
  11: "128px"
components:
  link:
    textColor: "{colors.ink}"
  link-hover:
    textColor: "{colors.signature}"
  catalog-item-title:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  catalog-item-title-hover:
    textColor: "{colors.signature}"
  bleed-field:
    backgroundColor: "{colors.signature}"
    textColor: "{colors.offwhite}"
    padding: "120px 0"
  spec-cell:
    padding: "16px 20px"
---

# Design System: uxward.com

## Overview

**Creative North Star: "The Unigrid"**

The site runs on the Unigrid principle, by way of Massimo Vignelli: the grid made visible — structure you can see rather than hide. Everything is one grotesque typeface (Archivo), used across display, body, labels, and numerals without apology or a second voice to lean on. Sections are numbered and bordered like a printed spec sheet or catalog — a 4-column masthead (`.spec-bar` / `.meta-strip`), full-width hairline dividers between sections, and oversized red numerals (`01`, `02`…) that behave like catalog entries, not decoration. Where the previous editorial-serif system (Fraunces, a left-gutter `§` marker rail) staged the page as a magazine, this system stages it as a specification: black, white, an off-white field, and one color that doesn't ask permission.

This is a full redesign, not a refinement of the site's earlier direction — the strategic brief in `A-Product-Brief/visual-direction.md` describes the retired serif system and should be read as historical, not current. **Explicitly rejected as reference:** the earlier "editorial confidence" posture (Subtraction.com, Pentagram partner pages, 1960s Penguin paperbacks) and any agency-portfolio site built on illustration or heavy motion. **The confirmed lineage** (stated directly on the site's own colophon page): Wim Crouwel for the visible grid, Experimental Jetset for the conviction to run on a single typeface, Massimo Vignelli and the Unigrid for the discipline of black, white, and one color that doesn't ask permission.

**The system ships as three distinct versions, not one theme with a toggle.** Light and Dark are close siblings — same grid, same typeface, same rules, retuned tokens. Neon ("Night City," a hidden easter egg) is not a retune; it swaps the typefaces, breaks the flat-by-default rule, adds full-screen animated backgrounds, and runs its own activation cinematic. Treat Neon as a fully documented third mode below, not a footnote — a change to the primary system should not be assumed to apply to it, and vice versa.

1. **Light** (default) — the mode described throughout this document unless stated otherwise. Off-white canvas, near-black ink, the Unigrid catalog layout.
2. **Dark** (`[data-theme="dark"]`, toggled by the header sun icon, persisted in `localStorage`) — the same system, retuned: near-black canvas, warm off-white ink/body so text doesn't read cold, softened hairlines. Same typeface, same layout, same rules — a palette swap, not a redesign.
3. **Neon / "Night City"** (`.cyber` class on `<html>`, activated by typing a secret code: `iddqd`, Konami, `chonk`, `brawndo`, `whoah`; exits via the toggle, `Esc`, or retyping a code) — a genuinely different art direction layered on top, entered through a ~4-second glitch/tear-down cinematic. Near-black canvas with a violet bruise, neon magenta/cyan/blue accents, **three swapped typefaces** (Rock Salt for logo/headings, Orbitron for body, Sixtyfour for nav — see Typography), glow and blend-mode effects in place of flat surfaces, animated scanlines, a drifting grid backdrop, and (on the homepage only) a looping cyber-city video behind the hero. It persists across navigation via a separate `localStorage` key. See the **Neon Mode** subsections under Colors, Typography, and Elevation & Depth for what specifically changes.

**Key Characteristics:**
- Three modes, not one: Light and Dark share every rule below and differ only in token values; Neon is a distinct art direction that suspends several of those rules on purpose.
- One grotesque (Archivo) for every type role in Light/Dark; no serif, no second display face — Neon is the sole, fully-documented exception (three swapped faces).
- Numbered, bordered sections read as a specification sheet, not a magazine layout, in Light/Dark.
- Flat throughout in Light/Dark — no shadows, no rounded corners. Neon is intentionally not flat (glow, blend modes, animated backdrops).
- Signature red is either an interaction color (link/nav hover) or a full-bleed color field in Light/Dark — never a button, divider, or body-text color. Neon replaces it with a wider neon accent set used far more liberally.
- No stock imagery on the core pages in Light/Dark. Photography there is limited to Brandon's own portraits (home fold, About) and real artifacts from the case studies, both framed as hairline plates with specimen captions. Essay bodies carry editorial illustration and are the documented exception. Neon adds one video asset (homepage hero backdrop) that never loads outside Neon mode.

## Colors

Five tokens do the work in Light and Dark; the palette is deliberately narrow and never pure black-on-white. Neon replaces the palette's *character* entirely while keeping the same token names (`--canvas`, `--ink`, `--body`, `--tertiary`, `--paper`, `--signature`) plus four neon-only accents that don't exist in Light/Dark.

### Primary
- **Signature red** (`#CC0006` light / `#E5263A` dark) — "used with nerve," per the site's own colophon: it is both the universal link/nav **hover and focus color** site-wide, and the fill for full-bleed "event" color fields (the homepage contact block, the case-study outcomes band, the contact-page CTA). It is never a button fill, never a body-text color, and never a static divider — its two registers (interaction vs. event field) are how it stays special without being rationed to rare placements.

### Neutral
- **Canvas** (`#E7E7E7` light / `#121212` dark) — the page background. Deliberately an off-white/soft gray in light mode, never pure white — "the page," per the colophon.
- **Paper** (`#FAF8F4` light / `#1A1A1A` dark) — a lightly tinted surface reserved for the rare framed/inset moment (case-study artifact placeholder frames).
- **Ink** (`#040404` light / `#E7E7E7` dark) — headlines, wordmark, primary body color role; near-black by choice, never pure black.
- **Body** (`#282828` light / `#E8E6E1` dark) — running body copy and secondary text.
- **Tertiary** (`#646464` light / `#9A958C` dark) — labels, timestamps, captions, the faint hairline rules. Quiet by design.
- **Rule / Rule-faint** (`#E4E1DC` hairline, or `rgba(ink, 10%)` in the Swiss system's section dividers) — the graphic vocabulary is 1px hairlines, not boxes or shadows.
- **Offwhite** (`#E7E7E7`) — the white-on-color value: text set on a signature-red field.

### Neon Mode

Every core token is overridden, and the palette's job changes from "rationed" to "everywhere" — per the colophon's own cyber-mode copy: *"more tokens, and none of them rationed."*

| Token | Value | Role in Neon |
|---|---|---|
| `--canvas` | `#07060F` | Near-black with a violet bruise — "the wet asphalt the whole city reflects off of." |
| `--paper` | `#0E0B1D` | The lifted panel, one notch off the void, for callouts. |
| `--ink` | `#F6F7FF` | White that won't sit still — every heading gets a cyan/magenta text-glow. |
| `--body` | `#C9D6FF` | Cool light blue-white for running text. |
| `--tertiary` | `#8B7FC4` | Muted violet for labels. |
| `--rule` | `rgba(255, 43, 214, 0.30)` | Dividers pick up a magenta bloom instead of staying neutral. |
| `--signature` | `#FF2BD6` (neon pink) | The signature, "off its leash" — no longer rationed to two registers; it's the dominant accent. |
| `--neon-cyan` | `#19F0FF` | New, Neon-only. Glow under everything — reflections, `::selection`, link-hover glow. |
| `--neon-blue` | `#2B6BFF` | New, Neon-only. "The deep end of the palette. Rain, distance, the light two blocks down." |
| `--neon-red` | `#FF2E4D` | New, Neon-only. Defined as a token but not yet visibly wired to a specific UI element in the current CSS — available for future neon accents. |

Effects layered on top of the palette: a fixed radial-gradient "wet street" backdrop + faint perspective grid behind all content, animated CRT scanlines drifting over the whole viewport, neon `text-shadow` glow on the wordmark and all headings, a magenta `::selection`, and — on the homepage only — a looping video backdrop behind the hero that never loads outside Neon mode. Activation itself is a ~4-second cinematic (chromatic-split glitch, page elements physically falling/flying off-screen, an opaque hand-off cover, then a "power-on" reveal on the home page) — this exists nowhere in Light/Dark and should not be mimicked for ordinary page transitions.

### Named Rules
**The One Face Rule (Light/Dark).** Archivo carries every type role — display, body, labels, numerals alike. A second display typeface is never introduced in Light or Dark mode.

**The Two-Register Red Rule (Light/Dark).** Signature red is either the universal hover/focus color (transient, site-wide) or a full-bleed event field (persistent, high-commitment). **The two registers are two tokens** — `--signature` and `--signature-field` — because in dark mode they provably cannot share a value: red text on the dark canvas needs luminance ≥ 0.2022, offwhite on a red field needs ≤ 0.1387. Light mode holds one value for both only because its canvas and its on-field text are both `#E7E7E7`, so both registers impose the same ceiling. Dark ships `#F03C4E` for interaction and `#C4001C` for the field; light ships `#CC0006` for both. It is never a button fill, a recurring divider, or body copy — it fails contrast at body size, which is precisely why it's reserved for these two registers. **This rule is explicitly suspended in Neon mode**, where the signature accent (now neon pink) is deliberately unrationed.

## Typography

**Type Family:** Archivo (grotesque sans, variable 400–900) — the only typeface in the primary system. Linked from `Base.astro` with `preconnect` to both Google Fonts hosts; requested as a variable axis (`wght@400..900`) rather than six static weights. Never `@import`-ed from a stylesheet — that serialises the font request behind the stylesheet's own download.
**Supporting Face:** JetBrains Mono — its role has narrowed since the earlier serif system: it now appears only in the mobile full-screen nav overlay, the theme-toggle glyph context, and system-level UI (the cyberpunk activation toast). It is not the site's general "meta-text" voice; on desktop, caption/label text sets in Archivo at small size and heavy weight instead.

**Character:** One voice, deliberately. Heaviest weights (800–900) carry titles and numerals at very tight tracking (-0.02em to -0.045em) and near-1.0 or sub-1.0 line-height, so headlines read as dense, confident blocks rather than airy display type. Body copy sits at a comfortable 400-weight, 1.45–1.7 line-height for long-form reading.

### Hierarchy
- **Display** (weight 900, `clamp(46px, 7.6vw, 120px)`, line-height 0.9, letter-spacing -0.045em): the homepage hero H1 only — the single largest type on the site.
- **Headline** (weight 900, roughly `clamp(40–52px, ~6–7vw, 76–104px)` depending on page, line-height 0.94–1.0, letter-spacing -0.035 to -0.045em): every other page's top-of-page H1 (About, Contact, Colophon, Work index, case-study titles, essay titles).
- **Title** (weight 900, `clamp(28px, 3.6vw, 56px)`, line-height ~1.0–1.05, letter-spacing -0.025em): section-level heads within a page (case-study section heads, timeline head, CTA `h2`).
- **Numeral** (weight 900, `clamp(40px, 6vw, 96px)`, line-height ~0.78–0.82, letter-spacing -0.045em, color signature or tertiary): the big catalog numbers (`01`, `02`…) that head every numbered section, and the case-study/work-index item numbers.
- **Lede / Deck** (weight 400, `clamp(18px, 2.2vw, 24px)`, line-height 1.45): the paragraph directly under a headline.
- **Body** (weight 400, 17–19px, line-height 1.45–1.7): running prose. Essay body copy opens each piece with a large drop-cap first letter (weight 900, 4.2em).
- **Label / Eyebrow** (weight 600–700, 11–13px, letter-spacing 0.05–0.09em, uppercase): section eyebrows, meta-strip field labels, back-links, catalog timestamps — nearly always set in Archivo, not mono.

### Neon Mode

Typography is the single biggest thing Neon changes — this is a three-font swap, not a style tweak, and all three fonts are lazy-loaded on activation (`src/layouts/Base.astro`) so Light/Dark visitors never fetch them:

- **Logo & headings** → **Rock Salt** (a weathered handbrush/graffiti display face). Applied to the wordmark and every `h1`/`h2` on the page. Deliberately unreadable at paragraph size — "it only ever shouts," per the colophon.
- **Body text** → **Orbitron**. This is what `--font-body` actually resolves to under `.cyber` (`global.css`, cyber token block).
- **Nav** → **Sixtyfour** (a pixel/monospace display face) for header/footer/mobile-overlay nav links.

The Colophon's Neon-mode copy correctly names Orbitron as the body face, matching the shipped `--cf-body` token and the fonts lazy-loaded in `Base.astro`. JetBrains Mono is not part of the Neon set.

### Named Rules
**The One Ramp Rule.** Every size on the site is a step on the declared ramp — `--fs-11` … `--fs-152` for the fixed label/body band, `--fs-d1` … `--fs-d8` plus `--fs-lede` and `--fs-num` for display. No literal `font-size` in px anywhere. This replaced 47 ad-hoc values and 35 distinct `clamp()` declarations. The fluid maxima mirror the fixed ramp exactly (34 / 40 / 48 / 56 / 64 / 80 / 96 / 120), so a display step and a fixed step never disagree about what "the next size up" means. Adding a size means adding a step here first. Documented exceptions, all Neon-only: the two `.cyber` headline overrides and the activation toast keep their own values, because Neon is a separate art direction with its own type.

**The Word-Space Rule.** Every display role runs at negative tracking (−0.02em to −0.045em), which closes word spaces along with letter spaces and welds headlines into single long words at large sizes. Any type set at −0.02em or tighter carries a compensating `word-spacing` (0.04–0.06em). Display headlines also take `text-wrap: balance`; ledes and decks take `text-wrap: pretty`.

**The No-Serif Rule (Light/Dark).** Nothing in Light or Dark mode sets in a serif face. If a serif treatment is ever needed again, that is a deliberate system change requiring the same weight of decision as the original Fraunces→Archivo redesign — not a per-page choice.

**The Three-Face Exception (Neon only).** Neon mode is the one place the system runs more than one typeface at once (Rock Salt / Orbitron / Sixtyfour) — by design, to make the mode feel like a genuine "override," not a recolor. This exception does not extend to Light or Dark.

## Layout

Container maxes at 1180px, with 32px side gutters (20px at ≤720px). The earlier left-gutter `§`-marker rail (a 100px indent column carrying section numerals) is **retired site-wide** — `.grid > .marker { display: none; }` in `global.css` — content now runs full-width inside `.container`.

In its place, the Swiss system composes from:
- **A masthead spec-bar**: a 4-column, hairline-bordered grid of key/value cells (`Currently / Discipline / Based / Status` on Home; a similar spec bar for case-study meta). Collapses to 2 columns at ≤900px.
- **Numbered catalog sections**: each major section opens with a large red numeral + caps title (`.sec-head` / `.cs-eyebrow`), then a full-width `border-top` hairline divider above it — dividers run edge-to-edge at the section level, not indented to the content column.
- **Catalog list rows** (`.cat .item`, work-index `.case`, archive `.arch-card`): flat rows separated by 1px hairlines, no card chrome, hover flips the title to signature red.

Vertical rhythm runs on the `--space-1` … `--space-11` scale (4px–128px); major section padding sits at `--space-9`/`--space-10`/`--space-11` (64/96/128px). Responsive breakpoints: multi-column grids collapse at 900px, and the header/nav switches to a full-screen mobile overlay at 720px.

## Elevation & Depth

**Light and Dark are flat by default** — there is no `box-shadow` anywhere in either mode. Depth is conveyed entirely through type-weight contrast (900 vs. 400), hairline dividers, and full-bleed color fields, never through elevation or layering.

### Neon Mode

Neon is the one place the system uses real depth vocabulary, and it's a glow/blend-mode language, not a shadow/elevation one:
- **Glow, not shadow:** headings and the wordmark get a layered `text-shadow` (cyan + magenta), not a `box-shadow`; a subtle `box-shadow` bloom appears on the header rule and select borders.
- **Blend-mode overlays:** a fixed, `mix-blend-mode: multiply` scanline layer drifts continuously over the entire viewport; a `screen`-blended radial-gradient "wet street" backdrop sits behind all content.
- **The activation cinematic** adds its own temporary depth stack — noise, color-flash, tear-bar, and message layers — all `position: fixed`, torn down after the ~4s transition completes.

This vocabulary exists only under `.cyber` / `.cyber-*` classes and should never bleed into Light/Dark component work.

### Named Rules
**The Flat-By-Default Rule (Light/Dark).** Surfaces never lift. A hairline border or a full-bleed color change is the system's only vocabulary for separating one region from another. **Neon mode is the named exception** — its glow/blend-mode/scanline vocabulary is a deliberate, separate depth language, not a violation of this rule to be cleaned up.

## Shapes

Square everywhere — there is no `border-radius` usage anywhere in the codebase, **including Neon mode**; this is the one geometric rule that holds across all three versions. The recurring form language is the 1px hairline rule (`--rule` / `--rule-faint`) as the default divider, a 2px underline for hover/active link states, and a 4px solid signature-red left border reserved for pull-quotes and blockquotes. Color swatches on the Colophon page are plain 56×56px squares with a 1px hairline border — consistent with the no-radius rule.

## Components

### Links
- **Style:** ink-colored text, 1px underline (3px offset) by default.
- **Hover / Focus:** color transitions to signature red over 150ms (`--t-fast`); focus-visible adds a 2px solid signature outline, 2–3px offset. This single hover rule is applied universally — body links, nav, footer, breadcrumbs, catalog-item titles, meta "open"/"go" links all resolve to the same red on hover.

### Catalog Items (cards without card chrome)
- **Shape:** no border-radius, no shadow, no background fill at rest — a flat row separated by a 1px hairline (`border-top`).
- **Content pattern:** a large numeral (weight 900, signature or tertiary) + a heavy title + supporting deck copy, optionally a right-aligned meta/date column.
- **Hover:** the title (and sometimes the numeral) flips to signature red; no scale or shadow change — restraint, not motion, is the hover signal.

### Full-Bleed Color Field ("the bleed")
- **Style:** background fills entirely with signature red; text sets in offwhite (`#E7E7E7`).
- **Where used:** the homepage closing CTA, the contact-page hero CTA, and the case-study outcomes band. Padding is generous (`120px 0 112px` typical) so the field reads as a deliberate, weighty moment.
- **This is the closest thing the system has to a "primary button"** — there is no filled button component anywhere on the site. Calls to action are always typographic links (an email address with an underline, an inline-flex send icon) set inside this red field, never a pill or rectangle with a background.

### Spec-Bar / Meta Strip
- **Style:** a hairline-bordered grid of cells (collapsing to 2-up at 900px), each cell holding a small caps label (tertiary, 11px) over a bold value (ink, 16px), and optionally a bottom-aligned dateline (tertiary, 11px caps) that shares a baseline across every cell in the row.
- **Where used:** the homepage masthead and every case-study's meta strip (client, role, timeframe, capacity).
- **The homepage masthead is derived, not written.** Its four cells — `Last ship` / `Last essay` / `Source` / `Based` — come from `slate[0].shipped`, `essaysNewestFirst[0]`, and a build-time `git log -1` (`src/data/build-info.js`), with the commit hash linked to the public repo. Columns are deliberately unequal (`1fr 1.5fr 1fr 0.8fr`): the Unigrid allocates columns to content rather than dividing them evenly. Nothing in this bar is a claim a reader can't check, and nothing in it can go stale between builds.

### Plates (portrait and artifact)
- **Style:** a 1px `--rule-faint` hairline directly around the image — no radius, no shadow, no padding, no fill. `object-fit: cover` with an explicit `aspect-ratio`; because the HTML `width`/`height` attributes map to presentational CSS, every plate also needs `height: auto` or the ratio is inert.
- **Caption:** the label role (11px / 700 / 0.09em / uppercase / tertiary), set below the frame. Portraits use a specimen caption (`Fig. 01 — B.E.B.W., Dallas, 2026`).
- **Where used:** the homepage fold portrait, the About portrait, the work-index hero artifact, the small artifact previews on the home and work lists, and **every artifact on every case study**. One treatment, no per-page variants — the case pages previously ran three (a 60px bleed with no frame, a 16:9 `--paper` letterbox, and a third hero variant).
- **Previews stay a catalog, not a card grid.** No lift, no scale, no shadow on hover — only the row's title flips red, exactly as a text-only row does. Every preview points at an image that already appears on its case page; nothing is fabricated.

### Navigation
- **Desktop header:** wordmark left ("Brandon" always signature red; "E.B. Ward" flips red on hover), horizontal nav links right, set in Archivo (not mono), uppercase, 13px, weight 600, letter-spacing 0.05em. A light/dark theme toggle (an animated sun glyph) sits beside the nav.
- **Mobile (≤720px):** collapses to a hamburger that opens a full-screen overlay; overlay nav links are the one place JetBrains Mono still leads — 11px uppercase, 0.2em tracking, full-width rows with hairline dividers.
- **Footer:** three-column grid (wordmark / nav links / external links), all uppercase Archivo, red on hover, with a mono-style colophon credit line beneath (note: even the colophon line now sets in `--font-sans`, not mono).

### Decision Log ("Chose to / Chose not to")
- **Style:** hairline-separated rows, a 200px caps key column (`--fs-12`, tertiary) against a `--fs-18` value column capped at 600px. Collapses to one column at 720px. No fill, no border beyond the row rules.
- **Where used:** all five case studies (six rows each) and the Colophon, where the site documents its own decisions. It lives in `global.css`, not `case.css` — it is a site pattern, not a case-study one.
- **Content rule:** a decision and the reason for it, in that order, first person. The bolded lead sentence is the decision; the rest is why. "Chose not to" rows carry as much weight as "Chose to" — the refusals are the point.

### Pull-Quote / Blockquote
- **Style:** weight 700, tight letter-spacing (-0.02em), 4px solid signature-red left border, generous left padding.
- **Where used:** case-study reflections, essay body blockquotes, work-index hero pullouts.

## Do's and Don'ts

### Do:
- **Do** run every type role — display, body, numerals, labels — in Archivo. One typeface is a stated system commitment, not an oversight.
- **Do** open a major section with a large red numeral + caps title, followed by a full-width hairline divider.
- **Do** treat signature red as either the universal hover/focus color or a full-bleed event field — those are its only two jobs. (The `/work` archive category tags were demoted from red to tertiary for exactly this reason: thirty static red labels spent the colour as decoration.)
- **Do** run foreground text on the red field at full `--offwhite`. `#E7E7E7` on `#CC0006` is 4.76:1, so there is no contrast headroom left to spend on opacity — any `rgba(231,231,231,0.8)` treatment fails AA.
- **Do** wrap every `:hover` rule in `@media (hover: hover)`. Ungated, they stick after a tap on touch. `:focus-visible` gets the same colour change, unconditionally.
- **Do** keep every divider a 1px hairline (`--rule` or `--rule-faint`) in Light/Dark; never substitute a shadow or a filled panel for separation.
- **Do** treat Neon as a fully documented third version when changing it — update its color/type/depth tables here the same way a Light/Dark change would update the primary tables, rather than treating it as a throwaway easter egg not worth documenting.
- **Do** keep Neon's tokens, fonts, and effects scoped to the `.cyber` / `.cyber-*` classes — it should never leak into Light/Dark, and Light/Dark rules (flat-by-default, one typeface, rationed red) should never be assumed to constrain Neon.

### Don't:
- **Don't** add `border-radius` anywhere, in any of the three modes — the one rule that holds everywhere. `box-shadow`/glow effects are fine in Neon but stay at zero in Light/Dark.
- **Don't** introduce a filled button component in Light/Dark. Every call to action on the site today is a typographic link, often inside a full-bleed red field — that pattern should be reused, not replaced with a pill/rectangle button.
- **Don't** reintroduce the retired left-gutter `§`-marker rail (`.grid > .marker`) — it is explicitly hidden site-wide (`display: none`) and superseded by the full-width Unigrid layout.
- **Don't** use signature red for body copy or as a static, decorative divider in Light/Dark — it fails contrast at body size and dilutes its two-register meaning. (Neon's unrationed neon-pink signature is the documented exception.)
- **Don't** treat JetBrains Mono as a general meta-text voice for new Light/Dark components; it's scoped to the mobile nav overlay and system-level toast/glitch UI only. It is not part of the Neon font set either — Neon's three faces are Rock Salt / Orbitron / Sixtyfour.
- **Don't** add stock photography, illustration, or thumbnails to the core pages in Light/Dark (Home, Work, About, Contact, Colophon). Essay bodies are the documented exception: they carry editorial illustration — generated art, a handful of Unsplash photographs, stills and diagrams — which is decoration for reading, not evidence. On the core pages the only photographic assets are Brandon's own portraits; Neon's one additional asset is the homepage hero video, which never loads outside Neon mode.

---

*Generated via `/impeccable document`, scan mode, from `src/styles/global.css`, `case.css`, `essay.css`, `src/layouts/Base.astro` (Neon activation logic + lazy-loaded fonts), the Colophon page's own design commentary, and the homepage/work-index/contact/about page markup — 2026-08-25. Documents all three shipped versions — Light, Dark, and Neon/"Night City" — as peers, not Light-with-footnotes. Supersedes `A-Product-Brief/visual-direction.md` and `D-UX-Design/design-tokens.md`, both written for the earlier Fraunces/editorial-gutter system that this redesign replaced; those files describe historical direction, not the current implementation.*
