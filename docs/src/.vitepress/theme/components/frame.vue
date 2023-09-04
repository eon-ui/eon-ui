<script setup>
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <iframe :src="props.src" frameborder="0" class="sub-frame"></iframe>
</template>

<style scoped>
.sub-frame {
  width: 375px;
  height: 667px;
}
</style>
