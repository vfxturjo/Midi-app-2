import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],
  // preprocess: [
  //   vitePreprocess(),
  //   preprocess({
  //     postcss: {
  //       plugins: [tailwindcss(), autoprefixer()],
  //     },
  //   }),
  // ],
};
