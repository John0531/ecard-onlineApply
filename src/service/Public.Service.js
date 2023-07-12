import axios from 'axios'
import { hash } from '@/utilities/hash.js'
// import termsJson from '@/assets/terms.json'
import store from '@/store'
// import DOMPurify from 'dompurify'

const service = {
  async getJson () {
    try {
      const url = `${process.env.VUE_APP_STATIC}/files/OnlineApply/Utility.json?${hash(8)}`
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
      const url = `${process.env.VUE_APP_STATIC}/terms/json/terms.json?${hash(8)}`
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
        let htmlStr = ''
        for (let j = 0; j < termsArr[i].fileName.length; j++) {
          const url = `${process.env.VUE_APP_STATIC}/terms/html/${termsArr[i].fileName[j]}.html?${hash(8)}`
          const res = await axios.get(url, { withCredentials: false })
          const safeHtml = res.data.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&#34;')
          const parser = new DOMParser()
          const doc = parser.parseFromString(safeHtml.split('&lt;/head&gt;')[1], 'text/html')
          htmlStr += doc.body.innerText
        }
        termsHtml.push(htmlStr)
      }
      return termsHtml
    } catch (err) {
    }
  },
  //* yesgogogo
  async getYesGo () {
    try {
      const url = `${process.env.VUE_APP_STATIC}/includeBlock/yesgogogo.html?${hash(8)}`
      const res = await axios.get(url, { withCredentials: false })
      const cleanHTML = res.data.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&#34;')
      var parser = new DOMParser()
      var element = parser.parseFromString(cleanHTML, 'text/html')
      return element.body.innerText
    } catch (err) {
    }
  },
  //* 年費政策
  async getYearFee (gidHtml) {
    try {
      const url = `${process.env.VUE_APP_STATIC}/html/${gidHtml}.htm?${hash(8)}`
      const res = await axios.get(url, { withCredentials: false })
      // HTML
      const regex = /<div class="cardDetail_fee">(.*?)<\/div>/s
      const htmlMatch = regex.exec(res.data.toString())
      const text = htmlMatch ? htmlMatch[0].replace('fade', '') + '</div>' : null
      const cleanHTML = text
        .toString()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&#34;')
      const parser = new DOMParser()
      const element = parser.parseFromString(cleanHTML, 'text/html')
      return element.body.innerText
    } catch (err) {
    }
  },
  async otpGet () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/Otp/Send`
      const res = await axios.get(url)
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
  async CardFormPreview () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFormPreview/Preview`
      const res = await axios.get(url)
      return res.data.result
    } catch (err) {
    }
  },
  async createPdf () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFromPDF/CreatePDF`
      const res = await axios.get(url)
      if (res.data.status === '00600') {
        return true
      } else {
        store.commit('getErrorMsg', `${res.data.message}(${res.data.status})`)
        store.state.errorModal.show()
      }
    } catch (err) {
    }
  },
  async previewPdf () {
    try {
      const url = `${process.env.VUE_APP_BASE_API}/CardFromPDF/DownloadPDF`
      const res = await axios.get(url, { responseType: 'blob' })
      return res
    } catch (err) {
      return null
    }
  },
  async CardSendApply (approvals) {
    try {
      // const data = JSON.stringify(approvals)
      const url = `${process.env.VUE_APP_BASE_API}/CardSendApply/CardSendApply`
      // const options = {
      //   headers: { 'content-type': 'application/json' }
      // }
      // const res = await axios.post(url, data, options)
      const res = await axios.post(url, approvals)
      return res
    } catch {
    }
  }
}

export default service
