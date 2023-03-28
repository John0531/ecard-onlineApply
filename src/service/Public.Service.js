import axios from 'axios'
import { hash } from '@/utilities/hash.js'

const service = {
  async getJson () {
    try {
      const url = 'https://yesgoimages.s3.ap-northeast-1.amazonaws.com/ecard/Uitlity.json'
      const res = await axios.get(url)
      return res.data
    } catch (err) {
      alert(err)
    }
  },
  async getTermsHtml (termsArr) {
    try {
      const termsHtml = []
      for (let i = 0; i < termsArr.length; i++) {
        const url = `https://ecard.yesgogogo.com/ecard_source/${termsArr[i]}.html?${hash(8)}`
        const res = await axios.get(url)
        const element = document.createElement('html')
        element.innerHTML = res.data
        termsHtml.push(element.querySelector('body').innerHTML)
      }
      return termsHtml
    } catch (err) {
      console.log(err)
    }
  }
}

export default service
