// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/reset.css"
import animate from 'animate.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import store from '@/vuex/store'


import { post, fetch, patch, put } from '@/utils/axios/http'
import { getCookie, setCookie, delCookie } from '@/utils/axios/util'

Vue.use(animate)
Vue.use(iView)
Vue.config.productionTip = false

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$axios = axios;

//cookie方法
Vue.prototype.getCookie = getCookie;
Vue.prototype.setCookie = setCookie;
Vue.prototype.delCookie = delCookie;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
