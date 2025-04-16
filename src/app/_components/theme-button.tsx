"use client";

import { useThemeContext } from "@/_contexts/theme-provider";
import { LampDesk, LightbulbOff } from "lucide-react";
import { motion } from "framer-motion";
import "@/_styles/theme-button.css";

export default function ThemeButton() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="theme-button-container"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="theme-thumb"
        animate={{ x: isDark ? 26 : 0 }}
      >
        {isDark ? (
          <LampDesk className="icon" size={16} />
        ) : (
          <LightbulbOff className="icon" size={16} />
        )}
      </motion.div>
    </button>
  );
}
