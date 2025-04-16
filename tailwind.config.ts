import type { Config } from 'tailwindcss';

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '576px',
        md: '640px',
        lg: '768px',
        xl: '922px',
        xxl: '1024px',
        xxxl: '1280px'
      },
    },
  },
  plugins: [],
} satisfies Config;
