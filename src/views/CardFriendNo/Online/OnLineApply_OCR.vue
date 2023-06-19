<template>
  <!-- 主視覺 -->
  <div class="shortKv">
    <div class="fill-shortKv topimg-OnLineApply">
        <div class="container-xl shortKv-title-4">
            <h2>線上辦卡</h2>
        </div>
    </div>
  </div>
  <!-- 主要內容 -->
    <section class="mainArea">
      <div class="container-xl">
        <div class="row justify-content-md-center pt-1 pt-md-3">
          <!-------------------檢附證件---------------------->

          <h3 class="upload_title">上傳身分證</h3>
          <Form
            v-slot="{errors}"
            ref="myForm"
          >
            <div class="row IDupload_group">
              <div class="col-12 col-md-6">
                <div class="upload_IDtxt text-center">身分證 正面</div>
                <div class="upload_items text-center">
                  <Field
                    type="file" name="upload1" id="upload1"
                    accept="image/*,.heic,.heif" class="upload"
                    data-sigil="file-input"
                    :class="{ 'is-invalid': errors['身分證'] }"
                    @change.prevent="pickFiles($event,1)"
                    @mouseup.prevent="checkIsPics"
                  />
                  <!-- <textarea name="TBupload1" id="TBupload1"style="display: none"></textarea> -->
                  <img
                  ref="resultImg1"
                  src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/ID_photo.png"
                  class="img-fluid"
                  alt="" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="upload_IDtxt text-center">身分證 背面</div>
                <div class="upload_items text-center"
                >
                  <Field
                    type="file" name="upload2" id="upload2"
                    accept="image/*,.heic,.heif" class="upload"
                    data-sigil="file-input"
                    :class="{ 'is-invalid': errors['身分證'] }"
                    @change.prevent="pickFiles($event,2)"
                    @mouseup.prevent="checkIsPics"
                  />
                  <!-- <textarea name="TBupload2" id="TBupload2" style="display: none"></textarea> -->
                  <img
                    ref="resultImg2"
                    src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/ID_photo_b.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="d-flex text-center justify-content-center  my-1">
                <div v-if="errors['身分證']" class="field-error">{{errors['身分證']}}</div>
              </div>
            </div>
            <!-------------------//檢附證件---------------------->
            <div class="text-center my-2">
              <div class="text-start d-inline-block note_text">
                ※貼心提醒：<br />
                <span class="red_text">1.上傳格式限JPG、JPEG、PNG，單一檔案上限為5MB。</span
                ><br />
                2.拍攝時請將證件擺正並立於背景乾淨之平台上，建議在您的證件後墊一張白紙。<br />
                3.手機請使用「橫向」拍攝，以避免反光、太暗，並確認影像清晰。
              </div>
            </div>
            <div class="text-center button_group">
              <button
                class="btn btn-primary btn-lg mx-1"
                type=""
                @click.prevent="sendIdentity"
              >
                送出證件
              </button>
            </div>
          </Form>
          <!---------------------------------------------------->
          <Form ref="form" id="checkForm" class="px-0"  v-slot="{ errors }" v-if="uploaded">
            <div class="px-2 mb-4 text-left">
              <small class="red_text">*請務必填寫</small>
            </div>
            <div class="blue_box mb-4">
              <div class="blue_box_bg">
                <ul class="formList-even">
                  <li class="col-12 col-md-6">
                    <label for=""
                      ><span class="red_text">* </span>身分證發證日期</label
                    >
                    <div class="d-flex align-items-center ID_date">
                      <span class="text-nowrap">民國</span>
                      <Field
                        v-model="Form.iddate.Year"
                        as="select"
                        name="iddate_Year"
                        runat="server"
                        class="birth_date form-select form-control mx-1 mx-md-2"
                        :class="{ 'is-invalid': errors['身分證發證日期'] }"
                      >
                        <option value="" selected>---</option>
                        <option v-for="n in iddateList.year" :key="n" :value="n">
                          {{ n }}
                        </option> </Field
                      >年
                      <Field
                        v-model="Form.iddate.Month"
                        as="select"
                        name="iddate_Month"
                        runat="server"
                        id="SelM"
                        class="form-select form-control mx-1 mx-md-2"
                        :class="{ 'is-invalid': errors['身分證發證日期'] }"
                      >
                        <option value="" selected>---</option>
                        <option v-for="n in iddateList.month" :key="n" :value="n">
                          {{ n }}
                        </option> </Field
                      >月
                      <Field
                        v-model="Form.iddate.Day"
                        as="select"
                        name="iddate_Day"
                        runat="server"
                        id="SelD"
                        class="form-select form-control mx-1 mx-md-2"
                        :class="{ 'is-invalid': errors['身分證發證日期'] }"
                        @blur="$custom.validate.checkDate(Form.iddate,$refs.form,'身分證發證日期')"
                      >
                        <option value="" selected>---</option>
                        <option v-for="n in iddateList.day" :key="n" :value="n">
                          {{ n }}
                        </option>
                        </Field>日
                    </div>
                    <p v-if="errors['身分證發證日期']" class="field-error">
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
                        class="form-select form-control IDCounty"
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
                        <option value="1">初發</option>
                        <option value="2">補發</option>
                        <option value="3">換發</option>
                      </Field>
                    </div>
                    <p v-if="errors['發證地點']||errors['發證類型']" class="field-error">
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
                    class="field-error"
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
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                      @change="getAddress('1');clearAddressInput()"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="homeAddr_Area"
                      v-model="Form.homeAddr.Area"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                      @change="getAddress('2');clearAddressInput()"
                    >
                      <option value="">-----</option>
                      <option v-for="item in homeAddrList.area" :key="item.varArea" :value="item.varArea">{{item.varArea}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="homeAddr_Road"
                      v-model="Form.homeAddr.Road"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                      @change="clearAddressInput()"
                    >
                      <option value="">-----</option>
                      <option v-for="item in homeAddrList.road" :key="item.varRoad" :value="item.varRoad">{{item.varRoad}}</option>
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
                      class="form-control input_number"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    /><span class="input_number_text">巷</span>
                    <Field
                      name="homeAddr_Aly"
                      type="text"
                      v-model="Form.homeAddr.Aly"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Aly)"
                      maxlength="5"
                      class="form-control input_number"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    /><span class="input_number_text">弄</span>
                    <Field
                      placeholder="必填"
                      name="homeAddr_Num"
                      type="text"
                      v-model="Form.homeAddr.Num"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Num = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Num)"
                      maxlength="5"
                      class="form-control input_number"
                      :class="{ 'is-invalid': errors['戶籍地址']||errors['戶籍地址-號'] }"
                    /><span class="input_number_text">-</span>
                    <Field
                      name="homeAddr_Of"
                      type="text"
                      v-model="Form.homeAddr.Of"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Of = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Of)"
                      maxlength="5"
                      class="form-control input_number"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    /><span class="input_number_text">號</span>
                    <Field
                      name="homeAddr_Flr"
                      type="text"
                      v-model="Form.homeAddr.Flr"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Flr = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Flr)"
                      maxlength="5"
                      class="form-control input_number"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    /><span class="input_number_text">樓</span>
                    <Field
                      name="homeAddr_Other"
                      type="text"
                      v-model="Form.homeAddr.Other"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      maxlength="100"
                      class="form-control mb-2 ms-md-0 ms-lg-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />
                  </div>
                  <p v-if="errors['戶籍地址']" class="field-error">{{ errors['戶籍地址'] }}</p>
                  <p v-if="errors['戶籍地址-號']" class="field-error">{{ errors['戶籍地址-號'] }}</p>
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

          <!---------------------modal-財力圖片修改操作 -------------->
  <div ref="CroppieModal" class="modal fade" id="noticeModal_1" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title OnLineApply">上傳身分證</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.prevent="closeCroppieModal">
                    <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
                  </button>
              </div>
              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row mb-4">
                          <div>
                            ◆<strong>原始圖片</strong><br>
                            (請框選可供辨識之大小範圍)
                            <img v-if="imgTemplateUrl" id="imgTemplate" :src="imgTemplateUrl"
                            ref="imgTemplate"
                            alt=""
                            class="img-fluid">
                          </div>
                          <div id="myIdentifident" class="myIdentifident p-0" ref="myIdentifident">
                          </div>
                      </div>
                  </div>
                  <hr>
                  <div class="text-center mb-3">
                      <div class="col-12 text-center">
                          <button
                          type="button"
                          class="btn btn-primary btn-lg"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          @click="result(this.num)"
                          >
                          確認
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
        <!---------------------modal-財力證明範例 (彈跳視窗) -------------->
      <!-- modal-範例說明 -->
    <div ref="NoticeModal" class="modal fade" id="noticeModal_2" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title OnLineApply">身分證拍照小技巧</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center py-3">
                      <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/ID_photo_m.png" class="img-fluid" alt=""></div>
                    <div class="text-center py-3">
                        <div class="text-start d-inline-block">
                            ①拍攝時手機請使用「橫向」拍攝，以避免反光。<br>
                        ②身分證之透明框邊需在拍攝畫面內、確認未被部分裁切。
                        </div>
                    </div>
                    <hr>
                    <div class="text-center mb-3">
                        <div class="col-12 text-center">
                            <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" aria-label="Close">關閉</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- modal-範例說明end -->
    <!-- modal-提醒 -->
    <div ref="NoticeModa2" class="modal fade" id="noticeModal_3" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><input id="myCheckCount" hidden></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center py-3">請您請確實拍攝/上傳身分證照片，並確認照片是否清晰、畫面完整未被裁切。</div>
                    <hr>
                    <div class="text-center mb-3">
                        <div class="col-12 text-center">
                            <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" aria-label="Close">關閉</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- modal-提醒上傳檔案限制提醒  -->
    <div ref="ImageLimit" class="modal fade" id="noticeModal_4" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><input id="myCheckCount" hidden></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center py-3">上傳格式限JPG、JPEG、PNG，單一檔案上限為5MB。</div>
                    <hr>
                    <div class="text-center mb-3">
                        <div class="col-12 text-center">
                            <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" aria-label="Close">關閉</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- API情境彈窗 -->
    <div ref="APIModal" class="modal fade" id="noticeModal_5" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><input id="myCheckCount" hidden></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center py-3" v-html="message"></div>
                    <hr>
                    <div class="text-center mb-3">
                        <div class="col-12 text-center">
                            <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" aria-label="Close">關閉</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PublicService from '@/service/Public.Service.js'
import ServiceN from '@/service/CardFriend_N.Service.js'
export default {
  data () {
    return {
      times: -1,
      num: '', // *修改完成要呈現的照片序
      identitiyPack1: {
        preViewImg: '',
        resultImg: '',
        file: null
      },
      identitiyPack2: {
        preViewImg: '',
        resultImg: '',
        file: null
      },
      imgTemplateUrl: '',
      NoticeModal: null, //* 一進畫面範例說明
      NoticeModal2: null, //* 如身分證無法辨識/模糊，跳出提醒
      ImageLimit: null, //* 提醒上傳檔案限制提醒
      CroppieModal: null, // * 財力證明圖片修改
      file: { // *上傳的檔案
        front: '', // *身分證正面
        back: '' // *身分證背面
      },
      uploaded: false, // *base64解析成功開啟判斷
      message: '',
      APIModal: null, // API提醒Modal
      // TODO sheng
      selectJson: JSON.parse(localStorage.getItem('SELECT_JSON')), // ? 下拉
      // ? 身分證資訊表單
      Form: {
        iddate: {
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
        area: [],
        road: []
      }
      // TODO sheng end
    }
  },
  watch: {
    num (n) {
      document.getElementById('myIdentifident').classList.remove('croppie-container')
    }
  },
  computed: {
    iddateList () {
      return this.$custom.validate.getDateSelect(this.Form.iddate, '民國')
    }
  },
  methods: {
    async pickFiles (e, num) {
      this.num = num
      console.log(456)
      // ? 轉base64
      const file = await e.target.files[0]
      // console.log(`檔案大小${Math.round(file.size / 1000)}k`)
      const maxAllowedSize = 5 * 1024 * 1024
      if (file?.size > maxAllowedSize || (file?.type !== 'image/jpg' && file?.type !== 'image/jpeg' && file?.type !== 'image/png')) {
        this.ImageLimit.show()
      } else {
        this.imgTemplateUrl = URL.createObjectURL(file)
        this.makeModify(file.size)
      }
      // ? 清空value
      // this.clearFiles(this.num)
    },
    async makeModify (fileSize) {
      // ?呼叫modal準備呈現
      // this.CroppieModal.show()
      this.$store.commit('changeLoading', true)
      async function modalOpen (dom, ref) {
        dom.show()
        return new Promise(resolve =>
          ref.addEventListener('shown.bs.modal', function (event) {
            resolve({
              clientWidth: document.getElementById('imgTemplate').clientWidth,
              clientHeight: document.getElementById('imgTemplate').clientHeight
            })
          })
        )
      }
      const imgTemplate = await modalOpen(this.CroppieModal, this.$refs.CroppieModal)
      if (!imgTemplate.clientWidth || !imgTemplate.clientHeight) {
        // console.log('取得圖片寬高失敗')
        imgTemplate.clientWidth = this.$refs.CroppieModal.querySelector('.modal-body').clientWidth - 20 - 32
        imgTemplate.clientHeight = (this.$refs.CroppieModal.querySelector('.modal-body').clientWidth - 20 - 32) * document.getElementById('imgTemplate').naturalHeight / document.getElementById('imgTemplate').naturalWidth
      }
      // console.log(imgTemplate.clientWidth, imgTemplate.clientHeight)
      try {
        // ?要呈現畫面的區域(在modal上)
        const croppieE = this.$refs.myIdentifident
        this[`identitiyPack${this.num}`].fileSize = fileSize
        this[`identitiyPack${this.num}`].preViewImg = new this.$custom.Croppie(croppieE, {
          viewport: {
            width: imgTemplate.clientWidth,
            height: imgTemplate.clientHeight
          },
          boundary: {
            width: imgTemplate.clientWidth + 20,
            height: imgTemplate.clientHeight + 20
          },
          showZoomer: true,
          enableResize: true,
          enableOrientation: true,
          enableZoom: true,
          enforceBoundary: true,
          mouseWheelZoom: 'ctrl'
          // maxZoom: 1
        })
        await this[`identitiyPack${this.num}`].preViewImg.bind({
          url: this.imgTemplateUrl
        })
        URL.revokeObjectURL(this.imgTemplateUrl)
        this.imgTemplateUrl = ''
        this.$store.commit('changeLoading', false)
      } catch (error) {
        alert(error)
      }
    },
    async result () {
      this.$store.commit('changeLoading', true)
      // ?在頁面上各欄位自呈現
      const resultImg = this.$refs[`resultImg${this.num}`]
      const base64View = await this[`identitiyPack${this.num}`].preViewImg.result({
        type: 'base64',
        size: 'original',
        format: 'png'
      })
      // ? 檔案大小超過 1MB 則壓縮
      let imgQuality = 1
      const compressSizeLimit = 1 * 1024 * 1024
      if (this[`identitiyPack${this.num}`].fileSize > compressSizeLimit) {
        imgQuality = 0.3
      }
      // ? 檔案大小超過 1MB 則壓縮 ends
      const base64Compression = await this[`identitiyPack${this.num}`].preViewImg.result({
        type: 'canvas',
        quality: imgQuality,
        format: 'jpeg',
        size: 'original'
      })
      this.$store.commit('changeLoading', false)
      // console.log(`瀏覽圖檔案大小${Math.round(0.75 * base64View.length / 1000)}k`)
      // console.log(`壓縮檔案大小${Math.round(0.75 * base64Compression.length / 1000)}k`)
      resultImg.src = base64View // ? 外層瀏覽圖片
      resultImg.style = `height:${this.$refs.resultImg1.clientHeight}px;`// ? 外層瀏覽圖片
      this[`identitiyPack${this.num}`].file = base64Compression // ? 打給API的資料
      // ?編輯結束將相關物件資料銷毀
      this.CroppieModal.hide()
      this.destroy()
    },
    closeCroppieModal () {
      this.destroy()
    },
    destroy () {
      this[`identitiyPack${this.num}`].preViewImg.destroy()
      this[`identitiyPack${this.num}`].preViewImg = ''
      document.getElementById('myIdentifident').innerHTML = ''
      document.getElementById('myIdentifident').classList.remove('croppie-container')
      document.querySelector(`#upload${this.num}`).value = ''
      this.num = ''
    },
    clearFiles (num) {
      // ?清空暫存檔案
      document.querySelector(`#upload${num}`).value = null
    },
    // ? 上船證件圖片
    async sendIdentity () {
      const dom = this.$refs.myForm
      dom.setErrors({}) // ? 先清除所有上次驗證的錯誤再驗證
      if (!this.identitiyPack1.file || !this.identitiyPack2.file) {
        dom.setFieldError('身分證', '身分證正反面為必填')
      }
      if (this.identitiyPack1.file && this.identitiyPack2.file) {
        // ?整理檔案
        this.file.front = this.identitiyPack1.file.split(',')[1]
        this.file.back = this.identitiyPack2.file.split(',')[1]
        // ?將身分證傳到後端
        // this.message = '資料驗證中'
        // this.APIModal.show()
        const res = await ServiceN.uploadImage(this.file)
        // this.APIModal.hide()
        if (res.data.status === '01200') {
          this.uploaded = true
          setTimeout(() => {
            document.getElementById('checkForm').scrollIntoView({
              behavior: 'smooth'
            })
          }, 500)
          const front = res.data.result.Front
          this.Form.idCounty = front.發證地點
          if (front.領補換類別 === '初發') {
            this.Form.idissue = '1'
          }
          if (front.領補換類別 === '補發') {
            this.Form.idissue = '2'
          }
          if (front.領補換類別 === '換發') {
            this.Form.idissue = '3'
          }
          this.Form.cName = front.姓名
          this.Form.iddate.Year = front.發證日期.年
          this.Form.iddate.Month = front.發證日期.月
          this.Form.iddate.Day = front.發證日期.日
          const back = res.data.result.Back.住址
          this.Form.homeAddr.County = back.縣市
          await this.getAddress('1')
          this.Form.homeAddr.Area = back.鄉鎮區
          await this.getAddress('2')
          this.Form.homeAddr.Road = back.路
          this.Form.homeAddr.Lane = back.巷
          this.Form.homeAddr.Aly = back.弄
          this.Form.homeAddr.Num = back.號
          // this.Form.homeAddr.Of = back.之號
          this.Form.homeAddr.Flr = back.樓
          this.Form.homeAddr.Other = back.室
        } else {
          this.message = `${res.data.message}(${res.data.status})`
          this.APIModal.show()
        }
      }
    },
    checkIsPics () {
      const dom = this.$refs.myForm
      dom.setFieldError('身分證', '')
      if (this.identitiyPack1.file && this.identitiyPack2.file) {
        return true
      }
      if (!this.identitiyPack1.file || !this.identitiyPack2.file) {
        if (this.identitiyPack1.preViewImg && this.identitiyPack2.preViewImg) {
          // ?一進來不驗證
          dom.setFieldError('身分證', '身分證正反面為必填')
        }
        // return false
      }
    },
    async getAddress (UseType, CallType) {
      const postData = {
        spName: 'AddressMapping',
        info: {
          UseType: UseType,
          varCity: this.Form.homeAddr.County,
          varArea: this.Form.homeAddr.Area,
          rtncode: ''
        }
      }
      const result = await PublicService.getAddress(postData)
      if (UseType === '1') {
        if (CallType !== 'session') {
          this.Form.homeAddr.Area = ''// ? 清除表單原始值
          this.Form.homeAddr.Road = ''// ? 清除表單原始值
        }
        this.homeAddrList.road = []
        this.homeAddrList.area = result.Table
      } else if (UseType === '2') {
        if (CallType !== 'session') {
          this.Form.homeAddr.Road = ''// ? 清除表單原始值
        }
        this.homeAddrList.road = result.Table
      }
    },
    clearAddressInput () {
      this.Form.homeAddr.Lane = ''
      this.Form.homeAddr.Aly = ''
      this.Form.homeAddr.Num = ''
      this.Form.homeAddr.Of = ''
      this.Form.homeAddr.Flr = ''
      this.Form.homeAddr.Other = ''
    },
    async submit () {
      this.$refs.form.setErrors({}) // ? 先清除所有上次驗證的錯誤再驗證
      // ? 驗證所有規則
      this.$custom.validate.checkDate(this.Form.iddate, this.$refs.form, '身分證發證日期')
      this.$custom.validate.CheckAddressAll(this.Form.homeAddr, this.$refs.form, '戶籍地址')
      await this.$refs.form.validate()
      // ? 驗證所有規則 end
      const errors = this.$refs.form.getErrors()
      if (Object.keys(errors).length === 0) {
        const postData = JSON.parse(JSON.stringify(this.Form))
        postData.iddate = {
          ...this.Form.iddate,
          idyear: this.Form.iddate.Year,
          idMonth: this.Form.iddate.Month,
          idDay: this.Form.iddate.Day
        }
        sessionStorage.setItem('OCR_Data', JSON.stringify(postData))
        // ? 回塞 FillinData
        const FillinData = JSON.parse(sessionStorage.getItem('FillinData'))
        if (FillinData?.OT) {
          FillinData.OT.iddate = this.Form.iddate
          FillinData.OT.idCounty = this.Form.idCounty
          FillinData.OT.idissue = this.Form.idissue
          FillinData.OT.cName = this.Form.cName
          FillinData.OT.homeAddr = this.Form.homeAddr
          sessionStorage.setItem('FillinData', JSON.stringify(FillinData))
        }
        const result = await ServiceN.ocrCheckInfo(postData)
        if (result.isSuccess) {
          result.isDepositor ? this.$router.push('/OnLineApply_Chks') : this.$router.push('/OnLineApply_n1')
        }
      } else {
        this.$custom.validate.showErrors(errors)
      }
    }
  },
  async mounted () {
    if (sessionStorage.getItem('OCR_Data')) {
      this.uploaded = true
      this.Form = JSON.parse(sessionStorage.getItem('OCR_Data'))
      const FillinData = JSON.parse(sessionStorage.getItem('FillinData'))
      if (FillinData?.OT) {
        this.Form.iddate = FillinData.OT.iddate
        this.Form.idCounty = FillinData.OT.idCounty
        this.Form.idissue = FillinData.OT.idissue
        this.Form.cName = FillinData.OT.cName
        this.Form.homeAddr = FillinData.OT.homeAddr
      }
      await this.getAddress('1', 'session')
      await this.getAddress('2', 'session')
    }
    // this.makeModify()
    this.CroppieModal = new this.$custom.bootstrap.Modal(this.$refs.CroppieModal, { backdrop: 'static' })
    // *進場先跳範例提醒
    this.NoticeModal = new this.$custom.bootstrap.Modal(this.$refs.NoticeModal, { backdrop: 'static' })
    this.NoticeModal2 = new this.$custom.bootstrap.Modal(this.$refs.NoticeModa2, { backdrop: 'static' })
    this.ImageLimit = new this.$custom.bootstrap.Modal(this.$refs.ImageLimit)
    this.APIModal = new this.$custom.bootstrap.Modal(this.$refs.APIModal)
    this.NoticeModal.show()
  }
}
</script>
