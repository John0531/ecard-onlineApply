<template>
  <!--nav end-->
  <!-- 主視覺 -->
  <div class="shortKv">
    <div class="fill-shortKv topimg-OnLineApply">
      <div class="container-xl shortKv-title-4">
        <h2>線上辦卡</h2>
      </div>
    </div>
  </div>
  <!-- 主要內容 -->
  <Form :validation-schema="customSchema" @submit="onSubmit" @invalid-submit="onInvalidSubmit" v-slot="{ errors }" ref="addressForm">
    <section class="mainArea">
      <div class="container-xl">
        <div class="row justify-content-md-center pt-1 pt-md-3">
          <div class="mb-4 text-left OnLineApply_pl">
            <strong>申請人基本資料確認及更新作業（空值欄位請一併更新）</strong>
          </div>
          <div class="formGroup">

            <ul class="formList-even">
              <li class="col-12 col-md-6">
                <label for="">身分證字號</label>
                <div class="form-text">A12345****</div>
              </li>
              <li class="col-12 col-md-6">
                <label for="">出生日期</label>
                <div class="form-text">1981/12/25</div>
              </li>
              <li class="col-12 col-md-6">
                <label for="">1.中文姓名</label>
                <div class="form-text">ubot@ubot.com.tw</div>
              </li>
              <li class="col-12 col-md-6">
                <label for="">2.戶籍地址：</label>
                <div class="d-flex flex-wrap">
                  <div class="form_Apply_txt">台北市內湖區瑞光路399號5樓</div>
                </div>
              </li>
              <li class="col-12 col-md-6">
                <label for="">3.出生地</label>
                <Field
                  name="出生地"
                  as="select"
                  runat="server"
                  id=""
                  class="form-select form-control"
                  type="select"
                  :class="{ 'is-invalid': errors['出生地'] }"
                  v-model="onLineApply_Fillin_Card.birthPlace"
                >
                  <option
                    v-for="birthArea in option.birthPlace"
                    :key="birthArea.SORT"
                    :value="birthArea.VALUE"
                  >
                    {{ birthArea.SHOW }}
                  </option>
                </Field>
              </li>
              <li class="col-12 col-md-6">
                <label for="">4.國籍</label>
                <Field
                  name="國籍"
                  as="select"
                  runat="server"
                  id=""
                  class="form-select form-control"
                  v-model="onLineApply_Fillin_Card.citizenShip"
                >
                  <option
                    v-for="national in option.citizenShip"
                    :key="national.SORT"
                    :value="national.VALUE"
                  >
                    {{ national.SHOW }}
                  </option>
                </Field>
              </li>
              <li class="col-12 col-md-6">
                <label for="">5.職業別</label>
                <div class="d-flex flex-wrap flex-md-nowrap align-items-center" :class="{ 'is-invalid':  errors['職業別的其他']}">
                  <Field
                    name="職業別"
                    runat="server"
                    id=""
                    as="select"
                    class="form-select form-control me-1"
                    v-model="onLineApply_Fillin_Card.jobSort"
                    value="jobSort"
                    :class="{ 'is-invalid': errors['職業別']}"
                  >
                    <option
                      v-for="jobType in option.jobSort"
                      :key="jobType.SORT"
                      :value="jobType.VALUE"
                    >
                      {{ jobType.SHOW }}
                    </option>
                  </Field>
                  <div class="d-flex align-items-center">
                    <span class="text-nowrap">其他</span>
                    <Field
                      name="職業別的其他"
                      type="text"
                      placeholder=" "
                      class="form-control other_input ms-1 my-2 my-md-0 "
                      :class="{ 'is-invalid':  errors['職業別的其他'], 'form-control':true}"
                      :validateOnChange="true"
                    />
                  </div>
                </div>
                <span style="color: #db0031;font-size: 1em !important;">{{ errors['職業別的其他'] }}</span>
              </li>
              <li class="col-12 col-md-6">
                <label for="">6.職級別</label>
                <Field
                  name="職級別"
                  as="select"
                  runat="server"
                  class="form-select form-control"
                  v-model="onLineApply_Fillin_Card.jobLevel"
                >
                  <option v-for="job in option.jobLevel" :key="job.SORT" :value="job.VALUE">
                    {{ job.SHOW }}
                  </option>
                </Field>
              </li>
              <li class="col-12 col-md-6">
                <label for="">7.主要所得及資金來源</label>
                <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                  <Field
                    name="主要所得及資金來源"
                    as="select"
                    runat="server"
                    id=""
                    class="form-select form-control me-1"
                    v-model="onLineApply_Fillin_Card.incomeOptions"
                  >
                    <option
                      v-for="incomes in option.incomeOptions"
                      :key="incomes.SORT"
                      :value="incomes.VALUE"
                    >
                      {{ incomes.SHOW }}
                    </option>
                  </Field>
                  <div class="d-flex align-items-center">
                    <span class="text-nowrap">其他</span>
                    <Field
                      name="主要所得及資金來源的其他"
                      type="text"
                      :class="{ 'is-invalid':  errors['主要所得及資金來源的其他'], 'form-control':true}"
                      class="form-control other_input ms-1 my-2 my-md-0"
                      :validateOnChange="true"
                    />
                  </div>
                </div>
                <span style="color: #db0031;font-size: 1em !important;">{{ errors['主要所得及資金來源的其他'] }}</span>
              </li>
            </ul>
          </div>
          <!-------------------檢附證件---------------------->
          <div class="">
            <h3 class="upload_title mt-5">檢附身分證</h3>
            <div class="text-md-center mb-3">
              <span class="d-block red_text"
                >※上傳格式限JPG及GIF檔，單一檔案上限為5MB。</span
              >
            </div>
            <div class="row upload_group">
              <div class="col-12 col-md-6">
                <div class="upload_items text-center">
                  <img
                    src="@/assets/images/form/upload_photo.png"
                    class="img-fluid"
                    alt=""
                  />
                  <Field
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
                <div class="upload_IDtxt text-center">身分證正面</div>
              </div>
              <div class="col-12 col-md-6">
                <div class="upload_items text-center">
                  <img
                    src="@/assets/images/form/upload_photo.png"
                    class="img-fluid"
                    alt=""
                  />
                  <Field
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
                <div class="upload_IDtxt text-center">身分證反面</div>
              </div>
            </div>
          </div>
          <!-------------------//檢附證件---------------------->
          <div>
            <ul class="formList-even">
              <li class="col-12 col-md-6">
                <label for=""><span class="red_text">* </span>身分證發證日期</label>
                <div class="d-flex align-items-center">
                  <span class="text-nowrap">民國</span>
                  <Field
                    name="年"
                    as="select"
                    runat="server"
                    v-model="onLineApply_Fillin_Card.cardIssue.year"
                    class="form-select form-control mx-1 mx-md-2"
                    :class="{ 'is-invalid': errors['年'] }"
                    :placeholder="'-----'"
                  >
                    <option v-for="item in taiwanYearOptions" :key="item.value" :value="item.value">{{item.label}}</option>
                  </Field>年
                  <Field
                    name="月"
                    as="select"
                    runat="server"
                    id="SelM"
                    class="form-select form-control mx-1 mx-md-2"
                    v-model="onLineApply_Fillin_Card.cardIssue.month"
                    :class="{ 'is-invalid': errors['月'] }"
                  >
                    <option v-for="item in monthOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
                   </Field
                  >月
                  <Field
                    name="日"
                    as="select"
                    runat="server"
                    id="SelD"
                    class="form-select form-control mx-1 mx-md-2"
                    v-model="onLineApply_Fillin_Card.cardIssue.day"
                    :class="{ 'is-invalid': errors['日'] }"
                  >
                    <option v-for="item in dayOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
                    </Field
                  >日
                </div>
                <span style="color: #db0031;font-size: 1em !important;">{{ addressErrMsg(errors) }}</span>
              </li>
              <li class="col-12 col-md-6">
                <label for="">發證地點</label>
                <div class="d-flex ID_date align-items-center">
                  <Field
                    name="發證地點縣市"
                    as="select"
                    class="form-select form-control IDCounty mr-1 mr-md-2"
                    v-model="onLineApply_Fillin_Card.idCardIssuePlace"
                    :class="{ 'is-invalid': errors['發證地點縣市'] }"
                  >
                    <option v-for="item in option.idCardIssuePlace" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                  </Field>
                  <Field
                    name="發證換補初發"
                    as="select"
                    runat="server"
                    class="form-select form-control IDissue mx-1 mx-md-2"
                    v-model="onLineApply_Fillin_Card.idCardIssueReplacement"
                    :class="{ 'is-invalid': errors['發證換補初發'] }"
                  >
                    <option value="">-----</option>
                    <option value="1">換發</option>
                    <option value="2">補發</option>
                    <option value="3">初發</option>
                  </Field>
                </div>
                <span style="color: #db0031;font-size: 1em !important;">{{ cardErrMsg(errors) }}</span>
              </li>
            </ul>
            <div class="Apply_note_box mb-5">
              <span class="red_text"
                ><strong
                  >貼心提醒：<br />此頁信用卡留存之基本資料項目確認完成後，本行其他業務（如：存款帳戶）之客戶基本資料，將參照一併更新（排除證券、一般信託）。</strong
                ></span
              >
            </div>
          </div>
          <div class="text-center button_group">
            <button
              class="btn btn-primary btn-lg mx-1"
              type="submit"
              value=""
            >
              下一步
            </button>
          </div>
        </div>
      </div>
    </section>
  </Form>
  <!---------------modal---------------->
  <!-- modal-注意事項 -->
  <div
    class="modal fade"
    ref="noticeModal"
    id="noticeModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable act_T">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><input id="myCheckCount" hidden /></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img
              src="@/assets/images/form/close.png"
              border="0"
              alt="close"
              data-bs-dismiss="modal"
            />
          </button>
        </div>
        <div class="modal-body">
          親愛的客戶您好：<br />
          為因應洗錢防制相關法令規定，請您配合本行辦理個人基本資料確認及更新作業(如:行/職業別、主要所得及資金來源...等)，以避免可能影響您使用信用卡權益，如有疑問請進線本行客服洽詢。
          <hr />
          <div class="text-center mb-3">
            <div class="col-12 text-center">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal-注意事項end -->
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { defineRule } from 'vee-validate'

export default {
  data () {
    return {
      noticeModal: '',
      schema: {},
      onLineApply_Fillin_Card: {
        birthPlace: '', //* 出生地
        incomeOptions: '', //* 主要所得及資金來源
        citizenShip: '', //* 國籍
        jobSort: '', //* 職業別
        jobLevel: '', //* 職業級
        idCardIssueDate: '', //* 身分證發證日期
        idCardIssueReplacement: '', //* 身分證換發補發初發調查
        idCardIssuePlace: '',
        //* 發照年月日
        cardIssue: {
          year: '',
          month: '',
          day: ''
        }
      },
      option: {
        birthPlace: [],
        incomeOptions: [],
        citizenShip: [],
        jobSort: [], //* 職業別
        jobLevel: [], //* 職業級
        idCardIssueDate: [],
        idCardIssueReplacement: []
      }

    }
  },
  created () {
    this.schema = {
      出生地: 'required',
      國籍: 'required',
      職業別: 'required',
      職業別的其他: '',
      職級別: 'required',
      主要所得及資金來源: 'required',
      主要所得及資金來源的其他: '',
      年: 'customCardValid',
      月: 'customCardValid',
      日: 'customCardValid',
      發證地點縣市: 'customPlaceValid',
      發證換補初發: 'customPlaceValid'
    }
    defineRule('customCardValid', value => {
      if (this.onLineApply_Fillin_Card.cardIssue.year === '' || this.onLineApply_Fillin_Card.cardIssue.month === '' || this.onLineApply_Fillin_Card.cardIssue.day === '') {
        return '身分證發照日期為必填'
      }
      return true
    })
    defineRule('customPlaceValid', value => {
      if (this.onLineApply_Fillin_Card.idCardIssueReplacement === '' || this.onLineApply_Fillin_Card.idCardIssueReplacement === '') {
        return '發證地點為必填'
      }
      return true
    })
  },
  computed: {
    customSchema () {
      const schema = { ...this.schema }
      // ?職業別選擇其他，其他要為必填
      if (this.onLineApply_Fillin_Card.jobSort === '0') {
        schema.職業別的其他 = 'required'
      } else {
        schema.職業別的其他 = ''
      }
      // ?主要所得及資金來源選擇其他，其他要為必填
      if (this.onLineApply_Fillin_Card.incomeOptions === '9') {
        schema.主要所得及資金來源的其他 = 'required'
      } else {
        schema.主要所得及資金來源的其他 = ''
      }
      return schema
    },
    taiwanYearOptions () {
      const options = []
      const currentYear = new Date().getFullYear() - 1911 // 將西元年轉為民國年
      for (let i = currentYear; i >= Math.abs(100 - currentYear); i--) {
        options.push({ label: `${i}`, value: i })
      }
      return options
    },
    monthOptions () {
      const options = []
      for (let i = 1; i <= 12; i++) {
        options.push({ label: `${i}`, value: i })
      }
      return options
    },
    dayOptions () {
      const options = []
      const maxDays = new Date(this.onLineApply_Fillin_Card.cardIssue.year + 1911, this.onLineApply_Fillin_Card.cardIssue.month, 0).getDate() // 取得當月最大日期
      for (let i = 1; i <= maxDays; i++) {
        options.push({ label: `${i}`, value: i })
      }
      return options
    }
  },
  watch: {
    selectedYear () {
      this.updateDays()
    },
    selectedMonth () {
      this.updateDays()
    }
  },
  methods: {
    getUtilities () {
      const res = JSON.parse(localStorage.getItem('SELECT_JSON'))
      this.option.birthPlace = res.BIRTHPLACE
      this.option.incomeOptions = res.INCOME
      this.option.citizenShip = res.NATIONALITY
      this.option.jobSort = res.JOBTYPE
      this.option.jobLevel = res.JOBLV
      this.option.idCardIssuePlace = res.BIRTHPLACE
    },
    updateDays () {
      this.selectedDay = null
      this.$nextTick(() => {
        const lastDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate()
        const days = []
        for (let i = 1; i <= lastDayOfMonth; i++) {
          days.push(i)
        }
        this.$set(this, 'days', days)
      })
    },
    // ? 客製化地址錯誤訊息(頁面上顯示)
    addressErrMsg (errors) {
      const errMsgs = []
      // const keys = ['年', '月', '日']
      // for (let i = 0; i < keys.length; i++) {
      //   const key = keys[i]
      //   const value = errors[key]
      //   console.log('key', key)
      //   console.log('value', value)
      //   if (value) {
      //     errMsgs.push(value)
      //   }
      // }
      if (errors.年) {
        errMsgs.push(errors.年)
      }
      if (errors.月) {
        errMsgs.push(errors.月)
      }
      if (errors.日) {
        errMsgs.push(errors.日)
      }
      // 在陣列把重複的訊息去除(javascript distinct array), 去除重複的陣列項目
      const distinctArr = Array.from(new Set(errMsgs))
      return distinctArr.join('、')
    },
    cardErrMsg (errors) {
      const cardErrMsgs = []
      // const keys = ['年', '月', '日']
      // for (let i = 0; i < keys.length; i++) {
      //   const key = keys[i]
      //   const value = errors[key]
      //   console.log('key', key)
      //   console.log('value', value)
      //   if (value) {
      //     errMsgs.push(value)
      //   }
      // }
      if (errors.發證地點縣市) {
        cardErrMsgs.push(errors.發證地點縣市)
      }
      if (errors.發證換補初發) {
        cardErrMsgs.push(errors.發證換補初發)
      }
      // 在陣列把重複的訊息去除(javascript distinct array), 去除重複的陣列項目
      const distinctArr = Array.from(new Set(cardErrMsgs))
      return distinctArr.join('、')
    },
    onSubmit (values) {
      console.log(JSON.stringify(this.onLineApply_Fillin_Card))
      this.$router.push('/OnLineApply_Fillin_1')
    },
    // ?驗證表單
    onInvalidSubmit ({ values, errors, results }) {
      const idIssueDate = ['年', '月', '日']
      let idIssueDateKey = false
      for (const key of idIssueDate) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          idIssueDateKey = true
          break
        }
      }
      if (idIssueDateKey) {
        errors['身分證發證日期'] = this.addressErrMsg(errors)
      }
      for (const key of idIssueDate) {
        delete errors[key]
      }

      const idIssuePlace = ['發證地點縣市', '發證換補初發']
      let idIssuePlaceKey = false
      for (const key of idIssuePlace) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          idIssuePlaceKey = true
          break
        }
      }
      if (idIssuePlaceKey) {
        errors['發證地點'] = this.cardErrMsg(errors)
      }
      for (const key of idIssuePlace) {
        delete errors[key]
      }
      this.$custom.validate.showErrors(errors)
      console.log(values) // current form values
      console.log(errors) // a map of field names and their first error message
      console.log(results) // a detailed map of field names and their validation results
    }
  },
  mounted () {
    this.getUtilities()
    this.noticeModal = new bootstrap.Modal(this.$refs.noticeModal, {
      keyboard: false,
      backdrop: 'static'
    })
    this.noticeModal.show()
    this.onLineApply_Fillin_Card.birthPlace = '臺北市'
    this.onLineApply_Fillin_Card.incomeOptions = '6'
    this.onLineApply_Fillin_Card.citizenShip = 'BH' // 先預設找value的值
    this.onLineApply_Fillin_Card.jobSort = '5'
    this.onLineApply_Fillin_Card.jobLevel = '3'
    this.onLineApply_Fillin_Card.cardIssue.year = ''
    this.onLineApply_Fillin_Card.cardIssue.month = ''
    this.onLineApply_Fillin_Card.cardIssue.day = ''
    this.onLineApply_Fillin_Card.idCardIssuePlace = ''
    this.onLineApply_Fillin_Card.idCardIssueReplacement = ''
  }
}
</script>
