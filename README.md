# uxward.com

Personal site for Brandon E.B. Ward — UX writing and work portfolio. Fully static Astro site.

## Structure

```text
src/
├── layouts/          Shared page layouts
├── pages/
│   ├── index.astro   Home
│   ├── about.astro
│   ├── contact.astro
│   ├── colophon.astro
│   ├── work/         Portfolio case studies
│   └── writing/      Articles (migrated from the old blog)
└── styles/
public/               Static assets (images, favicon)
```

## Commands

| Command                  | Action                                       |
| :----------------------- | :------------------------------------------- |
| `npm install`            | Install dependencies                         |
| `npm run dev`            | Dev server with hot reload at localhost:4321 |
| `npm run build`          | Build for production (site root)             |
| `npm run build:preview`  | Build for the `/preview` subdirectory        |
| `npm run preview`        | Serve the built `dist/` locally              |

## Deploy

**Root (`https://uxward.com`):** `npm run build`, then upload `dist/` to the webserver root.

**Preview (`https://uxward.com/preview`):** `npm run build:preview`, then upload `dist/` to the `/preview` directory.
