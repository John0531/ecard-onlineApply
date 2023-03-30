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
                    class="card-header pb-3 collapsed"
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
                    <div class="card-body">
                      <span class="red_text"
                        >※申請聯邦微風聯名卡包括成為Breeze
                        Rewards微風積點禮遇會員。<br />
                        ※本人確認業經合理期間詳細審閱並完全了解貴行依個人資料保護法第八條所進行之告知內容及本申請書所列信用卡相關利率、費用項目及收取標準(詳如信用卡利率/費用一覽表)，並就上述聲明事項、正反面所載有關申請聯邦銀行信用卡用卡須知、重要約定事項之內容及Breeze
                        Rewards微風積點禮遇會員同意及注意事項表列之重要告知，同意提供個人資料予貴行及遵守信用卡約定條款之規定，茲簽名如下以示負責。【附卡申請人同意貴行將約定條款或其他業務上應為之通知（如帳單等)，向正卡申請人送達即對附卡申請人發生相同之效力。】<br />
                        ※申請一卡通聯名卡者同意卡片已開啟自動加值功能。(AUTOLOAD)<br />
                        ※申請聯邦全國加油聯名卡包括成為全國大利點會員，同享全國大利點會員優惠。
                        <br />
                        ※若不符聯邦全國加油聯名卡片申請資格，將同意由全國加油站改發現金大利會員卡一張(限每人一卡)。<br />
                        若申請人未依約繳款，本行除得委外催收或依法聲請強制執行外，並得依規就逾期未清償帳款，出售予資產管理公司，另依相關規定登錄於財團法人金融聯合徵信中心，可能影響申請人未來申辦其他貸款、信用卡之權利。上述紀錄揭露期間，請上聯徵中心網站www.jcic.org.tw「社會大眾專區」之「資料揭露期限」查詢。<br
                      /></span>
                      <span class="blue_text"
                        >貴行之聯名/認同集團與有特約合作之第三人，為行銷、提供各項產品、服務、權益及各式優惠資訊(包含特定商店、商品、保險等)之目的範圍內，貴行得將本人之中英文姓名、身分證字號、生日、電話、地址、電子郵件、卡號及消費屬性等個人基本資料，由貴行提供予聯名/認同集團與有特約合作之第三人、並基於特定目的範圍內，得為蒐集、處理、國際傳輸及利用。貴行之聯名/認同集團與有特約合作之第三人應對個人資料依法保密。<br
                      /></span>
                      <span class="red_text"
                        >全國加油站為行銷、提供各項產品、服務、權益及各式優惠資訊(包含特定商店、商品、保險等)之目的範圍內，得將本人之中英文姓名、身分證字號、生日、電話、地址、電子郵件、全國加油站會員資料、大利點及消費屬性等個人基本資料，提供予貴行，並基於特定目的範圍內，得為蒐集、處理、國際傳輸及利用。貴行應對該等個人資料依法保密。</span
                      >
                    </div>
                    <div class="card-body">
                      <span class="red_text" id="PersonNote_Travel">
                        ※本人確認業經合理期間詳細審閱並完全了解貴行依個人資料保護法第八條所進行之告知內容及本申請書所列信用卡相關利率、費用項目及收取標準(詳如信用卡利率/費用一覽表)，並就上述聲明事項、正反面所載有關申請聯邦銀行信用卡用卡須知、重要約定事項之內容及注意事項表列之重要告知，同意提供個人資料予貴行及遵守信用卡約定條款之規定，茲簽名如下以示負責。【附卡申請人同意貴行將約定條款或其他業務上應為之通知（如帳單等)，向正卡申請人送達即對附卡申請人發生相同之效力。】<br />
                        ※申請一卡通聯名卡者同意卡片已開啟自動加值功能。(AUTOLOAD)<br />
                        若申請人未依約繳款，本行除得委外催收或依法聲請強制執行外，並得依規就逾期未清償帳款，出售予資產管理公司，另依相關規定登錄於財團法人金融聯合徵信中心，可能影響申請人未來申辦其他貸款、信用卡之權利。上述紀錄揭露期間，請上聯徵中心網站www.jcic.org.tw「社會大眾專區」之「資料揭露期限」查詢。<br />
                      </span>
                      <span class="blue_text"
                        >貴行之聯名/認同集團與有特約合作之第三人，為行銷、提供各項產品、服務、權益及各式優惠資訊(包含特定商店、商品、保險等)之目的範圍內，貴行得將本人之中英文姓名、身分證字號、生日、電話、地址、電子郵件、卡號及消費屬性等個人基本資料，由貴行提供予聯名/認同集團與有特約合作之第三人、並基於特定目的範圍內，得為蒐集、處理、國際傳輸及利用。貴行之聯名/認同集團與有特約合作之第三人應對個人資料依法保密。<br
                      /></span>
                    </div>
                  </div>
                </div>
                <div class="dashed_line mb-3">
                  <div
                    class="card-header collapsed"
                    id="headingTwo"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span class="red_text">*</span
                    ><strong> 第三人行銷：</strong>
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
                        class="d-block text-danger ms-2"
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
                      如不同意將無法享有第三人提供之相關資訊與服務。(特約合作第三人名單目前為保誠人壽保險股份有限公司、安達國際人壽保險股份有限公司、新加坡商三得利健益亞太股份有限公司台灣分公司、聯閤科技股份有限公司、富日科技股份有限公司，並同意貴行如有新增或變更，得揭露於貴行信用卡網站供申請人查詢。)
                    </div>
                  </div>
                </div>
                <div class="dashed_line mb-3">
                  <div
                    class="card-header collapsed"
                    id="headingThree"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div v-if="!flgTravel">
                      <span class="red_text">*</span
                      ><strong>聯名集團共同行銷：</strong>
                    </div>
                    <div v-if="flgTravel">
                      <strong>票證功能及帳單形式同意條款：</strong>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <Field
                      v-model="Form.sharedType"
                      rules="radioRequired"
                      :class="{
                        'is-invalid': errors['聯名集團共同行銷'],
                        'form-check-input': errors['聯名集團共同行銷'],
                      }"
                      class="Apply_input"
                      name="聯名集團共同行銷"
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
                        'is-invalid': errors['聯名集團共同行銷'],
                        'form-check-input': errors['聯名集團共同行銷'],
                      }"
                      class="Apply_input"
                      name="聯名集團共同行銷"
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
                    <p class="d-block text-danger ms-2">
                      {{ errors["聯名集團共同行銷"] }}
                    </p>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div v-if="!flgTravel" class="card-body">
                      <span class="red_text"
                        >提供個人資料予貴行聯名/認同集團包含連加網路商業股份有限公司、台灣連線股份有限公司(LINE帳單)及個人選擇或附加電票功能之悠遊卡股份有限公司或一卡通票證股份有限公司等；申請聯名/認同卡所屬之該聯名/認同集團，包含但不限於全國加油站股份有限公司、萊爾富股份有限公司、微風廣場實業股份有限公司及其相關企業與合作廠商</span
                      >，聯名/認同集團有權於行銷、提供各項產品、服務、權益及各項優惠資訊之目的範圍內使用本人之個人資料，如不同意將無法核發所申請之聯名/認同卡或電子化帳單，並同意貴行得轉發其他信用卡或其他帳單形式(另配合個人資料保護法實施，悠遊卡公司、一卡通公司已將應告知事項載於官網www.easycard.com.tw、www.i-pass.com.tw，若有任何疑義，歡迎您撥打悠遊卡客服專線412-8880及一卡通客服專線(07)791-2000)<br />
                      <span class="red_text"
                        >本人確認業經合理期間詳細審閱並完全同意上述條款係經個別商議所訂定，並完成系統驗證，提醒您如未勾選視為不同意，恐無法取得相關服務與優惠，另您亦得隨時來電客服中心辦理同意事項變更為不同意。(拒絕接受行銷專線0800-066678)</span
                      >
                    </div>
                    <div v-if="flgTravel" class="card-body" id="ShareNote_Travel">
                      <span class="red_text"
                        >提供個人資料予申請人所選擇之附加電子票證功能(悠遊卡股份有限公司或一卡通票證股份有限公司)或台灣連線股份有限公司(LINE帳單)，作為提供票證聯名卡記名或LINE帳單服務依據，</span
                      >如不同意將無法核發所申請之信用卡或提供LINE帳單服務；<span
                        class="t13_c_red"
                        >申請人得隨時要求停止前述個人資料之利用</span
                      >，並視為申請停用該信用卡或電子化帳單。(另配合個人資料保護法實施，悠遊卡公司、一卡通公司已將應告知事項載於官網www.easycard.com.tw、www.i-pass.com.tw，若有任何疑義，歡迎您撥打悠遊卡客服專線412-8880及一卡通客服專線(07)791-2000。<span
                        class="t13_c_red"
                        >若未申請LINE帳單服務者，本行不會提供您個人資料予台灣連線股份有限公司</span
                      >)。<br />
                      <span class="red_text"
                        >本人確認業經合理期間詳細審閱並完全同意上述條款係經個別商議所訂定，並完成系統驗證，提醒您如未勾選視為不同意，恐無法取得相關服務與優惠，另您亦得隨時來電客服中心辦理同意事項變更為不同意。(拒絕接受行銷專線0800-066678)</span
                      >
                    </div>
                  </div>
                </div>
                <div class="dashed_line mb-3" v-if="flgLine">
                  <div
                    class="card-header collapsed"
                    id="headingFour"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <div>
                      <span class="red_text">*</span
                      ><strong>聯邦銀行LINE官方綁定個人化服務：</strong>
                    </div>
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
                      >同意</label
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
                      >不同意</label
                    >
                    <ErrorMessage
                      name="聯邦銀行LINE官方綁定個人化服務"
                      class="d-block text-danger ms-2"
                    />
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      為提供信用卡通知服務之目的範圍，得將本人之手機號碼由貴行提供予台灣連線股份有限公司(LINE)，得為蒐集、處理、國際傳輸及利用。貴行與台灣連線股份有限公司應對該等個人資料依法保密。
                    </div>
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
          <!-------------------本人已詳閱---------------------->
          <div
            class="terms-group"
            v-if="$route.name === '非卡友-個資使用條款'&&Apply_N_Type==='Written'"
          >
            <div class="terms">
              <input
                v-model="Form.allTerms"
                @click.prevent
                id="checkbox"
                name="allTerms"
                :class="{
                  'is-invalid': errors['有關條款'],
                  'form-check-input': errors['有關條款'],
                }"
                class="checkimg position-absolute"
                type="checkbox"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
              <label for="agree"
                >同意，本人對
                <span v-for="item in termsName" :key="item">
                  「<a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  ><u>{{item}}</u>
                  </a>」
                </span>
                內容。(請務必勾選)
              </label>
              <p class="d-block text-danger ms-2">{{ errors["有關條款"] }}</p>
            </div>
          </div>
          <!-------------------//本人已詳閱---------------------->
          <div class="text-center button_group">
            <button @click.prevent="submit" class="btn btn-primary btn-lg mx-1">
              預覽申請書
            </button>
          </div>
        </div>
      </div>
    </section>
  </Form>
  <!-- 主要內容 END -->
  <!-- Modal-1 -->
  <div
    ref="termsModal"
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
            請向下滾動，仔細閱讀整份同意書所有內容<input
              id="myCheckCount"
              hidden
            />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img
              src="@/assets/images/close.png"
              border="0"
              alt="close"
              data-bs-dismiss="modal"
            />
          </button>
        </div>
        <div class="modal-body">
          <template v-for="(item, index) in termsHtml" :key="item">
            <div
              @scroll="checkTermsScroll($event, index + 1)"
              :id="`terms_box_${index + 1}`"
              class="terms_box"
            >
              <div v-html="item"></div>
            </div>
            <div :id="`button_terms_${index + 1}`" class="button_terms">
              <input
                type="checkbox"
                :id="`button_termsOpt_${index + 1}`"
                v-model="checkTerms"
                :value="index + 1"
                disabled
              />
              <label
                :id="`read_${index + 1}`"
                :for="`button_termsOpt_${index + 1}`"
                >我已詳細閱讀。(請勾選)</label
              >
            </div>
          </template>
        </div>

        <div class="modal-footer">
          <div class="col-12 text-center">
            <button
              @click.prevent="checkAllTerms"
              class="btn btn-primary btn-lg"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal-1 end -->
</template>

<script>
import PublicService from '@/service/Public.Service.js'

export default {
  data () {
    return {
      Apply_N_Type: sessionStorage.getItem('Apply_N_Type'),
      flgLine: JSON.parse(sessionStorage.getItem('FillinData')).OT.flgLine,
      flgTravel: JSON.parse(sessionStorage.getItem('FillinData')).OT.flgTravel,
      termsName: ['電子化帳單服務約定條款', '重要告知事項', '用卡須知及申請說明', 'MyData同意條款', 'wuc聯邦信用卡約定條款'],
      termsHtml: [],
      radioALL: false,
      Form: {
        parentType: '',
        sharedType: '',
        linePNPType: '',
        autoBonus: false,
        allTerms: false
      },
      termsModal: '',
      checkTerms: []
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
    },
    checkTerms (n, o) {
      if (n.length >= this.termsHtml.length) {
        this.Form.allTerms = true
      } else {
        this.Form.allTerms = false
      }
      this.checkRadioAll()
    }
  },
  methods: {
    checkTermsScroll (event, num) {
      if (
        event.target.scrollTop >=
        event.target.scrollHeight - event.target.offsetHeight - 50
      ) {
        document
          .querySelector(`#button_termsOpt_${num}`)
          .removeAttribute('disabled')
        document.querySelector(`#read_${num}`).classList.add('text-checked')
      }
    },
    checkAllTerms () {
      if (this.checkTerms.length < this.termsHtml.length) {
        alert('您尚有部份條款未勾選，請詳閱並同意全部條款，以確保自身權益！')
      } else {
        this.termsModal.hide()
      }
    },
    checkRadioAll () {
      this.$refs.form.setFieldError('有關條款', '')
      if (!this.Form.allTerms) {
        this.$refs.form.setFieldError(
          '有關條款',
          '您尚未勾選詳細閱讀並同意有關條款'
        )
      }
    },
    async submit () {
      // ? 驗證檢查
      if (this.$route.name === '非卡友-個資使用條款' && this.Apply_N_Type === 'Written') {
        this.checkRadioAll()
      }
      await this.$refs.form.validate()
      const errors = this.$refs.form.getErrors()
      if (Object.keys(errors).length !== 0) {
        this.$custom.validate.showErrors(this.$refs.form.getErrors(errors))
        return
      }
      // ? 驗證檢查 end
      if (this.$route.name === '非卡友-個資使用條款') {
        const FillinData = JSON.parse(sessionStorage.getItem('FillinData'))
        FillinData.OT_1 = {
          ...this.Form
        }
        sessionStorage.setItem('FillinData', JSON.stringify(FillinData))
        this.$router.push('/OnLineApply_Fillin_OT_2')
      } else if (this.$route.name === '卡友-個資使用條款') {
        this.$router.push('/OnLineApply_Fillin_Download')
      }
    }
  },
  async mounted () {
    this.termsModal = new this.$custom.bootstrap.Modal(this.$refs.termsModal, {
      backdrop: 'static'
    })
    this.termsHtml = await PublicService.getTermsHtml(this.termsName)
    const FillinData = JSON.parse(sessionStorage.getItem('FillinData'))
    if (FillinData?.OT_1) {
      this.Form = FillinData.OT_1
    }
    if (this.Form.parentType === true && this.Form.sharedType === true && this.Form.linePNPType === true) {
      this.radioALL = true
    }
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
