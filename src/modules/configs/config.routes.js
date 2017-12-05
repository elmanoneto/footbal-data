import Vue from 'vue'
import VueRouter from 'vue-router'

import Competitions from './../competitions/competitions.routes'

let routes = {
  mode: 'history',
  routes: [Competitions.routes]
}

export default new VueRouter(routes)