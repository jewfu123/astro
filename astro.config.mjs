// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jewfu123.github.io',
	base: '/astro', // 例如 '/my-astro-site'
	integrations: [mdx(), sitemap()],
});
