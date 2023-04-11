import axios from 'axios'
// import { hash } from '@/utilities/hash.js'
// import termsJson from '@/assets/terms.json'

const service = {
  async Chkw_PageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardPapper/PageLoad`
      const res = await axios.get(url, { withCredentials: true })
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async Chkw_Submit (postData) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardPapper/Papper`
      const res = await axios.post(url, postData)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async fillin_OT_PageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormFillin/PageLoad`
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async fillin_OT_Submit (postData) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormFillin/PersonalInfo`
      const res = await axios.post(url, postData)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async fillin_OT2_PageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormPreview/Preview`
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async otherCardholderPageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OtherCardholderVerification/PageLoad`
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async otherCardholderVerification (data) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OtherCardholderVerification/Verification`
      const res = await axios.post(url, data)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async otherDepositorPageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OtherCardholderVerification/PageLoad`
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async cardSendApply () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardSendApply/CardSendApply`
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  },
  async uploadImage (file) {
    try {
      const data = JSON.stringify(file)
      console.log(data)
      const url = `${process.env.VUE_APP_BASE_API}/OCR/UploadImage`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, data, options)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  }
}

export default service
