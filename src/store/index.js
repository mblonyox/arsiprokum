import Vue from 'vue'
import Vuex from 'vuex'

// Importing modules
import app from './modules/app'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    auth
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
