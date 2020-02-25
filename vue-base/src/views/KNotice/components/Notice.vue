<template>
  <div>
    <div v-if="isShow">
      <h3 v-if="title">{{title}}</h3>
      <p v-if="message">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    duration: {
      type: Number,
      default: 1000
    },
    message: String
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true
      setTimeout(() => {
        this.hide()
      }, this.duration)
    },
    hide() {
      this.isShow = false
      this.remove()
    }
  },
}
</script>