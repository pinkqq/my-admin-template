import Vue from "vue";
import "./plugins";
import "@/directive";
import "@/styles/index.scss"; // global css
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/icons"; // icon

import "../mock"; //remove it before going online !

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
