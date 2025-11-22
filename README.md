# thekorn.github.io

This is the source code for my personal website, built with [Zine](https://github.com/kristoff-it/zine).

## Build

To build the static site for release, run:

```bash
nix develop --command zine release -f
```

## Development

To start a local development server with hot reloading, run:

```bash
nix develop --command zine
```

The site will be available at [http://localhost:1990/](http://localhost:1990/).
