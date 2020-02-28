import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from '../kstore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    addCount(state, n=1) {
      state.count += n
    }
  },
  actions: {
    asynChangeCount({commit}) {
      commit('addCount', 10)
    }
  },
  getters: {
    score(state){
      return `合计：${state.count}`
    }
  },
  modules: {
  }
})
