import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use 'src/styles/_variables' as *;`
        }
      }
    }
  },
  integrations: [react()],
  server: {
    headers: {
    }
  }
});