<template>
  <div class="container">
    <div class ="row" >
      <div class="col-6">
        <div class="mb-3">
          <label for="formFile" class="form-label">上傳圖片</label>
          <input
            class="form-control uploadFile"
            multiple="multiple" accept="image/*,.heic,.heif" type="file" id="formFile"
            @change.prevent="pickFiles">
        </div>
      </div>
      <div class="col-6 justify-content-center">
        <div class="d-flex flex-column">
          <div class="myIdentifident" ref="myIdentifident">
          </div>
          <!-- <img ref="previewImg"> -->
          <p ref="base64String"></p>
        </div>
      </div>
      <div class="col-12">
        <button @click="result">result</button>
        <button @click="destroy">destroy</button>
      </div>
    </div>
  </div>
</template>

<script>
// import Croppie from 'croppie'
export default {
  data () {
    return {
      applierInfo: {
        // ?使用者輸入的出生年月日
        Identification: 'A111111111',
        year: '1955',
        month: '01',
        day: '01'
      },
      photos: [],
      preViewImage: '',
      times: -1,
      resultImg: '',
      base64String: ''
    }
  },
  methods: {
    async pickFiles (e) {
      // ?清空占存照片
      this.photos = []
      // ? 轉base64
      const reader = new FileReader()
      const file = await e.target.files[0]
      if (file) {
        await reader.readAsDataURL(file)
        setTimeout(() => {
          this.photos.push(reader.result)
          this.makeModify()
        }, 800)
      }
    },
    async makeModify (num) {
      try {
        // ?要呈現畫面的區域
        const croppieE = this.$refs.myIdentifident
        this.preViewImage = new this.$custom.Croppie(croppieE, {
          viewport: { width: 100, height: 100 },
          boundary: { width: 300, height: 300 },
          showZoomer: true,
          enableResize: true,
          enableOrientation: true,
          mouseWheelZoom: 'ctrl'
        })
        await this.preViewImage.bind({
          url: this.photos[num],
          orientation: 1
        })
      } catch (error) {
        alert(error)
      }
    },
    rotateLeft () {
      this.preViewImage.rotate(90)
    },
    rotateRight () {
      this.preViewImage.rotate(-90)
    },
    result (num) {
      const resultImg = this.$refs.resultImg
      const base64String = this.$refs.base64String
      base64String.innerHTML = this.photos[num]
      resultImg.src = this.photos[num]
    },
    destroy () {
      this.preViewImage.destroy()
      this.$refs.resultImg.src = ''
      this.$refs.base64String.innerHTML = ''
    }
  },
  mounted () {
    // this.makeModify()
  },
  unmounted () {
    this.destroy()
  }
}
</script>
