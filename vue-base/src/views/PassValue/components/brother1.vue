<template>
  <div>
    <div>兄弟1</div>
    <button @click="passValue">传值给兄弟2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
      msg: '初始值'
    }
  },
  methods: {
    passValue() {
      this.msg = '我变了'
      this.$parent.$emit('passValue', this.arr, this.msg)
    }
  },
  mounted() {
    this.$parent.$emit('foo', '初始值')
  }
}
</script>