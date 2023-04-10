import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {name: 'auth'}
    },
    {
      path: '/auth',
      children: [
        {
          path: '',
          name:'auth',
          redirect: {name: 'login'}
        },
        {
          path: 'register',
          name:'register',
          component: RegisterView
        },
        {
          path:'login',
          name:'login',
          component: LoginView
        }
      ]
    },
  ]
})

export default router
