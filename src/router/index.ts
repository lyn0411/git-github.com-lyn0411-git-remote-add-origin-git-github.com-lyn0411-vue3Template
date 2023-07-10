import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout.vue'
declare module 'vue-router'{
  interface RouteMeta{
    title?:string,
    jumpPath?:string,
    searchId?:string
  }
}
const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Layout
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('@/views/home/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
