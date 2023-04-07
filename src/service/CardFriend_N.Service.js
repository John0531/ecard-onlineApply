import axios from 'axios'
// import { hash } from '@/utilities/hash.js'
// import termsJson from '@/assets/terms.json'

const service = {
  async Chkw_PageLoad () {
    try {
      const url = 'ecardApi/CardPapper/PageLoad'
      // const url = 'https://mocki.io/v1/e781d8c7-2ccf-4ee2-9ed6-f231feab9e12'
      const res = await axios.get(url, { withCredentials: true })
      console.log(res)
      // return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async Chkw_Submit () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormFillin/PageLoad`
      // const url = 'https://mocki.io/v1/e781d8c7-2ccf-4ee2-9ed6-f231feab9e12'
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async fillin_OT_PageLoad () {
    try {
      // await axios.get(`${process.env.VUE_APP_BASE_API}/Testing?UserRolesa=2`)
      // const url = '/api/CardFormFillin/PageLoad'
      // const url = `${process.env.VUE_APP_BASE_API}/CardFormFillin/PageLoad`
      // const url = 'https://mocki.io/v1/e781d8c7-2ccf-4ee2-9ed6-f231feab9e12'
      const res = await axios.get(`${process.env.VUE_APP_BASE_API}/CardFormFillin/PageLoad`)
      console.log(res)
      // return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async fillin_OT_Submit () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormFillin/PageLoad`
      // const url = 'https://mocki.io/v1/e781d8c7-2ccf-4ee2-9ed6-f231feab9e12'
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async fillin_OT2_PageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormFillin/PageLoad`
      // const url = 'https://mocki.io/v1/e781d8c7-2ccf-4ee2-9ed6-f231feab9e12'
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  }
}

export default service
