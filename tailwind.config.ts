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
      "2xl": "1536px",
    },
    extend: {
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
