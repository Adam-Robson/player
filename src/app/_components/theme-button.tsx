"use client";

import { useThemeContext } from "@/_contexts/theme-provider";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { motion } from "framer-motion";
import "@/_styles/theme-button.css";

export default function ThemeButton() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`theme-button ${isDark ? "bg-gray-800" : "bg-yellow-300"}`}
    >
      <Lightbulb className="text-yellow-600 z-10" size={20} />
      <LightbulbOff className="text-gray-300 z-10" size={20} />

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="thumb"
        animate={{ x: isDark ? 26 : 0 }}
      />
    </button>
  );
}
