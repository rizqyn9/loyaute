import type { Config } from "tailwindcss"
import aspectRatio from "@tailwindcss/aspect-ratio"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      design: "1440px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007DFC",
          1: "#007DFC",
        },
        disable: "#9A9A9A",
        stroke: "#D9D9D9",
        accent: "#0074E0",
        error: "rgb(220, 38, 38)",
        background: "#F9F9F9",
        neutral: {
          200: "#9A9A9A",
          500: "#232323",
        },
      },
      fontFamily: {
        "jakarta-sans": ["Plus Jakarta Sans"],
      },
      width: {
        design: "1440px",
        content: "1000px",
      },
      maxWidth: {
        design: "1440px",
        content: "1000px",
      },
    },
  },
  plugins: [aspectRatio],
} satisfies Config
