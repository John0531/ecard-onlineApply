import axios from 'axios'
import store from '@/store'
import sortJson from '@/assets/json/Fillin_OT_sort.json'
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
      } else if (res.data.status === '00498') {
        // ? 後端驗證欄位填寫有誤時，前端顯示錯誤
        const errorArray = []
        res.data.result.forEach((item) => {
          sortJson.forEach((item2) => {
            if (item === item2.key) {
              errorArray.push(item2)
            }
          })
        })
        let errMsg = ''
        errorArray.forEach((item) => {
          errMsg += `*【${item.field}】 : ${res.data.message}<br>`
        })
        store.commit('getErrorMsg', errMsg)
        store.state.errorModal.show()
      } else {
        store.commit('getErrorMsg', `${res.data.message}(${res.data.status})`)
        store.state.errorModal.show()
      }
    } catch (err) {
    }
  },
  async fillin_OT2_PageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormPreview/Preview`
      const res = await axios.get(url)
      return res.data.result
    } catch (err) {
    }
  },
  async otherCardholderPageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OtherCardholderVerification/PageLoad`
      const res = await axios.get(url)
      return res
    } catch (err) {
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
      return res
    } catch (err) {
    }
  },
  async otherDepositorPageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OtherDepositorVerification/PageLoad`
      const res = await axios.get(url)
      return res
    } catch (err) {
    }
  },
  async otherDepositorVerification (data) {
    try {
      // const form = JSON.stringify(data)
      const url = `${process.env.VUE_APP_BASE_API}/OtherDepositorVerification/Verification`
      // const options = {
      //   headers: { 'content-type': 'application/json' }
      // }
      const res = await axios.post(url, data)
      return res
    } catch (err) {
    }
  },
  async DepositorPageLoad () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/DepositorVerification/PageLoad`
      const res = await axios.get(url)
      return res
    } catch (err) {
    }
  },
  async DepositorCheckTerms (data) {
    try {
      const form = JSON.stringify(data)
      const url = `${process.env.VUE_APP_BASE_API}/DepositorVerification/CheckTerms`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, form, options)
      return res
    } catch (err) {
    }
  },
  async uploadImage (file) {
    try {
      // const data = JSON.stringify(file)
      const url = `${process.env.VUE_APP_BASE_API}/OCR/UploadImage`
      // const options = {
      //   headers: { 'content-type': 'application/json' }
      // }
      const res = await axios.post(url, file)
      return res
    } catch (err) {
      return err
    }
  },
  async ocrCheckInfo (postData) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/OCR/OCRChkInfo`
      const res = await axios.post(url, postData)
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
        store.commit('getErrorMsg', `${res.data.message}(${res.data.status})`)
        store.state.errorModal.show()
        return {
          isSuccess: false
        }
      }
    } catch (err) {
    }
  },
  async getFirstGift () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/FirstGift`
      const res = await axios.get(url)
      return res
    } catch {
    }
  },
  async postFirstGift (gift) {
    try {
      // const gift = JSON.stringify(data)
      const url = `${process.env.VUE_APP_BASE_API}/FirstGift?firstGift=${gift}`
      // const options = {
      //   params: { firstGift: gift }
      // }
      // const res = await axios.post(url, null, options)
      const res = await axios.post(url, null)
      return res
    } catch {
    }
  },
  async newNewBankChk () {
    try {
      const file = {}
      const data = JSON.stringify(file)
      const url = `${process.env.VUE_APP_BASE_API}/NewNewBank/Chk`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, data, options)
      return res
    } catch (err) {
      return err
    }
  },
  async newNewBankApply (form) {
    try {
      const data = JSON.stringify(form)
      const url = `${process.env.VUE_APP_BASE_API}/NewNewBank/Apply`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, data, options)
      return res
    } catch (err) {
      return err
    }
  },
  async applyType () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/ApplyType/PageLoad`
      const res = await axios.get(url)
      return res
    } catch (err) {
      return err
    }
  }

}

export default service
