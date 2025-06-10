// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from "remark-gfm";

export default defineConfig({
  markdown: {
    syntaxHighlight: false
  },
  integrations: [
    mdx({
      remarkPlugins: [
        // Disable automatic linkification
        [remarkGfm, { autolinkLiterals: false }]
      ]
    }),
  ],
});