'use client';

import { useThemeProvider } from '@/_contexts/theme-provider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeProvider();

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="text-sm p-2 rounded absolute top-8 right-6 z-50 cursor-pointer border border-blue-50"
    >
      {theme === 'light' ? 'view dark mode' : 'view light mode'}
    </button>
  );
}
