<template>
  <div>
    <h1>表单登录</h1>
    <k-form :model="form" :rules="rules" ref="from">
      <k-form-item label="用户名" props="userName">
        <k-input v-model="form.userName"></k-input>
      </k-form-item>
      <k-form-item label="密码" props="password">
        <k-input v-model="form.password" type="password"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submitForm('from')">登录</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from './components/KForm'
import KFormItem from './components/KFormItem'
import KInput from './components/KInput'

export default {
  components: {
    KForm,
    KFormItem,
    KInput
  },
  data() {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入用密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          console.log("登录成功")
        } else {
          console.log("登录失败")
        }
      })
    }
  },
}
</script>