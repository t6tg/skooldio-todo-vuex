import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item)
    },
    initItem(state, item) {
      state.items = item;
    }
  }
})
