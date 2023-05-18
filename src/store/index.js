import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    errorModal: null,
    errorMsg: '',
    errorRedirect: '',
    apiModal: null,
    apiMsg: ''
  },
  mutations: {
    changeLoading (state, payload) {
      state.isLoading = payload
    },
    getErrorModal (state, payload) {
      state.errorModal = payload
    },
    getErrorMsg (state, Msg) {
      state.errorMsg = Msg
    },
    getErrorRedirect (state, Redirect) {
      state.errorRedirect = Redirect
    },
    callAPIModal (state, payload) {
      state.apiModal = payload
    },
    setAPIMsg (state, payload) {
      state.apiMsg = payload
    }
  },
  actions: {
    clearSession () {
      const TK = sessionStorage.getItem('accessTK')
      sessionStorage.clear()
      sessionStorage.setItem('accessTK', TK)
    }
  },
  modules: {
  }
})
