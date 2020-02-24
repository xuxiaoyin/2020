<template>
  <div>
    <div>孙子:{{ancestor.msg}}</div>
    <button @click="dispatch('getNew', '来自孙子的值')">获取孙子的值</button>
  </div>
</template>

<script>
export default {
  inject: ['ancestor']
}
</script>