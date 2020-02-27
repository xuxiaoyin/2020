import Vue from 'vue'
import Vuex from 'vuex'

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
  modules: {
  }
})
