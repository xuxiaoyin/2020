<template>
  <div>
    <h3>状态管理</h3>
    <div>COUNT：{{$store.state.count}}</div>
    <button @click="add">点击添加</button>
    <br>
    <button @click="addAction">触发Action</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit('addCount')
    },
    addAction() {
      this.$store.dispatch('asynChangeCount')
    }
  }
}
</script>