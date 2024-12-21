import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true, // Toma controle imediatamente após a instalação
        skipWaiting: true, // Substitui o Service Worker antigo
      },
      manifest: {
        name: "Dmetal",
        short_name: "Dmetal",
        start_url: "/",
        scope: "/",
        display: "standalone",
        theme_color: "#f5f5f5",
        background_color: "#ffffff",
        lang: "pt-br",
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
  ],
  base: "/",
});
