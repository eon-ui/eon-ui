<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'EonIcon'
})

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  }
})

const classes = computed(() => {
  if (props.name) {
    return `eon-icon-${props.name}`
  }
  return ''
})

const styles = computed(() => {
  let target = {}
  if (props.size) {
    target = {
      fontSize: props.size
    }
  }
  if (props.color) {
    target = {
      color: props.color
    }
  }
  return target
})
</script>

<template>
  <i :class="classes" :style="styles"></i>
</template>
