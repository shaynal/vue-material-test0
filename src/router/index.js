import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

import { SET_LANG } from '../store/actions/app-shell'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang || to.query.lang
  /* if (lang) {
    router.app.$store.dispatch(SET_LANG, { lang })
      .then(res => {
        next()
      })
  } else {
    next()
  } */
  if (lang) {
    router.app.$store.dispatch(SET_LANG, { lang })
  }

  const authRequired = to.matched.some(route => route.meta.authenticated)
  if (!authRequired) {
    return next()
  }
  if (router.app.$store.getters.isAuthenticated) {
    return next()
  }
})

export default router
