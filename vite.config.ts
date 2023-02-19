import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        skipWaiting: true,
      },
      manifest: {
        name: "Vue PWA",
        short_name: "Vue PWA",
        description: "A self-aware offline-first statically hosted PWA",
        theme_color: "#ffffff",
        icons: [
          {
            src: "assets/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "assets/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "assets/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
