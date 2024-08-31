import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import withReactRouter from "vite-plugin-next-react-router"; // 수정된 부분

export default defineConfig({
  base: "",
  plugins: [
    react(),
    withReactRouter({
      pageDir: "src/pages",
      extensions: ["js", "jsx", "ts", "tsx"],
      layout: "_layout",
    }),
  ],
});
