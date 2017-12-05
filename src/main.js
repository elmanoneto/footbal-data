import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './modules/configs/config.store'
import router from './modules/configs/config.routes'

import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})
