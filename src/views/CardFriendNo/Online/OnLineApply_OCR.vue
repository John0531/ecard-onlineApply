<template>
  <div class="container">
    <div class ="row" >
      <div class="col-6">
        <div class="mb-3">
          <label for="formFile" class="form-label" @click.prevent="makeModify">上傳圖片</label>
          <input class="form-control uploadFile" type="file" id="formFile">
        </div>
      </div>
      <div class="col-6 justify-content-center">
        <div class="d-flex flex-column">
          <div class="myIdentifident" ref="myIdentifident">
          </div>
          <img ref="resultImg">
          <p ref="base64String"></p>
        </div>
      </div>
      <div class="col-12">
        <button @click="rotateLeft">rotateLeft</button>
        <button @click="rotateRight">rotateRight</button>
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
      image: '',
      times: -1,
      resultImg: '',
      base64String: ''
    }
  },
  methods: {
    async makeModify () {
      try {
        const croppieE = this.$refs.myIdentifident
        this.image = new this.$custom.Croppie(croppieE, {
          viewport: { width: 100, height: 100 },
          boundary: { width: 300, height: 300 },
          showZoomer: true,
          enableResize: true,
          enableOrientation: true,
          mouseWheelZoom: 'ctrl'
        })
        await this.image.bind({
          url: 'https://fakeimg.pl/250x100/ff0000/',
          orientation: 1
        })
      } catch (error) {
        console.log(error)
      }
    },
    rotateLeft () {
      this.image.rotate(90)
    },
    rotateRight () {
      this.image.rotate(-90)
    },
    result () {
      const resultImg = this.$refs.resultImg
      const base64String = this.$refs.base64String
      this.image.result('blob')
        .then(function (blob) {
          const reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onloadend = function () {
            const base64data = reader.result
            base64String.innerHTML = base64data
            resultImg.src = base64data // 顯示到頁面上
          }
        }
        )
    },
    destroy () {
      this.image.destroy()
      this.$refs.resultImg.src = ''
      this.$refs.base64String.innerHTML = ''
    }
  },
  mounted () {
    this.makeModify()
  },
  unmounted () {
    this.destroy()
  }
}
</script>
