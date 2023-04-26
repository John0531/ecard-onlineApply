<!-- eslint-disable no-tabs -->
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
        <div class="formGroup">
            <ul class="formList">
                <li class="form-group">
                    <label class="label" for="">申請人身份證號</label>
                    <div class="form-text" v-html="brthDt"></div>
                </li>
                <li class="form-group">
                    <label class="label" for="">西元出生年月日</label>
                    <div class="form-text" v-html="oid"></div>
                </li>
            </ul>
        </div>
        <div class="Apply_Chk mb-5">
              <div class="col-12 Apply_banksGroup">
                您可使用以下指定銀行所發行之正卡信用卡進行身分驗證(僅用於身分驗證，不能當財力證明使用)<br>
                <span class="blue_text">指定銀行：玉山銀行、永豐銀行、遠東商銀、日盛商銀、台新商銀、星展銀行、新光商銀、元大銀行、陽信銀行、華泰銀行、三信商銀、華南商銀、樂天信用卡、台中商銀、滙豐銀行、花旗銀行、土地銀行、合作金庫、臺灣中小企銀、彰化銀行、高雄銀行、臺灣銀行、台北富邦銀行、中國信託、兆豐商銀、凱基銀行、國泰世華、渣打商銀、上海商銀、安泰商銀等。</span>
              </div>
        </div>
        <Form
            v-slot="{errors}"
            ref="myForm"
            >
          <div class="formGroup">
              <ul class="formList Apply_Chk">
                  <li class="col-12 align-items-start" id="group1">
                      <label for="">信用卡卡號</label>
                      <div class="d-flex flex-column">
                        <div class="d-flex align-items-center">
                            <Field
                            v-model="cardNumber.code1"
                            name="code1"
                            id="cardCode1" ref="cardCode1"
                            type="text" maxlength="4"
                            class="cardNumber form-control"
                            :class="{ 'is-invalid': errors['信用卡卡號'] }"
                            @keyup="cardNumber.code1 = $custom.validate.OnlyNumPress(cardNumber.code1)"
                            @change="checkValue($refs.myForm,cardNumber,'信用卡卡號','cardCode2')"
                            />
                            <div class="cardDash text-center mx-1"></div>
                            <Field
                            v-model="cardNumber.code2"
                            name="code2"
                            id="cardCode2" ref="cardCode2"
                            type="password" maxlength="4"
                            class="cardNumber form-control"
                            :class="{ 'is-invalid': errors['信用卡卡號'] }"
                            @input="textHandler2()"
                            @keyup="cardNumber.code2 = $custom.validate.OnlyNumPress(cardNumber.code2)"
                            @change="checkValue($refs.myForm,cardNumber,'信用卡卡號','cardCode3')"
                            />
                            <div class="cardDash text-center mx-1"></div>
                            <Field
                            v-model="cardNumber.code3"
                            name="code3"
                            id="cardCode3" ref="cardCode3"
                            type="password" maxlength="4"
                            class="cardNumber form-control"
                            :class="{ 'is-invalid': errors['信用卡卡號'] }"
                            @input="textHandler3()"
                            @keyup="cardNumber.code3 = $custom.validate.OnlyNumPress(cardNumber.code3)"
                            @change="checkValue($refs.myForm,cardNumber,'信用卡卡號','cardCode4')"
                            />
                            <div class="cardDash text-center mx-1"></div>
                            <Field
                            v-model="cardNumber.code4"
                            name="code4"
                            id="cardCode4" ref="cardCode4"
                            type="text" maxlength="4"
                            class="cardNumber form-control"
														:class="{ 'is-invalid': errors['信用卡卡號'] }"
                            @keyup="cardNumber.code4 = $custom.validate.OnlyNumPress(cardNumber.code4)"
														@change="checkValue($refs.myForm,cardNumber,'信用卡卡號','validThru')"
                            />
                        </div>
                        <div class="d-flex text-center invalid-feedback my-1" >
                          {{errors['信用卡卡號']}}
                        </div>
                      </div>
                  </li>
                  <li class="col-12 align-items-start">
                      <label for="" class="mt-1">信用卡有效期限</label>
                      <div class="d-flex flex-column">
                          <Field
                          v-model="validThru"
                          id="validThru" name="validThru" ref="validThru"
                          type="text" maxlength="4"
                          class="Apply_Chk_form_control form-control"
                          :class="{ 'is-invalid': errors['信用卡有效期限'] }"
                          @keyup="validThru = $custom.validate.OnlyNumPress(validThru)"
                          @focus="validThru=''"
													@change="checkValue($refs.myForm,validThru,'信用卡有效期限','CSC')"/>
                          <span class="not_text">例如:2017年1月，請輸入0117</span>
													<div class="d-flex text-center invalid-feedback my-1" >
														{{errors['信用卡有效期限']}}
													</div>
                      </div>
                  </li>
                  <li class="col-12 align-items-start">
                      <label for="input1">信用卡背後末三碼</label>
                      <div class="d-flex flex-column">
                        <Field
                        v-model="CSC"
                        id="CSC" name="CSC" ref="CSC"
                        type="text" maxlength="3"
                        class="Apply_Chk_form_control form-control"
                        :class="{ 'is-invalid': errors['信用卡背後末三碼'] }"
                        @keyup="CSC = $custom.validate.OnlyNumPress(CSC)"
                        @focus="CSC=''"
                        @change="checkValue($refs.myForm,CSC,'信用卡背後末三碼','手機')"
                        />
                        <div class="d-flex text-center invalid-feedback my-1" >
                        {{errors['信用卡背後末三碼']}}
                        </div>
                      </div>
                  </li>
                  <li class="col-12 align-items-start">
                      <label for="" class="mt-1">行動電話</label>
                      <div class="d-flex flex-column">
                          <Field
                          v-model="phoneNumber"
                          id="phone" name="行動電話" ref="phone"
                          type="text" maxlength="10"
                          class="Apply_Chk_form_control form-control"
                          :class="{ 'is-invalid': errors['行動電話'] }"
                          @keyup="phoneNumber = $custom.validate.OnlyNumPress(phoneNumber)"
                          @focus="phoneNumber=''"
                          rules="checkPhone"
                          />
                          <span class="not_text">請填寫信用卡申請時之行動電話，以利資訊驗證</span>
                          <div class="d-flex text-center invalid-feedback my-1" >
                            {{errors['行動電話']}}
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
        <div class="terms-group">
            <div class="terms">
                <Field
                  v-model="agreementAll"
                  id="checkbox1" name="服務申請約定條款"
                  type="checkbox"
                  class="checkimg position-absolute"
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
                  id="agree1" name="信用卡基本資料使用同意"
                  type="checkbox"
                  class="checkimg position-absolute"
                  :class="{ 'is-invalid': errors['信用卡基本資料使用同意'] }"
                  @click="toggle"
                  value="agree"
                  rules="required"
                />
                <label for="checkbox2">同意，聯邦商業銀行股份有限公司將本人之基本資料(含身分證字號、信用卡卡號、信用卡有效期限、卡片背面簽名後三碼、行動電話等資料)，透過信用卡授權轉接處理中心(聯合信用卡處理中心)傳輸至發卡機構進行身分認證等相關作業。
                </label>
                <div class="d-flex text-center invalid-feedback my-1">
                  {{errors['信用卡基本資料使用同意']}}
                </div>
            </div>
        </div>
        <!-------------------//本人已詳閱---------------------->
        <div class="text-center button_group">
            <button
            @click.prevent="applySubmit($refs.myForm)"
            class="btn btn-primary btn-lg mx-1"
            type="buttom"
            >
            下一步
            </button>
        </div>
        </Form>
        <!-------------------本人已詳閱---------------------->
    </div>
  </div>
  <!-- agreeModal -->
  <div ref="agreeModal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel-1">請向下滾動，仔細閱讀整份同意書所有內容<input id="myCheckCount" hidden></h5>
              <button type="button" class="btn-close" aria-label="Close" @click="this.agreeModal.hide()">
                <img src="@/assets/images/form/close.png" border="0" alt="close" >
              </button>
          </div>
          <div class="modal-body" >
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
</section>
</template>

<script>
import PublicService from '@/service/Public.Service.js'
import ServiceN from '@/service/CardFriend_N.Service.js'

export default {
  data () {
    return {
      agreeModal: '', // ? 同意Modal
      agreement: [], // ? Modal四項同意欄
      agreementAll: false, // ?已同意Modal上所有申請條款
      checkagree: false, // ?同意個資聲明
      // *接值欄位
      cardNumber: {
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        codeAll: '3567030082389103'
      },
      validThru: '',
      CSC: '',
      phoneNumber: '',
      termsFile: [],
      termsHtml: [],
      brthDt: '',
      oid: '',
      // *post欄位
      chkData:
      {
        obCardNo: '',
        oExpDay: '',
        oCvv: '',
        omobilePhone: '',
        agreeTerms: null,
        personalDataAuthorized: null
      }
    }
  },
  methods: {
    checkValue (dom, code, name, nextid) {
      // ? 清空errors
      dom.setFieldError(name, '')
      switch (name) {
        case '信用卡卡號': {
          const idRule = /^\d{4}$/
          if (code.code1) {
            if (!idRule.test(code.code1)) {
              const error = this.$custom.validate.checkCode(code)
              dom.setFieldError(name, error)
            }
            if (idRule.test(code.code1)) {
              if (!this.cardNumber.code2) {
                document.getElementById(nextid).focus()
              }
            }
          }
          if (code.code2) {
            if (!idRule.test(code.code2)) {
              const error = this.$custom.validate.checkCode(code)
              dom.setFieldError(name, error)
            }
            if (idRule.test(code.code2)) {
              if (!this.cardNumber.code3) {
                document.getElementById(nextid).focus()
              }
            }
            // this.textHandler2()
          }
          if (code.code3) {
            if (!idRule.test(code.code3)) {
              const error = this.$custom.validate.checkCode(code)
              dom.setFieldError(name, error)
            }
            if (idRule.test(code.code3)) {
              if (!this.cardNumber.code4) {
                document.getElementById(nextid).focus()
              }
            }
            // this.textHandler3()
          }
          if (code.code4) {
            if (!idRule.test(code.code4)) {
              const error = this.$custom.validate.checkCode(code)
              dom.setFieldError(name, error)
            }
            if (idRule.test(code.code4)) {
              if (!this.validThru) {
                document.getElementById(nextid).focus()
              }
            }
          }
          if (!code.code1 && !code.code2 && !code.code3 && !code.code4) {
            const error = this.$custom.validate.checkCode(code)
            dom.setFieldError(name, error)
          }
          break
        }
        case '信用卡有效期限': {
          if (this.$custom.validate.checkCode(code) === true) {
            if (nextid) {
              document.getElementById(nextid).focus()
            } else {
              break
            }
          } else {
            const error = this.$custom.validate.validThru(code)
            dom.setFieldError(name, error)
          }
          break
        }
        case '信用卡背後末三碼': {
          if (this.$custom.validate.checkLast3Code(code) === true) {
            if (nextid) {
              break
            } else {
              break
            }
          } else {
            const error = this.$custom.validate.checkLast3Code(code)
            // ? 設定errors
            dom.setFieldError(name, error)
          }
          break
        }
        default: {
          const error = this.$custom.validate.checkCode(code)
          // ? 設定errors
          dom.setFieldError(name, error)
          break
        }
      }
      // if (this.$custom.validate.checkCode(code) === true) {
      //   document.getElementById(nextid).focus()
      // } else {
      //   // ? 清空errors
      //   dom.setFieldError(name, '')
      //   const error = this.$custom.validate.checkCode(code)
      //   // ? 設定errors
      //   dom.setFieldError(name, error)
      // }
    },
    textHandler2 () {
      document.getElementById('cardCode2').setAttribute('type', 'text')
      setTimeout(() => {
        document.getElementById('cardCode2').setAttribute('type', 'password')
      }, 1000)
    },
    textHandler3 () {
      document.getElementById('cardCode3').setAttribute('type', 'text')
      setTimeout(() => {
        document.getElementById('cardCode3').setAttribute('type', 'password')
      }, 1000)
    },
    scrollEvent (event, num) {
      if (event.target.scrollTop >= event.target.scrollHeight - event.target.offsetHeight - 50) {
        document.querySelector(`#button_termsOpt_${num}`).removeAttribute('disabled')
        document.querySelector(`#read_${num}`).classList.add('text-checked')
      }
    },
    toggle () {
      const ck = document.querySelector('#agree1').checked
      if (ck) {
        this.checkagree = true
      } else {
        this.checkagree = false
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
    // ?modal上四欄位確認
    checkTotal () {
      if (this.agreement.length < this.termsFile.length) {
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
    async applySubmit (dom) {
      this.checkValue(this.$refs.myForm, this.cardNumber, '信用卡卡號', '')
      this.checkValue(this.$refs.myForm, this.validThru, '信用卡有效期限', '')
      this.checkValue(this.$refs.myForm, this.CSC, '信用卡背後末三碼', '')
      // this.checkValue(this.$refs.myForm, this.phoneNumber, '手機', '')
      // ?先取得套件rules的errors
      const collection = await dom.validate()
      // ?再整合取得自訂驗證的errors
      collection.errors = dom.getErrors()
      // *   ====送單判斷====
      // ? 信用卡欄位
      if (Object.keys(collection.errors).length === 0) {
        // ** ===全部檢查通過前往下一頁===
        // ** ===資料整理===
        this.chkData.obCardNo = this.cardNumber.codeAll
        this.chkData.oExpDay = this.validThru
        this.chkData.oCvv = this.CSC
        this.chkData.omobilePhone = this.phoneNumber
        this.chkData.agreeTerms = this.agreementAll
        this.chkData.personalDataAuthorized = this.checkagree
        const res = await ServiceN.otherCardholderVerification(this.chkData)
        console.log(res)
        if (res.status === 200) {
          if (res.data.message) {
            PublicService.showAPIMsg(res.data.message)
          }
          if (res.data.status === '00000') {
            setTimeout(() => {
              this.$router.push('/OnLineApply_Chk_OTP')
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
      if (n.length === 4) {
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
    },
    'cardNumber.code1': {
      handler (n, o) {
        if (n.length === 4) {
          document.querySelector('#cardCode2').focus()
        }
      },
      immediate: true
    },
    'cardNumber.code2': {
      handler (n, o) {
        if (n.length === 4) {
          document.querySelector('#cardCode3').focus()
        }
      },
      immediate: true
    },
    'cardNumber.code3': {
      handler (n, o) {
        if (n.length === 4) {
          document.querySelector('#cardCode4').focus()
        }
      },
      immediate: true
    },
    'cardNumber.code4': {
      handler (n, o) {
        if (n.length === 4) {
          document.querySelector('#validThru').focus()
        }
      },
      immediate: true
    },
    validThru (n) {
      if (n.length === 4) {
        document.querySelector('#CSC').focus()
      }
    },
    CSC (n) {
      if (n.length === 3) {
        document.querySelector('#phone').focus()
      }
    }
  },
  async mounted () {
    const res = await ServiceN.otherCardholderPageLoad()
    const data = res.data.result
    sessionStorage.setItem('Apply_N_Type', 'Online')
    this.termsFile = data.termsList
    // ?載入預帶資料鎖死
    this.brthDt = data.brthDt
    this.oid = data.oid
    this.agreeModal = await new this.$custom.bootstrap.Modal(this.$refs.agreeModal, { backdrop: 'static' })
    // ?載入條款
    this.termsHtml = await PublicService.getTermsHtml(this.termsFile)
  }
}
</script>

<style lang="css">
  /* .invalid-feedback.card-code {
    font-size: 0.5em !important;
    width: 4rem;
  } */
  .formList #group1{
    margin-bottom: 2rem !important;
  }

</style>
