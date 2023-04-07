import axios from 'axios'
import { hash } from '@/utilities/hash.js'
import termsJson from '@/assets/terms.json'

const service = {
  async getJson () {
    try {
      const url = 'https://yesgoimages.s3.ap-northeast-1.amazonaws.com/ecard/Uitlity.json'
      const res = await axios.get(url, { withCredentials: false })
      return res.data
    } catch (err) {
      alert(err)
    }
  },
  async getTermsHtml (termsName) {
    try {
      const termsArr = []
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
        const element = document.createElement('html')
        element.innerHTML = res.data
        termsHtml.push(element.querySelector('body').innerHTML)
      }
      return termsHtml
    } catch (err) {
      console.log(err)
    }
  },
  async otpGet() {
    try {
      const url = 'https://61.219.193.150/CardApply/api/Otp/Send'
    } catch (err) {
      alert(err)
    }
  },
  async terms_Submit () {
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
  async otpSend (rtn) {
    try {
      const url = 'https://61.219.193.150/CardApply/api/Otp/Check'
      const res = await axios.post(url, rtn)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  }
}

export default service
