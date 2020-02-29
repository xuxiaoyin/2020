// 遍历模板，将里面的插值表达式处理
// k-xx, @-xx处理
class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)

    if (this.$el) {
      // 1.$el中的内容移动到一个fragment，提高操作效率
      this.$fragment = this.node2Fragment(this.$el)
      console.log(this.$fragment)
      // 2.编译fragment
      this.compile(this.$fragment)

      // 3.将编译结束追加到宿主中
      this.$el.appendChild(this.$fragment)
    }
  }

  node2Fragment(el) {
    const fragment = document.createDocumentFragment()
    let child
    while ((child = el.firstChild)) {
      fragment.appendChild(child)
    }
    return fragment
  }

  compile(el) {
    // 遍历el
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {
        // console.log('这是元素'); 
        // 如果是元素节点，我们要处理指令k-xx,事件@xx
        this.compileElement(node)
      } else if (this.isInterpolation(node)) {
        // 把插值表达式替换成实际内容
        this.compileText(node)
        // this.update(console.log(RegExp.$1))
        console.log('这是文本' + node.textContent);
      }
      // 递归
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  // 如果是元素节点，我们要处理指令k-xx,事件@xx
  compileElement(node) {
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(attr => {
      const attrName = attr.name
      const exp = attr.value
      if (attrName.indexOf('k-') === 0) {
        const dir = attrName.substring(2)
        this[dir] && this[dir](node, this.$vm, exp)
      } else if (attrName.indexOf('@') === 0) {
        // 事件
        const eventName = attrName.substring(1)
        this.eventHandler(node, this.$vm, exp, eventName)
      }
    })
  }

  eventHandler(node, vm, exp, eventName) {
    // 获取回调函数
    const fn = vm.$options.methods && vm.$options.methods[exp]
    if (eventName && fn) {
      node.addEventListener(eventName, fn.bind(vm))
    }
  }

  text(node, vm, exp) {
    this.update(node, vm, exp, 'text')
  }

  // 双向数据绑定
  model(node, vm, exp) {
    // 数据改变界面
    this.update(node, vm, exp, 'model')
    // 界面变了改数值
    node.addEventListener('input', e => {
      vm[exp] = e.target.value
    })
  }

  modelUpdator(node,value) {
    node.value = value
  }

  html(node, vm, exp) {
    this.update(node, vm, exp, 'html')
  }

  htmlUpdator(node, value) {
    node.innerHTML = value
  }

  isElement(node) {
    return node.nodeType === 1
  }

  // 插值表达式判断
  isInterpolation(node) {
    // 需满足{{xxx}}
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  // 把插值表达式替换成实际内容
  compileText(node) {
    // node.textContent = this.$vm[RegExp.$1]
    const exp = RegExp.$1
    this.update(node, this.$vm, exp, 'text')
  }

  // 编写update函数，它可复用
  update(node, vm, exp, dir) {
    const fn = this[dir + 'Updator']
    fn && fn(node, vm[exp])
    new Watcher(vm, exp, function() {
      fn && fn(node, vm[exp])
    })
  } 

  textUpdator(node, value) {
    node.textContent = value
  }

  
}