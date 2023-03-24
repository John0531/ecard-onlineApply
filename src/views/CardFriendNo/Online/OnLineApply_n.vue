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
      <div class="row justify-content-md-center">                  <!--LINE Bank-->
                <div class="formGroup">
                    <ul class="formList formApply">
                        <li class="col-12 mb-2">
                            <label for="">申請人身分證字號</label>
                            <div class="form-text">A12345****</div>
                        </li>
                        <li class="col-12">
                            <label for=""></label>
                            <span class="red_text">(外籍人士請輸入居留簽證的統一證號)</span>
                        </li>
                        <li class="col-12">
                            <label for="input1">西元出生年月日</label>
                            <div class="form-text">1977/06/28</div>
                        </li>
                    </ul>
                </div>
                <!--//LINE Bank-->
            <div class="col-12 d-flex flex-wrap">
                <!-- 卡種1 -->
                <div class="col-12 col-md-4 text-center">
                <img src="@/assets/images/form/card_b4as.jpg" class="img-fluid" alt="" />
                <div class="form-check my-2">
                    <Field
                    v-model="applierInfo.cardPicked"
                    class="form-check-input Apply_input" type="radio"
                    :class="{ 'is-invalid': errors['卡種'] }"
                    name="卡種" id="exampleRadios1"
                    :validateOnInput="true"
                    rules="required"
                    value="option1"
                    />
                    <label class="form-check-label text-start text-md-center text-black fw-bold" for="exampleRadios1">
                        微風悠遊聯名卡MasterCard悠遊鈦金卡
                    </label>
                </div>
                </div>
                <!-- 卡種2 -->
                <div class="col-12 col-md-4 text-center">
                <img src="@/assets/images/form/card_b4bs.jpg" class="img-fluid" alt="" />
                <div class="form-check my-2">
                    <Field
                    v-model="applierInfo.cardPicked"
                    class="form-check-input Apply_input" type="radio"
                    :class="{ 'is-invalid': errors['卡種'] }"
                    name="卡種" id="exampleRadios2"
                    :validateOnInput="true"
                    rules="required"
                    value="option2"
                    />
                    <label class="form-check-label text-start text-md-center text-black fw-bold" for="exampleRadios2">
                        微風悠遊聯名卡JCB悠遊晶緻卡
                    </label>
                </div>
                </div>
                <!-- 卡種3 -->
                <div class="col-12 col-md-4 text-center">
                <img src="@/assets/images/form/card_b4as.jpg" class="img-fluid" alt="" />
                <div class="form-check my-2">
                    <Field
                    v-model="applierInfo.cardPicked"
                    class="form-check-input Apply_input"
                    :class="{ 'is-invalid': errors['卡種'] }"
                    name="卡種" id="exampleRadios3" type="radio"
                    :validateOnInput="true"
                    rules="required"
                    value="option3"
                    />
                    <label class="form-check-label text-start text-md-center text-black fw-bold" for="exampleRadios3">
                        微風悠遊聯名卡VISA悠遊御璽卡
                    </label>
                </div>
                </div>
            </div>
            <div class="d-flex justify-content-center invalid-feedback my-1">
                <div>{{errors['卡種']}}</div>
            </div>
            <!----------------首刷禮---------------->
            <div class="card_gift_box d-none">
                <h3><img src="images/form/card_gift_icon.gif" class="img-fluid" alt="" />首刷禮：<span>(新戶定義：核卡前六個月內未曾持有任何一聯邦信用卡者。)</span>
                </h3>
                <div class="col-12 card_gift_txt">
                    <p>◆活動期間：111年01月01日至111年06月30日</p>
                    <p>◆活動內容：新戶核卡後30日內，消費累積滿1,288元(含)以上，且不限地點首次自動加值，即可享首刷好禮多選一；如符合首刷禮條件並有使用本行任一行動支付新增不限金額之一般消費，即可升級獲贈「無線行動電源」。
                    </p>
                    <div class="form-check mt-2 ms-3">
                        <Field
                        v-model="applierInfo.firstGift"
                        class="form-check-input Apply_input"
                        :class="{ 'is-invalid': errors['首刷禮'] }"
                        name="首刷禮" id="firstGift1" type="radio"
                        :validateOnInput="true"
                        rules="required"
                        value="option1"
                        />
                        <label class="form-check-label text-black fw-bold" for="exampleRadios4">
                            好禮一：智能垃圾桶（代碼5）
                        </label>
                    </div>
                    <div class="form-check mt-2 ms-3">
                        <Field
                        v-model="applierInfo.firstGift"
                        class="form-check-input Apply_input"
                        :class="{ 'is-invalid': errors['首刷禮'] }"
                        name="首刷禮" id="firstGift2" type="radio"
                        :validateOnInput="true"
                        rules="required"
                        value="option2"
                        />
                        <label class="form-check-label text-black fw-bold" for="exampleRadios5">
                            好禮二：20吋璀璨灰登機箱（代碼9）
                        </label>
                    </div>
                    <div class="form-check mt-2 ms-3">
                        <Field
                        v-model="applierInfo.firstGift"
                        class="form-check-input Apply_input"
                        :class="{ 'is-invalid': errors['首刷禮'] }"
                        name="首刷禮" id="firstGift3" type="radio"
                        :validateOnInput="true"
                        rules="required"
                        value="option3"
                        />
                        <label class="form-check-label text-black fw-bold" for="exampleRadios6">
                            好禮三：刷卡金500元（代碼3）
                        </label>
                    </div>
                    <div class="form-check mt-2 ms-3">
                        <Field
                        v-model="applierInfo.firstGift"
                        class="form-check-input Apply_input"
                        :class="{ 'is-invalid': errors['首刷禮'] }"
                        name="首刷禮" id="firstGift4" type="radio"
                        :validateOnInput="true"
                        rules="required"
                        value="option4"
                        />
                        <label class="form-check-label text-black fw-bold" for="exampleRadios7">
                            好禮四：無線行動電源（代碼2）
                        </label>
                    </div>
                    <div class="d-flex justify-content-start invalid-feedback my-1 ms-3">
                    <div>
                        {{errors['首刷禮']}}
                    </div>
            </div>
                </div>
            </div>
        <!--------------//首刷禮---------------->
        <!----------------yesgogogo---------------->
                <div class="fee_box mb-3 mt-3 mt-md-5">
                    <h3><img src="images/form/fee_icon.gif" class="img-fluid" alt="" />年費定價說明：</h3>
                    <table class="oddWhite">
                      <tbody>
                        <tr>
                          <th colspan="3" nowrap="nowrap">微風VISA御璽卡/Mastercard鈦金卡/JCB晶緻卡</th>
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
                          <td>36,000元(含)以上</td>
                          <td>免年費</td>
                        </tr>
                        <tr>
                          <td>未達36,000元</td>
                          <td>2,000元</td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="oddWhite">
                      <tbody>
                        <tr>
                          <th colspan="3" nowrap="nowrap">微風VISA白金卡/Mastercard白金卡</th>
                        </tr>
                        <tr>
                          <td nowrap="nowrap">首年</td>
                          <td nowrap="nowrap" colspan="2">免年費</td>
                        </tr>
                        <tr>
                          <td rowspan="5" nowrap="nowrap">第二年起</td>
                          <td colspan="2" class="text-left">依據每張卡片年費到期日往前推算一年，檢核同一身分證字號下之消費，若不符合標準則以單卡按以下標準計算收取年費(不分正、附卡)：</td>
                        </tr>
                        <tr>
                          <td>年消費</td>
                          <td>年費</td>
                        </tr>
                        <tr>
                          <td>1萬元(含)以上或消費10次(含)以上</td>
                          <td>免年費</td>
                        </tr>
                        <tr>
                          <td>5,000元(含)或5次(含)以上</td>
                          <td>500元</td>
                        </tr>
                        <tr>
                            <td>未達5,000元或5次</td>
                            <td>1,000元</td>
                          </tr>
                      </tbody>
                    </table>
                    <div class="indentNote_OneText">
                        <p>※每一卡別所提供之年費減免或折價優惠，每一持卡人僅得享有一次優惠，若於年費優惠期間截止前將卡片停用後又重新申請者，恕不再享有優惠。</p>
                    </div>
                  </div>
        <!----------------//yesgogogo ---------------->
        <div class="mt-3 mt-md-5">
            <div class="fee_box mb-3">
                <h3><img src="images/form/fee_icon.gif" class="img-fluid" alt="" />年費定價說明：</h3>
                <div class="fee_content">
                    <table class="fee_table">
                        <thead>
                            <tr>
                                <th width="20%">卡別</th>
                                <th width="10%">首年</th>
                                <th>第二年度起</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="fee_cardname"><strong>微風悠遊聯名卡<br>VISA<br>悠遊御璽卡</strong></td>
                                <td class="redWord text-center" rowspan="3">免年費</td>
                                <td rowspan="3">
                                    <p class="text-left">第二年起統計正、附卡年度合併消費未達36,000元，收取全額年費。</p>
                                    <table width="100%">
                                        <thead class="fee_thead">
                                            <tr>
                                                <th class="text-center">年消費</th>
                                                <th class="text-center">年費</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">36,000元(含)以上</td>
                                                <td class="redWord text-center">免年費</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">未達36,000 元</td>
                                                <td class="text-center">2,000元</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="fee_cardname"><strong>微風悠遊聯名卡<br>MasterCard<br>悠遊鈦金卡</strong></td>
                            </tr>
                            <tr>
                                <td class="fee_cardname"><strong>微風悠遊聯名卡<br>JCB<br>悠遊晶緻卡</strong></td>
                            </tr>
                            <tr>
                                <td class="fee_cardname"><strong>微風悠遊聯名卡<br>VISA<br>悠遊白金卡</strong></td>
                                <td class="redWord text-center" rowspan="2">免年費</td>
                                <td rowspan="2">
                                    <p class="text-left">
                                        依據每張卡片年費到期日往前推算一年，檢核同一身分證字號下之消費，若不符合標準則以單卡按以下標準計算收取年費(不分正、附卡)：</p>
                                    <table width="100%">
                                        <thead class="fee_thead">
                                            <tr>
                                                <th class="text-center">年消費</th>
                                                <th class="text-center">年費</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">1萬元(含)以上或消費10次(含)以上</td>
                                                <td class="redWord text-center">免年費</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">5,000元(含)或5次(含)以上</td>
                                                <td class="text-center">500元</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">未達5,000元或5次</td>
                                                <td class="text-center">1,000元</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="fee_cardname"><strong>微風悠遊聯名卡<br>MasterCard<br>悠遊白金卡</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="indentNote_OneText">
                        <p>※每一卡別所提供之年費減免或折價優惠，每一持卡人僅得享有一次優惠，若於年費優惠期間截止前將卡片停用後又重新申請者，恕不再享有優惠。</p>
                    </div>
                </div>
            </div>
        </div>
        <!-------------------本人已詳閱---------------------->
        <div class="terms-group">
            <div class="terms">
                <div>
                  <Field
                  v-model="agreementAll"
                  id="checkbox1" name="服務申請約定條款"
                  type="checkbox"
                  class="checkimg position-absolute"
                  :class="{ 'is-invalid': errors['服務申請約定條款'] }"
                  @click="checkAgreement"
                  rules="required"
                  />
                  <label for="checkbox1" @click="checkAgreement">本人已詳閱並同意「<a href="#" @click.prevent="this.contractModal.show()"><u>聯邦銀行電子銀行服務申請約定條款</u></a>」內容。(請務必勾選)
                  </label>
                </div>
                <div class="d-flex text-center invalid-feedback my-1" >
                  {{errors['服務申請約定條款']}}
                </div>
            </div>
            <div class="terms">
                <div>
                  <input
                  v-model="checkagree"
                  id="agree1" name="個資使用"
                  type="checkbox"
                  class="checkimg position-absolute"
                  @click="toggle"
                  value="agree"
                  >
                  <label for="agree1">本人同意申辦貴行業務時，因中途退出或雖未完成所有申請步驟所留存之相關個人資料，貴行得用以提供後續聯繫及服務時使用。
                  </label>
                </div>
            </div>
        </div>
        <!-------------------//前往下一頁---------------------->
        <div class="text-center button_group">
            <button
            class="btn btn-primary btn-lg mx-1"
            type="submit"
            @click.prevent="applySubmit"
            >
            下一步
            </button>
        </div>
      </div>
    </Form>
    </div>
    <!-- Modal-1 -->
    <div
    ref="contractModal"
    class="modal fade"
    id="exampleModal"
    tabindex="-1" >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel-1">請向下滾動，仔細閱讀整份同意書所有內容<input id="myCheckCount" hidden>
              </h5>
              <button type="button" class="btn-close" @click="this.contractModal.hide()" aria-label="Close">
                <img src="@/assets/images/form/close.png" border="0" alt="close">
              </button>
          </div>
          <div class="modal-body">
            <!------------------1-------------------------------------------->
            <div ref="termBox1" id="terms_box_1" class="terms_box oneTerms">
              <!--uc1:wuc聯邦銀行電子銀行服務申請約定條款  id="wuc聯邦銀行電子銀行服務申請約定條款" /-->
              <div class="txt">
                <h3>聯邦銀行電子銀行服務申請約定條款</h3>
                <div class="text-center">(線上申辦電子銀行服務) 111.03</div>
                <p><strong>為確保您的權益，請於線上申辦本行電子銀行服務前，應先瞭解「聯邦銀行電子銀行服務申請約定條款」，並請務必詳細閱讀，當您完成申請後，即表示：您已閱讀並了解「聯邦銀行電子銀行服務申請約定條款」之權利與義務，並願意遵守前述約定條款之相關規定。</strong></p>
                申請人茲向 聯邦商業銀行(以下簡稱貴行)申請並使用電子銀行所提供之各項金融服務（以下 簡稱本服務）【適用電話銀行、個人網路銀行及行動銀行服務通路】，申請人同意並遵守下列各 項約定：
                <div class="level-one">
                  <span class="red"><strong>第一條 銀行資訊</strong></span>
                  <div class="l-two-em">
                      <div class="cjk-ideographic">一、銀行名稱:聯邦商業銀行股份有限公司</div>
                      <div class="cjk-ideographic red">二、銀行業務諮詢、申訴與掛失服務專線:(02)2545-1788，傳真號碼:(02)2656-0451</div>
                      <div class="cjk-ideographic">三、網址: <a href="https://www.ubot.com.tw" target="_blank">https://www.ubot.com.tw</a></div>
                      <div class="cjk-ideographic">四、地址:台北市松山區民生東路三段 109 號</div>
                      <div class="cjk-ideographic">五、電子郵件信箱：<a href="mailto:web@ubot.com.tw">web@ubot.com.tw</a></div>
                  </div>
                </div>
                <div class="level-one">
                  <span class="red"><strong>第二條 契約之適用範圍</strong></span>
                  <div class="l-two-em">
                    <div class="cjk-ideographic">一、本契約係電子銀行服務（包括電話銀行、個人網路銀行、行動銀行）之一般性共通約定，除依個別業務契約另有約定，從其約定外，悉依本契約之約定。</div>
                    <div class="cjk-ideographic">二、個別契約不得牴觸本契約。但個別契約對申請人之保護更有利者，從其約定。</div>
                    <div class="cjk-ideographic">三、本契約條款如有疑義時，應為有利於申請人之解釋。</div>
                    <div class="cjk-ideographic red">四、申請人為未領有居留證或領有居留證但證載有效期限未滿一年之外國人者，或領有中華民國外交部依「駐臺外交機構人員及其眷屬身分證明發給要點」核給身分證明之外國自然人者，如使用電子銀行之外匯服務項目，貴行僅提供查詢服務，其餘交易申請人應臨櫃辦理。
                    </div>
                  </div>
                </div>
                <div class="level-one">
                  <span class="red"><strong>第三條 名詞定義</strong></span>
                  <div class="l-two-em">
                    <div class="cjk-ideographic"><span class="red">
                      一、「電子銀行服務」：指貴行藉由各種電子通訊機制，包括電話通訊或網路（不包含ATM自動提款機服務）建構之電子銀行服務通路，即電話銀行、個人網路銀行及行動銀行。</span>
                    </div>
                    <div class="cjk-ideographic">
                      二、「電話銀行」：申請人利用客戶端按鍵式電話經由電話通訊與貴行資訊系統連線，以自動化語音、專員服務等方式，取得貴行所提供之金融服務。
                    </div>
                    <div class="cjk-ideographic">
                      三、「個人網路銀行」：「網路銀行」係指申請人利用客戶端電腦或行動裝置設備經由網路與貴行資訊系統連線，取得貴行提供之金融服務。「個人網路銀行」係指貴行提供個人戶申請與使用之網路銀行服務。</div>
                    <div class="cjk-ideographic">四、「行動銀行」：申請人利用客戶端行動裝置設備經由網路與貴行資訊系統連線，取得貴行所提供之金融服務。</div>
                    <div class="cjk-ideographic">
                        五、「電子文件」：指貴行或申請人經由網路連線傳遞之文字、聲音、圖片、影像、符號或其他資料，以電子或其他以人之知覺無法直接認識之方式，所製成足以表示其用意之紀錄，而供電子處理之用者。</div>
                    <div class="cjk-ideographic red">六、「電話語音密碼」：申請人申請使用電子銀行服務之電話銀行登入時身分確認暨電話銀行各項金融服務之交易授權密碼。</div>
                    <div class="cjk-ideographic red">
                        七、「使用者代號與網路密碼」：申請人使用個人網路銀行及行動銀行各項金融服務，必須依系統要求輸入使用者代號與網路密碼，以供登入時之身分辨識與交易授權之用。</div>
                    <div class="cjk-ideographic">八、「約定轉出帳戶」：申請人同意透過電子銀行服務進行帳務性交易時，得轉出款項之帳戶。</div>
                    <div class="cjk-ideographic">九、「非約定帳戶交易」：指由申請人以“約定轉出帳戶”轉入未事先約定之帳戶交易稱之。</div>
                    <div class="cjk-ideographic">十、「轉入貴行交易」：指申請人自“約定轉出帳戶”轉入“貴行提供服務需求所開立的收款專戶”之交易稱之。</div>
                    <div class="cjk-ideographic-two">十一、「第三人帳戶」：指非以申請人名義於貴行所開立之帳戶。</div>
                    <div class="cjk-ideographic-two red">
                        十二、「線上申辦」：指提供貴行存戶及信用卡卡友利用客戶端電腦或行動裝置設備經由網路與貴行資訊系統連線，由申請人輸入貴行指定之相關資料進行資訊檢核，並透過簡訊認證機制或金融卡驗證，向貴行申請開通電子銀行之服務項目。
                    </div>
                    <div class="cjk-ideographic-two red">
                        十三、「簡訊驗證碼」：指申請人進行電子銀行之線上申辦服務、個人網路銀行非約定帳戶交易或特定交易時，系統將自動發送一組一次性的簡訊交易授權密碼至申請人於貴行所設定的手機門號，每次傳送之交易授權碼皆為亂數產生，且不可重覆使用，產生之動態密碼係作為覆核交易放行之用。
                    </div>
                  </div>
                </div>
                <div class="level-one">
                    <span class="red"><strong>第四條 電子文件之接收與回應</strong></span>
                    <div class="l-two-em">
                        <div class="cjk-ideographic">
                            一、貴行接收經貴行及申請人同意用以辨識身分之電子文件後，除查詢之事項外，貴行應提供該交易電子文件中重要資訊之網頁供客戶再次確認後，即時進行檢核及處理，並將檢核及處理結果，以電子文件(如網頁、電子郵件)、電話、書面或其他雙方約定之方式通知申請人。<span class="red">如身分辨識訊息之內容經貴行驗證與申請人所設定之資訊相符，貴行即將完成身分驗證後至登出前，使用者所傳輸之電子文件，視為申請人本人所傳送。</span></div>
                        <div class="cjk-ideographic"><span class="red">二、申請人或貴行接收他方任何電子文件，若無法辨識其身分或內容時，視為自始未傳送。</span>但可確定申請人身分時，貴行應將內容無法辨識之事實，以電子文件(如網頁、電子郵件)、電話、書面或其他雙方約定之方式通知申請人。
                        </div>
                    </div>
                </div>
                <div class="level-one">
                    <strong>第五條 電子文件之不執行</strong>
                    <div class="l-two-em">
                        <div class="cjk-ideographic">
                            一、如有下列情形之一，貴行得不執行任何接收之電子文件：
                            <ol>
                                <li>有相當理由懷疑電子文件之真實性或所指定事項之正確性者。</li>
                                <li>貴行依據電子文件處理，將違反相關法律、命令之規定者。</li>
                                <li>貴行因申請人之原因無法於帳戶扣取申請人所應支付之費用者。</li>
                                <li>申請人有第十八條第二項所述情形之一者。</li>
                            </ol>
                        </div>
                        <div class="cjk-ideographic">
                            二、貴行不執行前項電子文件者，應同時將不執行之原因與結果以電子文件(如網頁、電子郵件)、電話、書面或其他雙方約定之方式通知申請人。申請人接獲通知後得以電話向貴行確認。</div>
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第六條 電子文件交換作業時限</strong>
                    <div class="l-two-em">
                        <div class="cjk-ideographic">
                            一、申請人使用貴行電子銀行服務時所發出之電子文件，經申請人依第四條第一項貴行提供之再確認機制確定其內容正確性後，傳送至貴行後即不得撤回。但未到期之預約交易在貴行規定之期限內，得撤回、修改。</div>
                        <div class="cjk-ideographic">
                            二、各種電子銀行服務項目包括：查詢服務(匯利率查詢、個網總歸戶查詢、帳戶餘額查詢、交易明細查詢、定存明細查詢等)、轉帳/繳費服務(含預約交易)、綜存定存服務(綜存活存轉定存、綜存定存中途解約試算、綜存定存中途解約、綜存定存續存設定)、外匯服務(買賣外幣、個網外匯轉帳、個網外匯匯出匯款)、基金服務(基金資產查詢、基金下單、基金動態查詢)、語音信用卡繳費、個網信用卡服務(帳單/額度/未出帳單消費明細/紅利點數查詢、信用卡繳費)、現金卡帳務查詢及繳款、掛失服務、個人基本資料查詢、申請專區(信託開戶)及語音密碼/網路密碼/使用者代號變更等服務，相關服務內容如有異動均以貴行網站公告為準。貴行營業時間週一至週五上午9:00~下午3:30，另依服務內容之不同分別訂定服務時間，除貴行網路銀行因電腦系統暫停服務及結帳時間，得暫停各類交易服務外，原則提供全年無休二十四小時服務，惟各種交易服務依其業務特性仍有服務時間限制，另個別於電話銀行以語音說明或於個人網路銀行、聯邦行動銀行之各項服務頁面說明中述明；有關電子銀行帳務劃分時間：基金交易為每營業日下午3時，臺外幣帳務交易帳務劃分點皆為每營業日下午3時30分，申請人如逾當日交易服務時間始傳輸之各種帳務性交易者，視為逾時交易，該筆交易將依該服務項目之規劃決定處理方式，例如自動改於次一營業日處理或其他約定方式處理。帳務性交易是否係逾時交易，以貴行電子銀行服務系統接獲檔案資料之時間為準，並以電子文件(如網頁)、電話、其他雙方約定之方式回覆通知申請人判斷結果。申請人如逾時為帳務性交易致發生損失或退票，概由申請人自行負責。貴行得依系統維護需求或其他因素暫停本項服務，申請人絕無異議。
                        </div>
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第七條 費用</strong>
                    <div class="l-two-em">
                        <div class="cjk-ideographic">
                            一、申請人透由本電子銀行服務通路執行金融服務所產生之各項交易費用，申請人願依各項交易收費標準繳納服務費、手續費及郵電費，並授權貴行自申請人之帳戶內自動扣繳；如未記載者，貴行不得收取。</div>
                        <div class="cjk-ideographic">二、前項收費標準如有調整者，申請人同意貴行應於調整生效日六十日前於貴行網站之明顯處公告其內容，並以電子郵件方式通知使申請人得知調整之內容。</div>
                        <div class="cjk-ideographic">
                            三、第二項之調整如係調高者，貴行應於網頁上提供申請人表達是否同意費用調高之選項。申請人未於調整生效日前表示同意者，貴行將於調整生效日起暫停申請人使用電子銀行一部或全部之服務。申請人於調整生效日後，同意費用調整者，貴行應立即恢復電子銀行服務契約相關服務。
                        </div>
                        <div class="cjk-ideographic">四、前二項銀行之公告及通知應於調整生效六十日前為之，且調整生效日不得早於公告及通知後次一年度之起日。</div>
                    </div>
                </div>
                <div class="level-one">
                    <span class="red"><strong>第八條 申請人網路連線準備及其責任</strong></span>
                    <div class="l-two-em">
                        <div class="cjk-ideographic"><span class="red">一、申請人申請使用本契約之電子銀行服務項目，同意使用網路進行電子文件傳送及接收，並應自行備妥服務所需之軟體、硬體，以及其他與安全相關之設備，並自行備妥通訊網路連線所需服務。上述作業所需之費用及風險，由申請人自行負擔。</span>貴行與申請人有特別約定者，必須與貴行為必要之測試後，始得連線。
                        </div>
                        <div class="cjk-ideographic">
                            <span class="red">二、申請人對貴行所提供之使用者代號、密碼、軟硬體及其它足以識別身分之工具，應負保管之責。</span>
                            <ol>
                                <li>第一項軟硬體設備及相關文件如係由貴行所提供，貴行僅同意申請人於約定服務之範圍內使用，不得將之轉讓、轉借或以任何方式交付第三人。</li>
                                <li>貴行並應於網站及所提供軟硬體之包裝上載明進行本服務之最低軟硬體需求，且負擔所提供軟硬體之風險。</li>
                            </ol>
                        </div>
                        <div class="cjk-ideographic"><span class="red">三、申請人使用貴行個人網路銀行前，請先確認個人網路銀行正確之網址（mybank.ubot.com.tw），才使用網路銀行服務；如有疑問，請電(02)2545-1788洽客服中心詢問。</span>
                        </div>
                        <div class="cjk-ideographic">
                            四、貴行應以申請人得認知之方式，告知申請人個人網路銀行應用環境之風險。貴行應盡善良管理人之注意義務，隨時維護個人網路銀行網站的正確性與安全性，並隨時注意有無偽造之網頁，以避免申請人之權益受損。</div>
                        <div class="cjk-ideographic">五、貴行應於本契約載明提供之服務項目，如於個人網路銀行網站呈現相關訊息者，並應確保該訊息之正確性，其對申請人所負之義務不得低於個人網路銀行網站之內容。
                        </div>
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第九條 交易核對</strong>
                    <div class="l-two-em">
                        <div class="cjk-ideographic">
                            一、貴行於個人網路銀行或行動銀行之每筆帳務性交易指示處理完畢後，以電子文件(如網頁、電子郵件等方式)、電話、書面或其他雙方約定之方式通知申請人，申請人應於每次使用服務後，核對其結果有無錯誤。如有不符，應於使用完成之日起四十五日內，以電話、電子郵件、書面或其他雙方約定之方式通知貴行查明。
                        </div>
                        <div class="cjk-ideographic">
                            二、貴行應於每月對申請人以平信、電子郵件或其他雙方約定之方式寄送上月之交易對帳單（該月無交易時不提供）。申請人核對後如認為交易對帳單所載事項有錯誤時，應於收受之日起四十五日內，以電話、電子郵件、書面或其他雙方約定之方式通知貴行查明。
                        </div>
                        <div class="cjk-ideographic">三、貴行對於申請人之通知，應即進行調查，並於通知到達貴行之日起三十日內將調查之情形或結果以電話、書面或其他雙方約定方式覆知申請人。</div>
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第十條 電子文件錯誤之處理</strong>
                    <div class="l-two-em">
                        <div class="cjk-ideographic">一、申請人利用本契約之服務，其電子文件因不可歸責於申請人之事由而發生錯誤時，貴行應協助申請人更正，並提供其他必要之協助。</div>
                        <div class="cjk-ideographic">二、前項服務因可歸責於貴行之事由而發生錯誤時，貴行應於知悉時，立即更正，並同時以電子文件(如網頁、電子郵件)、電話、書面或其他雙方約定之方式通知申請人。
                        </div>
                        <div class="cjk-ideographic">
                            三、申請人利用本契約之服務，其電子文件因可歸責於申請人之事由而發生錯誤時，倘屬申請人申請或操作轉入之金融機構代號、存款帳號或金額錯誤，致轉入他人帳戶或誤轉金額時，一經申請人通知銀行，貴行應即辦理以下事項：
                            <ol>
                                <li>依據相關法令提供該筆交易之明細及相關資料。</li>
                                <li>通知轉入行協助處理。</li>
                                <li>回報處理情形。</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="level-one">
                    <span class="red"><strong>第十一條 授權及防範</strong></span>
                    <div class="l-two-em">
                        <div class="cjk-ideographic">一、申請人及貴行同意確保所傳送至對方之電子文件均經合法授權。</div>
                        <div class="cjk-ideographic">
                            二、申請人於申請本服務前，如原已向貴行申請電話語音服務，並約定電話語音轉出帳號、轉入帳號者，該約定轉出帳號升級為本服務之轉出帳號，適用於本服務通路之帳務性交易；約定轉入帳號升級為本服務之轉入帳號，適用於本服務各通路與ATM交易。<br>
                            申請人得以本服務約定之轉出帳號、轉入帳號，執行帳務性交易功能。另「非約定帳戶交易」功能則由申請人另依貴行規定方式與相關規範提出申請。
                        </div>
                        <div class="cjk-ideographic">三、申請人使用本服務傳輸之轉帳交易，與申請人憑存摺並填具存、取款憑條或簽發支票(加蓋原留印鑑)之存提款具同等之效力。</div>
                        <div class="cjk-ideographic red">
                            四、為控管交易風險，貴行得依各種電子銀行服務通路或交易類別，訂定單筆交易金額限額、交易總額限額、交易頻次與交易時限相關規範，申請人同意配合相關服務規範之限制。</div>
                        <div class="cjk-ideographic red">
                            五、申請人及貴行同意於發現有第三人冒用或盜用電話語音密碼、使用者代號、網路密碼或其他身分認證授權資訊，或發生其他任何未經合法授權之情形，應立即以電子文件(如網頁、電子郵件)、電話、書面或其他雙方約定方式通知他方停止使用該服務並採取防範之措施。貴行接受前述通知前，對第三人使用該服務已發生之效力，由貴行負責任。但有下列任一情形者，不在此限：
                            <ol>
                                <li>貴行能證明申請人有故意或過失。</li>
                                <li>貴行依電子文件(如網頁、電子郵件)、電話、書面或其他雙方約定方式通知交易核對資料或帳單後超過四十五日。惟申請人有特殊事由(如長途旅行、住院等)致無法通知者，以該特殊事由結束日起算四十五日，但貴行有故意或過失者，不在此限。針對前述冒用、盜用事實調查所生之鑑識費用由貴行負擔。</li>
                            </ol>
                        </div>
                        <div class="cjk-ideographic"><span class="red">六、倘申請人連續輸入「電話語音密碼」累計錯誤達四次，貴行將自動停止申請人利用電話語音密碼使用本服務，</span>申請人應親自攜帶身分證明文件及原留印鑑向貴行辦理重新使用，或依貴行提供線上申辦功能之網頁，辦理電話語音密碼重設。<span class="red">倘申請人連續輸入「使用者代號」或「網路密碼」累計錯誤達四次，貴行將自動停止申請人使用個人網路銀行及行動銀行服務。</span>申請人得隨時透過貴行提供線上申辦功能之網頁，辦理使用者代號及網路密碼重設。
                        </div>
                        <div class="cjk-ideographic">七、申請人使用貴行電子銀行服務提供之專員諮詢服務時，同意以各種錄音、磁帶紀錄等電子儲存記憶方式，儲存申請人與專員諮詢服務內所有有關之服務紀錄，並有最終確定之約束力。<span class="red">申請人同意並授權專員於依申請人指示轉帳，而發生因不可抗力所致之錯誤時，貴行得逕自調整相關帳戶之正確餘額。</span></div>
                        <div class="cjk-ideographic red">八、使用本服務辦理轉帳之金額不得超逾申請人轉出帳戶轉帳當時之可用餘額。若申請人已與貴行就轉出帳戶約定透支、質借、借款或融資契約，且轉出帳戶存款實際餘額不足支付申請人使用電子銀行服務交易之需求時，授權貴行得在申請人已約定之透支、質借、借款、融資契約額度範圍內支用或動用，其超過存款餘額之轉出金額，即為向貴行之借款，不另立借據。有關透支（動用）或質借計息方式，均依貴行與申請人對轉出帳戶之約定契約辦理。</div>
                        <div class="cjk-ideographic red">九、申請人使用本服務辦理金融卡、存摺或印鑑掛失時，經電腦處理完畢後掛失作業即已完成；在申請人辦理掛失止付前如有被盜領等情事，概由申請人自行負責，但經貴行專員受理掛失止付時，則依金融卡約定事項辦理。申請人存摺、印鑑或金融卡掛失後，如要恢復使用相關功能，需親至貴行辦理書面申請手續。
                        </div>
                    </div>
                </div>
                <div class="level-one">
                    <span class="red"><strong>第十二條 業務規範</strong></span>
                    <div class="l-two-em">
                        申請人利用電子銀行服務從事各種業務往來，除本契約另有約定外，同意依循申請人與貴行簽訂之個別業務契約，如有貴行電子銀行服務通路與服務特性規劃調整，可透過“公告、使用手冊、操作頁面說明等方式”通知申請人相關調整說明。
                    </div>
                </div>
                <div class="level-one">
                    <span class="red"><strong>第十三條 資訊安全</strong></span>
                    <div class="l-two-em">
                        <div class="cjk-ideographic red">一、申請人與貴行應各自確保所使用資訊系統之安全，防止非法入侵、取得、竄改、毀損業務紀錄或客戶個人資料。如有第三人破解貴行資訊系統之保護措施或利用資訊系統之漏洞爭議，由貴行就該事實不存在負舉證責任。第三人入侵貴行資訊系統對申請人所造成之損害，由貴行負擔。</div>
                        <div class="cjk-ideographic">
                            二、申請人同意並接受貴行採用但不限於以下方式確保各種電子銀行服務通路提供電子銀行服務之資料安全：
                            <ol>
                                <li>電話銀行利用干擾音提供電話語音密碼輸入與傳輸之隱密性。</li>
                                <li>個人網路銀行利用128bit SSL( Secure Socket layer)通訊協定提供申請人與貴行間各種資料傳輸之隱密性與安全性。</li>
                                <li>行動銀行利用行動通訊加密機制提供申請人與貴行間各種資料傳輸之隱密性與安全性。</li>
                                <li>其他經主管機關核可之資料加密保護機制。申請人同意以前述安全機制完成傳送並經貴行檢核具備完整性之電子文件均為有效。</li>
                            </ol>
                        </div>

                    </div>
                </div>
                <div class="level-one red">
                    <strong>第十四條 保密義務</strong>
                    <div class="l-two-em">
                        除其他法律規定外，申請人與貴行均應確保所交換之電子文件或一方因使用或執行本契約服務而取得他方之資料，不洩漏予第三人，亦不可使用於與本契約無關之目的，且於經他方同意告知第三人時，應使第三人負本條之保密義務。前述第三人如不遵守此保密義務者，視為本人義務之違反。
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第十五條 損害賠償責任</strong>
                    <div class="l-two-em">
                        貴行與申請人同意依本契約傳送或接收電子文件，因可歸責於當事人一方之事由，致有遲延、遺漏或錯誤之情事，而致他方當事人受有損害時，該當事人應就他方所生之損害負賠償責任。
                    </div>
                </div>
                <div class="level-one">
                    <strong>第十六條 紀錄之保存</strong>
                    <div class="l-two-em">
                        貴行應盡善良管理人之注意，為保存所有交易指示類電子文件紀錄，並應確保其真實性及完整性，其保存期限至少為五年，但其他法令有較長規定者，依其規定。
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第十七條 電子文件之效力</strong>
                    <div class="l-two-em">
                        <div class="cjk-ideographic red">
                            一、申請人與貴行同意依本契約交換之電子文件，其效力與書面文件相同。但法令另有排除適用者，不在此限。申請人與貴行就所生之任何糾紛，於審判、仲裁、調解或其他法定爭議處理程序中，均不得主張該電子文件不具書面或簽名要件而歸於無效或不成立。</div>
                        <div class="cjk-ideographic">
                            二、申請人利用本服務查詢所得到之利率、匯率、基金淨值等，僅為參考值，實際價格應以成交時貴行牌告或議定價格為準。如遇匯率波動劇烈或其他特別原因，貴行有權暫停與匯率相關之電子銀行外匯交易服務，並於個人網路銀行進行公告，不另通知申請人。
                        </div>
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第十八條 契約終止</strong>
                    <div class="l-two-em">
                        <div class="cjk-ideographic red">一、申請人申請註銷本服務終止本契約時，應親自或以書面親簽並加蓋原留印鑑委託代理人至貴行辦理。</div>
                        <div class="cjk-ideographic">
                            二、貴行欲終止本契約時，須於終止日三十日前以電子文件或書面通知申請人。但申請人如有下列情事之一者，申請人同意貴行得隨時以電子文件或書面通知申請人終止本契約：
                            <ol>
                                <li>申請人未經貴行同意，擅自將契約之權利或義務轉讓第三人者。</li>
                                <li>申請人依破產法聲請宣告破產或消費者債務清理條例聲請更生、清算程序者。</li>
                                <li>申請人違反本契約第十一條、第十三條、第十四條之規定者。</li>
                                <li>申請人違反本契約之其他約定，經催告改善或限期請求履行未果者。</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第十九條 排除通訊交易解除權之適用範圍</strong>
                    <div class="l-two-em">
                        申請人利用本契約之服務所進行之各項交易，係屬一經 貴行提供服務即為完成之線上服務，故依通訊交易解除權合理例外情事適用準則第二條第五款之規定，排除消費者保護法第十九條第一項解除權之適用。
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第二十條 洗錢防制條款</strong><br>
                    為達防制洗錢及打擊資恐之目的，申請人同意並願配合貴行依「洗錢防制法」、「資恐防制法」、「金融機構防制洗錢辦法」、「銀行業及其他經金融監督管理委員會指定之金融機構防制洗錢及打擊資恐內部控制與稽核制度實施辦法」、「存款帳戶及其疑似不法或顯屬異常交易管理辦法」、「銀行防制洗錢及打擊資恐注意事項範本」及其他相關法令之規定，以及本行防制洗錢及打擊資恐政策進行相關作業，如貴行依前述規定或本條作業導致申請人及關係人（包括但不限於法定代理人【含監護人、輔助人】、負責人、高階管理人、實質受益人）身分及其他交易有關對象）受有損害或承受不利益者，概由申請人自行承擔，貴行不負賠償責任。
                    <div class="l-two-em">
                        <div class="cjk-ideographic red">
                            一、申請人同意且了解貴行確認申請人及關係人身分方式，得要求申請人及關係人依下列方式辦理：
                            <ol>
                                <li>提供可靠、獨立之原始文件、資料或資訊，以辨識及驗證申請人身分，並由貴行保存該身分證明文件影本或予以記錄。</li>
                                <li>由代理人辦理之交易，代理人及申請人應配合查證代理之事實，並依前述方式提供資料以利貴行確認代理人身分。</li>
                                <li>配合貴行以合理措施，辨識及驗證申請人之實際受益人身分。</li>
                                <li>徵詢業務關係之目的與性質，並視情形要求提供相關資訊。</li>
                            </ol>
                        </div>
                        <div class="cjk-ideographic">
                            二、申請人同意且了解貴行確認申請人及關係人身分時，有以下情形之一者，貴行將婉拒與申請人建立業務關係或交易（包含但不限於暫時停止交易、終止業務關係或逕行關戶）：
                            <ol>
                                <li>疑似使用匿名、假名、人頭、虛設行號或虛設法人團體。</li>
                                <li>拒絕提供審核身分措施相關文件。</li>
                                <li>對於由代理人辦理之情形，查證代理之事實及身分資料有困難。</li>
                                <li>持用偽、變造身分證明文件或出示身分證明文件均為影本。</li>
                                <li>提供文件資料可疑、模糊不清、不願提供其他佐證資料或提供之文件資料無法進行查證。</li>
                                <li>不尋常拖延應補充之身分證明文件。</li>
                                <li>申請人或關係人為資恐防制法指定制裁之個人、法人或團體，以及外國政府或國際組織認定或追查之恐怖分子或團體。但依資恐防制法第六條第一項第二款至第四款所為支付不在此限。</li>
                                <li>有其他異常情形，無法提出合理說明。</li>
                            </ol>
                        </div>
                        <div class="cjk-ideographic">
                            三、申請人同意且了解貴行確認申請人及關係人身分時，有以下情形之一者，貴行得婉拒與申請人建立業務關係或交易（包含但不限於暫時停止交易、終止業務關係或逕行關戶），終止契約時貴行需於終止日三十日前以書面通知申請人：
                            <ol>
                                <li>申請人或關係人為遭我國偵查、調查或司法機關列為通緝犯或逃犯者。</li>
                                <li>申請人提供之聯絡資料均無法以合理方式查證者。</li>
                                <li>申請人身分與背景資訊有重大變動，未及時向貴行辦理資料更新或變更戶名。</li>
                                <li>申請人經貴行通知配合辦理申請人身分之持續審查時，拒絕配合或經通知於合理期限（至少30日）內仍未配合辦理者。</li>
                                <li>申請人或申請人之交易或帳戶交易內容符合任一金融機構同業公會訂定，並經主管機關准予備查之疑似洗錢或資恐交易態樣。</li>
                                <li>其他依法令或主管機關規定之事項。</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="level-one">
                    <strong>第二十一條 金融消費爭議</strong><br>
                    申請人對貴行除下列情事外，因商品或服務所生之民事爭議得適用金融消費者保護法之爭議處理程序，貴行對於財團法人金融消費評議中心所作應向金融消費者給付每一筆金額或財產價值在一定額度以下之評議決定，應予接受；評議決定超過一定額度，而申請人表明願意縮減該金額或財產價值至一定額度者，亦同。
                    <div class="l-two-em">
                        <div class="cjk-ideographic red">
                            一、經法院判決確定，或已成立調處、評議、和解、調解或仲裁。
                        </div>
                        <div class="cjk-ideographic red">
                            二、純屬債務協商、投資表現或定價政策之範圍者。
                        </div>
                        <div class="cjk-ideographic red">
                            三、其他爭議處理機構不予受理之情事。
                        </div>
                        前述所稱之「一定額度」，就投資型金融商品或服務係指100萬元，非投資型金融商品或服務則為10萬元。
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第二十二條 契約修訂</strong>
                    <div class="l-two-em">
                        <div class="cjk-ideographic">
                            一、如電子銀行之服務項目有新增或刪除時，由貴行於網站公告方式通知申請人，申請人得於七日內異議並通知貴行終止契約，如新增服務項目影響申請人權益時，申請人應另以書面方式進行申請。
                        </div>
                        <div class="cjk-ideographic">
                            二、如本契約有修改或增刪時，由貴行以電子文件或雙方約定之適當通知方式通知申請人後，申請人於七日內不為異議者，視同承認該修改或增刪約款。但下列事項如有變更，應於變更前六十日以電子文件或雙方約定之適當通知方式通知申請人，並應以顯著明確文字載明其變更事項、新舊約款內容，暨告知申請人得於變更事項生效前表示異議，及申請人未於該期間內異議者，視同承認該修改或增刪約款；並告知申請人如有異議，應於前項得異議時間內通知貴行終止契約：
                            <ol>
                                <li>第三人冒用或盜用電話語音密碼、使用者代號、網路密碼、憑證、私密金鑰，或其他任何未經合法授權之情形，貴行或申請人通知他方之方式。</li>
                                <li>其他經主管機關規定之事項。</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="level-one red">
                    <strong>第二十三條 文書送達</strong>
                    <div class="l-two-em">
                        申請人同意以留存於貴行之聯絡地址為相關文書之送達處所，倘客戶之聯絡地址變更，應親自攜帶身分證明文件至臨櫃或其他約定方式向貴行更新聯絡地址，並同意改依變更後之地址為送達處所；如申請人未以約定方式通知變更地址時，貴行仍以申請人留存之聯絡地址或最後通知貴行之地址為送達處所。
                    </div>
                </div>
                <div class="level-one">
                    <strong>第二十四條 法令適用</strong>
                    <div class="l-two-em">
                        本約定條款準據法，依中華民國法律。
                    </div>
                </div>
                <div class="level-one">
                    <strong>第二十五條 法院管轄</strong>
                    <div class="l-two-em">
                        因本約定條款涉訟時，申請人同意以貴行之總行或與申請人有業務往來所屬分支機構所在地之法院為第一審管轄法院。
                    </div>
                </div>
                <div class="level-one">
                  <strong>第二十六條 標題</strong>
                  <div class="l-two-em">
                      本約定條款各條標題，僅為查閱方便而設，不影響本約款有關條款之解釋、說明及瞭解。
                  </div>
                </div>
                <div class="level-one">
                  <strong>第二十七條 契約保存</strong>
                  <div class="l-two-em">
                      本約定條款壹式貳份，由申請人與貴行各持乙份為憑。本約款得由申請人隨時至貴行網站下載取得最新之約款內容。
                  </div>
                </div>
                <div class="level-one red">
                  <strong>第二十八條 線上申辦電子銀行服務之個別約定</strong><br>
                  壹、貴行存戶：
                  <div class="l-two-em">
                      <div class="cjk-ideographic">
                          一、申請人同意憑本人之身分證字號、生日、行動電話號碼及一組與貴行往來之存款帳號，利用貴行所提供之「線上申辦」網站進行申請開通電子銀行服務及辦理電話語音密碼、使用者代號、網路密碼申請/變更/重設之服務。<br>申請人可憑貴行本人之晶片金融卡及金融卡密碼進行驗證，亦可透過貴行「簡訊驗證碼」認證之機制以簡訊方式傳送至申請人於貴行所設定的手機門號，由申請人於申請頁面輸入簡訊驗證碼以完成交易驗證。
                      </div>
                      <div class="cjk-ideographic">
                          二、申請人同意並明瞭，首次利用線上申辦電子銀行服務，貴行得將申請人填製之臺幣活期性存款帳號設定為約定轉出帳號，其效力等同於申請人親自臨櫃辦理轉出約定。如申請人已向貴行申請並使用電子銀行服務之各項約定及交易限額者，從其原約定。
                      </div>
                      <div class="cjk-ideographic">
                          三、申請人得下載貴行所提供之「晶片卡元件」，憑貴行本人之晶片金融卡及金融卡密碼，利用貴行提供線上申辦網站之「申請/變更 非約定帳戶交易」功能，設定簡訊驗證碼專屬之手機門號及每筆/每日/每月之轉帳交易限額。
                      </div>
                  </div>
                  貳、貴行卡友：
                  <div class="l-two-em">
                      <div class="cjk-ideographic">
                          一、申請人得憑與貴行往來之信用卡業務，同意以本人之身分證字號、生日、行動電話號碼，利用貴行所提供之「線上申辦」網站進行申請開通電子銀行信用卡服務項目及辦理網路使用者代號、網路密碼申請/變更/重設之服務，貴行透過「簡訊驗證碼」認證之機制以簡訊方式傳送至申請人於貴行所設定的手機門號，由申請人於申請頁面輸入簡訊驗證碼以完成交易驗證。
                      </div>
                      <div class="cjk-ideographic">
                          二、申請人完成線上申辦，即可使用電子銀行信用卡服務項目，如欲執行繳交貴行信用卡款等帳務功能，應先開立貴行台幣活期存款帳戶，並以貴行存戶身分進行上述「壹」線上申辦，完成相關驗證即可執行電子銀行各項帳戶查詢及帳務功能。
                      </div>
                  </div>
                </div>
                <div class="level-two red">
                  <p>參、申請人同意並認知，貴行為控管交易風險，申請人於首次完成線上申辦電子銀行服務後三個營業日內，貴行得以電話進行申請事實之核對。</p>
                </div>
                <div class="level-two red">
                  <p>肆、申請人利用線上申辦並使用電子銀行服務從事各種業務往來，如無特別約定，同意依循貴行各種業務相關規範辦理。</p>
                </div>
                <div class="level-two red">
                  <p>伍、其他未盡事宜，悉依有關法令及貴行相關規定辦理。</p>
                </div>
              </div>
            </div>
            <div id="button_terms" class="button_terms">
              <input type="checkbox" id="button_termsOpt_1" disabled v-model="agreement"/>
              <label id="read_1" for="button_termsOpt_1">我已詳細閱讀。(請勾選)</label>
            </div>
            <!----------------//1-------------------------------------------->
          </div>
          <div class="modal-footer">
            <div class="col-12 text-center">
              <button type="submit" class="btn btn-primary btn-lg" @click.prevent="checkTotal">確定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

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
        Identification: '',
        year: '',
        month: '',
        day: '',
        cardPicked: '',
        firstGift: ''
      },
      agreement: false, // ? Modal上同意欄
      agreementAll: false, // ?已同意Modal上所有申請條款
      contractModal: '', // ?同意書modal
      checkagree: false // ?同意個資聲明
    }
  },
  methods: {
    scorllEvent () {
      this.$refs.termBox1.onscroll = function () {
        if (this.scrollHeight - this.scrollTop <= this.clientHeight + 50) {
          const btn = document.querySelector('#button_termsOpt_1')
          const label = document.querySelector('#read_1')
          btn.removeAttribute('disabled')
          label.classList.add('text-checked')
        }
      }
    },
    checkAgreement () {
      this.contractModal.show()
      const ck = document.querySelector('#checkbox1')
      if (!this.agreement) {
        ck.checked = false
        return
      }
      this.agreementAll = true
      ck.checked = true
    },
    checkTotal () {
      if (!this.agreement) {
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
      this.contractModal.hide()
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
      // // ? 建立預設日期(2023/03/15得知不須預設)
      // this.applierInfo.year = this.dateList.yearList[0]
      // this.applierInfo.month = this.dateList.monthList[0]
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
      const collection = await this.$refs.myForm.validate()
      collection.errors = await this.$refs.myForm.getErrors()
      if (Object.keys(collection.errors).length === 0) {
        // ? 檢查約定條款 未打勾
        if (!this.agreement) {
          this.$swal.fire({
            title: '您尚有部份條款未勾選，請詳閱並同意全部條款，以確保自身權益！',
            showConfirmButton: false,
            // timer: 2500
            customClass: {
              title: 'text-class'
              //
            }
          })
          return
        }
        // // ? 檢查個資條款 未打勾(2023/3/15得知為選填)
        // if (!this.checkagree) {
        //   this.$swal.fire({
        //     title: '您尚有個資條款未勾選，請詳閱並同意全部條款，以確保自身權益！',
        //     showConfirmButton: false,
        //     customClass: {
        //       title: 'text-class'
        //     }
        //     // timer: 2500
        //   })
        //   return
        // }
        // ** ===全部通過前往下一頁===
        this.$router.push('/OnLineApply_n1')
      } else {
        // ** ===錯誤訊息彙整===
        this.$custom.validate.showErrors(collection.errors)
      }
    }
  },
  watch: {
    agreement (n) {
      if (this.agreement) {
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
    // 'applierInfo.Identification' (n) {
    //   this.applierInfo.Identification = this.applierInfo.Identification.toUpperCase()
    //   console.log('轉大小寫')
    // }
  },
  mounted () {
    this.scorllEvent()
    this.contractModal = new bootstrap.Modal(this.$refs.contractModal, { backdrop: 'static' })
    this.getYearMonth()
    this.getDay()
  }
}
</script>

<style scoped >
.text-class {
  font-size: 16px !important;
  font-weight: normal !important;
  text-align: left !important;
  padding: 1.25em 1.25em 0 !important;
}
.confirm-btn-class {
  padding: 6px 24px !important;
}
.swal2-actions {
  margin: 1.25em 1em 0 auto !important;
}
</style>
