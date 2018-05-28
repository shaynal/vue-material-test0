import Vue from 'vue'
import { USER_REQUEST, USER_SUCCESS } from '../actions/user'
import { getUserProfile } from '../../utiles/api-const'
import apiCall from '../../utiles/api'

const state = {
  status: '',
  profile: {}
}

const getters = {
  getUserAccounts: state => state.profile.Accounts
}

const actions = {
  [USER_REQUEST]: ({commit, dispatch}) => {
    apiCall(getUserProfile)
      .then(res => {
        if (res) {
          commit(USER_SUCCESS, res)
          dispatch('SET_LANG', { lang: res.LanguageCode })
        }
      })
  }
}

const mutations = {
  [USER_SUCCESS]: (state, profile) => {
    state.status = 'success'
    Vue.set(state.profile, profile)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
