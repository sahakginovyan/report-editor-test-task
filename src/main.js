import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

//Vue Bootstrap
Vue.use(BootstrapVue);

// Vue Router
import router from "./router";
// Vuex Store
import store from "./store/store";

// axios
import axios from "./axios.js";
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
