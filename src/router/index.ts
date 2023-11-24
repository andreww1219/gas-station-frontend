import { createRouter, createWebHistory } from 'vue-router'
import RefuelAreaRouter from "@/router/modules/refuel-area";
import UnloadAreaRouter from "@/router/modules/unload-area";
import ManageRouter from "@/router/modules/manage";
import SecureRouter from "@/router/modules/secure";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
routes: [
    {
      path: '/',
      redirect: '/auth/login',
      component: () => import('@/views/auth/Index.vue'),
      children:[]
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      component: () => import('@/views/auth/Index.vue'),
      children : [
        {
          path: 'login',
          component: () => import('@/views/auth/LoginPage.vue')
        },
        {
          path: 'register',
          component: () => import('@/views/auth/RegisterPage.vue')
        },
        {
          path: 'retrieve-password',
          component: () => import('@/views/auth/RetrievePassword.vue')
        }
      ]
    },
    {
      path: '/work-space',
      redirect: '/refuel-area',
      component: () => import('@/views/work-space/Index.vue'),
      children:[
        RefuelAreaRouter,
        UnloadAreaRouter,
        ManageRouter,
        SecureRouter
      ]
    },
  ]
})


export default router
