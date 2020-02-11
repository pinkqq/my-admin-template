import Vue from "vue";
import "./plugins";
import "@/styles/index.scss"; // global css
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/icons"; // icon

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
