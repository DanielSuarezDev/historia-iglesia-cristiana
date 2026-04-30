export type ThemeKey = 'dark' | 'sepia' | 'modern';

export interface Theme {
  bg: string;
  bgSec: string;
  bgCard: string;
  text: string;
  textMuted: string;
  accent: string;
  border: string;
  navBg: string;
}

export const THEMES: Record<ThemeKey, Theme> = {
  dark: {
    bg: '#0c0805',
    bgSec: '#100d09',
    bgCard: '#1a1510',
    text: '#f0e6d3',
    textMuted: '#9c8a74',
    accent: '#c9a84c',
    border: '#2e2418',
    navBg: 'rgba(12,8,5,0.94)',
  },
  sepia: {
    bg: '#f5f0e8',
    bgSec: '#ede6d8',
    bgCard: '#e8e0d0',
    text: '#2c1810',
    textMuted: '#6b4c3b',
    accent: '#8b3a1e',
    border: '#c8b8a8',
    navBg: 'rgba(245,240,232,0.96)',
  },
  modern: {
    bg: '#f4f6fb',
    bgSec: '#eaeff8',
    bgCard: '#ffffff',
    text: '#0f1f3d',
    textMuted: '#5a6a85',
    accent: '#2952b3',
    border: '#d0d8ea',
    navBg: 'rgba(244,246,251,0.96)',
  },
};
