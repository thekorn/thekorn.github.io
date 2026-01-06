# AGENTS.md

This document provides guidelines for agentic coding agents operating in this repository.

## Project Overview

Personal website built with Astro, SolidJS, and Tailwind CSS v4. Statically generated with content collections for blog posts.

## Build/Lint/Test Commands

| Command          | Action                                            |
| ---------------- | ------------------------------------------------- |
| `pnpm install`   | Install dependencies                              |
| `pnpm dev`       | Start dev server at localhost:4321                |
| `pnpm build`     | Build production site to `./dist/`                |
| `pnpm preview`   | Preview build locally                             |
| `pnpm check`     | Run Prettier (writes fixes)                       |
| `pnpm typecheck` | Run TypeScript type checking                      |
| `pnpm lint`      | Run ESLint on all files                           |
| `pnpm stylelint` | Run Stylelint on CSS files                        |
| `pnpm test`      | Run all checks: check, typecheck, lint, stylelint |

## Code Style Guidelines

### General Principles

- Prefer simplicity and readability over clever abstractions
- Avoid unnecessary comments; let code speak for itself
- Keep functions small and focused on single responsibilities

### TypeScript

- Use TypeScript for all files (.ts, .tsx, .astro)
- Extend from `astro/tsconfigs/strict` for type safety
- Avoid `any` type; use `unknown` or explicit types instead
- Prefix unused function parameters with `_` (e.g., `(_props: FooProps)`)
- Use path aliases: `@components/*`, `@utils/*`, `@layouts/*`, `@styles/*`
- Add `// @ts-check` at the top of config files (.mjs/.cjs)

### Imports

- Group imports in this order: built-in → external → aliases → relative
- Use `splitProps` in SolidJS components to separate props

```typescript
import { splitProps, type Component, type JSX } from 'solid-js';
```

### Formatting (Prettier)

- Single quotes for JS/TS (`'value'`, not `"value"`)
- Semi-colons: yes
- Tab width: 2 spaces
- Print width: 100
- Arrow parens: always `() => x`
- Trailing commas: es5 compatible
- No tabs, use spaces

### ESLint Rules

- `@typescript-eslint/no-explicit-any`: warn
- `@typescript-eslint/no-unused-vars`: error (ignore pattern: `^_`)

### SolidJS Components

- Use `Component<Props>` type for component signatures
- Use `splitProps` to extract local props from `others`
- Use computed/memoized values for derived state (e.g., `hoverClass()`)
- Extend `JSX.AnchorHTMLAttributes` or similar for props interfaces
- Use lucide-solid for icons

```typescript
interface CTAButtonProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: Component<{ class?: string }>;
  hoverColor?: 'blue' | 'purple';
}

const CTAButton: Component<CTAButtonProps> = (props) => {
  const [local, others] = splitProps(props, ['icon', 'hoverColor', 'children']);
  // ...
};
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
├── components/     # SolidJS components
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
- Do not use React; this project uses SolidJS
- Do not commit secrets or credentials
