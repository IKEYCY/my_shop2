import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/components/LoginPage'
import HomePage from '@/components/HomePage'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/', redirect: '/login' },
  { path: '/home', component: HomePage }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    return next('/login')
  }
  next() // 在所有条件下都需要调用next()函数
})

export default router
