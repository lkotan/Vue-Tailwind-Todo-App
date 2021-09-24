import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./index.css";
import Toasted from "vue-toasted";
import '/node_modules/material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false;

Vue.prototype.$baseURL = "http://localhost:3000";

Vue.use(Toasted, {
  duration: 1500,
  position: "top-right",
  theme: "outline",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
