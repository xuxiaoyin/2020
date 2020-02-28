let Vue
// vuex是一个插件
// 实现四个东西：state/mutations/getters
// 数据的响应式
class Store {
  constructor(options) {
    this.state = new Vue({
      data: options.state
    })
    
    this.mutations = options.mutations
    this.actions = options.actions
    options.getters && this.handleGetters(options.getters)
  }

  // 箭头函数，确保this指向正确
  commit = (type, arg) => {
    this.mutations[type](this.state, arg)
  }

  dispatch(type, arg) {
    this.actions[type]({
      commit: this.commit,
      state: this.state
    }, arg)
  }

  handleGetters(getter) {
    this.getters = {}
    Object.keys(getter).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getter[key](this.state)
        }
      })
    })
  }
}

function install(_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {Store, install}