<script setup lang="ts">
import { provide, ref, toRef } from 'vue'
import useIndex from '@/hooks/useIndex'

defineOptions({
  name: 'EonCollapse'
})

const props = defineProps({
  modelValue: [String, Number, Array],
  accordion: Boolean,
  arrow: {
    type: String,
    validator(value: string) {
      return ['right', 'none'].includes(value)
    }
  }
})
const emit = defineEmits(['update:modelValue'])

// eslint-disable-next-line vue/no-setup-props-destructure
const value: any = ref(props.modelValue)
if (!props.modelValue) {
  value.value = props.accordion ? null : []
}

provide('arrow', toRef(props, 'arrow'))
provide('accordion', toRef(props, 'accordion'))
provide('value', value)
/**对 没有设置 props.index 的collapseItem 生成唯一index */
const { generateIndex } = useIndex()

provide('generateIndex', generateIndex)

provide('update', (index: any) => {
  if (props.accordion) {
    value.value = value.value === index ? null : index
    emit('update:modelValue', value.value)
  } else {
    const has = (value.value as Array<any>).includes(index)
    if (has) {
      value.value = (value.value as Array<any>).filter((c) => c !== index)
    } else {
      value.value = [...(value.value as Array<any>), index]
    }
    emit('update:modelValue', value.value)
  }
})
</script>

<template>
  <div class="ivy-collapse"><slot /></div>
</template>
