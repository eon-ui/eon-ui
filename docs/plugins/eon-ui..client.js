import EonUI from "eon-ui";

export default defineNuxtPlugin({
  name: "my-plugin",
  parallel: true,
  async setup(nuxtApp) {
    // the next plugin will be executed immediately
    nuxtApp.use(EonUI);
  },
  env: {
    islands: false,
  },
});
