import { createStore } from 'vuex'

export default createStore({
  state: {
    errorModal: null,
    errorMsg: ''
  },
  mutations: {
    getErrorModal (state, payload) {
      state.errorModal = payload
    },
    getErrorMsg (state, payload) {
      state.errorMsg = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
