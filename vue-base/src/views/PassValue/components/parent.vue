<template>
  <div>
    <h2>父子关系</h2>
    <div>我是父亲</div>
    <div>来自儿子的消息：{{ msgSon }}</div>
    <child :msg="msg" @sendBack="sendBack"></child>

    <h2>兄弟关系</h2>
    <brother1></brother1>
    <brother2></brother2>

    <h2>祖先和后代</h2>
  </div>
</template>

<script>
import Child from './child'
import Brother1 from './brother1'
import Brother2 from './brother2'
export default {
  components: {
    Child,
    Brother1,
    Brother2
  },
  data() {
    return {
      msg: '回家吃饭',
      msgSon: ''
    }
  },
  methods: {
    sendBack(fromSong) {
      this.msgSon = fromSong
    }
  },
}
</script>