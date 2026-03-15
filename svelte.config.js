import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      precompress: true,
      fallback: "404.html",
      strict: false,
    }),
    prerender: {
      handleHttpError: "warn",
    },
  },
}

export default config
