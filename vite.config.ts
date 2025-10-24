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
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {
            // Загружаем конфигурацию из файла
            configFile: './react-compiler.config.js',
          }]
        ]
      }
    })
  ],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    alias: {
      app: pathResolve('./src/app'),
      'app/*': pathResolve('./src/app/*'),
      pages: pathResolve('./src/pages'),
      'pages/*': pathResolve('./src/pages/*'),
      widgets: pathResolve('./src/widgets'),
      'widgets/*': pathResolve('./src/widgets/*'),
      features: pathResolve('./src/features'),
      'features/*': pathResolve('./src/features/*'),
      entities: pathResolve('./src/entities'),
      'entities/*': pathResolve('./src/entities/*'),
      shared: pathResolve('./src/shared'),
      'shared/*': pathResolve('./src/shared/*'),
      icons: pathResolve('./src/icons'),
      'icons/*': pathResolve('./src/icons/*'),
    },
  },
});
