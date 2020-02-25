<template>
  <div>
    <h2>递归组件</h2>
    <ul v-for="(item, index) in treeData" :key=index>
      <Tree :date="item"></Tree>
    </ul>
  </div>
</template>

<script>
import Tree from './components/Tree'

export default {
  components: {
    Tree
  },
  data() {
    return {
      treeData:[
        {
          label: '目录1',
          children: [
            {
              label: '目录1-1',
              children: [
                { label: '目录1-1-1'}
              ]
            },
            {
              label: '目录1-2'
            },
            {
              label: '目录1-3'
            },
          ]
        },{
          label: '目录2'
        }
      ]
    }
  }
}
</script>