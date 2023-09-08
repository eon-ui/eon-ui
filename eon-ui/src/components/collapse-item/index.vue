<script setup lang="ts">
import CollapseTransition from '../collapse-transition'
import Icon from '../icon/index.vue'

import { computed, inject, useSlots } from 'vue'

defineOptions({
  name: 'EonCollapseItem'
})

const props = defineProps({
  header: String,
  index: [String, Number]
})

const arrowPosition = inject('arrow')
const collapseValue: any = inject('value')
const accordion = inject('accordion')
const update: any = inject('update')

const generateIndex: any = inject('generateIndex')

const index = props.index ?? generateIndex()

const isActive = computed(() => {
  if (accordion) {
    return index === collapseValue.value
  } else {
    return collapseValue.value?.includes(index)
  }
})
const handleChange = () => {
  update(index)
}
</script>

<template>
  <div :class="['eon-collapse-item', { 'eon-collapse-item-active': isActive }]">
    <div class="eon-collapse-item__header" @click="handleChange">
      <Icon
        name="arrow-right"
        :class="['eon-icon-right', `eon-collapse-arrow-${arrowPosition}`]"
      ></Icon>
      <div>
        <slot name="header">{{ props.header }}</slot>
      </div>
    </div>
    <CollapseTransition>
      <div v-show="isActive" class="eon-collapse-item__wrap">
        <div class="eon-collapse-item__wrap-box"><slot /></div>
      </div>
    </CollapseTransition>
  </div>
</template>
