<template>
  <div>
    <div>任意组件1<button @click="handelClick">传值</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我来自任意组件1'
    }
  },
  methods: {
    handelClick() {
      this.$bus.$emit('pass', this.msg)
    }
  },
}
</script>