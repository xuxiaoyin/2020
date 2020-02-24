export function dispatch(eventName, data) {
   let parent = this.$parent
  // 只要还存在父元素就继续往上查找
  while (parent) {
        if (parent) {
            parent.$emit(eventName, data)
            // 递归查找父元素
            parent = parent.$parent
        } else {
              break
        }
  }
}