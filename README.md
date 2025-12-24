# thekorn.dev

Statically generated personal website built with Astro, SolidJS, and Tailwind CSS.

## Tech Stack

- **Astro** - Static site generator
- **SolidJS** - Interactive components
- **Tailwind CSS v4** - Styling
- **Markdown** - Blog content via content collections

## Getting Started

```sh
pnpm install
pnpm dev
```

## Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `pnpm install`    | Installs dependencies                            |
| `pnpm dev`        | Starts local dev server at `localhost:4321`      |
| `pnpm build`      | Build your production site to `./dist/`          |
| `pnpm preview`    | Preview your build locally, before deploying     |
| `pnpm astro add`  | Add integrations (e.g., `pnpm astro add solid`)  |
| `pnpm astro --help` | Get help using the Astro CLI                   |

## Project Structure

```
/
├── src/
│   ├── components/     # SolidJS components
│   ├── content/        # Markdown content (blog posts)
│   ├── layouts/        # Shared layouts
│   └── pages/          # Route pages
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```
