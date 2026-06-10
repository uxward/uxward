# Tech Audit — uxward.com
2026-06-09 · Living document — update when architecture changes

## Stack
- **Astro v6** (`astro.config.mjs`), **static output** — no SSR/serverless adapter. `site: https://uxward.com`.
- **Node ≥22**, ESM (`"type": "module"`).
- **TypeScript** config present (`tsconfig.json`); pages authored as `.astro` with scoped inline `<style>` blocks and small vanilla-JS islands.
- `@excalidraw/excalidraw`, `react`, `react-dom` are dependencies but **not used by the site itself** (Excalidraw is used for WDS wireframes, not shipped pages).
- **No test runner / test files / `test` script.** Verification is browser-only (confirmed acceptable, 2026-06-09).

## Architecture
- **File-based routing**, ~33 pages:
  - Top level: `index`, `about`, `colophon`, `contact`, `404`
  - `work/`: `index` + 5 case pages (`speakeazy`, `precocity`, `autoco`, `porte`, `insurco`)
  - `writing/`: `index` + 23 individual essay pages
- **Single layout** — `src/layouts/Base.astro`: header (wordmark + nav + theme toggle + hamburger), full-screen mobile nav overlay, footer (nav + external links + colophon line), no-flash theme script, theme-toggle + menu JS.
- **Design system in one file** — `src/styles/global.css` (367 lines), the authoritative source of truth:
  - Color tokens, light + dark (`--canvas/--ink/--body/--tertiary/--rule/--paper/--signature`), dark via `:root[data-theme="dark"]` and a `prefers-color-scheme` fallback.
  - Spacing scale `--space-1..11` (4→128px), widths, container/gutter tokens (`--container 1180px`, `--gutter-mark 100px`), font stacks (`--font-serif` Fraunces, `--font-mono` JetBrains Mono), transitions.
  - Layout primitives: `.container`, `.grid` (100px marker gutter + 1fr), `.marker`. Shared header/footer/nav styles.
- **Per-page styling** lives in local `<style>` blocks inside each `.astro` file. The editorial `§ NN` marker pattern recurs across pages.
- **Theming:** `data-theme` attribute + `localStorage` key `uxward-theme`; inline head script applies saved theme before first paint.

## Data Models
- **`src/data/slate.js`** — the only data file and single source of truth for the case-study slate. Array of 5 entries; order drives index rows, case numbering, prev/next wiring, and "all N" counts everywhere. `slate[0]` is the hero. Fields: `slug, client, title, deck, eyebrow?, pullout?, stamps[]` (`title`/`pullout` may contain `<em>` rendered via `set:html`).
- **No other data source.** The 23 essays are hand-authored `.astro` files — there is **no essay content collection or data array**. Counts referencing essays (writing header, work pivot, home "recent writing") are therefore hardcoded literals today.
  - **Decision (2026-06-09):** WO-001 B/F will introduce a small essays data file (option a) so essay counts and the home "recent writing" cards derive from one source and can't drift.

## Integrations
- **None server-side** (static site).
- **Google Fonts CDN** — Fraunces + JetBrains Mono imported via `@import` in `global.css` (`inferred from CSS`).
- External links: LinkedIn, GitHub, `mailto:brandon@uxward.com` (header/footer/about/contact).
- Images: 84 files under `public/images/writing/` (essay imagery only). No case-study images and no portrait — case/about/contact pages use placeholder frames.

## Open Questions
- **Divergences from `A-Product-Brief/visual-direction.md`** — descriptive, NOT in any current WO; owner deferred ("fix later", 2026-06-09):
  1. Fonts load from **Google Fonts CDN**, but the visual direction specifies self-hosted/subset fonts.
  2. Footer colophon reads *"Built with Astro on Cloudflare"*, but **no Cloudflare adapter** is configured — the repo builds as a plain static site. Deployment target unverified from the codebase.
- Unused `@excalidraw/excalidraw`/React deps could be pruned from `package.json` if confirmed unneeded by the site (not blocking).
