<template>
  <GeneratorForm
    v-model="formValue"
    :formItems="formItems"
    @submit-form="submitForm"
    @clear-form="clearForm"
  />
</template>

<script setup>
import { ref } from 'vue'
import GeneratorForm from './GeneratorForm.vue'

const props = defineProps(['formItems'])

const formValue = ref({})
function submitForm() {
  console.log(formValue.value)
}

function clearForm() {
  formValue.value = {}
}
</script>
