<template>
  <div>
    <div>我是儿子</div>
    <div>来自爸爸的消息：{{ msg }}</div>
    <button @click="back">知道了</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      fromSon: '知道了',
    }
  },
  methods: {
    back() {
      this.$emit('sendBack', this.fromSon)
    }
  },
}
</script>