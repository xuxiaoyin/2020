<template>
  <div>
    <div>任意组件2: {{msg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    this.$bus.$on('pass', msg => {
      console.log(msg)
      console.log(123)
      this.msg = msg
    })
  }
}
</script>