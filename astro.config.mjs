import { defineConfig } from 'astro/config';

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
  output: "server",
  adapter: "server",
  integrations: [react()],
  server: {
    headers: {
      "x-frame-options": "DENY",
      "x-xss-protection": "1; mode=block",
      "x-content-type-options": "nosniff",
      "content-security-policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; manifest-src 'self'; worker-src 'self'; upgrade-insecure-requests; block-all-mixed-content; disown-opener; sandbox allow-forms allow-same-origin allow-scripts; reflected-xss block; referrer no-referrer; report-to csp-endpoint;"
    }
  }
});