// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gemmasanz.com',
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
