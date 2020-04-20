import { getToken, setToken, removeToken } from '@/utils/auth'

// 存储用户令牌和角色信息
const state = {
  token: getToken(),
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user Login 用户登录
  login({commit}, userInfo) {
    const { username } = userInfo
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' || username === 'jerry') {
          // 保存状态信息
          commit("SET_TOKEN", username)
          // 写入cookie
          setToken(username)
          resolve()
        } else {
          reject("用户名或密码错误")
        }
      }, 1000)
    })
  },

  // get user info 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const roles = state.token === 'admin' ? ['admin'] : ['editor']
        commit("SET_ROLES", roles)
        resolve({roles})
      }, 1000)
    })
  },

  // remove token 重置token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "")
      commit("SET_ROLES", [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}