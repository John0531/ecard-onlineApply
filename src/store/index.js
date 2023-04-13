import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    errorModal: null,
    errorMsg: '',
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
    getErrorMsg (state, payload) {
      state.errorMsg = payload
    },
    callAPIModal (state, payload) {
      state.apiModal = payload
    },
    setAPIMsg (state, payload) {
      state.apiMsg = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
