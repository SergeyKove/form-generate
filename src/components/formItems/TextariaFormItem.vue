<template>
  <input v-model="modelValue" type="textarea" :placeholder="item.placeholder" :name="item.name" />
</template>

<script setup lang="ts">
import { type IFormItemType } from '../../types/formGenerateTypes'

defineProps<{
  item: IFormItemType
}>()
const modelValue = defineModel({ required: true })
</script>

<style scoped></style>
