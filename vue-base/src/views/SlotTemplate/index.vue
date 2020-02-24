<template>
  <div>
    <h1>插槽</h1>
    <h2>匿名插槽</h2>
    <comp1><p>组件1内容</p></comp1>

    <h2>具名插槽</h2>
    <comp2>
      <template v-slot:default>标题</template>
      <template v-slot:content>内容</template>
    </comp2>

    <h2>作用域插槽</h2>
    <comp3>
      <template v-slot:default="slotProps">
        <div>{{slotProps.user.lastName}}</div>
      </template>
    </comp3>
  </div>
</template>

<script>
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'

export default {
  components: {
    Comp1,
    Comp2,
    Comp3
  }
}
</script>