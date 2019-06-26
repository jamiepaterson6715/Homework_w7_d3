<template lang="html">
<li v-on:click="handleClick">{{country.name}}</li>
<!-- 11 ¢now displaying countries -->
<!-- 12 v-on - add event lsitener to add more deatil -->
</template>

<script>
import {eventBus} from "../main.js"
// 15
export default {
  name: 'list-item',
  props: ['country'],
  //  10 receiving the prop country so it can be used in html above¢
  methods: {
    handleClick() {
      eventBus.$emit("oranges", this.country);
      // 13 defining handle click will add countrey data to event list => return app vue
    }
  }
}
</script>

<style lang="css" scoped>
</style>
