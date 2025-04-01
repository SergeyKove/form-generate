<template>
  <GeneratorForm :formItems v-model="formValue" @submit-form="submitForm" @clear-form="clearForm">
    <template #input="slotProps"
      ><label :for="slotProps.item.name">Enter text</label>
      <input
        v-model="formValue[slotProps.item.name]"
        :id="slotProps.item.name"
        :type="slotProps.item.type"
        placeholder="You name"
        :name="slotProps.item.name"
    /></template>

    <template #textarea="slotProps"
      ><label :for="slotProps.item.name">Enter Textarea</label>
      <textarea
        v-model="formValue[slotProps.item.name]"
        :id="slotProps.item.name"
        :type="slotProps.item.type"
        placeholder="You last name"
        :name="slotProps.item.name"
      >
      </textarea>
    </template>

    <template #checkbox="slotProps">
      <label :for="slotProps.item.name">checkbox</label>
      <input
        v-model="formValue[slotProps.item.name]"
        :id="slotProps.item.name"
        :type="slotProps.item.type"
        :placeholder="slotProps.item.placeholder"
        :name="slotProps.item.name"
      />
    </template>

    <template #select="slotProps">
      <label :for="slotProps.item.name">Select</label>
      <select
        v-model="formValue[slotProps.item.name]"
        :id="slotProps.item.name"
        :placeholder="slotProps.item.placeholder"
        :name="slotProps.item.name"
        :multiple="slotProps.item.multiple"
      >
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
      </select>
    </template>
  </GeneratorForm>
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
