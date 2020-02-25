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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
