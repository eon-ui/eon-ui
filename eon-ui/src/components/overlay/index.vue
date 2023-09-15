<script setup lang="ts">
defineOptions({
  name: 'EonOverlay'
})

const props = defineProps({
  modelValue: Boolean,
  showMask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  appendToBody: Boolean,
  transition: {
    type: String,
    default: 'eon-fade'
  }
})
</script>

<template>
  <teleport to="body" :disabled="props.appendToBody">
    <transition name="">
      <div class="eon-overlay">
        <div class="eon-overlay-mask" v-if="props.showMask"></div>

        <slot />
      </div>
    </transition>
  </teleport>
</template>
