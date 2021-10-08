import staticAdapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the static adapter so that we can deploy to GitHub Pages
    adapter: staticAdapter({
      pages: "docs",
      assets: "docs",
      fallback: null,
    }),
    // GitHub Pages stores the website at /svelte-toolkit-docs
    // We need to comment this out if running in dev where it doesn't apply
    paths: {
      base: "/svelte-toolkit-docs",
      assets: "/svelte-toolkit-docs",
    },
  },
};

export default config;
