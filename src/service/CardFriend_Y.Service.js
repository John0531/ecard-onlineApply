import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.withCredentials = true

const service = {
  async getSession () {
    try {
      const url = '/Testing?UserRolesa=1'
      const res = await axios.get(url)
      return res.data
    } catch (err) {
      console.log(err.response.data)
      return null
    }
  },
  async IdentityVerification (data, queryString = '') {
    try {
      const url = `/IdentityVerification/Confirm?${queryString}`
      const res = await axios.post(url, data)
      return res.data
    } catch (err) {
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
  }
}

export default service
