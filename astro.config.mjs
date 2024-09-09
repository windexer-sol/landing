import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  site: "https://lexingtonthemes.com/",
  integrations: [tailwind(), sitemap()],
  content: {
    collections: [
      {
        name: 'indexer',
        directory: 'src/content/indexer',
      },
    ],
  },
});