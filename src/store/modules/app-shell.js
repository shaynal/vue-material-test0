import i18n from '../../locale'
import { SET_LANG, NAV_SHOW } from '../actions/app-shell'
import CONFIG from '../../../my-ava-config.json'

const state = {
  navigationShow: false,
  lang: localStorage.getItem('app-lang') || CONFIG.DefaultLanguage || 'en',
  systemLanguages: ['en', 'ru', 'es', 'it', 'de']
}

const getters = {
  getCurrentLanguage: state => state.lang,
  getSystemLanguages: state => state.systemLanguages,
  navigationShow: state => state.navigationShow
}

const actions = {
  [NAV_SHOW]: ({commit, dispatch}, newValue) => {
    commit(NAV_SHOW, newValue)
  },
  [SET_LANG]: ({commit, dispatch, state}, { lang, component }) => {
    return new Promise((resolve, reject) => {
      lang = lang || state.lang
      if (lang in i18n.messages) {
        commit(SET_LANG, lang)
        resolve(true)
      } else {
        const path = `/static/lang/${lang}/${(component ? `component/${component}-${lang}.json` : `${lang}.json`)}`

        fetch(path)
          .then(res => {
            if (!res.ok) {
              throw new Error(res.statusText)
            }
            return res.json()
          })
          .then(json => {
            i18n.setLocaleMessage(lang, json)
            commit(SET_LANG, lang)
            resolve(lang)
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  }
}

const mutations = {
  [NAV_SHOW]: (state, value) => {
    state.navigationShow = value
  },
  [SET_LANG]: (state, lang) => {
    state.lang = lang
    i18n.locale = lang
    localStorage.setItem('app-lang', lang)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
