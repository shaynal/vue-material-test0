import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from '../actions/auth'
import { getLoginToken } from '../../utiles/api-const'
import apiCall from '../../utiles/api'

const state = {
  status: '',
  token: localStorage.getItem('app-token'),
  error: ''
}

const getters = {
  isAuthenticated: state => !!state.token
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, {email, password}) => {
    const body = {
      username: email || 'testnewava@dd.com',
      password: password || 'Newpass1',
      hostname: 'myvip.avatrade.com',
      whitelabel: 'AvaTrade'
    }
    apiCall(getLoginToken, { body })
      .then(res => {
        if (res.LoginToken) {
          localStorage.setItem('app-token', res.LoginToken)
          commit(AUTH_SUCCESS, res.LoginToken)
          dispatch('USER_REQUEST')
        }
      })
      .catch(err => {
        commit(AUTH_ERROR, err)
      })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  [AUTH_ERROR]: (state, err) => {
    state.status = 'error'
    state.error = err
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
