import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

let instance = axios.create({
  timeout: 1000
})
instance.defaults.baseURL = 'http://www.baidu.com'
Vue.prototype.$axios = instance

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
