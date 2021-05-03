import Vue from "vue";
import Vuex from "vuex";

import gallery from "@/store/modules/gallery";
import voting from "@/store/modules/voting";
import breeds from "@/store/modules/breeds";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    gallery,
    breeds,
    voting,
  },
});
