// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  /** All pages are rendered on the server on every request */
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    /** Listen on 0.0.0.0, not localhost: otherwise the app is unreachable from outside the container */
    host: true
  }
});
