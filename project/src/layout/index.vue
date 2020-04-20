<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
export default {
  components: { SideBar }
}
</script>