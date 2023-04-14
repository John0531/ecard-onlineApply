import axios from 'axios'
// import router from './router'
import store from './store'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

// ?設定cross跨域 並設定訪問許可權 允許跨域攜帶cookie資訊
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    store.commit('changeLoading', true)
    return config
  }
)

axios.interceptors.response.use(
  config => {
    store.commit('changeLoading', false)
    return config
  },
  async err => {
    store.commit('changeLoading', false)
    console.log(err)
    if (err.response && err.response.status.toString().charAt(0) === '5') {
      store.commit('getErrorMsg', `作業失敗，請重新輸入或洽聯邦線上客服(${err.response.status})`)
      store.state.errorModal.show()
      return Promise.reject(err)
    }
    if (err.response && err.response.status.toString().charAt(0) === '4') {
      if (err.response.status === 440) {
        store.commit('getErrorMsg', `頁面逾時(${err.response.status})`)
        store.state.errorModal.show()
        window.location = 'https://card.ubot.com.tw/eCard/dspPageContent.aspx?strID=2008060014'
        return Promise.reject(err)
      } else {
        store.commit('getErrorMsg', `輸入資料有誤，請重新輸入或洽聯邦線上客服(${err.response.status})`)
        store.state.errorModal.show()
        return Promise.reject(err)
      }
    }
    store.commit('getErrorMsg', err.toString())
    store.state.errorModal.show()
    return Promise.reject(err)
  }
)
