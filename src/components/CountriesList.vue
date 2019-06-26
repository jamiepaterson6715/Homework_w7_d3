<template lang="html">
  <div>
      <ul>
        <list-item v-for="(country, index) in countries" :country="country" :key="index"></list-item>
        <!-- 9 ul making list-item component. v-for will do for every country. each country has own prop country. index is the key -->
      </ul>
  </div>

</template>

<script>
import ListItem from './ListItem.vue'
// 7 importing to listitem.vue (now touch)

export default {
  name: 'countries-list',
  props: ['countries'],
  //  ..6 component accepting props
  components: {
    "list-item": ListItem
    // 8 registering comp.
  }
}
</script>

<style lang="css" scoped>
</style>
