import axios from 'axios'
// import { hash } from '@/utilities/hash.js'
// import termsJson from '@/assets/terms.json'

const service = {
  async Chkw_PageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardPapper/PageLoad`
      const res = await axios.get(url)
      return res.data.result
    } catch (err) {

    }
  },
  async Chkw_Submit (postData) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardPapper/Papper`
      const res = await axios.post(url, postData)
      console.log(res)
      if (res.data.status === '01300') {
        return true
      }
    } catch (err) {

    }
  },
  async fillin_OT_PageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormFillin/PageLoad`
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {

    }
  },
  async fillin_OT_Submit (postData) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormFillin/PersonalInfo`
      const res = await axios.post(url, postData)
      if (res.data.status === '00400') {
        return true
      }
    } catch (err) {

    }
  },
  async fillin_OT2_PageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormPreview/Preview`
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
    }
  },
  async otherCardholderPageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OtherCardholderVerification/PageLoad`
      const res = await axios.get(url)
      console.log(res)
      return res
    } catch (err) {
      alert(err)
    }
  },
  async otherCardholderVerification (data) {
    try {
      const form = JSON.stringify(data)
      const url = `${process.env.VUE_APP_BASE_API}/OtherCardholderVerification/Verification`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, form, options)
      console.log(res)
      return res
    } catch (err) {
      alert(err)
    }
  },
  async otherDepositorPageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OtherDepositorVerification/PageLoad`
      const res = await axios.get(url)
      console.log(res)
      return res
    } catch (err) {
      alert(err)
    }
  },
  async otherDepositorVerification (data) {
    try {
      const form = JSON.stringify(data)
      const url = `${process.env.VUE_APP_BASE_API}/OtherDepositorVerification/Verification`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, form, options)
      console.log(res)
      return res
    } catch (err) {
      alert(err)
    }
  },
  async depositorVerification () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/DepositorVerification`
      const res = await axios.get(url)
      console.log(res)
      return res
    } catch (err) {
      alert(err)
    }
  },
  async cardSendApply () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardSendApply/CardSendApply`
      const res = await axios.get(url)
      console.log(res)
      return res
    } catch (err) {
      alert(err)
    }
  },
  async uploadImage (file) {
    try {
      const data = JSON.stringify(file)
      const url = `${process.env.VUE_APP_BASE_API}/OCR/UploadImage`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, data, options)
      return res
    } catch (err) {
      return err
    }
  },
  async ocrCheckInfo (postData) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OCR/OCRChkInfo`
      const res = await axios.post(url, postData)
      console.log(res)
      if (res.data.status === '00102') {
        return {
          isSuccess: true,
          isDepositor: true
        }
      } else if (res.data.status === '00103') {
        return {
          isSuccess: true,
          isDepositor: false
        }
      } else {
        return {
          isSuccess: false
        }
      }
    } catch (err) {

    }
  }
}

export default service
