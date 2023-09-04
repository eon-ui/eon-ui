import DefaultTheme from "vitepress/theme";
import "./index.css";

import MyLayout from "./layout/default.vue";
import MobileLayout from "./layout/mobile.vue";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component("mobile", MobileLayout);
  },
};
