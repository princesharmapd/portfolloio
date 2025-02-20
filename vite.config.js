import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/portfolloio/',
  server: {
    proxy: {
      "/api/nse": {
        target: "https://www.nseindia.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/nse/, ""),
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
          Referer: "https://www.nseindia.com/",
          Accept: "application/json, text/plain, */*",
        },
      },
    },
  },
});
