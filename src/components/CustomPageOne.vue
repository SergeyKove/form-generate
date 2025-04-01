<template>
  <div class="bg-grey">
    <GeneratorForm :formItems v-model="formValue" @submit-form="submitForm" @clear-form="clearForm">
    <template #input="slotProps"
      ><label :for="slotProps.item.name">Заполните поле</label>
      <input
        v-model="formValue[slotProps.item.name]"
        :id="slotProps.item.name"
        :type="slotProps.item.type"
        placeholder="Ваше имя"
        :name="slotProps.item.name"
    /></template>

    <template #textarea="slotProps"
      ><label :for="slotProps.item.name">Заполните поле</label>
      <textarea
        v-model="formValue[slotProps.item.name]"
        :id="slotProps.item.name"
        :type="slotProps.item.type"
        placeholder="Расскажите о себе"
        :name="slotProps.item.name"
      >
      </textarea>
    </template>

    <template #checkbox="slotProps">
      <label :for="slotProps.item.name">Отметьте, если есть 18</label>
      <input
        v-model="formValue[slotProps.item.name]"
        :id="slotProps.item.name"
        :type="slotProps.item.type"
        :placeholder="slotProps.item.placeholder"
        :name="slotProps.item.name"
      />
    </template>

    <template #select="slotProps">
      <label :for="slotProps.item.name">Любимый фрукт</label>
      <select
        v-model="formValue[slotProps.item.name]"
        :id="slotProps.item.name"
        :placeholder="slotProps.item.placeholder"
        :name="slotProps.item.name"
        :multiple="slotProps.item.multiple"
      >
        <option value="Яблоко">Яблоко</option>
        <option value="Банан">Банан</option>
        <option value="Груша">Груша</option>
      </select>
    </template>
  </GeneratorForm>
  </div>
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

<style scoped>
label {
  margin-right: 10px;
}

input {
  margin-bottom: 20px;
}

.bg-grey {
  background-color: grey;
}
</style>
