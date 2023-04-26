import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(/* options */)],
  // https://github.com/vuejs/composition-api/pull/837
  resolve: {
    alias: [
      {
        find: /^@vue\/composition-api$/,
        replacement: '@vue/composition-api/dist/vue-composition-api.mjs',
      },
    ],
  },
});
