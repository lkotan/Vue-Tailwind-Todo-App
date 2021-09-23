import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import './index.css'

Vue.config.productionTip = false

Vue.prototype.$baseURL="http://localhost:3000";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
