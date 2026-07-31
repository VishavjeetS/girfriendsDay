import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/girfriendsDay/",
  server: {
    allowedHosts: ["bd30-2404-7c80-75-57f0-fca1-3b6f-6976-4810.ngrok-free.app"],
  },
  plugins: [react(), tailwindcss()],
});
