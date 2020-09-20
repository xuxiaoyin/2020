import Vue from 'vue'
import './cube-ui'
import App from './App'
import './common/styles/style.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
