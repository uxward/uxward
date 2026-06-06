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

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server with hot reload at localhost:4321 |
| `npm run build`   | Build the static site to `./dist/`           |
| `npm run preview` | Serve the built `dist/` locally              |

## Deploy

`npm run build`, then upload the contents of `dist/` to the webserver root at https://uxward.com.
