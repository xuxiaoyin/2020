import Vue from 'vue'

export default function create(component, props) {
  const vm = new Vue({
    render(h) {
      return h(component, {props})
    }
  }).$mount()

  console.log(vm.$el)

  // 手动挂载
  document.body.appendChild(vm.$el)

  // 销毁方法
  const comp = vm.$children[0]
  comp.remove = function() {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
} 