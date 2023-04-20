<template>
  <div>
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
        <div class="row justify-content-md-center">
          <Form
            v-slot="{ errors }"
            @submit="onSubmit"
            @invalid-submit="invalidCard"
            :validation-schema="schema"
          >
          <div v-if="isLineBank">
            <div class="formGroup">
              <ul class="formList formApply">
                <li class="col-12 mb-2">
                  <label for="">申請人身份證號</label>
                  <div class="form-text">{{OnlineApply_y_Data.id}}</div>
                </li>
                <li class="col-12">
                  <label for=""></label>
                  <span class="red_text">(外籍人士請輸入居留簽證的統一證號)</span>
                </li>
                <li class="col-12">
                  <label for="input1">西元出生年月日</label>
                  <div class="form-text">{{OnlineApply_y_Data.brthyy}}/{{OnlineApply_y_Data.brthMM}}/{{OnlineApply_y_Data.brthdd}}</div>
                </li>
              </ul>
            </div>
            <div class="col-xl-12 d-flex flex-wrap">
              <div class="col-12 col-md-4 text-center m-auto" v-for="card in cardInfoList" :key="card.cardNo">
                <img class="img-fluid" alt="申請卡片圖片" :src="card.cardPic" @error="handleImageError"/>
                <div class="form-check my-2 position-relative">
                  <Field
                    class="form-check-input Apply_input"
                    type="radio"
                    name="申請的信用卡"
                    :value="card.cardNo"
                    v-model="OnlineApply_y_Data.cardNo"
                    :class="{ 'is-invalid': errors['申請的信用卡'] }"
                    :validateOnInput="true"
                  />
                  <label
                    class="form-check-label text-start text-md-center fw-bold"
                    for="creditCardTick"
                    style="color: black;"
                  >
                  {{card.cardName}}
                  </label>
                </div>
              </div>
              <span class="col-12 text-center red_text position-relative m-auto">{{errors['申請的信用卡']}}</span>
            </div>
            <!----------------fee ---------------->
            <!----------------yesgogogo ---------------->
            <div class="mt-3 mt-md-5" v-if="flgYesgo === 'Y'?true: false">
                <div class="yesgogogo_box">
                    <h3>yesgogogo即食購–在地美食，安心品質 (聯邦紅利指定折抵網站)</h3>
                    <div class="yesgogogo_txt">
                        <h4>yesgogogo會員加碼禮<span> (新舊戶卡友皆適用)</span></h4>
                        活動期間：111年1月1日~111年6月30日。<br> 活動內容：活動期間至聯邦信用卡官網進行開卡並點選註冊成為yesgogogo會員，或經由yesgogogo即食購之聯邦卡友專屬註冊頁完成註冊者，即可獲贈加碼禮。
                        <ul>
                            <li>成為會員享1,000元折價券。(新舊會員皆適用)</li>
                            <li>新會員首購單筆滿499元贈好禮+購物金點數回饋100%。</li>
                            <li>週二聯邦日：週週享購物金點數回饋100%。</li>
                        </ul>
                        ※ 每會員限領乙份折價券，更多說明及限制詳參<a href="https://card.ubot.com.tw/eCard/activity/2022yesgogogo/index.htm"><u>活動官網</u>。</a>
                    </div>
                </div>
            </div>
            <div class="mt-3 mt-md-5">
              <div class="fee_box mb-3">
                <h3><img src="images/form/fee_icon.gif" class="img-fluid" alt="" />年費定價說明：</h3>
                    <table class="oddWhite">
                      <tbody>
                        <tr>
                          <th colspan="3" nowrap="nowrap">LINE Bank VISA御璽卡</th>
                        </tr>
                        <tr>
                          <td colspan="3" nowrap="nowrap"><span class="Green_text">使用電子化帳單（電子帳單、行動帳單、LINE帳單）成功且有效期間內享免年費</span></td>
                        </tr>
                        <tr>
                          <td nowrap="nowrap">首年</td>
                          <td nowrap="nowrap" colspan="2">免年費</td>
                        </tr>
                        <tr>
                          <td rowspan="4" nowrap="nowrap">第二年起</td>
                          <td colspan="2" class="text-left">依據每張卡片年費到期日往前推算一年，檢核同一身分證字號下之消費，若不符合標準則以單卡按以下標準計算收取年費(不分正、附卡)：</td>
                        </tr>
                        <tr>
                          <td>年消費</td>
                          <td>年費</td>
                        </tr>
                        <tr>
                          <td>60,000元(含)以上</td>
                          <td>免年費</td>
                        </tr>
                        <tr>
                          <td>未達60,000元</td>
                          <td>正卡1,000元、附卡1,000元
                        </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="indentNote_OneText">
                        <p>※每一卡別所提供之年費減免或折價優惠，每一持卡人僅得享有一次優惠，若於年費優惠期間截止前將卡片停用後又重新申請者，恕不再享有優惠。</p>
                    </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="formGroup">
              <ul class="formList formApply">
                <li class="col-12 mb-2">
                  <label for="">申請人身份證號</label>
                  <div>
                    <Field v-model="OnlineApply_y_Data.id" name="申請人身份證號" maxlength="10" type="text" class="form-control" :class="{ 'is-invalid': errors['申請人身份證號'] }" :validateOnInput="true" @blur="OnlineApply_y_Data.id = $custom.validate.watchToUpper(OnlineApply_y_Data.id)"
                    />
                    <span style="color: #db0031;font-size: 1em !important;">{{ errors["申請人身份證號"] }}</span>
                  </div>
                </li>
                <li class="col-12">
                  <label for=""></label>
                  <span class="red_text">(外籍人士請輸入居留簽證的統一證號)</span>
                </li>
                <li class="col-12 align-items-start">
                  <label for="input1">西元出生年月日</label>
                  <div class="d-flex flex-column mb-1">
                    <div class="d-flex align-items-center">
                      <div>
                        <Field
                        as="select" name="年"
                        rules="required"
                        class="form-select form-control"
                        :class="{ 'is-invalid': errors['年'] || errors['月'] || errors['日']}"
                        :validateOnChange="true"
                        v-model="OnlineApply_y_Data.brthyy"
                        >
                        <option value="" selected>--</option>
                        <option v-for="item in taiwanYearOptions" :key="item.value" :value="item.value">
                          {{item.label}}
                        </option>
                        </Field>
                      </div>年
                      <!-- 辦卡人出生月 -->
                      <div>
                        <Field
                        as="select" name="月"
                        rules="required"
                        :class="{ 'is-invalid': errors['年'] || errors['月'] || errors['日'] }"
                        class="form-select form-control"
                        :validateOnChange="true"
                        v-model="OnlineApply_y_Data.brthMM" @change="getDay">
                        <option value="" selected>--</option>
                        <option v-for="item in monthOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
                        </Field>
                      </div>月
                      <!-- 辦卡人出生日 -->
                      <div>
                        <Field
                        as="select" name="日"
                        rules="required"
                        :class="{ 'is-invalid': errors['年'] || errors['月'] || errors['日'] }"
                        class="form-select form-control"
                        :validateOnChange="true"
                        v-model="OnlineApply_y_Data.brthdd"
                        >
                        <option value="" selected>--</option>
                        <option v-for="item in dayOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
                        </Field>
                      </div>日
                    </div>
                    <div class="d-flex text-center invalid-feedback my-1">
                      <span v-if="errors['年'] || errors['月'] || errors['日']">
                        {{ customAddressMes(errors) }}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-xl-12 d-flex flex-wrap">
              <div class="col-12 col-md-4 text-center m-auto" v-for="card in cardInfoList" :key="card.cardNo">
                <img class="img-fluid" alt="申請卡片圖片" :src="card.cardPic" @error="handleImageError"/>
                <div class="form-check my-2 position-relative">
                  <Field
                    class="form-check-input Apply_input"
                    type="radio"
                    name="申請的信用卡"
                    :value="card.cardNo"
                    v-model="OnlineApply_y_Data.cardNo"
                    :class="{ 'is-invalid': errors['申請的信用卡'] }"
                    :validateOnInput="true"
                  />
                  <label
                    class="form-check-label text-start text-md-center fw-bold"
                    for="creditCardTick"
                    style="color: black;"
                  >
                  {{card.cardName}}
                  </label>
                </div>
              </div>
              <span class="col-12 text-center red_text position-relative m-auto">{{errors['申請的信用卡']}}</span>
            </div>
           <!----------------yesgogogo ---------------->
           <div class="mt-3 mt-md-5" v-if="flgYesgo === 'Y'?true: false">
                <div class="yesgogogo_box">
                    <h3>yesgogogo即食購–在地美食，安心品質 (聯邦紅利指定折抵網站)</h3>
                    <div class="yesgogogo_txt">
                        <h4>yesgogogo會員加碼禮<span> (新舊戶卡友皆適用)</span></h4>
                        活動期間：111年1月1日~111年6月30日。<br> 活動內容：活動期間至聯邦信用卡官網進行開卡並點選註冊成為yesgogogo會員，或經由yesgogogo即食購之聯邦卡友專屬註冊頁完成註冊者，即可獲贈加碼禮。
                        <ul>
                            <li>成為會員享1,000元折價券。(新舊會員皆適用)</li>
                            <li>新會員首購單筆滿499元贈好禮+購物金點數回饋100%。</li>
                            <li>週二聯邦日：週週享購物金點數回饋100%。</li>
                        </ul>
                        ※ 每會員限領乙份折價券，更多說明及限制詳參<a href="https://card.ubot.com.tw/eCard/activity/2022yesgogogo/index.htm"><u>活動官網</u>。</a>
                    </div>
                </div>
            </div>
          <div class="fee_box mb-3 mt-3 mt-md-5">
            <h3><img src="images/form/fee_icon.gif" class="img-fluid" alt="" />年費定價說明：</h3>
            <table class="oddWhite">
              <tbody>
                <tr>
                  <th colspan="3" nowrap="nowrap">LINE Bank VISA御璽卡</th>
                </tr>
                <tr>
                    <td colspan="3" nowrap="nowrap"><span class="Green_text">使用電子化帳單（電子帳單、行動帳單、LINE帳單）成功且有效期間內享免年費</span></td>
                </tr>
                <tr>
                  <td nowrap="nowrap">首年</td>
                  <td nowrap="nowrap" colspan="2">免年費</td>
                </tr>
                <tr>
                  <td rowspan="4" nowrap="nowrap">第二年起</td>
                  <td colspan="2" class="text-left">依據每張卡片年費到期日往前推算一年，檢核同一身分證字號下之消費，若不符合標準則以單卡按以下標準計算收取年費(不分正、附卡)：</td>
                </tr>
                <tr>
                  <td>年消費</td>
                  <td>年費</td>
                </tr>
                <tr>
                  <td>60,000元(含)以上</td>
                  <td>免年費</td>
                </tr>
                <tr>
                  <td>未達60,000元</td>
                  <td>正卡1,000元、附卡1,000元
                </td>
                </tr>
              </tbody>
            </table>
            <div class="indentNote_OneText">
                <p>※每一卡別所提供之年費減免或折價優惠，每一持卡人僅得享有一次優惠，若於年費優惠期間截止前將卡片停用後又重新申請者，恕不再享有優惠。</p>
            </div>
          </div>
          </div>
            <!----------------//fee ---------------->
            <!-------------------本人已詳閱---------------------->
            <div class="terms-group">
              <div class="terms pb-0">
                <!-- :value="true"回傳布林, 不是字串 -->
                <Field
                  name="有關條款"
                  class="checkimg position-absolute"
                  type="checkbox"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  v-model="OnlineApply_y_Data.agreeTerms"
                  @click="checkAgreement"
                  :class="{ 'is-invalid-important': errors['有關條款'] }"
                  :value="true"
                />
                <label for="agree"
                  >本人已詳閱並同意「<a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    ><u>聯邦銀行電子銀行服務申請約定條款</u></a
                  >」內容。(請務必勾選)</label
                >
              </div>
              <span style="color: #db0031;font-size: 1em !important;">{{ errors["有關條款"] }}</span>
              <div class="terms">
                <input type="checkbox" class="checkimg position-absolute" id="agree1" v-model="OnlineApply_y_Data.userDataBK" @click="checkTerm"/>
                <label for="agree1"
                  >本人同意申辦貴行業務時，因中途退出或雖未完成所有申請步驟所留存之相關個人資料，貴行得用以提供後續聯繫及服務時使用。</label
                >
              </div>
            </div>
            <!-------------------//本人已詳閱---------------------->
            <div class="text-center button_group">
              <button
                class="btn btn-primary btn-lg mx-1"
                value=""
              >
                下一步
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
    <!-- Modal-1 -->
    <div
      ref="contractModal"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel-1">
              請向下滾動，仔細閱讀整份同意書所有內容<input id="myCheckCount" hidden />
            </h5>
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
            <!------------------1-------------------------------------------->
            <div ref="termBox1" id="terms_box_1" class="terms_box oneTerms">
              <!--uc1:wuc聯邦銀行電子銀行服務申請約定條款 runat="server" id="wuc聯邦銀行電子銀行服務申請約定條款" /-->
              <div v-html="wucUITCeBankTerms"></div>
            </div>
            <!-- 內部的勾選我同意 -->
            <div id="button_terms" class="button_terms">
              <input
                type="checkbox"
                id="button_termsOpt_1"
                disabled=""
                v-model="agreement"
              />
              <label id="read_1" for="button_termsOpt_1" >我已詳細閱讀。(請勾選)</label>
            </div>
            <!----------------//1-------------------------------------------->
          </div>
          <div class="modal-footer">
            <div class="col-12 text-center">
              <button type="button" class="btn btn-primary btn-lg" @click="checkTotal">
                確定
              </button>
              <button
                id="btnTermClose"
                type="button"
                class="btn btn-primary btn-lg d-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                確定
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal-1 end -->
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import serviceY from '../service/CardFriend_Y.Service'
import servicePublic from '../service/Public.Service'
import { defineRule } from 'vee-validate'

export default {
  data () {
    return {
      contractModal: '',
      agreement: false,
      terms: false,
      // *判斷radio是否有勾選
      schema: {},
      dateList: {
        // ?日期選單
        yearList: [],
        monthList: [],
        dayList: []
      },
      OnlineApply_y_Data: {
        id: '',
        brthyy: '',
        brthMM: '',
        brthdd: '',
        gID: '',
        iDE: '',
        projNum: '',
        cardNo: '',
        agreeTerms: false,
        userDataBK: false,
        uTC: '',
        uSC: ''
      },
      cardInfoList: [],
      flgYesgo: '',
      isLineBank: false,
      tempOnlineApply: {
        OnlineApply_y_Data: '',
        onLineApply_Fillin_Data: '',
        onLineApply_Fillin_Card: ''
      },
      wucUITCeBankTerms: null
    }
  },
  computed: {
    taiwanYearOptions () {
      const options = []
      const currentYear = new Date().getFullYear() - 18 //* 驗證已滿18歲才可以
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
      const maxDays = new Date(this.OnlineApply_y_Data.brthyy, this.OnlineApply_y_Data.brthMM, 0).getDate() // 取得當月最大日期
      for (let i = 1; i <= maxDays; i++) {
        options.push({ label: `${i}`, value: i })
      }
      return options
    }
  },

  watch: {
    // ?監聽是否有勾選我已詳細閱讀
    agreement (n) {
      // console.log('agreement', n)
      this.OnlineApply_y_Data.agreeTerms = n === true
    }
  },
  methods: {
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
      this.getDay()
    },
    getDay () {
      // ? 產生生日"日"選單
      this.dateList.dayList = []
      // ?清空西元年，月日一併清空
      if (!this.OnlineApply_y_Data.brthyy) {
        this.OnlineApply_y_Data.brthMM = ''
        this.OnlineApply_y_Data.brthdd = ''
        return
      }
      // ?清空月，日一併清空
      if (!this.OnlineApply_y_Data.brthMM) {
        this.OnlineApply_y_Data.brthdd = ''
        return
      }
      const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (this.OnlineApply_y_Data.brthyy % 4 === 0) {
        days[1] = 29
      }
      for (let i = 1; i < days[parseInt(this.OnlineApply_y_Data.brthMM) - 1] + 1; i++) {
        if (i < 10) {
          this.dateList.dayList.push('0' + i)
        } else {
          this.dateList.dayList.push(i)
        }
      }
      // ?月對應的天數如比前一個天數少，清空日
      if (this.dateList.dayList.length < this.OnlineApply_y_Data.brthdd) {
        this.OnlineApply_y_Data.brthdd = ''
      }
    },
    // ?我已詳細閱讀條款
    scrollEvent () {
      this.$refs.termBox1.onscroll = function () {
        if (this.scrollHeight - this.scrollTop <= this.clientHeight + 50) {
          const btn = document.querySelector('#button_termsOpt_1')
          const label = document.querySelector('#read_1')
          btn.removeAttribute('disabled')
          label.classList.add('text-checked')
        }
      }
    },
    // ?檢查是否有勾選我已詳細閱讀
    checkTotal () {
      if (this.agreement === false) {
        alert('您尚有部份條款未勾選，請詳閱並同意全部條款，以確保自身權益！')
      } else {
        this.contractModal.hide()
      }
    },
    // ?如果有勾選我已詳細閱讀，頁面上的checkbox就要被勾選
    checkAgreement ($event) {
      if (this.agreement === true) {
        this.OnlineApply_y_Data.agreeTerms = true
        $event.target.checked = true
      } else {
        this.OnlineApply_y_Data.agreeTerms = false
        $event.target.checked = false
      }
    },
    checkLink () {
      const { parm } = this.$route.query
      if (parm) {
        this.isLineBank = true
      } else {
        this.isLineBank = false
      }
    },
    // ?送出表單
    async onSubmit (values) {
      try {
        let identity = null
        if (this.isLineBank) {
          const { parm } = this.$route.query
          identity = await serviceY.IdentityVerification(this.OnlineApply_y_Data, `token=${parm}`)
        } else {
          identity = await serviceY.IdentityVerification(this.OnlineApply_y_Data)
        }
        const { status, message } = identity
        if (status !== '00199') {
          const attrs = ['wucUITCeBankTerms', 'contractModal', 'schema']
          const temp$data = { ...this.$data }
          attrs.forEach(attr => {
            temp$data[attr] = null
          })
          this.tempOnlineApply.OnlineApply_y_Data = JSON.stringify(temp$data)
          sessionStorage.setItem('tempOnlineApply', JSON.stringify(this.tempOnlineApply))
          sessionStorage.setItem('onlineApplyUrl', this.$route.fullPath)
        }

        console.log(identity)
        switch (status) {
        // ?卡友驗證成功
          case '00101' :
            this.$router.push('/OnLineApply_OTP')
            break
            // ?非卡友-存戶
          case '00102' :
            this.$router.push('/OnLineApply_OCR')
            break
            // ?非卡友-非存戶(改他行驗證流程)
          case '00103' :
            this.$router.push('/OnLineApply_OCR')
            break
            // ?首刷禮
          case '00104' :
            this.$router.push('/OnLineApply_Gift')
            break
            // ?驗證失敗(直接顯示錯誤訊息。)
          case '00199' :
            alert(message)
            break
          default:
            alert('作業失敗，請重新輸入或洽聯邦信用卡客服專線，02-25455168、07-2269393。')
            break
        }
      } catch (error) {
        console.error('onSubmit', error)
      }
    },
    customAddressMes (errors) {
      const addressKeys = ['年', '月', '日']
      const addressErrMsg = []
      for (const key of addressKeys) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          addressErrMsg.push(errors[key])
        }
      }
      const distinctArr = Array.from(new Set(addressErrMsg))
      return distinctArr.join('、')
    },
    // ?驗證表單
    invalidCard ({ values, errors, results }) {
      const addressKeys = ['年', '月', '日']
      let isHaveAddressKey = false
      for (const key of addressKeys) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          isHaveAddressKey = true
          break
        }
      }
      if (isHaveAddressKey) {
        errors['出生年月日'] = this.customAddressMes(errors)
      }
      for (const key of addressKeys) {
        delete errors[key]
      }
      this.$custom.validate.showErrors(errors)
    },
    isOver18 (year, month, day) {
      var today = new Date()
      var birthDate = new Date(year, month - 1, day)
      var age = today.getFullYear() - birthDate.getFullYear()
      var m = today.getMonth() - birthDate.getMonth()

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      return age >= 18
    },
    async init () {
      const { parm, GID, IDE, PJN, UTC, USC } = this.$route.query
      if (this.isLineBank) {
        const linkCard = await serviceY.cardApplyLoad_PageLoad_LB(GID, IDE, parm, PJN)
        console.log(linkCard)
        const { status, result, message } = linkCard
        // const { id, brthDt, cardInfoList, flgYesgo } = result
        console.log(status)
        switch (status) {
          case '00700' :
            if (result.id) {
              this.OnlineApply_y_Data.id = result.id
            }
            if (result.cardInfoList) {
              this.cardInfoList = [...result.cardInfoList]
            }
            if (result.flgYesgo) {
              this.flgYesgo = result.flgYesgo
            }
            if (result.brthDt) {
              this.OnlineApply_y_Data.brthyy = Number(result.brthDt.substring(0, 4))
              this.OnlineApply_y_Data.brthMM = Number(result.brthDt.substring(4, 6))
              this.OnlineApply_y_Data.brthdd = Number(result.brthDt.substring(6, 8))
            }
            this.OnlineApply_y_Data.gID = GID
            this.OnlineApply_y_Data.iDE = IDE
            if (PJN) this.OnlineApply_y_Data.projNum = result.PJN
            if (UTC) this.OnlineApply_y_Data.uTC = result.UTC
            if (USC) this.OnlineApply_y_Data.uSC = result.USC
            break
          case '00799' :
            alert(message)
            window.location.href = 'https://card.ubot.com.tw/eCard/dspPageContent.aspx?strID=2008060014'
            break
          default:
            alert('作業失敗，請重新輸入或洽聯邦信用卡客服專線，02-25455168、07-2269393。')
            break
        }
      } else {
        const linkCard = await serviceY.cardApplyLoad_PageLoad(GID, IDE, PJN)
        const { status, message, result } = linkCard
        // const { cardInfoList, flgYesgo } = result
        console.log(linkCard)
        switch (status) {
          case '00700' :
            if (result.cardInfoList) {
              this.cardInfoList = [...result.cardInfoList]
            }
            this.OnlineApply_y_Data.gID = GID
            this.OnlineApply_y_Data.iDE = IDE
            if (result.flgYesgo) {
              this.flgYesgo = result.flgYesgo
            }
            if (PJN) this.OnlineApply_y_Data.projNum = PJN
            if (UTC) this.OnlineApply_y_Data.uTC = UTC
            if (USC) this.OnlineApply_y_Data.uSC = USC
            break
          case '00799' :
            alert(message)
            window.location.href = 'https://card.ubot.com.tw/eCard/dspPageContent.aspx?strID=2008060014'
            break
          default:
            alert('超出預期錯誤')
            break
        }
      }
    },
    handleImageError ($event) {
      $event.target.src = require('../assets/images/UBOT_logo_180x26.png')
    }
  },
  async mounted () {
    this.scrollEvent()
    this.getYearMonth()
    this.getDay()
    this.checkLink()
    const session = JSON.parse(sessionStorage.getItem('tempOnlineApply'))

    if (session?.OnlineApply_y_Data) {
      const temp = JSON.parse(session.OnlineApply_y_Data)
      Object.keys(temp).forEach(key => {
        this.$data[key] = temp[key]
      })
    } else {
      await this.init()
    }

    if (session) {
      this.tempOnlineApply = { ...session }
    }

    const termsName = ['聯邦銀行電子銀行服務申請約定條款', '']
    const termsHtml = await servicePublic.getTermsHtml(termsName)
    this.wucUITCeBankTerms = termsHtml[0]
    this.contractModal = new bootstrap.Modal(this.$refs.contractModal, {
      backdrop: 'static'
    })

    // ?schema預設規則
    if (this.isLineBank) {
      this.schema = {
        申請的信用卡: 'required',
        有關條款: 'customAgreeTerms'
      }
    } else {
      this.schema = {
        申請人身份證號: 'required|checkIdandLive',
        年: 'customBirthVaild',
        月: 'customBirthVaild',
        日: 'customBirthVaild',
        申請的信用卡: 'required',
        有關條款: 'customAgreeTerms'
      }
    }
    defineRule('customBirthVaild', value => {
      if (this.OnlineApply_y_Data.brthyy === '' || this.OnlineApply_y_Data.brthMM === '' || this.OnlineApply_y_Data.brthdd === '') {
        return '出生年月日為必填'
      } else if (!this.isOver18(this.OnlineApply_y_Data.brthyy, this.OnlineApply_y_Data.brthMM, this.OnlineApply_y_Data.brthdd)) {
        return ''
      }
      return true
    })

    defineRule('customAgreeTerms', value => {
      if (!value) {
        return '您尚未勾選詳細閱讀並同意服務約定書。'
      }
      return true
    })

    if (process.env.NODE_ENV !== 'production') {
      const { cardFriend, depositor } = this.$route.query
      if (cardFriend) {
        this.OnlineApply_y_Data.cardFriend = String(cardFriend).toLowerCase() === 'true'
      }
      if (depositor) {
        this.OnlineApply_y_Data.depositor = String(depositor).toLowerCase() === 'true'
      }
    }
  }
}
</script>

<style scoped>
.is-invalid-important {
border-color: #dc3545 !important;
}
</style>
