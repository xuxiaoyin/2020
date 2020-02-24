<template>
  <div>
    <div>儿子:{{ancestor.msg}}, {{msg1}}</div>
    <grandson></grandson>
  </div>
</template>

<script>
import Grandson from './grandson'
export default {
  components: {
    Grandson
  },
  data() {
    return {
      msg1: ''
    }
  },
  inject: ['ancestor'],
  mounted() {
    this.$on('getNew', msg => {
      this.msg1 = msg
    })
  }
}
</script>