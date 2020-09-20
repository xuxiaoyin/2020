<template>
  <div>
    <nav-bar :showIcon="true"></nav-bar>
    <map
      id="myMap"
      style="width: 100%;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      show-location
    ></map>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import location from '../../../static/images/location.png'
export default {
  data () {
    return {
      latitude: 23.099994,
      longitude: 113.324520
    }
  },
  computed: {
    markers() {
      return [{
        id: 1,
        latitude: this.latitude,
        longitude: this.longitude,
        iconPath: location,
        width: 25,
        height: 49,
        name: 'T.I.T 创意园'
      }]
    }
  },
  components: {
    NavBar
  },

  methods: {
    regionchange (e) {
      console.log(e.type)
    },
    markertap (e) {
      console.log(e.detail.markerId)
    },
    controltap (e) {
      console.log(e.detail.controlId)
    },
    getLocation () {
      const _this = this
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          _this.latitude = res.latitude
          _this.longitude = res.longitude
        }
      })
    }
  },
  created () {
    this.getLocation()
    // let app = getApp()
  }
}
</script>

<style scoped lang="css">
#myMap {
  height: 100vh;
}
</style>
