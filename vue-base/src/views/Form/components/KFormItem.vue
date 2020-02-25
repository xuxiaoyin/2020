<template>
  <div>
    <div v-if="label">{{label}}</div>
    <slot></slot>
    <p class="errorMessage" v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  props: {
    label: String,
    props: String
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  inject: ['form'],
  methods: {
    validate() {
      const value = this.form.model[this.props]
      const rules = this.form.rules[this.props]
      // 安装校验库 npm i async-validator -s

      const desc = { [this.props]: rules }
      const schema = new Schema(desc)
      return schema.validate({[this.props]: value}, error => {
        if (error) {
          this.errorMessage = error[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  },
  mounted() {
    this.$on('validate', this.validate)
  }
}
</script>

<style lang="scss">
  .errorMessage {
    color: red;
  }
</style>