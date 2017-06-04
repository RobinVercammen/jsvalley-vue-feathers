import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import Mutations from './mutations';
import Actions from './actions';

Vue.use(Vuex);

const store = new Store({
  state: {
    items: [],
  },
  mutations: Mutations,
  actions: Actions,
});

export default store;
