import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { isAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogIn.vue'),
    meta: { isAuth: false }
  },
  {
    path: '/',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isAuth)) {
    if (store.getters.isAuth) {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.name === 'login' && store.getters.isAuth) {
      next('/home')
    }
    next()
  }
})
export default router
