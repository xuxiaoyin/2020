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
    console.log(this.$data[key])
    Object.defineProperty(this, key, {
      // Cannot redefine property: foo  属性设置为可配置
      configurable: true,
      get() {
        console.log(this.$data[key])
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
    // 对key做响应处理
    Object.defineProperty(obj, key, {
      get() {
        return value
      },
      set(newVal) {
        if (newVal !== value) {
          value = newVal
          console.log(`${key}发生变化了`)
        }
      }
    })
  } 

} 