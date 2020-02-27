import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About')
  },
  {
    path: '/passValue',
    name: 'PassValue',
    component: () => import('@/views/PassValue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form')
  },
  {
    path: '/slotTemplate',
    name: 'SlotTemplate',
    component: () => import('@/views/SlotTemplate')
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import('@/views/Tree')
  },
  {
    path: '/kNotice',
    name: 'KNotice',
    component: () => import('@/views/KNotice')
  },
  {
    path: '/kVuex',
    name: 'KVuex',
    component: () => import('@/views/KVuex')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// // ////////////////////////////////////////动态路由
// 映射关系
// const mapComp = {
//   Home: () => import('../views/Home.vue'),
//   About: () => import('@/views/About')
// }

// let route = []
// const routesconfigs = [
//   {
//     path: '/',
//     name: 'home',
//     component: 'Home'
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: 'About'
//   }
// ].map(item => {
//   route.push(mapComponets(item))
// })
// router.addRoutes(route) 

// // 递归替换
// function mapComponets(route) {
//   route.component = mapComp[route.component]
//   if (route.children) {
//     route.children = route.children.map(child => {
//       mapComponets(child)
//     })
//   }
//   return route
// }
// console.log(routesconfigs)
// console.log(routes)
// //////////////////////////////////////////////////////动态路由
export default router
