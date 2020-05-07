import Vue from "vue";
import store from "./store";
import "reset-css";
import App from "./App.vue";
import "swiped-events";
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
