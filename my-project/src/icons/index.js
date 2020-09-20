// 全局引入svg组件
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.component('svg-icon', SvgIcon)

// require.context
const req = require.context('./svg', false, /\.svg$/)
// ['qq.svg', wx.svg]
req.keys().map(req)
