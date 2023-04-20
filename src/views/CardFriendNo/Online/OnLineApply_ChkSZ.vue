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
          <Form
            v-slot="{errors}"
            ref="myForm"
          >
            <div class="row justify-content-md-center pt-1 pt-md-3">
              <div class="formGroup">
                <ul class="formList formApply">
                    <li class="form-group">
                        <label class="label" for="">申請人身份證號</label>
                        <div class="form-text">{{oid}}</div>
                    </li>
                    <li class="form-group">
                        <label class="label" for="">西元出生年月日</label>
                        <div class="form-text">{{brthDt}}</div>
                    </li>
                  <!-- <li class="col-12 align-items-start mb-0">
                      <label for="">申請人身分證字號</label>
                      <div class="d-flex flex-column mb-1">
                          <Field
                          v-model="applierInfo.Identification"
                          name="身分證字號"
                          type="text" maxlength="10"
                          placeholder="限正卡持卡人"
                          :class="{ 'is-invalid': errors['身分證字號'] }"
                          class="formApply_form_control form-control "
                          @blur="applierInfo.Identification = $custom.validate.watchToUpper(applierInfo.Identification)"
                          rules="checkId"
                          disabled
                          />
                          <div class="d-flex text-center invalid-feedback my-1">
                              {{errors['身分證字號']}}
                          </div>
                      </div>
                  </li>
                  <li class="col-12 align-items-start">
                      <label for="input1">西元出生年月日</label>
                      <div class="d-flex flex-column mb-1">
                          <div class="d-flex align-items-center">
                              <div>
                                  <Field
                                  as="select" name="年"
                                  rules="required"
                                  class="form-text"
                                  :class="{ 'is-invalid': errors['年'] }"
                                  :validateOnChange="true"
                                  v-model="applierInfo.year"
                                  @blur="getYearMonth"
                                  disabled
                                  >
                                  <option v-for="year in this.dateList.yearList" :value="year" :key="year+1">
                                  {{year}}
                                  </option>
                                  </Field>
                              </div>年
                              <div>
                                  <Field
                                  as="select" name="月"
                                  rules="required"
                                  :class="{ 'is-invalid': errors['月'] }"
                                  class="form-select form-control"
                                  :validateOnChange="true"
                                  v-model="applierInfo.month" @change="getDay"
                                  >
                                  <option v-for="month in dateList.monthList" :value="month" :key="month+1">
                                  {{month}}
                                  </option>
                                  </Field>
                              </div>月
                              <div>
                                  <Field
                                  as="select" name="日"
                                  rules="required"
                                  :class="{ 'is-invalid': errors['日'] }"
                                  class="form-select form-control"
                                  :validateOnChange="true"
                                  v-model="applierInfo.day"
                                  >
                                  <option v-for="date in dateList.dayList" :value="date" :key="date+1">
                                  {{date}}
                                  </option>
                                  </Field>
                              </div>日
                          </div>
                          <div class="d-flex text-center invalid-feedback my-1">
                            <span v-if="errors['年'] || errors['月'] || errors['日']">
                              出生年月日為必填
                            </span>
                          </div>
                      </div>
                  </li> -->
                </ul>
              </div>
                <div class="Apply_Chk mb-5">
                    <div class="col-12 Apply_banksGroup">
                        您可使用以下指定銀行之存款帳戶進行身分驗證(僅用於身分驗證，不能當財力證明使用)<br>
                        <span class="blue_text">指定銀行：臺灣銀行、臺灣土地銀行、合作金庫商業銀行、第一商業銀行、華南商業銀行、彰化商業銀行、上海商業儲蓄銀行、台北富邦商業銀行、國泰世華商業銀行、高雄銀行、兆豐國際商業銀行、全國農業金庫、花旗(台灣)商業銀行、王道商業銀行、臺灣中小企業銀行、渣打國際商業銀行、台中商業銀行、京城商業銀行、瑞興商業銀行、華泰商業銀行、臺灣新光商業銀行、陽信商業銀行、基隆第一信用合作社、板信商業銀行、淡水第一信用合作社、新竹第三信用合作社、台中市第二信用合作社、三信商業銀行、彰化第六信用合作社、花蓮第二信用合作社、高雄第三信用合作社、農金資訊股份有限公司、遠東國際商業銀行、元大商業銀行、永豐商業銀行、玉山商業銀行、凱基商業銀行、星展(台灣)商業銀行、台新國際商業銀行、日盛國際商業銀行、安泰商業銀行、中國信託商業銀行、財團法人農漁會南區資訊中心。</span><br>
                        ※若您僅有數位存款帳戶（含純網銀），則無法進行身分驗證。
                    </div>
                </div>
                <div class="formGroup">
                    <ul class="formList Apply_ChkSZ">
                        <li class="col-12 align-items-start">
                            <label for="">銀行代號</label>
                            <div class="d-flex flex-column">
                              <Field
                              v-model="chkszData.obakCode"
                              as="select" name="銀行代號"
                              class="form-select form-control"
                              :class="{ 'is-invalid': errors['銀行代號'] }"
                              :validateOnChange="true"
                              rules="required"
                              >
                                  <!-- <option  value="" selected>請選擇</option> -->
                                  <option v-for="bank in bankCodes" :value="bank.VALUE" :key="bank+1" >
                                    {{bank.SHOW}}
                                  </option>
                              </Field>
                              <div class="col-12 invalid-feedback ">
                                {{errors['銀行代號']}}
                              </div>
                            </div>
                        </li>
                        <li class="col-12 align-items-start">
                            <label for="" class="mt-1">銀行帳號</label>
                            <div class="d-flex flex-column">
                                <Field
                                v-model="chkszData.oacctNo"
                                id="account" name="account"
                                type="text" maxlength="14"
                                class="form-control"
                                :class="{ 'is-invalid': errors['銀行帳號'] }"
                                :validateOnChange="true"
                                @keyup="chkszData.oacctNo = $custom.validate.OnlyNumPress(chkszData.oacctNo)"
                                @change="$custom.validate.chkKeyValueLength(chkszData.oacctNo,$refs.myForm,'銀行帳號','10','14')"
                                />
                                <span class="not_text">請填寫臨櫃開立之存款帳戶(不含數位存款帳戶)</span>
                                <div class="d-flex text-center invalid-feedback my-1" >
                                  {{errors['銀行帳號']}}
                                </div>
                            </div>
                        </li>
                        <li class="col-12 align-items-start">
                            <label for="" class="mt-1">行動電話</label>
                            <div class="d-flex flex-column">
                                <Field
                                v-model="chkszData.omobilePhone"
                                id="phone" name="行動電話"
                                type="text" maxlength="10"
                                class="form-control"
                                :class="{ 'is-invalid': errors['行動電話'] }"
                                @keyup="chkszData.omobilePhone = $custom.validate.OnlyNumPress(chkszData.omobilePhone)"
                                @focus="chkszData.omobilePhone=''"
                                rules="checkPhone"
                                />
                                <span class="not_text">請填寫帳戶申請時之行動電話，以利資訊驗證</span>
                                <div class="d-flex text-center invalid-feedback my-1" >
                                  {{errors['行動電話']}}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-------------------本人已詳閱---------------------->
                <div class="terms-group">
                    <div class="terms">
                        <Field
                        v-model="agreementAll"
                        id="checkbox1" name="服務申請約定條款"
                        type="checkbox"
                        class=" checkimg position-absolute"
                        :class="{ 'is-invalid': errors['服務申請約定條款'] }"
                        @click="checkAgreement"
                        rules="required"
                        />
                        <label for="checkbox1">
                          <div  class="d-flex flex-wrap">
                            <div class="flex-shrink-0">同意，本人對</div>
                              <div class="flex-shrink-0" >
                                <template v-for="terms in termsFile" :key="terms+1">
                                  「<a href="#" @click.prevent="checkAgreement" >
                                    <u>{{terms}}</u>
                                  </a>」
                                </template>
                              </div>
                            <div class="flex-shrink-0">內容。(請務必勾選)</div>
                          </div>
                        </label>
                        <div class="d-flex text-center invalid-feedback my-1" >
                          {{errors['服務申請約定條款']}}
                        </div>
                    </div>
                    <div class="terms">
                        <Field
                        v-model="checkagree"
                        id="agree1" name="個資使用同意"
                        type="checkbox"
                        class=" checkimg position-absolute"
                        :class="{ 'is-invalid': errors['個資使用同意'] }"
                        @click="toggle"
                        value="agree"
                        rules="required"
                        />
                        <label for="agree1">同意，聯邦商業銀行股份有限公司將本人之基本資料(含身分證字號、銀行代號、銀行帳號、行動電話等資料)，透過信用卡授權轉接財金公司「跨行金融帳戶資訊核驗」進行身分認證等相關作業。</label>
                        <div class="d-flex text-center invalid-feedback my-1">
                          {{errors['個資使用同意']}}
                        </div>
                    </div>
                </div>
                <!-------------------//本人已詳閱---------------------->
                <div class="text-center button_group">
                    <button
                    class="btn btn-primary btn-lg mx-1"
                    type=""
                    @click.prevent="applySubmit"
                    >
                    下一步
                    </button>
                </div>
            </div>
          </Form>
      </div>
  </section>
  <!-- agreeModal -->
  <div ref="agreeModal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel-1">請向下滾動，仔細閱讀整份同意書所有內容<input id="myCheckCount" hidden>
                  </h5>
                  <button type="button" class="btn-close" aria-label="Close" @click="this.agreeModal.hide();">
                    <img
                      src="@/assets/images/close.png" border="0" alt="close">
                  </button>
              </div>
              <div class="modal-body">
                <template v-for="(item, index) in termsHtml" :key="item+1" >
                  <div
                  :ref="`termBox${index+1}`"
                  :id="`terms_box_${index+1}`"
                  class="terms_box"
                  @scroll="scrollEvent($event, index + 1)"
                  >
                    <div v-html="item">
                    </div>
                  </div>
                  <div :id="`button_terms_${index+1}`" class="button_terms">
                    <input
                    :ref="`button_termsOpt_${index+1}`"
                    :id="`button_termsOpt_${index+1}`"
                    type="checkbox"
                    v-model="agreement"
                    :value="`agree${index+1}`"
                    disabled=""
                    >
                    <label
                    :id="`read_${index+1}`"
                    :for="`button_termsOpt_${index+1}`"
                    >
                    我已詳細閱讀。(請勾選)
                    </label>
                  </div>
                </template>
              </div>
              <div class="modal-footer">
                  <div class="col-12 text-center">
                      <button type="button" class="btn btn-primary btn-lg" @click="checkTotal">確定</button>
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
      dateList: {
        // ?日期選單
        yearList: [],
        monthList: [],
        dayList: []
      },
      applierInfo: {
        // ?使用者輸入的出生年月日
        Identification: 'A111111111',
        year: '1955',
        month: '01',
        day: '01'
      },
      bankCodes: {
      },
      brthDt: '',
      oid: '',
      bankCode: '', // ? 銀行代號
      account: '', // ?銀行帳戶
      phone: '',
      agreeModal: '', // ?同意書modal
      agreement: [], // ? Modal上同意欄
      agreementAll: false, // ?已同意Modal上所有申請條款
      checkagree: false, // ?同意個資聲明
      termsFile: [],
      termsHtml: [],
      chkszData:
      {
        obakCode: '',
        oacctNo: '',
        omobilePhone: '',
        agreeTerms: true,
        personalDataAuthorized: true
      }
    }
  },
  methods: {
    scrollEvent (event, num) {
      if (event.target.scrollTop >= event.target.scrollHeight - event.target.offsetHeight - 50) {
        document.querySelector(`#button_termsOpt_${num}`).removeAttribute('disabled')
        document.querySelector(`#read_${num}`).classList.add('text-checked')
      }
    },
    checkAgreement () {
      this.agreeModal.show()
      const ck = document.querySelector('#checkbox1')
      if (this.agreement.length !== this.termsFile.length) {
        ck.checked = false
        return
      }
      this.agreementAll = true
      ck.checked = true
    },
    checkTotal () {
      if (this.agreement.length !== this.termsFile.length) {
        this.$swal.fire({
          title: '您尚有部份條款未勾選，請詳閱並同意全部條款，以確保自身權益！',
          showConfirmButton: false,
          timer: 2500
        })
        return
      }
      this.agreementAll = true
      const ck = document.querySelector('#checkbox1')
      ck.checked = true
      this.agreeModal.hide()
    },
    toggle () {
      const ck = document.querySelector('#agree1').checked
      if (ck) {
        this.checkagree = true
      } else {
        this.checkagree = false
      }
    },
    getYearMonth () {
      // ? 產生生日"年"、"月"選單
      const year = new Date()
      for (let i = 1930; i < year.getFullYear() + 1; i++) {
        this.dateList.yearList.push(i)
      }
      for (let i = 1; i < 13; i++) {
        if (i < 10) {
          this.dateList.monthList.push('0' + i)
        } else {
          this.dateList.monthList.push(i)
        }
      }
      // ? 建立預設日期
      this.applierInfo.year = this.dateList.yearList[0]
      this.applierInfo.month = this.dateList.monthList[0]
      this.getDay()
    },
    getDay () {
      // ? 產生生日"日"選單
      this.dateList.dayList = []
      // ?清空西元年，月日一併清空
      if (!this.applierInfo.year) {
        this.applierInfo.month = ''
        this.applierInfo.day = ''
        return
      }
      // ?清空月，日一併清空
      if (!this.applierInfo.month) {
        this.applierInfo.day = ''
        return
      }
      const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (this.applierInfo.year % 4 === 0) {
        days[1] = 29
      }
      for (let i = 1; i < days[parseInt(this.applierInfo.month) - 1] + 1; i++) {
        if (i < 10) {
          this.dateList.dayList.push('0' + i)
        } else {
          this.dateList.dayList.push(i)
        }
      }
      // ?月對應的天數如比前一個天數少，清空日
      if (this.dateList.dayList.length < this.applierInfo.day) {
        this.applierInfo.day = ''
      }
    },
    async applySubmit () {
      this.$custom.validate.chkKeyValueLength(this.chkszData.oacctNo, this.$refs.myForm, '銀行帳號', '10', '14')
      const collection = await this.$refs.myForm.validate()
      collection.errors = this.$refs.myForm.getErrors()
      if (Object.keys(collection.errors).length === 0) {
        // ** ===全部通過前往下一頁===
        // ** ===資料整理===
        this.chkszData.personalDataAuthorized = this.checkagree
        this.chkszData.agreeTerms = this.agreementAll
        const res = await ServiceN.otherDepositorVerification(this.chkszData)
        console.log(res)
        if (res.status === 200) {
          if (res.data.message) {
            PublicService.showAPIMsg(res.data.message)
          }
          if (res.data.status === '00000') {
            setTimeout(() => {
              this.$router.push('/OnLineApply_ChkSZ_OTP')
            }, 1000)
          }
        }
      } else {
        // ** ===錯誤訊息彙整===
        this.$custom.validate.showErrors(collection.errors)
      }
    }
  },
  watch: {
    agreement (n) {
      if (n.length === this.termsFile.length) {
        this.agreementAll = true
      } else {
        this.agreementAll = false
      }
    },
    checkagree (n) {
      if (n === 'agree') {
        this.checkagree = true
      } else if (n) {
        this.checkagree = true
      } else {
        this.checkagree = false
      }
    }
  },
  async mounted () {
    const res = await ServiceN.otherDepositorPageLoad()
    const data = res.data.result
    sessionStorage.setItem('Apply_N_Type', 'Online')
    console.log(data)
    this.brthDt = data.brthDt
    this.oid = data.oid
    this.termsFile = data.termsList
    this.agreeModal = await new this.$custom.bootstrap.Modal(this.$refs.agreeModal, { backdrop: 'static' })
    const bank = JSON.parse(localStorage.getItem('SELECT_JSON'))
    this.bankCodes = bank.BANK
    this.termsHtml = await PublicService.getTermsHtml(this.termsFile)
  }
}
</script>
