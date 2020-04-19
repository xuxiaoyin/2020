import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 通用页面, 这里的配置是不需要权限的
export const constRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login"),
    hidden: true // 导航菜单忽略该项
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/Home.vue"),
        name: "home",
        meta: {
          title: "Home", // 导航菜单项的标题
          icon: "qq"  // 导航菜单项图标
        }
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
