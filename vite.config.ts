import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  base: "/",
  resolve: {
    alias: {
      variables: path.resolve(__dirname, "src/assets/styles/variables.scss"),
      modules: path.resolve(__dirname, "src/modules"),
      components: path.resolve(__dirname, "src/components"),
      store: path.resolve(__dirname, "src/store"),
      infrastructure: path.resolve(__dirname, "src/infrastructure"),
      types: path.resolve(__dirname, "src/@Types"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
});
