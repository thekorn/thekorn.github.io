import { icons } from '@lucide/astro';

type IconName = keyof typeof icons;

export const isLucidIcon = (name?: string): name is IconName => !!name && name in icons;
