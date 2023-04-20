import axios from 'axios'
// import router from './router'
import store from './store'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

// ?設定cross跨域 並設定訪問許可權 允許跨域攜帶cookie資訊
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('accessTK')
    if (token && !config.url.includes('terms.json') && !config.url.includes('.html') && !config.url.includes('Utility.json')) {
      config.headers.Authorization = `Bearer ${token}`
    }
    store.commit('changeLoading', true)
    return config
  }
)

axios.interceptors.response.use(
  config => {
    store.commit('changeLoading', false)
    if (config.headers.authorization) {
      sessionStorage.setItem('accessTK', config.headers.authorization)
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
