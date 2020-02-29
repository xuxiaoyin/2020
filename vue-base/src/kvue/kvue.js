// new Kvue({
//   data: {
//     msg: '测试'
//   }
// })

class Kvue {
  constructor(options) {
    this.$data = options.data
    this.$options = options
    // 劫持监听所有属性
    this.observe(this.$data)

    // 测试代码
    // new Watcher(this, 'name1')
    // this.name1
    // this.name2 = '123'

    // 创建编译器
    new Compile(options.el, this)

    if (options.created) {
      options.created.call(this)
    }
  }

  // 劫持监听所有属性
  observe(value) {
    if (!value || typeof value !== 'object') {
      return
    }
    // 遍历
    Object.keys(value).forEach(key => {
      // 设置get， set 对key做响应处理
      this.defineRective(value, key, value[key])
      this.proxyData(key)
    })
  }

  // 代理
  proxyData(key) {
    // console.log(this.$data[key])
    Object.defineProperty(this, key, {
      // Cannot redefine property: foo  属性设置为可配置
      configurable: true,
      get() {
        // console.log(this.$data[key])
        return this.$data[key]
      },
      set(newVal) {
        console.log(newVal)
        this.$data[key] = newVal
      }
    })
  }

  // 设置get， set
  defineRective(obj, key, value) {
    // 递归
    this.observe(value)
    // 创建dep实例
    let dep = new Dep()
    // 对key做响应处理
    Object.defineProperty(obj, key, {
      get() {
        console.log(`${key}123`)
        Dep.target && dep.addDep(Dep.target)
        return value
      },
      set(newVal) {
        if (newVal !== value) {
          value = newVal
          console.log(`${key}发生变化了`)
          dep.notifyDep()
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

  // 增加
  addDep(watcher) {
    this.deps.push(watcher)
  }

  // 更新
  notifyDep() {
    this.deps.forEach(dep => dep.update())
  }
}

// 保存ui中依赖，实现update函数可以更新
class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb

    // 将当前实例指向Dep.target
    Dep.target = this
    this.vm[this.key]
    Dep.target = null
  }

  update() {
    this.cb.call(this.vm, this.vm[this.key])
    console.log(`${this.key}更新了`)
  }
}