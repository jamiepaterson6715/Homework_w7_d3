<template lang="html">

<div class="css-later">
  <h1>Countries</h1>
  <div class="main-container">
    <countries-list :countries="countries"></countries-list>
    <!-- 4 passing the prop -->
    <country-detail :country="selectedCountry"></country-detail> <!-- 19 -->

  </div>
</div>


</template>


<script>
import CountryDetail from './components/CountryDetail.vue'//17
import {eventBus} from "./main.js" // 16 event bus from main.js for use
import CountriesList from "./components/CountriesList.vue"
 // 2 importing file step 6 touch CountriesList.vue
export default {
  name: 'app',
  data() {
    return {
      countries: [],
      selectedCountry: null
      // 15 setting starting data to null
    }
  },
  mounted(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => this.countries = countries)
    console.log(this.countries)
    // 1 grabbing data from API
    eventBus.$on("oranges", (country) => {
      this.selectedCountry = country;
      // console.log(this.selectedCountry);
      // 14 grabbing data from bus setting variable to be updated
    }
  )},

  components: {
    "countries-list": CountriesList,
    "country-detail": CountryDetail// 18
  }
  //  3 registering component



}
</script>

<style lang="css" scoped>
  .main-container {
    display: flex;
  }
</style>
