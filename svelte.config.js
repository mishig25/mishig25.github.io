import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import rehypeExternalLinks from 'rehype-external-links'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),

        paths: {
            base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : ""
        }
    },

    preprocess: [mdsvex({
        extensions: [".svelte"], 
        rehypePlugins: [
            [
              rehypeExternalLinks,
              { target: '_blank', rel: ['noopener', 'noreferrer'] }
            ]
          ]
    })],
};

export default config;