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
                <img src="images/form/ID_photo.png" class="img-fluid" alt="" />
                <input
                  type="file"
                  name="upload1"
                  id="upload1"
                  accept="image/*"
                  class="upload"
                  data-sigil="file-input"
                /><textarea
                  name="TBupload1"
                  id="TBupload1"
                  style="display: none"
                ></textarea>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="upload_IDtxt text-center">身分證 背面</div>
              <div class="upload_items text-center">
                <img
                  src="images/form/ID_photo_b.png"
                  class="img-fluid"
                  alt=""
                />
                <input
                  type="file"
                  name="upload2"
                  id="upload2"
                  accept="image/*"
                  class="upload"
                  data-sigil="file-input"
                /><textarea
                  name="TBupload2"
                  id="TBupload2"
                  style="display: none"
                ></textarea>
              </div>
            </div>
          </div>
          <!-------------------//檢附證件---------------------->
          <div class="text-center my-2">
            <div class="text-start d-inline-block note_text">
              ※貼心提醒：<br />
              <span class="red_text">1.上傳格式限JPG，單一檔案上限為3MB。</span
              ><br />
              2.拍攝時請將證件擺正並立於背景乾淨之平台上，建議在您的證件後墊一張白紙。<br />
              3.手機請使用「橫向」拍攝，以避免反光、太暗，並確認影像清晰。
            </div>
          </div>
          <div class="text-center button_group">
            <button
              onclick="location.href='#'"
              class="btn btn-primary btn-lg mx-1"
              type="submit"
              value=""
            >
              下一步
            </button>
          </div>
          <!---------------------------------------------------->
          <Form ref="form" v-slot="{ errors }">
            <div class="mb-4 text-left">
              <small class="red_text">*請務必填寫</small>
            </div>
            <div class="blue_box mb-4">
              <div class="blue_box_bg">
                <ul class="formList-even">
                  <li class="col-12 col-md-6">
                    <label for=""
                      ><span class="red_text">* </span>身分證發證日期</label
                    >
                    <div class="d-flex align-items-center">
                      <span class="text-nowrap">民國</span>
                      <Field
                        v-model="Form.idx.Year"
                        as="select"
                        name="idx_Year"
                        runat="server"
                        class="form-select form-control mx-1 mx-md-2"
                        :class="{ 'is-invalid': errors['身分證發證日期'] }"
                        @blur="$custom.validate.checkDate(Form.idx,$refs.form,'身分證發證日期')
                        "
                      >
                        <option value="" selected>---</option>
                        <option v-for="n in idxList.year" :key="n" :value="n">
                          {{ n }}
                        </option> </Field
                      >年
                      <Field
                        v-model="Form.idx.Month"
                        as="select"
                        name="idx_Month"
                        runat="server"
                        id="SelM"
                        class="form-select form-control mx-1 mx-md-2"
                        :class="{ 'is-invalid': errors['身分證發證日期'] }"
                        @blur="
                          $custom.validate.checkDate(
                            Form.idx,
                            $refs.form,
                            '身分證發證日期'
                          )
                        "
                      >
                        <option value="" selected>---</option>
                        <option v-for="n in idxList.month" :key="n" :value="n">
                          {{ n }}
                        </option> </Field
                      >月
                      <Field
                        v-model="Form.idx.Day"
                        as="select"
                        name="idx_Day"
                        runat="server"
                        id="SelD"
                        class="form-select form-control mx-1 mx-md-2"
                        :class="{ 'is-invalid': errors['身分證發證日期'] }"
                        @blur="
                          $custom.validate.checkDate(
                            Form.idx,
                            $refs.form,
                            '身分證發證日期'
                          )
                        "
                      >
                        <option value="" selected>---</option>
                        <option v-for="n in idxList.day" :key="n" :value="n">
                          {{ n }}
                        </option> </Field
                      >日
                    </div>
                    <p class="text-danger ms-2 mt-1">
                      {{ errors["身分證發證日期"] }}
                    </p>
                  </li>
                  <li class="col-12 col-md-6">
                    <label for=""
                      ><span class="red_text">* </span>發證地點</label
                    >
                    <div class="d-flex ID_date align-items-center">
                      <Field
                        v-model="Form.idCounty"
                        as="select"
                        rules="required"
                        :class="{ 'is-invalid': errors['發證地點'] }"
                        name="發證地點"
                        runat="server"
                        class="form-select form-control IDCounty mr-1 mr-md-2"
                      >
                        <option
                          v-for="item in selectJson.CountyID"
                          :key="item.SORT"
                          :value="item.VALUE"
                        >
                          {{ item.SHOW }}
                        </option>
                      </Field>
                      <Field
                        v-model="Form.idissue"
                        as="select"
                        rules="required"
                        :class="{ 'is-invalid': errors['發證類型'] }"
                        name="發證類型"
                        runat="server"
                        class="form-select form-control IDissue mx-1 mx-md-2"
                      >
                        <option value="" selected>-----</option>
                        <option :value="1">初發</option>
                        <option :value="2">補發</option>
                        <option :value="3">換發</option>
                      </Field>
                    </div>
                    <p class="text-danger ms-2 mt-1">
                      {{
                        errors["發證地點"]
                          ? errors["發證地點"]
                          : errors["發證類型"]
                      }}
                    </p>
                  </li>
                  <li class="col-12 col-md-6">
                    <label for=""
                      ><span class="red_text">* </span>中文姓名</label
                    >
                    <Field
                    v-model="Form.cName"
                    maxlength="20"
                    rules="required|checkChinese"
                    :class="{ 'is-invalid': errors['中文姓名'] }"
                    name="中文姓名"
                    type="text"
                    placeholder=""
                    class="form-control"
                  />
                  <ErrorMessage
                    name="中文姓名"
                    class="text-danger ms-2"
                  />
                  </li>
                  <li class="col-12 col-md-6 d-none d-md-block"></li>
                  <li class="col-12 col-md-12">
                    <label for=""
                      ><span class="red_text">* </span>戶籍地址</label
                    >
                    <div
                    class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                  >
                    <Field
                      as="select"
                      name="homeAddr_County"
                      v-model="Form.homeAddr.County"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                      @change="getAddress('1')"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="homeAddr_Area"
                      v-model="Form.homeAddr.Area"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    >
                      <option value="" selected>-----</option>
                      <option value="松山區">松山區</option>
                      <option value="內湖區">內湖區</option>
                    </Field>
                    <Field
                      as="select"
                      name="homeAddr_Road"
                      v-model="Form.homeAddr.Road"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    >
                      <option value="" selected>-----</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                    </Field>
                  </div>
                  <div class="d-flex apply_address align-items-center">
                    <Field
                      name="homeAddr_Lane"
                      type="text"
                      v-model="Form.homeAddr.Lane"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Lane = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Lane)"
                      maxlength="5"
                      class="form-control me-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />巷
                    <Field
                      name="homeAddr_Aly"
                      type="text"
                      v-model="Form.homeAddr.Aly"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Aly)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />弄
                    <Field
                      name="homeAddr_Num"
                      type="text"
                      v-model="Form.homeAddr.Num"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Num = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Num)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />-
                    <Field
                      name="homeAddr_Of"
                      type="text"
                      v-model="Form.homeAddr.Of"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Of = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Of)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />號
                    <Field
                      name="homeAddr_Flr"
                      type="text"
                      v-model="Form.homeAddr.Flr"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Flr = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Flr)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />樓
                    <Field
                      name="homeAddr_Other"
                      type="text"
                      v-model="Form.homeAddr.Other"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      maxlength="100"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />
                  </div>
                  <p class="text-danger ms-2 mt-1">{{ errors['戶籍地址'] }}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-center button_group">
              <button
                @click.prevent="submit"
                class="btn btn-primary btn-lg mx-1"
              >
                確認
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PublicService from '@/service/Public.Service.js'
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
      base64String: '',
      selectJson: JSON.parse(localStorage.getItem('SELECT_JSON')), // ? 下拉
      // ? 身分證資訊表單
      Form: {
        idx: {
          Year: '',
          Month: '',
          Day: ''
        },
        idCounty: '',
        idissue: '',
        cName: '',
        homeAddr: {
          County: '',
          Area: '',
          Road: '',
          Lane: '',
          Aly: '',
          Num: '',
          Of: '',
          Flr: '',
          Other: ''
        }
      },
      homeAddrList: {
        county: [],
        area: []
      }
    }
  },
  computed: {
    idxList () {
      return this.$custom.validate.getDateSelect(this.Form.idx, '民國')
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
    },
    async getAddress (UseType) {
      const postData = {
        spName: 'AddressMapping',
        info: {
          UseType: UseType,
          varCity: this.Form.homeAddr.County,
          varArea: this.Form.homeAddr.Area,
          rtncode: ''
        }
      }
      await PublicService.getAddress(postData)
    },
    async submit () {
      this.$refs.form.setErrors({}) // ? 先清除所有上次驗證的錯誤再驗證
      // ? 驗證所有規則
      this.$custom.validate.checkDate(this.Form.idx, this.$refs.form, '身分證發證日期')
      this.$custom.validate.CheckAddressAll(this.Form.homeAddr, this.$refs.form, '戶籍地址')
      await this.$refs.form.validate()
      // ? 驗證所有規則 end
      const errors = this.$refs.form.getErrors()
      if (Object.keys(errors).length === 0) {
        sessionStorage.setItem('OCR_Data', JSON.stringify(this.Form))
        this.$router.push('/OnLineApply_n1')
      } else {
        this.$custom.validate.showErrors(errors)
      }
    }
  },
  mounted () {
    if (sessionStorage.getItem('OCR_Data')) {
      this.Form = JSON.parse(sessionStorage.getItem('OCR_Data'))
    }
    // this.makeModify()
  },
  unmounted () {
    this.destroy()
  }
}
</script>
