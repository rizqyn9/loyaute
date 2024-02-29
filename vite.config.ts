import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "node:path"
import Unfonts from "unplugin-fonts/vite"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: false,
    port: 3005,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src", "components"),
      "@mocks": resolve(__dirname, "mocks"),
    },
  },
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: "Plus Jakarta Sans",
            styles: "ital,wght@0,200..800;1,200..800",
            defer: false,
          },
        ],
      },
    }),
  ],
})
