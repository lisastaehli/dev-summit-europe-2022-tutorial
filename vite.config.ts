import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      port: 80,
      clientPort: 443
    }
  }
});
