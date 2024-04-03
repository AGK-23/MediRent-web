import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-datepicker')) {
            return 'react-datepicker-chunk';
          } else if (id.includes('react-apexcharts')) {
            return 'react-apexcharts-chunk';
          }
          // You can define additional manual chunks based on your project's dependencies
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Set the chunk size warning limit to 1000 kB
  },
  server: {
    port: 4040,
    // https: true, // Enable HTTPS
  },
  preview: {
    port: 7575,
  },
});