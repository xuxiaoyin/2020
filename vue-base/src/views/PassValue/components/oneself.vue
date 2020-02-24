<template>
  <div>
    <div>自己:{{msg1}}</div>
    <son></son>
  </div>
</template>

<script>
import Son from './son'
export default {
  components: {
    Son
  },
  data() {
    return {
      msg: '来自自己的值',
      msg1: ''
    }
  },
  provide() {
    return { ancestor: this }
  },
  mounted() {
    this.$on('getNew', msg => {
      this.msg1 = msg
    })
  }
}
</script>