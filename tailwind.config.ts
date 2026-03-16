// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#14342B",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0F8B8D",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#EC9A29",
          foreground: "#14342B",
        },
        destructive: {
          DEFAULT: "#A8201A",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#DAD2D8",
          foreground: "#14342B",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#14342B",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#14342B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
