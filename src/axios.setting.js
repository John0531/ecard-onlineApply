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
    return Promise.reject(err)
  }
)

// axios.interceptors.response.use(
//   config => {
//     return config
//   },
//   async err => {
//     // ?非 200 或非 401 的狀態顯示(ex. 500 時顯示)
//     if (err.response && (err.response.status !== 200 && err.response.status !== 401)) {
//       store.commit('changeLoading', false)
//       // ? responseType 為 blob時，需解析 blob 資料
//       if (err.response.request.responseType === 'blob') {
//         const errMsg = await err.response.data.text()
//         Swal.fire({
//           title: `${errMsg}(${err.response.status})`,
//           allowOutsideClick: true,
//           confirmButtonColor: '#dc3545',
//           confirmButtonText: '確認',
//           backdrop: true,
//           width: 400
//         })
//         return Promise.reject(err)
//       }
//       Swal.fire({
//         title: err.response.status === 403 ? `權限不足(${err.response.status})` : `${err.response.data} (${err.response.status})`,
//         allowOutsideClick: true,
//         confirmButtonColor: '#dc3545',
//         confirmButtonText: '確認',
//         backdrop: true,
//         width: 400
//       })
//       return Promise.reject(err)
//     }
//     if (err.response && err.response.status === 401) {
//       /* token 到期，取得 refreshtoken 換發 */
//       const user = JSON.parse(localStorage.getItem('NBPS_USER')) // ? 取得 LocalStorage 中的登入會員資訊
//       if (user) {
//         if (user.refreshToken) {
//           const rftk = await AuthService.refreshTokenCheck(user)
//           if (rftk) {
//             return Promise.reject(err)
//           } else {
//             AuthService.logout()
//             store.commit('changeLoading', false)
//             Swal.fire({
//               title: '請重新登入',
//               allowOutsideClick: false,
//               confirmButtonColor: '#dc3545',
//               confirmButtonText: '確認',
//               backdrop: true,
//               width: 400
//             }).then((result) => {
//               if (result.isConfirmed) {
//                 router.push(`${process.env.VUE_APP_BASE_ROUTE}/login`)
//                 router.go()
//               }
//             })
//             return Promise.reject(err)
//           }
//         }
//       } else {
//         store.commit('changeLoading', false)
//         Swal.fire({
//           title: '請先登入',
//           allowOutsideClick: false,
//           confirmButtonColor: '#dc3545',
//           confirmButtonText: '確認',
//           backdrop: true,
//           width: 400
//         }).then((result) => {
//           if (result.isConfirmed) {
//             AuthService.logout()
//             router.push(`${process.env.VUE_APP_BASE_ROUTE}/login`)
//           }
//         })
//       }
//     }
//   }
// )
