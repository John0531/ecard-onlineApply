import axios from 'axios'
// import { hash } from '@/utilities/hash.js'
// import termsJson from '@/assets/terms.json'

const service = {
  async fillin_OT_PageLoad () {
    try {
      const url = 'https://mocki.io/v1/e781d8c7-2ccf-4ee2-9ed6-f231feab9e12'
      const res = await axios.get(url)
      console.log(res)
      return res.data.result
    } catch (err) {
      alert(err)
    }
  }
}

export default service
