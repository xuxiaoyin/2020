// 路由全局守卫
// 权限控制逻辑
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // npm i js-cookie -S

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 获取令牌判断用户是否登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 若用户角色已附加则说明动态路由已添加
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 先请求获取用户信息
          const { roles } = await store.dispatch('user/getInfo')

          // 根据当前用户角色动态生成路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // 添加这些路由至路由器
          router.addRoutes(accessRoutes)

          // 继续路由切换，确保addRoutes完成
          next({...to, replace: true })
        } catch(error) {
          await store.dispatch('user/resetToken')
          Message.error(error || "Has Error")
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    // 用户无令牌
    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单路由放过
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})