import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  state: state,
  actions: actions,
  getters: getters,
  mutations: mutations
}