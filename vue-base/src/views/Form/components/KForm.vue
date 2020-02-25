<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: Object,
    rules: Object
  },
  methods: {
    validate(cb) {
      const tasks = this.$children.filter(item => item.props)
      .map(item => item.validate())
      Promise.all(tasks).then(() => {
        cb(true)
      }).catch(() => {
        cb(false)
      })
    }
  },
}
</script>