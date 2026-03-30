```vue
<template>
  <el-button v-bind="$attrs" :loading @click="handleClick">
    <slot></slot>
  </el-button>
<template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const attrs = useAttrs()

const handleClick = async (e: MouseEvent) => {
  try {
    loading.value = true
    const onClick = attrs.onClick
    const result = typeof onClick === 'function' ? onClick(e) : undefined
    if (result instanceof Promise) {
      await result
    }
  } finally {
    loading.value = false
  }
}
</script>
```