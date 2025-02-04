import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    proxy: {}
  },
  build: {
    outDir: "../../dist/root"
  },
  resolve: {
    alias: {
      "@test": path.resolve(__dirname, "../../dist/test"),
    }
  }
});