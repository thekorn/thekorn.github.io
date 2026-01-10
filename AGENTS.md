# AGENTS.md

This document provides guidelines for agentic coding agents operating in this repository.

## Project Overview

Personal website built with Astro and Tailwind CSS v4. Statically generated with content collections for blog posts. Components are Astro components, not SolidJS.

## Build/Lint/Test Commands

| Command             | Action                                                   |
| ------------------- | -------------------------------------------------------- |
| `pnpm install`      | Install dependencies                                     |
| `pnpm dev`          | Start dev server at localhost:4321                       |
| `pnpm build`        | Build production site to `./dist/`                       |
| `pnpm preview`      | Preview build locally                                    |
| `pnpm format`       | Run oxfmt (writes fixes)                                 |
| `pnpm format:check` | Run oxfmt in check mode                                  |
| `pnpm typecheck`    | Run TypeScript type checking                             |
| `pnpm lint`         | Run oxlint on all files                                  |
| `pnpm lint:fix`     | Run oxlint with auto-fix                                 |
| `pnpm stylelint`    | Run Stylelint on CSS files                               |
| `pnpm test`         | Run all checks: format:check, typecheck, lint, stylelint |

To run a single check, use one of: `pnpm format:check`, `pnpm typecheck`, `pnpm lint`, or `pnpm stylelint`.

## Code Style Guidelines

### General Principles

- Prefer simplicity and readability over clever abstractions
- Avoid unnecessary comments; let code speak for itself
- Keep functions small and focused on single responsibilities

### TypeScript

- Use TypeScript for all files (.ts, .astro)
- Extend from `astro/tsconfigs/strict` for type safety
- Avoid `any` type; use `unknown` or explicit types instead
- Prefix unused function parameters with `_` (e.g., `(_props: FooProps)`)
- Use path aliases: `@components/*`, `@utils/*`, `@layouts/*`, `@styles/*`
- Add `// @ts-check` at the top of config files (.mjs/.cjs)

### Imports

- Group imports in this order: built-in → external → aliases → relative
- For Astro components, use `ComponentProps` from `astro/types` for prop types

```typescript
import type { ComponentProps } from "astro/types";
```

### Formatting (oxfmt/Prettier)

- Single quotes for JS/TS (`'value'`, not `"value"`)
- Semi-colons: yes
- Tab width: 2 spaces
- Print width: 100
- Arrow parens: always `() => x`
- Trailing commas: es5 compatible
- No tabs, use spaces

### Linting (oxlint)

- `@typescript-eslint/no-explicit-any`: warn
- `@typescript-eslint/no-unused-vars`: error (ignore pattern: `^_`)

### Naming Conventions

- Components: PascalCase (e.g., `BlogPost.astro`)
- Files: kebab-case (e.g., `my-helper.ts`)
- Variables/functions: camelCase (e.g., `getPosts()`)
- Constants: SCREAMING_SNAKE_CASE (e.g., `MAX_ITEMS`)
- CSS classes: kebab-case for utility classes, BEM-style for custom classes

### Astro Components

- Use `.astro` extension for all components
- Define props interface and use `Astro.props` to access them
- Use `ComponentProps<'a'>` for anchor element props
- Use `@lucide/astro` for icons (not lucide-solid)

```astro
---
import type { ComponentProps } from 'astro/types';

interface Props extends ComponentProps<'a'> {
  icon: 'Github' | 'Linkedin' | 'Mail';
  hoverColor?: 'blue' | 'purple';
}

const { icon, hoverColor = 'blue', ...rest } = Astro.props;
---

<a class:list={[...]} {...rest}>
  <slot />
</a>
```

### Styling

- Use Tailwind CSS v4 with CSS variables for theming
- Pattern: `bg-(--color-bg-dim)`, `text-(--color-fg)`
- Keep styles co-located with components when possible
- Stylelint configured with `stylelint-config-standard` and `stylelint-config-tailwindcss`

### Content Collections

- Define schemas with Zod in `src/content/config.ts`
- Use `z.coerce.date()` for date fields
- Optional fields: `.optional()`; defaults: `.default(false)`
- Use `.mdx` extension for MDX content with components

```typescript
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});
```

### Astro Pages

- Use dynamic routes: `src/pages/blog/[...slug].astro`
- Use `getStaticPaths` for SSG with content collections
- Access collection data via `getCollection('blog')`
- Markdown code blocks use Shiki with `gruvbox-dark-hard` theme

### Error Handling

- Let TypeScript types guide error prevention
- Use early returns to avoid deeply nested conditionals
- For optional values, use optional chaining and nullish coalescing

### File Organization

```
src/
├── components/     # Astro components
├── content/        # Markdown/MDX content
├── layouts/        # Shared Astro layouts
├── pages/          # Route pages (Astro)
├── styles/         # Global CSS
└── utils/          # Helper functions
```

### What to Avoid

- Do not add comments unless explaining non-obvious business logic
- Do not create unnecessary abstractions or utility functions
- Do not use JavaScript `.js` files; use TypeScript `.ts`
- Do not use React or SolidJS; this project uses Astro components
- Do not use lucide-solid; use @lucide/astro instead
- Do not commit secrets or credentials
