# Cyberpunk Easter Egg — "Night City" Mode

## Context

Brandon wants an extra-special hidden easter egg: typing any of several secret codes
flips the **entire** site into a retro-futuristic cyberpunk skin — dark, wet, neon
(fluorescent pinks/aquas/blues/reds), with a graffiti display font and a dramatic
"boot-up" transition. It's a delight feature for visitors who poke around.

The site is ideally built for this. Every page flows through one layout
(`src/layouts/Base.astro`), and **all** colors/fonts cascade from CSS custom
properties on `:root` in `src/styles/global.css`. There's already a working
light/dark theme system (toggle + `localStorage` + before-paint flash guard) to
model the egg on. So the egg is mostly: (1) a keyboard-sequence listener and
(2) a `.cyber` token-override + effects block. No component or page needs touching.

**Decisions already made with Brandon:**
- **Codes:** `iddqd`, Konami (`↑↑↓↓←→←→ b a`), `chonk`, `brawndo`, `whoah`.
- **Font:** Google **Rock Salt** — lazy-loaded only when the egg fires (normal site
  stays fast / unchanged). Applied to **logo + large display headings only**; body
  paragraphs switch to the already-loaded JetBrains Mono so long text stays legible.
- **Intensity:** Full drama — glitch/CRT flash + scanline sweep on activation, neon
  text-glow, animated scanlines + faint grid background, and a brief on-screen toast
  naming the code. All motion honors `prefers-reduced-motion`.
- **Persistence/exit (my defaults):** persists across page navigation via a separate
  `localStorage` key; exits by clicking the light/dark toggle, pressing `Esc`, or
  re-typing any code.

## Approach

Two files change. No new files; matches the site's existing inline-`<script>` +
CSS-custom-property conventions.

### 1. `src/styles/global.css` — append a clearly-commented "Cyberpunk easter egg" section

This is purely additive — **no existing tokens or rules are modified**. New block keys
everything off `:root.cyber` (a class on `<html>`, layered on top of `data-theme` so
exiting returns to the prior light/dark state).

- **Token overrides** under `:root.cyber` (drives ~80% of the site automatically):
  - `--canvas` → near-black blue-violet (e.g. `#07060f`); `--paper` → lifted panel `#0e0b1d`
  - `--ink` → near-white; `--body` → cool light `#c9d6ff`; `--tertiary` → muted violet
  - `--rule` → low-alpha magenta; `--signature` (accent/hover/"Brandon") → hot magenta `#ff2bd6`
  - New cyber-only helpers: `--neon-cyan #19f0ff`, `--neon-pink #ff2bd6`, `--neon-blue #2b6bff`, `--neon-red #ff2e4d`
- **Fonts:** add `--font-display: "Rock Salt", cursive;`. Apply it **only** to `.wm`
  (logo) and large display headings (`h1`, `h2`). In cyber mode set `body` to
  `var(--font-mono)` so paragraphs stay readable.
  - *Tradeoff note:* the original choice mentioned nav too, but Rock Salt at the nav's
    11px is genuinely unreadable — so nav/section-markers stay in mono (just recolored
    neon). Flagging this deviation; easy to change if Brandon prefers chaos over legibility.
- **Wet-neon effects:**
  - `body::before` (fixed, behind content): layered radial magenta/cyan glows + faint
    grid (linear-gradient lines) for the "wet street" backdrop.
  - `body::after` (fixed overlay, `pointer-events:none`): animated CRT scanlines
    (`repeating-linear-gradient` + slow `translateY` keyframe).
  - Neon `text-shadow` glow on `.wm`/`h1`/`h2`; link hover-glow; magenta `::selection`;
    subtle `box-shadow` glow on rules/borders; recolored toggle/hamburger.
- **Activation drama:** a `@keyframes cyber-boot` (quick RGB-split/flicker ~600ms) for
  the glitch flash, plus a scanline-sweep keyframe — triggered by a transient overlay
  element added by JS on activation.
- **Toast styles:** fixed bottom/corner neon chip (mono, glow border) for the code name.
- **Reduced motion:** the existing global `prefers-reduced-motion` rule
  (`global.css:142`) already neutralizes animations/transitions; add an explicit guard
  so scanlines/glitch/toast-slide go static there too.

### 2. `src/layouts/Base.astro` — wire up activation, persistence, and exit

- **Before-paint inline script (extend the existing one at `Base.astro:17-27`):**
  in addition to the saved light/dark theme, read a new `localStorage` key
  (`uxward-cyber`); if set, add the `cyber` class to `<html>` **and** inject the
  Rock Salt `<link>` here so persisted cyber pages load with no flash / no FOUT.
- **Main `<script>` (extend the IIFE at `Base.astro:91-141`):**
  - **Sequence listener:** keep a rolling buffer of the last N normalized keydown
    tokens (letters lowercased; arrows as `arrowup` etc.). Define each code as a token
    array; on every keydown, push + trim, then check if the buffer **ends with** any
    code. Ignore typing inside inputs/textareas and modifier combos.
  - **Activate (`enterCyber`)**: lazy-inject the Rock Salt stylesheet once; add `cyber`
    class; set `localStorage['uxward-cyber']='1'`; mount the glitch overlay (auto-remove
    after the keyframe) + the code-named toast (auto-dismiss ~2.5s). Toasts per code,
    e.g. `IDDQD // GOD MODE`, `↑↑↓↓ KONAMI`, `CHONK`,
    `BRAWNDO // IT'S GOT ELECTROLYTES`, `WHOAH`.
  - **Exit (`exitCyber`)**: remove `cyber` class; clear the `localStorage` key. Wire to:
    (a) re-typing any code while active (toggle), (b) `Esc` keydown, and
    (c) the existing theme-toggle click handler (`Base.astro:105-112`) — exit cyber
    first, then run the normal light/dark toggle.

### 3. `src/pages/ink.astro` — give the suminagashi basin a cyber palette

The `/ink` easter-egg page (a WebGL fluid sim) is a **special case**: it ignores the
global tokens and runs its own color system, hardcoded for light/dark in both its CSS
and JS. It won't react to the `.cyber` class unless we extend it — without this, the
whole site goes neon but the ink basin stays warm paper, which breaks the illusion.

Three matching touches, paralleling the existing dark-mode handling:
- **JS palette (`ink.astro:240-245`):** add a `cyber` entry to `PALETTES` — near-black
  neon-tinted water with `additive: true` (ink glows as light, like dark mode) and neon
  inks (cyan / magenta / electric-blue instead of ink/graphite/vermilion).
- **JS theme detection:** update `currentTheme()` (`:256-258`) to return `'cyber'` when
  `document.documentElement.classList.contains('cyber')`, and widen the `MutationObserver`
  (`:753-755`) to also watch the `class` attribute (currently only `data-theme`) so
  entering/exiting cyber recolors the basin and clears the dye field.
- **CSS chrome:** add a `:global(.cyber) .ink-…` block mirroring the existing
  `:global([data-theme="dark"])` rules (`:148-158`) — neon caption/controls/swatches and
  a dark neon `.ink-stage` background. Apply the Rock Salt display font to the
  `.ink-caption h1` to match the rest of the site.

## Critical files

- `src/styles/global.css` — append the `.cyber` section (token overrides + effects +
  toast + keyframes). Existing tokens/rules untouched. Color system reference: `:9-53`.
- `src/layouts/Base.astro` — before-paint script `:17-27`; main IIFE `:91-141`;
  toggle handler `:105-112`.
- `src/pages/ink.astro` — `PALETTES` `:240-245`; `currentTheme()` `:256-258`;
  `MutationObserver` `:753-755`; dark-mode CSS block to mirror `:148-158`.

## Verification

1. `npm run dev` (per project convention — not npx).
2. **Normal site unaffected:** confirm Rock Salt is **not** requested on a fresh load
   (DevTools Network) until a code is typed; light/dark toggle still works.
3. **Each code fires:** type `iddqd`, the Konami sequence, `chonk`, `brawndo`, `whoah`
   — each flips to cyberpunk with the glitch flash + correct toast.
4. **Full transformation:** dark wet-neon background, neon glow on logo/headings,
   Rock Salt on logo + h1/h2, body paragraphs legible (mono), animated scanlines/grid.
5. **Persistence:** navigate to another page (e.g. `/work` → a case study) — stays
   cyberpunk with no flash/FOUT.
6. **Exit:** clicking the light/dark toggle, pressing `Esc`, and re-typing a code each
   return to the normal theme; reload confirms the `localStorage` key cleared.
7. **Reduced motion:** with OS "reduce motion" on, activation is instant (no
   glitch/scanline animation), toast still shows.
8. **Ink page:** activate cyber, visit `/ink` — the basin recolors to neon (glowing
   inks on near-black), chrome goes neon, h1 uses Rock Salt; toggling cyber on/off while
   on the page recolors live and clears the dye field; exiting returns to paper.
9. Spot-check a couple pages (home, a case study, a writing post) for unreadable or
   broken spots under the skin.
