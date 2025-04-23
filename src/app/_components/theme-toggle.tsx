'use client';

import { useThemeProvider } from '@/_contexts/theme-provider';
import {Sun, Sunglasses} from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeProvider();
  const isDark = theme === 'dark';

  return (

    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`
        absolute top-8 right-6
        rounded focus:outline-none
        focus:ring-2 focus:ring-offset-2
        text-sm p-2 z-50 cursor-pointer
      `}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? <Sun /> : <Sunglasses />}
      </motion.div>
    </button>
  );
};

