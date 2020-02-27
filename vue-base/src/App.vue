<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/passValue">组件之间的传值</router-link> |
      <router-link to="/form">表单校验</router-link> |
      <router-link to="/slotTemplate">插槽</router-link> |
      <router-link to="/tree">递归组件</router-link> |
      <router-link to="/kNotice">Alert组件</router-link> |
      <router-link to="/kVuex">vuex</router-link> -->
    </div>
    <p v-if='currentPlace'>当前位置：<span v-for="item in currentPlace" :key="item.path">{{item.name}}</span></p>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPlace: []
    }
  },
  watch: {
    $route() {
      this.currentPlace = this.$route.matched
    }
  },
} 
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
