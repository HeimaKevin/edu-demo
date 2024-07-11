import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: localStorage.getItem('lang') || 'cn',
  },
  mutations: {
    LANG(state, payload) {
      state.lang = payload
    },
  },
  actions: {
    setLang({ commit }, payload) {
      commit('LANG', payload)
    },
  },
  getters: {},
  modules: {},
})
