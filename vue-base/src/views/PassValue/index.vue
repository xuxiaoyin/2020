<template>
  <div class="about">
    <h1>组件之间的传值</h1>
    <parent></parent>

  </div>
</template>

<script>
import Parent from './components/parent'
export default {
  name: 'PassValueText',
  components: {
    Parent
  }
}
</script>