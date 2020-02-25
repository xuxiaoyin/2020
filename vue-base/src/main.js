import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { dispatch } from './common/js/util'
import create from './common/js/create'

Vue.config.productionTip = false
Vue.prototype.dispatch = dispatch
Vue.prototype.$bus = new Vue
Vue.prototype.$create = create

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
