import axios from 'axios'
// import router from './router'
import store from './store'
import { hash } from '@/utilities/hash.js'

// ?設定cross跨域 並設定訪問許可權 允許跨域攜帶cookie資訊
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    const TK = sessionStorage.getItem('accessTK').substring(8)
    if (TK && !config.url.includes('terms.json') && !config.url.includes('.html') && !config.url.includes('Utility.json')) {
      config.headers.Authorization = `Bearer ${TK}`
    }
    store.commit('changeLoading', true)
    return config
  }
)

axios.interceptors.response.use(
  config => {
    store.commit('changeLoading', false)
    if (config.headers.authorization) {
      const TK = `${hash(8)}${config.headers.authorization}`
      sessionStorage.setItem('accessTK', TK)
    }
    return config
  },
  async err => {
    store.commit('changeLoading', false)
    if (err.response && err.response.status.toString().charAt(0) === '5') {
      store.commit('getErrorMsg', `作業失敗，請重新輸入或洽聯邦信用卡客服專線，02-25455168、07-2269393。(${err.response.status})`)
      store.state.errorModal.show()
      return Promise.reject(err)
    }
    if (err.response && err.response.status.toString().charAt(0) === '4') {
      if (err.response.status === 440) {
        store.commit('getErrorMsg', `操作逾時或執行錯誤，請重新登入。(${err.response.status})`)
        store.state.errorModal.show()
        return Promise.reject(err)
      } else {
        store.commit('getErrorMsg', `作業失敗，請重新輸入或洽聯邦信用卡客服專線，02-25455168、07-2269393。(${err.response.status})`)
        store.state.errorModal.show()
        return Promise.reject(err)
      }
    }
    store.commit('getErrorMsg', err.toString())
    store.state.errorModal.show()
    return Promise.reject(err)
  }
)
