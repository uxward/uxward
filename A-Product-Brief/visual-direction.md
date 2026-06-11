# Visual Direction — uxward.com

2026-06-08 · Extracted from the live `global.css`, the colophon page, and `uxward-design-strategy-brief.md` §7–8. Where values differ, the **implemented tokens in `global.css` are authoritative.**

---

## Visual References

**The reference set (taste, not fireworks):**
- Khoi Vinh's *Subtraction.com* — twenty years of editorial restraint.
- Frank Chimero, Jason Santa Maria, Robin Sloan — the case for the personal site as primitive.
- Pentagram partner pages; *The New Yorker* (a serious face that isn't a quiet one).
- 1960s Penguin paperback covers — how a layout earns its one accent of color.

**Explicitly NOT the reference set:** Rally, Locomotive, Active Theory, or any agency-portfolio site with heavy motion, illustration, and flourish. Brandon does not position as a visual virtuoso — he positions on taste and strategic judgment, and the visual system reflects that.

---

## Design Style

**Posture, one sentence:** *Editorial confidence, not graphic virtuosity.* The site wins on taste — strong typographic hierarchy, generous whitespace, restraint executed with conviction.

- **Layer-cake, not feed.** Sectioned, magazine-like rhythm. A two-column grid with a ~100px left gutter carrying a section number/marker (`§ 01`, `§ 02`…) — the editorial indent. Collapses to single column on mobile.
- **Composed in stasis.** No section-reveal animations, no scroll-jacking, no parallax, no fade-in-on-scroll. The page reads as deliberately set, not animated into being.
- **No rounded corners** (2px max), **no drop shadows** — depth comes from type and whitespace, not elevation.
- **Container** ~1180px max; reading column 580–720px. Vertical rhythm ~96px between major sections.
- **Light and dark modes**, both designed to equal quality — dark is retuned, not inverted.

**Discovered moments (five sanctioned "easter eggs", same discipline as the red rule):** theatre mask (links to the acting site), wordmark direction-shift on the red "ux", em-dash → vertical-bar mode toggle, the 404 wit page, and a red reading-time bar on essays. No more than five; all respect `prefers-reduced-motion`.

---

## Color Direction

**Red means "this matters."** The signature red works in two registers:
- **Event red** — an *event*, not ornament. Rationed across the whole site to the five sanctioned places below, persistent and often full-bleed, and when it appears it appears at full volume.
- **Interaction red** — the standard link/title **hover & focus** color, site-wide (owner decision, 2026-06-10). A transient splash that reverts the instant the cursor leaves. The focus ring is already 2px `--signature`; hover now matches.

Red is still **never a button fill, never a recurring divider, never body copy** (it fails AA at small sizes on white — which is *why* it's never body). Event red stays special by being persistent and full-volume, not by being the only red on the page.

**Tokens — light mode (authoritative, from `global.css`):**

| Token | Hex | Role |
|---|---|---|
| `--canvas` | `#FFFFFF` | Page background — white over off-white = the bias toward editorial seriousness. |
| `--ink` | `#040404` | Wordmark, primary headlines, body. Near-black by choice. |
| `--body` | `#282828` | Body copy, secondary headlines. |
| `--tertiary` | `#6B6B6B` | Captions, metadata, footer, mono labels. Quiet by design. |
| `--rule` | `#E4E1DC` | Hairline rules and dividers. |
| `--paper` | `#FAF8F4` | Tinted callout surface and artifact frames. |
| `--signature` | `#CC0006` | Signature red — used as event, not ornament. |

**Tokens — dark mode:** `--canvas #121212` · `--ink #FFFFFF` · `--body #E8E6E1` (warm off-white, avoids cold cast) · `--tertiary #9A958C` · `--rule #2A2A2A` · `--paper #1A1A1A` · `--signature #E5263A` (retuned hotter for the dark canvas).

**Five sanctioned uses of *event* red** (full-volume, persistent — distinct from the systemic interaction-red hover above):
1. Homepage — the closing "Currently considering" full-bleed block (the single most important recruiter signal).
2. Work index — a red marker on the hero case **only** (now Speakeazy, per the resolved hero decision); other cases stay neutral.
3. Case studies — one red full-bleed band per case, carrying the most consequential outcome, white type on red.
4. Contact — may be a full-bleed red treatment (the second red page).
5. Earned editorial — one specific essay per year, when warranted.

> Note: the colophon page currently *displays* Ink `#1A1A1A` / Tertiary `#6B6660`, which do not match the implemented tokens above. Treat `global.css` as truth; the colophon should be corrected.

---

## Typography Direction

**Two families only. A third is not permitted without explicit re-discussion.**

| Family | Source | Role |
|---|---|---|
| **Fraunces** (variable serif) | Undercase Type / Google Fonts, Apache 2.0 | All editorial type — display, body, italic, captions. Axes used: `opsz`, `wght`, `SOFT`, `WONK`. |
| **JetBrains Mono** | JetBrains / Google Fonts, Apache 2.0 | Meta-text only — eyebrows, labels, stamps, code. The quiet "administrative" second voice. |

Both **self-hosted in production** (subset to used glyphs), not loaded from a CDN. Fraunces won a formal bake-off (vs. Source Serif 4, Newsreader, Cormorant Garamond) on personality and on the `WONK` axis.

**The WONK rule** — eccentric italic letterforms are a *discoverable feature, not a default.* Use WONK at full (`WONK 1`) on: display italics (H1/H2), italic captions and pull-quotes, and display-size numerals (case-study numbers). Do **not** use WONK on body-italic emphasis inside paragraphs — too mannered for the dry voice.

**Type scale (abridged):** Display H1 `clamp(56px, 9vw, 124px)` weight 300, `opsz 144 / SOFT 30`; H1 italic `SOFT 100 / WONK 1`. Section H2 `clamp(36px, 5vw, 56px)`. Body Fraunces 17–18px / line 1.65 / `opsz 14`. Eyebrow JetBrains Mono 10–11px, letter-spacing 0.18–0.22em, uppercase.

---

## Imagery Style

**Almost none — and that's the point.** Typography carries the work.

- **No stock photography, no illustration, no thumbnails, no client-logo wall.** Case studies are carried by type, not images.
- **The only image on the site is the About-page portrait** (to be commissioned; placeholder treatment in the interim).
- **Rules as the graphic vocabulary:** 1px `--rule` hairlines; 2px `--ink` for major breaks; 3px `--signature` reserved for left borders on pull-quotes.
- Sanctioned motion only: the five discovered moments, the 200ms mode-toggle cross-fade, 150ms link-color hovers (no transform/scale), and the scroll-tied reading-time bar.

---

## Accessibility Floor (non-negotiable)

- Body text ≥ **7:1** (WCAG AAA) on canvas; display ≥ 4.5:1. Red never used for body copy (fails AA small).
- Visible high-contrast focus ring (2px `--signature`).
- Semantic heading order (h1 → h2 → h3), no skipped levels.
- 44×44px touch targets; full `prefers-reduced-motion` fallbacks; dark mode designed to equal quality.

---

*Visual Direction v1.0 · 2026-06-08 · uxward.com · ❦*
