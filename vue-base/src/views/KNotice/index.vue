<template>
  <div>
    <button @click="showAlert">点击触发</button>
  </div>
</template>

<script>
import Notice from './components/Notice'
export default {
  methods: {
    showAlert() {
      const notice = this.$create(Notice, {
        title: '标题',
        message: '内容'
      })
      console.log(notice)
      notice.show()
    }
  },
}
</script>