<template>
  <div>
    <div>兄弟2</div>
    <div>收到兄弟1的值：{{msg}}, {{ arr }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      msg: ''
    }
  },
  created() {
    this.$parent.$on('passValue', (arr, msg) => {
     this.arr = arr
     this.msg = msg
    })
    this.$parent.$on('foo', args => {
      this.msg = args
    })
  }
}
</script>