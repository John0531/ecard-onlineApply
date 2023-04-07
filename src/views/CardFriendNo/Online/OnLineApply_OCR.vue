<template>
  <div class="container">
        <div class="shortKv">
        <div class="fill-shortKv topimg-OnLineApply">
            <div class="container-xl shortKv-title-4">
                <h2>線上辦卡</h2>
            </div>
        </div>
    </div>
    <!-- //主視覺 -->
    <!-- 主要內容 -->
    <section class="mainArea">
        <div class="container-xl">
            <div class="row justify-content-md-center pt-1 pt-md-3">
                <!-------------------檢附證件---------------------->

                    <h3 class="upload_title">上傳身份證</h3>
                    <div class="row IDupload_group">
                        <div class="col-12 col-md-6">
                            <div class="upload_IDtxt text-center">身分證 正面</div>
                            <div class="upload_items text-center">
                                <img src="images/form/ID_photo.png" class="img-fluid" alt="">
                                <input type="file" name="upload1" id="upload1" accept="image/*" class="upload" data-sigil="file-input"><textarea name="TBupload1" id="TBupload1" style="display: none;"></textarea>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="upload_IDtxt text-center">身分證 背面</div>
                            <div class="upload_items text-center">
                                <img src="images/form/ID_photo_b.png" class="img-fluid" alt="">
                                <input type="file" name="upload2" id="upload2" accept="image/*" class="upload" data-sigil="file-input"><textarea name="TBupload2" id="TBupload2" style="display: none;"></textarea>
                            </div>
                        </div>

                    </div>
                <!-------------------//檢附證件---------------------->
                <div class="text-center my-2">
                    <div class="text-start d-inline-block note_text">
                        ※貼心提醒：<br>
                        <span class="red_text">1.上傳格式限JPG，單一檔案上限為3MB。</span><br>
                        2.拍攝時請將證件擺正並立於背景乾淨之平台上，建議在您的證件後墊一張白紙。<br>
                        3.手機請使用「橫向」拍攝，以避免反光、太暗，並確認影像清晰。
                    </div>
                </div>
                <div class="text-center button_group">
                    <button onclick="location.href='#'" class="btn btn-primary btn-lg mx-1" type="submit" value="">下一步</button>
                </div>
                <!---------------------------------------------------->
                <div class="mb-4 text-left"><small class="red_text">*請務必填寫</small></div>
                <div class="blue_box mb-4">
                    <div class="blue_box_bg">
                        <ul class="formList-even">
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>身分證發證日期</label>
                                <div class="d-flex align-items-center">
                                    <span class="text-nowrap">民國</span>
                                    <select name="" runat="server" class="form-select form-control mx-1 mx-md-2">
                                        <option>99</option>
                                        <option>100</option>
                                        <option>101</option>
                                        <option>102</option>
                                        <option>103</option>
                                        <option>104</option>
                                        <option>105</option>
                                        <option>106</option>
                                        <option>107</option>
                                        <option>108</option>
                                        <option>109</option>
                                        <option>110</option>
                                        <option>111</option>
                                    </select>年
                                    <select name="" runat="server" id="SelM" class="form-select form-control mx-1 mx-md-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>月
                                    <select name="" runat="server" id="SelD" class="form-select form-control mx-1 mx-md-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>日
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>發證地點</label>
                                <div class="d-flex ID_date align-items-center">
                                    <select name="" runat="server" class="form-select form-control IDCounty">
                                        <option>台北市</option>
                                        <option>新北市</option>
                                    </select>
                                    <select name="" runat="server" id="" class="form-select form-control IDissue mx-1 mx-md-2">
                                        <option>換發</option>
                                        <option>補發</option>
                                        <option>初發</option>
                                    </select>
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>中文姓名</label>
                                <input required="" name="login[id]" type="text" placeholder="" class="form-control">
                            </li>
                            <li class="col-12 col-md-6 d-none d-md-block">
                            </li>
                            <li class="col-12 col-md-12">
                                <label for=""><span class="red_text">* </span>戶籍地址</label>
                                <div class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center">
                                    <select name="" runat="server" class="form-select form-control ZIP mb-2">
                                        <option>110000</option>
                                        <option>110000</option>
                                    </select>
                                    <select name="" runat="server" id="" class="form-select form-control Area mx-1 mx-md-2 mb-2">
                                        <option>南港區</option>
                                        <option>松山區</option>
                                        <option>內湖區</option>
                                    </select>
                                    <select name="" runat="server" id="" class="form-select form-control Road mb-2">
                                        <option>忠孝東路五段</option>
                                        <option>忠孝東路五段</option>
                                        <option>忠孝東路五段</option>
                                    </select>
                                </div>
                                <div class="d-flex apply_address align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control me-1">巷
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">弄
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">-
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">號
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">樓
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control ms-1">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-center button_group">
                    <button onclick="location.href='#'" class="btn btn-primary btn-lg mx-1" type="submit" value="">確認</button>
                </div>
            </div>
        </div>
    </section>
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
          viewport: { width: 300, height: 300 },
          boundary: { width: 300, height: 300 },
          showZoomer: true,
          enableResize: true,
          enableOrientation: true,
          mouseWheelZoom: 'ctrl'
        })
        await this.preViewImage.bind({
          url: this.photos[0],
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
    result () {
      const resultImg = this.$refs.resultImg
      const base64String = this.$refs.base64String
      this.preViewImage.result('base64').then(function (base64) {
        console.log(base64)
        base64String.innerHTML = base64
        resultImg.src = base64
      })
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
