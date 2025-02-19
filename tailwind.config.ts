import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#E0E1DD",
          dark: "#1B263B",
        },
        foreground: {
          DEFAULT: "#415A77",
          dark: "#E0E1DD",
        },
        primary: {
          DEFAULT: "#415A77",
          foreground: "#E0E1DD",
          dark: "#778DA9",
          "dark-foreground": "#E0E1DD",
        },
        secondary: {
          DEFAULT: "#778DA9",
          foreground: "#E0E1DD",
          dark: "#415A77",
          "dark-foreground": "#E0E1DD",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#C6C7C4",
          foreground: "#415A77",
          dark: "#2C3E50",
          "dark-foreground": "#E0E1DD",
        },
        accent: {
          DEFAULT: "#778DA9",
          foreground: "#E0E1DD",
          dark: "#778DA9",
          "dark-foreground": "#E0E1DD",
        },
        popover: {
          DEFAULT: "#E0E1DD",
          foreground: "#415A77",
          dark: "#1B263B",
          "dark-foreground": "#E0E1DD",
        },
        card: {
          DEFAULT: "#E0E1DD",
          foreground: "#415A77",
          dark: "#1B263B",
          "dark-foreground": "#E0E1DD",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
