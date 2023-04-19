import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.withCredentials = true

const service = {
  async IdentityVerification (data, queryString = '') {
    try {
      const url = `/IdentityVerification/Confirm?${queryString}`
      const res = await axios.post(url, data)
      // ?session全部清掉
      sessionStorage.clear()
      return res.data
    } catch (err) {
      // ?session全部清掉
      sessionStorage.clear()
      console.log(err.response.data)
      return null
    }
  },
  async getDWInformation () {
    try {
      const url = '/CardHolder/DWInformation'
      const res = await axios.get(url)
      return res.data
    } catch (err) {
      console.log(err.response.data)
      return null
    }
  },
  async postDWInformation (data) {
    try {
      const url = '/CardHolder/DWInformation'
      const res = await axios.post(url, data)
      return res.data
    } catch (err) {
      console.log(err.response.data)
      return null
    }
  },
  async getKYC () {
    try {
      const url = '/CardHolder/KYCInformation'
      const res = await axios.get(url)
      return res.data
    } catch (err) {
      console.log(err.response.data)
      return null
    }
  },
  async postKYC (data) {
    try {
      const url = '/CardHolder/KYCInformation'
      const res = await axios.post(url, data)
      return res.data
    } catch (err) {
      console.log(err.response.data)
      return null
    }
  },
  async cardApplyLoad_PageLoad_LB (GID, IDE, token) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardApplyLoad/PageLoad_LB?GID=${GID}&IDE=${IDE}&token_LB=${token}`
      const res = await axios.get(url)
      return res.data
    } catch (err) {
      console.log(err.response.data)
      return null
    }
  },
  async cardApplyLoad_PageLoad (GID, IDE) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardApplyLoad/PageLoad?GID=${GID}&IDE=${IDE}`
      const res = await axios.get(url)
      return res.data
    } catch (err) {
    }
  }
}

export default service
