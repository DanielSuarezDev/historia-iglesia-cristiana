'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { THEMES, ThemeKey, Theme } from '@/lib/themes';

interface ThemeContextValue {
  themeKey: ThemeKey;
  setThemeKey: (key: ThemeKey) => void;
  t: Theme;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeKey: 'dark',
  setThemeKey: () => {},
  t: THEMES.dark,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeKey, setThemeKey] = useState<ThemeKey>('dark');
  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey, t: THEMES[themeKey] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
