import axios from 'axios'

const service = {
  async getJson () {
    try {
      const url = 'https://yesgoimages.s3.ap-northeast-1.amazonaws.com/ecard/Uitlity.json'
      const res = await axios.get(url)
      return res.data
    } catch (err) {
      alert(err)
    }
  }
}

export default service
