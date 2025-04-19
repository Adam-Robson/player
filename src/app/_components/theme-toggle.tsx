'use client';

import { useThemeProvider } from '@/_contexts/theme-provider';
import {Sun, Sunglasses} from '@phosphor-icons/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeProvider();

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="text-sm p-2 rounded absolute top-8 right-6 z-50 cursor-pointer"
    >
      {theme === 'light' ? <Sunglasses /> : <Sun />}
    </button>
  );
}
