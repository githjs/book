// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import  VueTouch from 'vue-touch'
import Vuelazyload from 'vue-lazyload'

Vue.use(Vuelazyload, {
  loading:require('./assets/img/man.png')
})

import api from './api/index.js'
import store from './store'
import './assets/css/base.css' 

Vue.use(VueTouch, {name: 'v-touch'})
Vue.prototype.$http=api;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
