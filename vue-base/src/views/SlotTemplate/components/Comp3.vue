<template>
  <div>
    <div>组件3</div>
    <slot :user="user">{{user.firstName}}</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'xu',
        lastName: 'xiaoyin'
      },
    }
  }
}
</script>