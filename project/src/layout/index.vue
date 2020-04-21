<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <Breadcrumb></Breadcrumb>
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import Breadcrumb from "@/components/Breadcrumb"
export default {
  components: { SideBar, Breadcrumb }
}
</script>