import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [sveltePreprocess()],
  compilerOptions: {
    runes: true,
  },
  kit: {
    adapter: adapter(),
    prerender: {
      // Add some orphaned pages
      entries: ['*', '/ja/contact/thanks', '/ja/offboarding', '/ja/whatsnew'],
    },
    csp: {
      mode: 'hash',
      directives: {
        'default-src': ['none'],
        'style-src': ['self', 'unsafe-inline'],
        'font-src': ['none'],
        'img-src': ['self', 'blob:', 'data:', 'https://res.cloudinary.com'],
        'script-src': ['self', 'wasm-unsafe-eval'],
        'connect-src': ['self', 'https://sodium.webdino.org:8443', 'https://sodium.netlify.app'],
        'frame-src': [
          'https://charts.mongodb.com',
          'https://docs.google.com',
          'https://accounts.google.com/',
        ],
        'form-action': ['self'],
        'frame-ancestors': ['none'],
        'base-uri': ['none'],
      },
    },
  },
};

export default config;
