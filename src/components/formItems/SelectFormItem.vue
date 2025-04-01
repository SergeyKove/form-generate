<template>
  <select
    v-model="modelValue"
    :placeholder="item.placeholder"
    :name="item.name"
    :multiple="item.multiple"
  >
    <option v-for="opt in item.items" :value="opt">{{ opt }}</option>
  </select>
</template>

<script setup lang="ts">
import { type IFormItemType } from '../../types/formGenerateTypes'

defineProps<{
  item: IFormItemType
}>()
const modelValue = defineModel({ required: true })
</script>

<style scoped></style>
