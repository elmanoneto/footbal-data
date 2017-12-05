import Vue from 'vue'
import Vuex from 'vuex'

import Competitions from './../competitions/store/root'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Competitions
  }
})