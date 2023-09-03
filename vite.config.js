import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: "/project-Dream4IT",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/styles/_shared.scss";
            `,
      },
    },
  },
});
