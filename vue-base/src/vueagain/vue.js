// new Vue({
//   data: {
//     msg: '测试代码'
//   }
// })

class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    // 数据劫持
    this.observe(this.$data)

    // 测试代码
    // new Watcher(this, 'name1')
    // this.name1
    // this.name2 = '123'
    // this.name1 = '456'
  }

  // 数据劫持
  observe(value) {
    if (!value || typeof value !== 'object') {
      return
    }
    // 添加get, set
    Object.keys(value).forEach(key => {
      this.defineNative(value, key, value[key])
      this.proxyData(key)
    })
  }

  // 代理
  proxyData(key) {
    Object.defineProperty(this, key, {
      configurable: true,
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }

  // 添加get/set
  defineNative(obj, key, value) {
    // 递归
    this.observe(value)
    // 创建dep实例
    const dep = new Dep()

    Object.defineProperty(obj, key, {
      get() {
        // console.log('获取')
        Dep.target && dep.addDep(Dep.target)
        return value
      },
      set(newVal) {
        if (newVal !== value) {
          // console.log('设置')
          newVal = value
          console.log(`${key}发生变化了`)
          dep.notify()
        }
      }
    })
  }
}

// 管理若干watcher实例，它和key是一对一关系
class Dep {
  constructor() {
    this.deps = []
  }

  addDep(watcher) {
    this.deps.push(watcher)
  }

  notify() {
    this.deps.forEach(dep => dep.updata())
  }

}

// // 保存ui中依赖，实现update函数可以更新
class Watcher {
  constructor(vm, key) {
    this.vm = vm
    this.key = key
    console.log(key)
    Dep.target = this
  }

  updata() {
    console.log(123)
    console.log(`${this.key}更新了`)
  }
}