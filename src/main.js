import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './modules/configs/config.store'

import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
