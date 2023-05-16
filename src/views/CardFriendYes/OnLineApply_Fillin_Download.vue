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
  <section class="mainArea">
    <div class="container-xl">
      <div class="row justify-content-md-center pt-1 pt-md-3">
        <div class="col-lg-2 mb-4">
          <img
            src="@/assets/images/form/card_b4s.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="col-lg-10 mb-4 Apply_text">
          <p>
            <img
              src="@/assets/images/form/Apply_icon.gif"
              class="img-fluid me-1"
              alt=""
            />微風悠遊聯名卡MasterCard悠遊鈦金卡
          </p>
          <p>
            <img
              src="@/assets/images/form/Apply_icon.gif"
              class="img-fluid me-1"
              alt=""
            />推廣資料<span class="red_text">專案代號：ETU</span>
          </p>
        </div>
        <div class="mb-4"><strong>申請人資料</strong></div>
        <div class="blue_box mb-4">
          <div class="blue_box_bg">
            <div class="col-lg-10 m-auto">
              <ul class="group_confirm ps-0 mb-0">
                <li>
                  <div class="label_confirm">身分證字號</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.id}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>中文姓名
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.cName}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">出生日期</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.brthDt}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>出生地
                  </div>
                  <div class="input-data_confirm">
                    <p v-if="FillinData.birthplace !== '其它'">{{FillinData.birthplace}}</p>
                    <p v-else>{{FillinData.birthplace}}-{{FillinData.birthOther}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>國籍
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.nationality}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">行動電話</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.mbleTelNbr}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">電子信箱</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.email}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>戶籍地址
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.homeAddr?.County}}{{FillinData.homeAddr?.Area}}{{FillinData.homeAddr?.Road}}<span v-if="FillinData.homeAddr?.Lane">{{FillinData.homeAddr?.Lane}}巷</span>
                      <span v-if="FillinData.homeAddr?.Aly">{{FillinData.homeAddr?.Aly}}弄</span>
                      <span v-if="FillinData.homeAddr?.Num&&FillinData.homeAddr?.Of">{{FillinData.homeAddr?.Num}}-{{FillinData.homeAddr?.Of}}號</span>
                      <span v-if="FillinData.homeAddr?.Num&&!FillinData.homeAddr?.Of">{{FillinData.homeAddr?.Num}}號</span>
                      <span v-if="!FillinData.homeAddr?.Num&&FillinData.homeAddr?.Of">{{FillinData.homeAddr?.Of}}號</span>
                      <span v-if="FillinData.homeAddr?.Flr">{{FillinData.homeAddr?.Flr}}樓</span>
                      <span v-if="FillinData.homeAddr?.Other">{{FillinData.homeAddr?.Other}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>寄卡地址
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      <span>{{FillinData.sendCardAddr}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>帳單形式
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      <span v-if="FillinData.billType==='1'">EMAIL帳單</span>
                      <span v-if="FillinData.billType==='2'">行動帳單(簡訊)</span>
                      <span v-if="FillinData.billType==='3'">LINE帳單</span>
                      <span v-if="FillinData.billType==='4'">紙本帳單</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>
                    申請數位卡
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      <span v-if="FillinData.digiFlag==='yes'">是</span>
                      <span v-if="FillinData.digiFlag==='no'">否</span>
                      <span v-if="FillinData.digiFlag===''"></span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>職業別
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.jobType}}
                      <span v-if="FillinData.jobOther">-{{FillinData.jobOther}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>職級別
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.jobLV}}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>主要所得及資金來源
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.income}}
                      <span v-if="FillinData.incomeOther">{{FillinData.incomeOther}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">推廣單位代號</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.unitCode}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">推廣人員編號</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.userCode}}</p>
                  </div>
                </li>
                <!-- <li v-if="FillinDataFlag.flgAmwayNo==='Y'"> -->
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>安麗直銷商/會員編號
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.amwayNo}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mb-4 text-left">
          <strong>聯邦銀行個人資料使用同意條款</strong>
        </div>
        <div class="blue_box mb-4">
            <div class="blue_box_bg">
                <div class="card-body pb-0">
                  <span v-html="consent" class="red_text" style="white-space:pre-line;"></span>
                </div>
                <div class="card-body pt-0">
                    <span>
                    <br>
                        貴行之聯名/認同集團與有特約合作之第三人，為行銷、提供各項產品、服務、權益及各式優惠資訊(包含特定商店、商品、保險等)之目的範圍內，貴行得將本人之中英文姓名、身分證字號、生日、電話、地址、電子郵件、卡號及消費屬性個人基本資料，由貴行提供予聯名/認同集團與有特約合作之第三人、並基於特定目的範圍內，得為蒐集、處理、國際傳輸及利用。貴行之聯名/認同集團與有特約合作之第三人應對個人資料依法保密。
                    </span>
                </div>
            </div>
        </div>
        <div class="mb-4 text-left"><strong>第三人行銷</strong></div>
        <div class="blue_box mb-4">
          <div class="blue_box_bg">
            <div class="col-12 dashed_line mb-3">
              <div class="mb-3">
                <input
                  v-model="FillinData.parentType"
                  class="Apply_input"
                  runat="server"
                  type="radio"
                  :value="true"
                  disabled
                />
                <label class="form-check-label red_text me-3" for="redWord"
                  >同意</label
                ><input
                  v-model="FillinData.parentType"
                  class="Apply_input"
                  runat="server"
                  type="radio"
                  :value="false"
                  disabled
                />
                <label class="form-check-label red_text" for="redWord"
                  >不同意</label
                ><span class="red_text"
                  >提供個人資料予貴行有特約合作之第三人</span
                >
              </div>
            </div>
            <div>
              <div class="card-body">
                如不同意將無法享有第三人提供之相關資訊與服務。(特約合作第三人名單目前為保誠人壽保險股份有限公司、安達國際人壽保險股份有限公司、新加坡商三得利健益亞太股份有限公司台灣分公司、聯閤科技股份有限公司、富日科技股份有限公司。)
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4 text-left">
          <strong>票證功能及聯名同意條款：</strong>
        </div>
        <div class="blue_box mb-4">
          <div class="blue_box_bg">
            <div class="col-12 dashed_line mb-3">
              <div class="mb-3">
                <input
                  v-model="FillinData.sharedType"
                  type="radio"
                  class="Apply_input"
                  :value="true"
                  runat="server"
                  disabled
                />
                <label class="form-check-label red_text me-3" for="redWord"
                  >同意</label
                ><input
                  v-model="FillinData.sharedType"
                  class="Apply_input"
                  runat="server"
                  type="radio"
                  :value="false"
                  disabled
                />
                <label class="form-check-label red_text" for="redWord"
                  >不同意</label
                >
              </div>
            </div>
            <div class="card-body pb-0">
              <span class="red_text">提供個人資料予下列聯名/認同集團、附加電票功能之公司採取記名方式發行，並於行銷、提供各項產品、服務、權益及各項優惠資訊之目的範圍內使用本人之個人資料，如不同意將無法核發所申請之聯名/認同卡，並同意貴行得轉發其他信用卡 (另配合個人資料保護法實施，電票公司已將應告知事項載於官網，若有任何疑義，歡迎您撥打電票公司客服專線。)</span>
            </div>
            <div class="card-body py-0">
              <!-- API 回傳 -->
              <span v-html="ticketInfo" class="red_text" style="white-space:pre-line;"></span>
              <!-- API 回傳 -->
            </div>
            <div class="card-body pt-0">
              <span v-html="ticketInfo" class="red_text" style="white-space:pre-line;"></span>
            </div>
          </div>
        </div>
        <template v-if="flgLine==='Y'">
          <div class="mb-4 text-left">
            <strong>聯邦銀行LINE官方綁定個人化服務：</strong>
          </div>
          <div class="blue_box mb-4">
            <div class="blue_box_bg">
              <div class="col-12 dashed_line mb-3">
                <div class="my-3">
                  <input
                    v-model="FillinData.linePNPType"
                    type="radio"
                    class="Apply_input"
                    :value="true"
                    runat="server"
                    disabled
                  />
                  <label class="form-check-label red_text me-3" for="redWord"
                    >申請</label
                  ><input
                    v-model="FillinData.linePNPType"
                    class="Apply_input"
                    runat="server"
                    type="radio"
                    :value="false"
                    disabled
                  />
                  <label class="form-check-label red_text" for="redWord"
                    >不申請</label
                  >
                </div>
              </div>
              <div class="card-body">
                為提供信用卡通知服務之目的範圍，得將本人之手機號碼由貴行提供予台灣連線股份有限公司(LINE)，得為蒐集、處理、國際傳輸及利用。貴行與台灣連線股份有限公司應對該等個人資料依法保密。
              </div>
            </div>
          </div>
        </template>
        <div class="mb-4 text-left">
          <strong>申請悠遊聯名卡者同意卡片已開啟自動加值功能</strong>
        </div>
        <div class="blue_box mb-4">
          <div class="blue_box_bg">
            <div class="col-12 mb-3">
              <div class="my-3">
                <input
                  v-model="FillinData.autoBonus"
                  class="Apply_input"
                  runat="server"
                  type="checkbox"
                  :value="true"
                  disabled
                />
                <label class="form-check-label me-3" for="redWord"
                  >不同意開啟</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="Apply_note_box mb-4 indentNote_star">
          <span class="red_text"><strong>＊申請書資料確認無誤後，請按送出申請。</strong></span>
        </div>
        <div class="text-center button_group">
          <router-link
            to="/OnLineApply_Fillin"
            class="btn btn-primary btn-lg mx-1"
          >
            修改資料
          </router-link>
          <button
            class="btn btn-primary btn-lg mx-1"
            @click="onSubmit(this.request)"
          >
            送出申請
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- 主要內容 END -->
</template>

<script>
import PublicService from '../../service/Public.Service'
import service from '@/service/CardFriend_N.Service.js'

export default {
  data () {
    return {
      sendOnlineApply: '',
      request: {
        upload1: '',
        upload2: '',
        upload3: '',
        upload4: '',
        isMydata: false
      },
      FillinData: {
      },
      consent: JSON.parse(sessionStorage.getItem('FillinData')).OT_1_TermsContent.consent,
      ticketInfo: JSON.parse(sessionStorage.getItem('FillinData')).OT_1_TermsContent.ticketInfo,
      flgLine: JSON.parse(sessionStorage.getItem('FillinData')).OT_1_Flag.flgLine
    }
  },
  methods: {
    async pageLoad () {
      this.FillinData = await service.fillin_OT2_PageLoad()
      console.log(this.FillinData)
    },
    async onSubmit () {
      const result = await PublicService.createPdf()
      if (result) {
        try {
          const response = await PublicService.CardSendApply(this.request)
          const { status, result } = response.data
          switch (status) {
            case '00800' :
              sessionStorage.clear()
              this.$router.push('/OnLineApply_Fillin_Finish')
              break
            case '00801' :
              sessionStorage.clear()
              this.$router.push('/dspApplicationNNB')
              break
            case '00802' :
              sessionStorage.clear()
              window.open(result.MyDataUrl, '_blank')
              break
            default:
              PublicService.showAPIMsg(response.message)
              break
          }
        } catch (error) {
          console.error('onSubmit error', error)
        }
      }
    }
  },
  mounted () {
    this.pageLoad()
  }
}
</script>
