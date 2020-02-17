import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

import moduleReport from "./report/moduleReport.js";

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    report: moduleReport
  },
  strict: process.env.NODE_ENV !== "production"
});
