import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Omazon/",
  resolve: {
    alias: {
      variables: path.resolve(__dirname, "src/assets/styles/variables.scss"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
