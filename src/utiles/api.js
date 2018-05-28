import store from '../store'
import router from '../router'
import { AUTH_LOGOUT } from '../store/actions/auth'
import CONFIG from '../../my-ava-config.json'

const apiUrl = CONFIG.domains.serviceApi

export default function ({url, method, args}) {
  url = new URL(apiUrl + url)

  let options = {
    credentials: 'same-origin',
    method: method || 'GET',
    mode: 'cors',
    headers: {
      token: store.getters.getToken
    }
  }

  options = Object.assign({}, options, args)

  if (options.body) {
    options.method = 'POST'
    options.headers['Content-Type'] = 'application/json'
    options.headers['Accept'] = 'application/json'
    options.body = JSON.stringify(options.body)
  }

  if (options.params) {
    /* eslint-disable no-new */
    url.rearch = new URLSearchParams(options.params)
  }

  return fetch(url, options)
    .then(res => {
      return new Promise((resolve, reject) => {
        const response = {
          ok: res.ok,
          status: res.status,
          statusText: res.statusText,
          data: null
        }
        const func = res.ok ? resolve : reject
        try {
          res.json().then(data => {
            response.data = data
            func(response)
          })
        } catch (err) {
          console.error(err)
          if (res.ok) {
            func(res)
          }
        }
      })
    })
    .catch(res => {
      if (/401|403/.test(res.status)) {
        store.dispatch(AUTH_LOGOUT)
          .then(() => router.push('/login'))
      }
      throw res.data
    })
}
