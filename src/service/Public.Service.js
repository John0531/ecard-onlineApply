import axios from 'axios'
import { hash } from '@/utilities/hash.js'
// import termsJson from '@/assets/terms.json'
import store from '@/store'

const service = {
  async getJson () {
    try {
      const url = 'https://yesgoimages.s3.ap-northeast-1.amazonaws.com/ecard/Uitlity.json'
      const res = await axios.get(url, { withCredentials: false })
      return res.data
    } catch (err) {
    }
  },
  async getAddress (postData) {
    try {
      const url = `${process.env.VUE_APP_BASE}/MW3/DB/PROC`
      const res = await axios.post(url, postData, { withCredentials: false })
      return res.data.info
    } catch (err) {
    }
  },
  async getTermsHtml (termsName) {
    try {
      const termsArr = []
      // ? 取得比對 json
      const url = 'https://ecard.yesgogogo.com/ecard_source/terms.json'
      const res = await axios.get(url, { withCredentials: false })
      if (typeof res.data === 'string') {
        store.commit('getErrorMsg', '檔案讀取有誤，請重新輸入或洽聯邦信用卡客服專線，02-25455168、07-2269393')
        store.state.errorModal.show()
        return
      }
      const termsJson = res.data
      // ? 取得比對 json end
      termsName.forEach(item1 => {
        termsJson.forEach((item2) => {
          if (item1 === item2.name) {
            termsArr.push(item2)
          }
        })
      })
      const termsHtml = []
      for (let i = 0; i < termsArr.length; i++) {
        const url = `https://ecard.yesgogogo.com/ecard_source/${termsArr[i].fileName}.html?${hash(8)}`
        const res = await axios.get(url, { withCredentials: false })
        const safeHtml = res.data.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&#34;')
        const parser = new DOMParser()
        const doc = parser.parseFromString(safeHtml.split('&lt;/head&gt;')[1], 'text/html')
        termsHtml.push(doc.body.innerText)
      }
      return termsHtml
    } catch (err) {
      console.log(err)
    }
  },
  async otpGet () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/Otp/Send`
      const res = await axios.get(url)
      console.log(res)
      return res
    } catch (err) {
    }
  },
  async terms_pageLoad () {
    const url = `${process.env.VUE_APP_BASE_API}/CardFormTerms/GetTermsInfo`
    const res = await axios.get(url)
    return res.data.result
  },
  async terms_Submit (postData) {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormTerms/Terms`
      const res = await axios.post(url, postData)
      if (res.data.status === '00500') {
        return true
      } else {
        store.commit('getErrorMsg', `${res.data.message}(${res.data.status})`)
        store.state.errorModal.show()
      }
    } catch (err) {
    }
  },
  async otpSend (code) {
    try {
      const msgCode = JSON.stringify(code)
      const url = `${process.env.VUE_APP_BASE_API}/Otp/Check`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, msgCode, options)
      console.log(res)
      return res
    } catch (err) {
    }
  },
  async showAPIMsg (Msg) {
    let APIMsg = ''
    APIMsg = Msg
    store.commit('setAPIMsg', APIMsg)
    store.state.apiModal.show()
  },
  async previewPdf () {
    try {
      const url = '/CardFromPDF/PreviewPDF'
      const res = await axios.get(url, { responseType: 'blob' })
      return res.data
    } catch (err) {
      console.log(err.response.data)
      return null
    }
  },
  async CardSendApply (approvals) {
    try {
      const data = JSON.stringify(approvals)
      const url = `${process.env.VUE_APP_BASE_API}/CardSendApply/CardSendApply`
      const options = {
        headers: { 'content-type': 'application/json' }
      }
      const res = await axios.post(url, data, options)
      console.log(res)
      return res
    } catch {
    }
  }
}

export default service
