import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

dotenv.config();

export default defineConfig(({ mode }) => ({
  define: {
    __DEMO_BUILD__: JSON.stringify(mode === "demo"),
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
  plugins: [
    VitePWA({
      disable: mode === "demo",
      includeAssets: ["/favicon.ico", "/apple-touch-icon.png"],
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg}"],
      },
      manifest: {
        name: "뽀득뽀득",
        short_name: "뽀득뽀득",
        description: "여유롭게 즐기는 셀프세차, 뽀득뽀득",
        theme_color: "#FFFFFF",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    react(),
  ],
}));
