<script setup>
const { path } = useRoute();
</script>

<template>
  <div class="md-content" v-if="path.startsWith('/components/')">
    <ContentDoc class="md-doc" :path="path.replace('/components/', '/cp/')" />

    <iframe
      class="md-iframe"
      :src="path.replace('/components/', '/frames/')"
      style="
        border: 1px solid #eee;
        width: 390px;
        height: 844px;
        border-radius: 4x;
      "
    ></iframe>
  </div>
  <p else>此组件只能用于 组件演示 相关界面</p>
</template>

<style lang="scss">
.md {
  &-content {
    display: flex;
    justify-content: space-between;
  }
  &-doc {
    flex: auto;
    padding: 12px 24px;
  }
  &-iframe {
    border: 1px solid #eee;
    width: 390px;
    height: 844px;
    border-radius: 4px;
    box-shadow: 0 0 10px #eee;
  }
}
</style>
