import { createStore } from 'vuex'

export default createStore({
  state: {
    errorModal: null,
    errorMsg: '',
    applierInfo: {
      // ?使用者輸入的出生年月日
      Identification: '',
      year: '',
      month: '',
      day: '',
      cardPicked: '',
      firstGift: ''
    }
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
