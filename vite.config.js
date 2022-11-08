import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  envDir: './config',
  mode: process.env.MODE || 'development',
};

export default config;
