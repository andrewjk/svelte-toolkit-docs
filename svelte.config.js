import staticAdapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the static adapter so that we can deploy to GitHub Pages
    adapter: staticAdapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    // GitHub Pages stores the website at /svelte-toolkit-docs
    // We need to comment this out if running in dev where it doesn't apply
    paths: {
      base: '/svelte-toolkit-docs',
      assets: '/svelte-toolkit-docs',
    },
    vite: (() => ({
      resolve: {
        // Add .svelte to the default extensions to resolve svelte files in node_modules
        // Without this, the svelte-toolkit components wouldn't be resolved
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svelte']
      }
    }))
  },
  // Preprocess SASS styles in Svelte components
  preprocess: sveltePreprocess()
};

export default config;
