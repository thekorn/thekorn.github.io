import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
  exclude: [],
  outdir: 'styled-system',
  theme: {
    extend: {
      tokens: {
        colors: {
          gruvbox: {
            bg0: { value: '#1d2021' },
            bg1: { value: '#282828' },
            bg2: { value: '#32302f' },
            bg3: { value: '#45403d' },
            fg0: { value: '#fbf1c7' },
            fg1: { value: '#ebdbb2' },
            fg2: { value: '#d5c4a1' },
            fg3: { value: '#a89984' },
            red: { value: '#fb4934' },
            green: { value: '#b8bb26' },
            yellow: { value: '#fabd2f' },
            blue: { value: '#83a598' },
            purple: { value: '#d3869b' },
            aqua: { value: '#8ec07c' },
            orange: { value: '#fe8019' },
            gray: { value: '#928374' },
          },
        },
        fonts: {
          mono: {
            value:
              "'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'SF Mono', 'Menlo', 'Monaco', 'Consolas', monospace",
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: { value: '{colors.gruvbox.bg0}' },
          bgDim: { value: '{colors.gruvbox.bg1}' },
          bgDimmer: { value: '{colors.gruvbox.bg2}' },
          fg: { value: '{colors.gruvbox.fg1}' },
          fgDim: { value: '{colors.gruvbox.fg3}' },
          fg0: { value: '{colors.gruvbox.fg0}' },
          fg1: { value: '{colors.gruvbox.fg1}' },
          fg2: { value: '{colors.gruvbox.fg2}' },
          accent: { value: '{colors.gruvbox.green}' },
          accentAlt: { value: '{colors.gruvbox.yellow}' },
          accentPurple: { value: '{colors.gruvbox.purple}' },
          accentRed: { value: '{colors.gruvbox.red}' },
          accentBlue: { value: '{colors.gruvbox.blue}' },
          border: { value: '{colors.gruvbox.bg3}' },
        },
      },
    },
  },
});
