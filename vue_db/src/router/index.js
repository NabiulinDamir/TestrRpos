import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/MainIndex.vue'
import Button from '../views/button.vue'
import Typography from '../views/typography.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    }
  ]
})

export default router;