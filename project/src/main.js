import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./icons"
import './plugins/element.js'
// 路由守卫
import './permission'
// 全局注册按钮权限
import vPermission from './directive/permission'
Vue.directive("permission", vPermission)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
