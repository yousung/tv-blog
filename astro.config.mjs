import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tv.lovizu.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/search/') && !page.includes('/api/')
    })
  ],
  markdown: {
    syntaxHighlight: 'prism',
    shikiConfig: { theme: 'github-light' }
  }
});
