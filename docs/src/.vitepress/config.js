import { defineConfig } from "vitepress";

export default defineConfig({
  title: "EonUI",

  themeConfig: {
    outline: false,
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指引",
      },
      {
        text: "组件",
        link: "/components/",
      },
    ],
    sidebar: {
      "/guide/": [],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button 按钮",
            },
            {
              text: "Icon 图标",
              link: "/components/icon",
            },
          ],
        },
      ],
    },
  },
});
