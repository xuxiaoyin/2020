<template>
  <div>
    <li>
      <div @click="toogle">
        <span v-if="isFloder">{{open ? '-' : '+'}} </span>
        <span> {{date.label}}</span>
      </div>
      <ul v-if="isFloder" v-show="open">
        <Tree v-for="(item, index) in date.children" :key=index :date="item"></Tree>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  props: {
    date: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFloder() {
      return this.date.children && this.date.children.length
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toogle() {
      if (this.isFloder) {
        this.open = !this.open
      }
    }
  },
}
</script>