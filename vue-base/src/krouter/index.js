import Vue from 'vue'
import Home from '../views/Home.vue'
import About from '@/views/About'
// 实现插件
// url变化监听
// 路由配置解析: {'/':Home}
// 实现全局组件：router-link  router-view

class VueRouter{
  constructor(options) {
    this.$options = options
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
    this.routerMap = {}
  }
  // url变化监听
  bindEvent() {
    window.addEventListener('load', this.onHashChange.bind(this))
    window.addEventListener('hashchange', this.onHashChange.bind(this))
  } 

  onHashChange() {
    this.app.current = window.location.hash.slice(1) || '/'
  }
  //路由配置解析
  creatView(options) {
    options.routes.forEach(item => {
      this.routerMap[item.path] = item.component
    })
  }
  // 实现全局组件
  creatComponent() {
    Vue.component('router-link', {
      props: {to: String},
      render(h) {
        return h('a', {attrs: {href: '#' + this.to}}, [this.$slots.default])
      },
    })

    Vue.component('router-view', {
      render: (h) => {
        const comp = this.routerMap[this.app.current]
        return h(comp)
      },
    })
  }

  init() {
    this.bindEvent()
    this.creatView(this.$options)
    this.creatComponent()
  }
}

VueRouter.install = function(Vue) {
  // 混入
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
        this.$options.router.init()
      }
    },
  })
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router