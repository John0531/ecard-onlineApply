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
                  <ul class="formList">
                      <li class="form-group">
                          <label class="label" for="">申請人身份證號</label>
                          <div class="form-text">{{chksData.oid}}</div>
                      </li>
                      <li class="form-group">
                          <label class="label" for="">西元出生年月日</label>
                          <div class="form-text">{{chksData.brthDt}}</div>
                      </li>
                      <li class="form-group">
                          <label class="label" for="">行動電話(存戶)</label>
                          <div class="form-text">{{chksData.mbleTelNbr}}</div>
                      </li>
                      <!-- <li class="inOpt align-items-start">
                          <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <Field
                                      v-model="mobileMsgCode"
                                      name="驗證碼" type="text" maxlength="6"
                                      placeholder="請輸入驗證碼" class="form-control"
                                      :class="{ 'is-invalid': errors['驗證碼'] }"
                                      @focus="this.mobileMsgCode=''"
                                      @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                      rules="checkOTP"
                                    />
                                    <button
                                      @click="getMobileMsgCode()"
                                      class="ResendOpt"
                                      :disabled="!show"
                                      type="button"
                                      id="countBtn"
                                    >
                                      <div v-show="show">獲取驗證碼</div>
                                      <div v-show="!show" class="countdown text-white">{{this.count}}秒後可重新發送</div>
                                    </button>
                                </div>
                                <div class="d-flex justify-content-start invalid-feedback my-1">
                                  <span>{{errors['驗證碼']}}</span>
                                </div>
                            </div>
                      </li> -->
                  </ul>
              </div>
              <div class="col-xxl-9 Apply_note mb-5">
                  <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，系統將產生一組簡訊驗證碼至您行動電話，若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消。<br> 按
                  <span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，可重送簡訊驗證碼，一天最多重送兩次，如有疑問，請洽(02)2545-5168、(07)226-9393與本行客服中心聯繫。
              </div>
              <!-------------------本人已詳閱---------------------->
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
                        <div class="" >
                          <template v-for="terms in termsFile" :key="terms+1">
                            「<a href="#" @click.prevent="checkAgreement" >
                              <u>{{terms}}</u>
                            </a>」
                          </template>
                        </div>
                      <div class="flex-shrink-0">內容。(請務必勾選)</div>
                    </div>
                  </label>
                  <div v-if="errors['服務申請約定條款']" class="d-flex text-center  field-error my-1" >
                  {{errors['服務申請約定條款']}}
                </div>
              </div>
              <div class="terms">
                  <Field
                    v-model="checkagree"
                    id="agree1" name="信用卡基本資料使用同意"
                    type="checkbox"
                    class=" checkimg position-absolute"
                    :class="{ 'is-invalid': errors['信用卡基本資料使用同意'] }"
                    @click="toggle"
                    value="agree"
                    rules="required"
                  />
                  <label for="checkbox2">同意，聯邦商業銀行股份有限公司將本人之基本資料(含身分證字號、信用卡卡號、信用卡有效期限、卡片背面簽名後三碼、行動電話等資料)，透過信用卡授權轉接處理中心(聯合信用卡處理中心)傳輸至發卡機構進行身分認證等相關作業。
                  </label>
                  <div v-if="errors['信用卡基本資料使用同意']" class="d-flex text-center  field-error my-1">
                    {{errors['信用卡基本資料使用同意']}}
                  </div>
              </div>
          </div>
          <!-------------------//本人已詳閱---------------------->
          <div class="text-center button_group">
              <button
              @click.prevent="applySubmit()"
              class="btn btn-primary btn-lg mx-1"
              type=""
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
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img
                          src="@/assets/images/close.png" border="0" alt="close" data-bs-dismiss="modal"></button>

              </div>
              <div class="modal-body">
                  <!------------------1-------------------------------------------->
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
                  <!----------------//4-------------------------------------------->
              </div>
              <div class="modal-footer">
                  <div class="col-12 text-center">
                      <button type="button" class="btn btn-primary btn-lg" @click="checkTotal">確定</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- 簡訊寄出modal -->
  <!-- <div ref="msgModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <span  style="font-size:1rem">驗證碼已發送！！</span>
          </div>
          <div class="modal-footer" >
              <div class="text-center" >
              <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" style="border-radius: 0.3rem;">關閉</button>
          </div>
          </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import PublicService from '@/service/Public.Service.js'
import ServiceN from '@/service/CardFriend_N.Service.js'

export default {
  data () {
    return {
      agreeModal: '', // ? 同意Modal
      agreement: [], // ? 四項同意欄
      agreementAll: false, // ?同意申請條款
      checkagree: false, // ?同意個資聲明
      mobileMsgCode: '', // *手機驗證碼
      count: 0, // *手機驗證碼倒數秒數
      timer: 0,
      show: true,
      termsFile: [],
      termsHtml: [],
      chksData:
      {
        brthDt: '',
        oid: '',
        mbleTelNbr: ''
      },
      chksForm:
      {
        agreeTerms: null,
        personalDataAuthorized: null
      },
      MsgModal: null
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
      if (this.agreement.length !== 4) {
        ck.checked = false
        return
      }
      this.agreementAll = true
      ck.checked = true
    },
    // ?modal上四欄位確認
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
    // //  ? 手機驗證碼
    // async getMobileMsgCode () {
    //   // this.isLoading = true
    //   const time = new Date()
    //   const getTimer = time.getTime()
    //   //* 一天的時間(86400)
    //   time.setTime(getTimer + 1000 * (86400 - 100))
    //   //* 有成功打入API才算
    //   const res = await PublicService.otpGet()
    //   if (res.status === 200) {
    //     PublicService.showAPIMsg(res.data.message)
    //     //* 驗證碼倒數計時
    //     this.count = 30
    //     this.show = false
    //     //* 鎖發送
    //     const btn = document.querySelector('#countBtn')
    //     btn.setAttribute('disabled', '')
    //     //* 計時
    //     this.timer = setInterval(() => {
    //       if (this.count > 0 && this.count <= 30) {
    //         this.count--
    //       } else {
    //         this.show = true
    //         clearInterval(this.timer)
    //         this.timer = null
    //       }
    //     }, 1000)
    //   }
    // },
    // ? 檢核驗證碼
    async applySubmit () {
      this.$refs.myForm.setErrors({})
      const collection = await this.$refs.myForm.validate()
      collection.errors = await this.$refs.myForm.getErrors()
      if (Object.keys(collection.errors).length === 0) {
        // ** ===全部通過前往下一頁===
        // ** 資料整理
        this.chksForm.agreeTerms = this.agreementAll
        this.chksForm.personalDataAuthorized = this.checkagree
        const res = await ServiceN.DepositorCheckTerms(this.chksForm)
        console.log(res)
        if (res.status === 200) {
          if (res.data.message) {
            PublicService.showAPIMsg(res.data.message)
          }
          if (res.data.status === '00000') {
            // **存戶不經過n1要設session
            sessionStorage.setItem('Apply_N_Type', 'Online')
            this.$router.push('/OnLineApply_Chks_OTP')
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
    // this.MsgModal = new this.$custom.bootstrap.Modal(this.$refs.msgModal, { backdrop: 'static' })
    //* pageLoad接值
    const res = await ServiceN.DepositorPageLoad()
    if (res.status === 200) {
      console.log(res)
      const data = res.data.result
      //* 資料處理
      this.chksData.brthDt = data.brthDt
      this.chksData.oid = data.oid
      this.chksData.mbleTelNbr = data.mbleTelNbr
      this.termsFile = data.termsList
      // * 確認手機是否有值?若有發送簡訊碼
    }
    //* 資料處理2
    this.agreeModal = new this.$custom.bootstrap.Modal(this.$refs.agreeModal, { backdrop: 'static' })
    this.termsHtml = await PublicService.getTermsHtml(this.termsFile)
  }
}
</script>
