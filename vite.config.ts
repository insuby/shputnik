import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import nodePath from 'node:path';

const pathResolve = (path: string) => nodePath.resolve(__dirname, path);

export default defineConfig({
  server: {
    host: '0.0.0.0', // Добавьте эту строку
    port: 5173
  },
  plugins: [react()],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    alias: {
      icons: pathResolve('./src/icons'),
      'icons/*': pathResolve('./src/icons/*'),
    },
  },
});
