import Vue from 'vue'
import VueMaterial from 'vue-material'
import Vuelidate from 'vuelidate'

import App from './App'
import i18n from './locale'
import store from './store'
import router from './router'

import { SET_LANG } from './store/actions/app-shell'
// import { USER_REQUEST } from './store/actions/user'

Vue.use(VueMaterial)
Vue.use(Vuelidate)
Vue.config.productionTip = false

const lang = localStorage.getItem('app-lang')
store.dispatch(SET_LANG, { lang })
// if (lang) {
//   // i18n.locale = lang
//   store.dispatch(SET_LANG, { lang })
// }

/* const token = localStorage.getItem('app-token')
if (token) {
  store.dispatch(USER_REQUEST)
} */

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
