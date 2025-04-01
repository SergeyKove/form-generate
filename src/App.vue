<template>
  <div>
    <h1>Генератор форм</h1>
    <router-link class="link" v-for="page in pages" :to="{ name: page.name } ">{{ page.label }}</router-link>
    <router-view :formItems="formItems"></router-view>
  </div>
</template>

<script lang="ts" setup>
import type { IFormItemType } from './types/formGenerateTypes'

const pages = [
  { name: 'default', label: 'Дефолт' },
  { name: 'custom1', label: 'Кастом 1' },
  { name: 'custom2', label: 'Кастом 2' }
]

const formItems: IFormItemType[] = [
  {
    type: 'input',
    label: 'Введите',
    placeholder: 'Введите',
    name: 'input'
  },
  {
    type: 'textarea',
    label: 'Введите',
    placeholder: 'Введите',
    name: 'textarea'
  },
  {
    type: 'checkbox',
    label: 'Выберите',
    placeholder: 'Введите',
    name: 'checkbox'
  },
  {
    type: 'select',
    label: 'Выберите',
    placeholder: 'Введите',
    name: 'select',
    items: ['opt1', 'opt2', 'opt3']
  }
]
</script>
