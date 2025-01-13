import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        //maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern:
              /\.(?:js|css|html|png|jpg|jpeg|svg|gif|woff|woff2|eot|ttf|otf)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
              },
            },
          },
        ],
      },
      manifest: {
        name: "Dmetal",
        short_name: "Dmetal",
        description: "App Dmetal",
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
  build: {
    chunkSizeWarningLimit: 5000, // Aumenta o limite de aviso para 2000 kB
    minify: "terser", // Garante minificação
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs para reduzir o tamanho
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
