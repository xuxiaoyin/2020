import { asyncRoutes, constRoutes } from "@/router"

//  根据路由meta.role确定是否当前用户拥有访问权限
// @roles 用户拥有角色
// @route 待判定路由

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤AsyncRoutes路由表
 * @routes 待过滤路由表，首次传入的就是AsyncRoutes
 * @roles 用户拥有的角色
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    // 复制一份
    const tmp = { ...route }
    // 如果用户有访问权限则加入结果路由表
    if (hasPermission(roles, tmp)) {
      // 如果存在子路由则递归过滤
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [], // 完整路由表
  addRoutes: [] // 用户可访问路由表
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constRoutes.concat(routes)
  }
}

const actions = {
  // 路由生成：在得到用户角色后会第一时间调用
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      // 用户是管理员则拥有完整访问权限
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoutes || []
      } else {
        // 否则需要根据角色做过滤处理
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit("SET_ROUTES", accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}