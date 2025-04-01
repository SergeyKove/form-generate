import { createRouter, createWebHistory } from 'vue-router'
import DefaultPage from '../components/DefaultPage.vue'
import CustomPageOne from '../components/CustomPageOne.vue'
import CustomPageTwo from '../components/CustomPageTwo.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultPage,
    },
    {
      path: '/custom1',
      name: 'custom1',
      component: CustomPageOne,
    },
    {
      path: '/custom2',
      name: 'custom2',
      component: CustomPageTwo,
    },
    
  ],
})

export default router