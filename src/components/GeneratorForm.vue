<template>
  <form>
    <div v-for="item in formItems">
      <slot :name="item.name" :item="item">
        <div>
          <label :for="item.name">{{ item.label }}</label>
          <component
            class="ma-10"
            :is="getComponentByType(item.type)"
            v-model="formValue[item.name]"
            :item="item"
          ></component>
        </div>
      </slot>
    </div>

    <button class="ma-10" type="submit" @click.prevent="emits('submitForm')">Сохранить</button>
    <button class="ma-10" type="submit" @click.prevent="emits('clearForm')">Очистить</button>
  </form>
</template>

<script lang="ts" setup>
import type { IFormInputsType, IFormItemType } from '../types/formGenerateTypes'
import InputFormItem from './formItems/InputFormItem.vue'
import TextariaFormItem from './formItems/TextariaFormItem.vue'
import CheckboxFormItem from './formItems/CheckboxFormItem.vue'
import SelectFormItem from './formItems/SelectFormItem.vue'

defineProps<{
  formItems: IFormItemType
}>()
const formValue = defineModel<any>({ required: true })
const emits = defineEmits<{
  (target: 'submitForm'): void
  (target: 'clearForm'): void
}>()

const getComponentByType = (type: IFormInputsType) => {
  switch (type) {
    case 'input':
      return InputFormItem
    case 'textarea':
      return TextariaFormItem
    case 'checkbox':
      return CheckboxFormItem
    case 'select':
      return SelectFormItem

    default:
      return 'div'
  }
}
</script>
