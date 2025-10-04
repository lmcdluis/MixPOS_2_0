import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["antd", "@ant-design/icons"], // Fuerza la optimización de AntD
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 🎨 Personalización del tema
          "primary-color": "#05434c", // verde estilo Ant Design Pro
          "border-radius-base": "8px",
          "font-size-base": "16px",
        },
      },
    },
  },
});
