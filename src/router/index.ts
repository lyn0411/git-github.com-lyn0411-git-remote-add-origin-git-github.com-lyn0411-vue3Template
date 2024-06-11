import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
declare module 'vue-router'{
	interface RouteMeta{
	  title?:string,
	  jumpPath?:string,
	  searchId?:string
	}
}

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: () => import('@/views/Layout.vue'),
    },
   
  ]
})

export default router
