<template>
  <!-- 主視覺 -->
  <div class="shortKv">
    <div class="fill-shortKv topimg-OnLineApply">
      <div class="container-xl shortKv-title-4">
        <h2>線上辦卡</h2>
      </div>
    </div>
  </div>
  <!-- //主視覺 -->
  <!-- 主要內容 -->
  <Form ref="form" v-slot="{ errors }">
    <section class="mainArea">
      <div class="container-xl">
        <div class="row justify-content-md-center pt-1 pt-md-3">
          <!------------------------步驟---------------------------------->
          <div
            class="stepGroup"
            v-if="$route.name === '非卡友-個資使用條款'"
          >
            <ul class="step">
              <li class="completed">
                <div class="counter_step">1</div>
                <span>申請人資料</span>
              </li>
              <li class="active">
                <div class="counter_step">2</div>
                <span>個人資料使用特別商議條款</span>
              </li>
              <li>
                <div class="counter_step">3</div>
                <span>檢附財力證明</span>
              </li>
            </ul>
          </div>
          <!------------------------//步驟---------------------------------->
          <div class="mb-4">
            <strong>聯邦銀行個人資料使用同意條款</strong>
            <small class="red_text">*請務必勾選</small>
          </div>
          <div class="blue_box mb-4">
            <div class="blue_box_bg">
              <input
                v-model="radioALL"
                class="Apply_input"
                name="radioALL"
                id="radioALL"
                runat="server"
                type="radio"
                :value="true"
              />
              <label class="form-check-label fw-bold" for="radioALL"
                >全部同意</label
              >
              <div class="accordion" id="accordionExample">
                <div class="dashed_line mb-3">
                  <div
                    class="card-header pb-3 ps-0 collapsed"
                    id="headingOne"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <strong>個人資料使用條款：</strong>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body pb-0">
                      <!-- API 回傳 -->
                      <span v-html="consent" class="red_text" style="white-space:pre-line;"></span>
                      <!-- API 回傳 -->
                    </div>
                    <div class="card-body pt-0">
                      <span>
                      <br>
                      貴行之聯名/認同集團與有特約合作之第三人，為行銷、提供各項產品、服務、權益及各式優惠資訊(包含特定商店、商品、保險等)之目的範圍內，貴行得將本人之中英文姓名、身分證字號、生日、電話、地址、電子郵件、卡號及消費屬性個人基本資料，由貴行提供予聯名/認同集團與有特約合作之第三人、並基於特定目的範圍內，得為蒐集、處理、國際傳輸及利用。貴行之聯名/認同集團與有特約合作之第三人應對個人資料依法保密。
                      </span>
                    </div>
                  </div>
                </div>
                <div class="dashed_line mb-3">
                  <div
                    class="card-header ps-0 collapsed"
                    id="headingTwo"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <strong>* 第三人行銷：</strong>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <Field
                        v-model="Form.parentType"
                        rules="radioRequired"
                        :class="{
                          'is-invalid': errors['第三人行銷'],
                          'form-check-input': errors['第三人行銷'],
                        }"
                        class="Apply_input"
                        name="第三人行銷"
                        id="three_promote_Y"
                        runat="server"
                        type="radio"
                        :value="true"
                        :validateOnInput="true"
                      />
                      <label
                        class="form-check-label red_text me-3 fw-bold"
                        for="three_promote_Y"
                        >同意</label
                      >
                      <Field
                        v-model="Form.parentType"
                        rules="radioRequired"
                        :class="{
                          'is-invalid': errors['第三人行銷'],
                          'form-check-input': errors['第三人行銷'],
                        }"
                        class="Apply_input"
                        name="第三人行銷"
                        id="three_promote_N"
                        runat="server"
                        type="radio"
                        :value="false"
                        :validateOnInput="true"
                      />
                      <label
                        class="form-check-label red_text fw-bold"
                        for="three_promote_N"
                        >不同意</label
                      >
                      <span class="red_text"
                        >提供個人資料予貴行有特約合作之第三人</span
                      >
                      <ErrorMessage
                        name="第三人行銷"
                        class="field-error"
                      />
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      如不同意將無法享有第三人提供之相關資訊與服務。(特約合作第三人名單目前為保誠人壽保險股份有限公司、安達國際人壽保險股份有限公司、新加坡商三得利健益亞太股份有限公司台灣分公司、聯閤科技股份有限公司、富日科技股份有限公司。)
                    </div>
                  </div>
                </div>
                <div class="dashed_line mb-3">
                  <div
                    class="card-header ps-0 collapsed"
                    id="headingThree"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div>
                      <strong>*票證功能及聯名同意條款：</strong>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <Field
                      v-model="Form.sharedType"
                      rules="radioRequired"
                      :class="{
                        'is-invalid': errors['票證功能及帳單形式同意條款'],
                        'form-check-input': errors['票證功能及帳單形式同意條款'],
                      }"
                      class="Apply_input"
                      name="票證功能及帳單形式同意條款"
                      id="Common_Promote_Y"
                      runat="server"
                      type="radio"
                      :value="true"
                      :validateOnInput="true"
                    />
                    <label
                      class="form-check-label red_text me-3 fw-bold"
                      for="Common_Promote_Y"
                      >同意</label
                    >
                    <Field
                      v-model="Form.sharedType"
                      rules="radioRequired"
                      :class="{
                        'is-invalid': errors['票證功能及帳單形式同意條款'],
                        'form-check-input': errors['票證功能及帳單形式同意條款'],
                      }"
                      class="Apply_input"
                      name="票證功能及帳單形式同意條款"
                      id="Common_Promote_N"
                      runat="server"
                      type="radio"
                      :value="false"
                      :validateOnInput="true"
                    />
                    <label
                      class="form-check-label red_text fw-bold"
                      for="Common_Promote_N"
                      >不同意</label
                    >
                    <p v-if="errors['票證功能及帳單形式同意條款']" class="field-error">
                      {{ errors["票證功能及帳單形式同意條款"] }}
                    </p>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body pb-0">
                        <span class="red_text">提供個人資料予下列聯名/認同集團、附加電票功能之公司採取記名方式發行，並於行銷、提供各項產品、服務、權益及各項優惠資訊之目的範圍內使用本人之個人資料，如不同意將無法核發所申請之聯名/認同卡，並同意貴行得轉發其他信用卡 (另配合個人資料保護法實施，電票公司已將應告知事項載於官網，若有任何疑義，歡迎您撥打電票公司客服專線。)</span>
                    </div>
                    <div class="card-body py-0">
                        <!-- API 回傳 -->
                        <span v-html="ticketInfo" class="red_text" style="white-space:pre-line;"></span>
                        <!-- API 回傳 -->
                    </div>
                    <div class="card-body pt-0">
                        <span class="red_text">
                            本人確認業經合理期間詳細審閱並完全同意上述條款係經個別商議所訂定，並完成系統驗證，提醒您如未勾選視為不同意，恐無法取得相關服務與優惠，另您亦得隨時來電客服中心辦理同意事項變更為不同意。(拒絕接受行銷專線0800-066678)
                        </span>
                    </div>
                  </div>
                </div>
                <div class="dashed_line mb-3" v-if="flgLine==='Y'">
                  <div class="card-header_blue">
                    <strong>*聯邦銀行LINE官方綁定個人化服務：</strong>
                  </div>
                  <div class="col-12 mb-3">
                    <Field
                      v-model="Form.linePNPType"
                      rules="radioRequired"
                      :class="{
                        'is-invalid': errors['聯邦銀行LINE官方綁定個人化服務'],
                        'form-check-input':
                          errors['聯邦銀行LINE官方綁定個人化服務'],
                      }"
                      class="Apply_input"
                      name="聯邦銀行LINE官方綁定個人化服務"
                      id="Line_Service_Y"
                      runat="server"
                      type="radio"
                      :value="true"
                      :validateOnInput="true"
                    />
                    <label
                      class="form-check-label red_text me-3 fw-bold"
                      for="Line_Service_Y"
                      >申請</label
                    >
                    <Field
                      v-model="Form.linePNPType"
                      rules="radioRequired"
                      :class="{
                        'is-invalid': errors['聯邦銀行LINE官方綁定個人化服務'],
                        'form-check-input':
                          errors['聯邦銀行LINE官方綁定個人化服務'],
                      }"
                      class="Apply_input"
                      name="聯邦銀行LINE官方綁定個人化服務"
                      id="Line_Service_N"
                      runat="server"
                      type="radio"
                      :value="false"
                      :validateOnInput="true"
                    />
                    <label
                      class="form-check-label red_text fw-bold"
                      for="Line_Service_N"
                      >不申請</label
                    >
                    <ErrorMessage
                      name="聯邦銀行LINE官方綁定個人化服務"
                      class="field-error"
                    />
                  </div>
                </div>
                <div class="dashed_line mb-3">
                  <div class="card-header_blue">
                    <strong>申請悠遊聯名卡者同意卡片已開啟自動加值功能</strong>
                  </div>
                  <div class="col-12 mb-3">
                    <input
                      v-model="Form.autoBonus"
                      class="Apply_input"
                      id="autoBonus"
                      runat="server"
                      type="checkbox"
                    />
                    <label
                      class="form-check-label fw-bold me-3"
                      for="autoBonus"
                      >不同意開啟</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center button_group">
            <button @click.prevent="submit" class="btn btn-primary btn-lg mx-1">
              預覽申請書
            </button>
          </div>
        </div>
      </div>
    </section>
  </Form>
</template>

<script>
import PublicService from '@/service/Public.Service.js'

export default {
  data () {
    return {
      flgLine: '',
      // flgTravel: '',
      consent: '',
      ticketInfo: '',
      radioALL: false,
      Form: {
        parentType: '',
        sharedType: '',
        linePNPType: '',
        autoBonus: false
      }
    }
  },
  watch: {
    radioALL (n, o) {
      if (n) {
        this.Form.parentType = true
        this.Form.sharedType = true
        this.Form.linePNPType = true
      }
    },
    Form: {
      handler (n, o) {
        if (
          n.parentType === false ||
          n.sharedType === false ||
          n.linePNPType === false
        ) {
          this.radioALL = false
        }
      },
      deep: true
    }
  },
  methods: {
    async pageLoad () {
      const result = await PublicService.terms_pageLoad()
      this.flgLine = result.flgLine
      // this.flgTravel = result.flgTravel
      this.consent = result.consent
      this.ticketInfo = result.ticketInfo
    },
    async submit () {
      // ? 前端驗證所有規則
      await this.$refs.form.validate()
      const errors = this.$refs.form.getErrors()
      if (Object.keys(errors).length !== 0) {
        this.$custom.validate.showErrors(errors)
        return
      }
      // ? 前端驗證所有規則 end
      if (this.flgLine === 'N') {
        this.Form.linePNPType = ''
      }
      const postData = JSON.parse(JSON.stringify(this.Form))
      postData.autoBonus = !postData.autoBonus
      for (const i in postData) {
        postData[i] = postData[i].toString()
      }
      const result = await PublicService.terms_Submit(postData)
      if (result) {
        if (this.$route.name === '非卡友-個資使用條款') {
          const FillinData = JSON.parse(sessionStorage.getItem('FillinData'))
          FillinData.OT_1 = {
            ...this.Form
          }
          console.log(FillinData.OT_1)
          FillinData.OT_1_Flag = {
            flgLine: this.flgLine
          }
          FillinData.OT_1_TermsContent = {
            consent: this.consent,
            ticketInfo: this.ticketInfo
          }
          sessionStorage.setItem('FillinData', JSON.stringify(FillinData))
          this.$router.push('/OnLineApply_Fillin_OT_2')
        } else if (this.$route.name === '卡友-個資使用條款') {
          if (result) {
            const FillinData = {}
            FillinData.OT_1 = {
              ...this.Form
            }
            FillinData.OT_1_Flag = {
              flgLine: this.flgLine
            }
            FillinData.OT_1_TermsContent = {
              consent: this.consent,
              ticketInfo: this.ticketInfo
            }
            sessionStorage.setItem('FillinData', JSON.stringify(FillinData))
            this.$router.push('/OnLineApply_Fillin_Download')
          }
        }
      }
    }
  },
  mounted () {
    const FillinData = JSON.parse(sessionStorage.getItem('FillinData'))
    if (FillinData?.OT_1) {
      for (const i in FillinData.OT_1) {
        if (FillinData.OT_1[i] === 'true') {
          FillinData.OT_1[i] = true
        } else if (FillinData.OT_1[i] === 'false') {
          FillinData.OT_1[i] = false
        }
      }
      this.Form = FillinData.OT_1
    }
    if (this.Form.parentType === true && this.Form.sharedType === true && this.Form.linePNPType === true) {
      this.radioALL = true
    }
    this.pageLoad()
  }
}

// 點擊換圖
// var toggle = true;
//     $(".terms_check_btn1").click(function () {
//         if (toggle) {
//             toggle = false;
//             document.getElementById('checkboxUnEnd').checked = true;
//         } else {
//             toggle = true;
//             document.getElementById('checkboxUnEnd').checked = false;
//         }
//     });
</script>
