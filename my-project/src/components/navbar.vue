<template>
  <div class="navbar" :style="{height: globalData.navHeight + 'px'}" :class="{'shadow': !showIcon}">
    <div class="navbar-action-wrap" :style="{top: globalData.navTop + 'px'}" v-if="showIcon">
      <span class="icon-company"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
    </div>
    <div class='navbar-title' :class="{'textLeft': showIcon}" :style="{top: globalData.navTop + 'px'}">
      <span v-if="showIcon">
      </span>
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    showIcon: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '双意租车'
    }
  },
  data () {
    return {
      globalData: {
        navHeight: 0,
        navTop: 0,
        windowHeight: 0,
        active: '双意租车',
        index: 0,
        companyList: ['双意租车', '其他租车']
      }
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      let menuButtonObject = wx.getMenuButtonBoundingClientRect()
      wx.getSystemInfo({
        success: res => {
          console.log(res)
          let statusBarHeight = res.statusBarHeight
          // 胶囊按钮与顶部的距离
          let navTop = menuButtonObject.top
          // 导航高度
          let navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2
          this.globalData.navHeight = navHeight
          this.globalData.navTop = navTop
          console.log(this.globalData.navTop)
          this.globalData.windowHeight = res.windowHeight
        }
      })
    },
    // 选择公司
  }
}
</script>

<style lang="stylus">
  .navbar {
  width: 100%;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  flex-shrink: 0;
}
.shadow {
  box-shadow: 0px 1rpx 5rpx 0px rgba(0, 0, 0, 0.1);
}

.navbar-title {
  width: 100%;
  box-sizing: border-box;
  padding-left: 115px;
  padding-right: 115px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: absolute;
  left: 0;
  z-index: 10;
  color: #333;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.textLeft {
  padding-left: 40px;
  text-align: left;
}

.navbar-action-wrap {
  position: absolute;
  left: 10px;
  z-index: 11;
  padding-top: 4px;
  padding-bottom: 4px;
}

</style>
