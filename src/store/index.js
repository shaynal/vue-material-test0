import Vue from 'vue'
import Vuex from 'vuex'

import appShell from './modules/app-shell'
import auth from './modules/auth'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    appShell,
    auth,
    user
  },
  strict: debug
})
