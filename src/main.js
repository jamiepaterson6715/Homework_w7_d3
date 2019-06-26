import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();
// crfeating event bus so data can be stored

new Vue({
  render: h => h(App),
}).$mount('#app')
