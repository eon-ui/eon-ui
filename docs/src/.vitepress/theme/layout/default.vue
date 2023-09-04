<script setup>
import { computed } from "vue";
import sunFrame from "../components/frame.vue";
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import { useRoute } from "vitepress";
const { path } = useRoute();
const sunFrameSrc = computed(() => {
  return path.replace("/components/", "/frames/");
});
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      {{ sunFrameSrc }}
      <sunFrame :src="sunFrameSrc" :key="sunFrameSrc" />
    </template>
  </Layout>
</template>
