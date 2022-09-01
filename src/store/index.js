import Vue from "vue";
import Vuex from "vuex";
import catagtory from "./modules/catagtory";
import newList from "./modules/newList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    catagtory,
    newList,
  },
  getters: {
    //利用外层getters建立快捷访问
    catagtory: (state) => state.catagtory.catagtory,
    currentCatagtory: (state) => state.catagtory.currentCatagtory,
    currentList: (state) =>
      state.newList.allData[state.catagtory.currentCatagtory] || [],
  },
});
