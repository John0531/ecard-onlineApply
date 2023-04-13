import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
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
    changeLoading (state, payload) {
      state.isLoading = payload
    },
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
