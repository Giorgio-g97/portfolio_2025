import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: "#222222",
        secondary: "#7b7b7b", 
        tertiary: "#f8f8f8",
        white: "#ffffff",
        border: "#e5e5e5",
        input: "#f8f8f8",
        ring: "#222222",
        background: "#ffffff",
        foreground: "#222222",
        muted: {
          DEFAULT: "#f8f8f8",
          foreground: "#7b7b7b",
        },
        accent: {
          DEFAULT: "#f8f8f8",
          foreground: "#222222",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#222222",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#222222",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;