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
      <Form
        v-slot="{errors}"
        ref="myForm"
      >
        <div class="container-xl">
            <div class="row justify-content-md-center pt-1 pt-md-3">
                <!------------------------步驟---------------------------------->
                <div class="stepGroup">
                    <ul class="step">
                        <li class="completed">
                            <div class="counter_step">1</div><span>申請人資料</span>
                        </li>
                        <li class="completed">
                            <div class="counter_step">2</div><span>個人資料使用特別商議條款</span>
                        </li>
                        <li class="active">
                            <div class="counter_step">3</div><span>檢附財力證明</span>
                        </li>
                    </ul>
                </div>
                <!------------------------//步驟---------------------------------->
                <div class="col-lg-10">
                    <h3 class="upload_title">檢附財力證明</h3>
                    <div class="mb-3">
                        <h5 class="d-block text-primary">請留意！本網頁操作有效時間：9分40秒</h5>
                    </div>
                    <div class="row upload_group mb-4">
                        <div class="d-flex flex-column px-0">
                          <div>
                            <Field
                            class="form-check-input Apply_input"
                            :class="{ 'is-invalid': errors['財力證明'] }"
                            type="radio"
                            name="財力證明" id="exampleRadios1"
                            value="option1"
                            v-model="proofType"
                            :validateOnInput="true"
                            rules="required"
                            />
                            <label class="form-check-label text-md-center fw-bold" for="exampleRadios1">
                                上傳財力資料
                            </label>
                          </div>
                          <div class="d-flex text-center invalid-feedback my-1">
                            <div>{{errors['財力證明資料']}}</div>
                          </div>
                        </div>
                        <div class="form-check my-2">
                          <div class="p-1 mb-3 red_text">※上傳格式限JPG及GIF檔，單一檔案上限為5MB。<br>
                              ※財力證明：如存摺、薪資單、扣繳憑單、地價稅單和房屋稅單或建物權狀等。
                              <a href="https://card.ubot.com.tw/eCard/activity/FinancialProof/index.htm" target="_blank"><u>上傳範例說明</u></a>
                          </div>
                        </div>
                        <!--------------------------------------------->
                        <div class="col-12 col-md-6 ">
                            <div
                            class="upload_items text-center"
                            :class="{ 'is-invalid': errors['財力證明資料'] }"
                            >
                                <Field
                                type="file" name="upload1" id="upload1"
                                accept="image/*,.heic,.heif" class="upload"
                                data-sigil="file-input"
                                :class="{ 'is-invalid': errors['財力證明資料'] }"
                                @change.prevent="pickFiles"
                                @blur="this.num = 1"
                                @mouseleave="checkIsPics"
                                />
                                <!-- <textarea name="TBupload3" id="TBupload3" style="display: none;"></textarea> -->
                                <div class="upload_txt text-center mt-2">存款(含戶名、帳號)</div>
                                <img
                                ref="resultImg1"
                                src="@/assets/images/form/upload_photo.png"
                                class="img-fluid "
                                :class="{'crop-width':identitiyPack1.photo}"
                                alt="">
                            </div>
                            <div
                            class="upload_group_title text-center"
                            :class="{ 'is-invalid': errors['財力證明資料'] }"
                            >財力證明(1)
                            </div>
                        </div>
                        <div class="col-12 col-md-6 ">
                            <div
                            class="upload_items text-center"
                            :class="{ 'is-invalid': errors['財力證明資料'] }"
                            >
                                <Field
                                type="file" name="upload2" id="upload2"
                                accept="image/*,.heic,.heif" class="upload"
                                data-sigil="file-input"
                                @change.prevent="pickFiles"
                                @blur="this.num = 2"
                                @mouseleave="checkIsPics"
                                />
                                <!-- <textarea name="TBupload4" id="TBupload4" style="display: none;"></textarea> -->
                                <div class="upload_txt text-center mt-2">存款(含帳號之內頁)</div>
                                <img
                                ref="resultImg2"
                                src="@/assets/images/form/upload_photo.png"
                                class="img-fluid"
                                :class="{'crop-width':identitiyPack2.photo}"
                                alt="">
                            </div>
                            <div
                            class="upload_group_title text-center"
                            :class="{ 'is-invalid': errors['財力證明資料'] }"
                            >
                            財力證明(2)
                            </div>
                        </div>
                        <div class="d-flex justify-content-center my-4 px-0 invalid-feedback">
                            <div>{{errors['財力證明資料']}}</div>
                        </div>
                        <div class="col-12 col-md-6 ">
                            <div
                            class="upload_items text-center"
                            :class="{ 'is-invalid': errors['財力證明資料'] }"
                            >
                                <Field
                                type="file" name="upload3" id="upload3"
                                accept="image/*,.heic,.heif" class="upload"
                                data-sigil="file-input"
                                :class="{ 'is-invalid': errors['財力證明資料'] }"
                                @change.prevent="pickFiles"
                                @blur="this.num = 3"
                                @mouseleave="checkIsPics"
                                />
                                <!-- <textarea name="TBupload5" id="TBupload5" style="display: none;"></textarea> -->
                                <div class="upload_txt text-center mt-2">存款(含戶名、帳號)</div>
                                <img
                                ref="resultImg3"
                                src="@/assets/images/form/upload_photo.png"
                                class="img-fluid"
                                :class="{'crop-width':identitiyPack3.photo}"
                                alt="">
                            </div>
                            <div
                            class="upload_group_title text-center"
                            :class="{ 'is-invalid': errors['財力證明資料'] }"
                            >財力證明(3)</div>
                        </div>
                        <div class="col-12 col-md-6 ">
                            <div
                            class="upload_items text-center"
                            :class="{ 'is-invalid': errors['財力證明資料'] }"
                            >
                                <Field
                                type="file" name="upload4" id="upload4"
                                accept="image/*,.heic,.heif" class="upload"
                                data-sigil="file-input"
                                :class="{ 'is-invalid': errors['財力證明資料'] }"
                                @change.prevent="pickFiles"
                                @blur="this.num = 4"
                                @mouseleave="checkIsPics"
                                />
                                <!-- <textarea name="TBupload6" id="TBupload6" style="display: none;"></textarea> -->
                                <div class="upload_txt text-center mt-2">存款(含帳號之內頁)</div>
                                <img
                                ref="resultImg4"
                                src="@/assets/images/form/upload_photo.png"
                                class="img-fluid"
                                :class="{'crop-width':identitiyPack4.photo}"
                                alt="">
                            </div>
                            <div
                            class="upload_group_title text-center"
                            :class="{ 'is-invalid': errors['財力證明資料'] }"
                            >
                            財力證明(4)
                            </div>
                        </div>
                        <!----------------------MyData----------------------->
                        <div class="d-flex flex-column px-0">
                          <div >
                              <Field
                              v-model="proofType"
                              class="form-check-input Apply_input"
                              :class="{ 'is-invalid': errors['財力證明'] }"
                              type="radio" name="財力證明"
                              id="exampleRadios1"
                              value="option2"
                              rules="required"
                              />
                              <label class="form-check-label fw-bold text-md-center" for="exampleRadios1">
                                  MyData平臺服務<span class="d-block d-md-inline mt-1 mt-md-0">(使用MyData調閱個人資料)</span>
                              </label>
                          </div>
                          <div class="d-flex text-center invalid-feedback my-1 px-0">
                            <div>{{errors['財力證明']}}</div>
                          </div>
                        </div>
                        <div class="justify-content-center MyData_input_note my-2">
                            <span class="red_text">※勾選此項目需使用自然人憑證、行動自然人憑證或健保卡</span>
                            <span>使用MyData調閱個人資料可於國發會個人化資料自主運用(MyData)平臺透過自然人憑證、行動自然人憑證或健保卡取得下列資訊，相關資訊將轉由聯邦銀行做為您申請信用卡相關業務之<a href="https://card.ubot.com.tw/eCard/activity/MyData/index.htm" target="_blank"><u>財力證明使用</u></a>。更多關於
                                <a href="#" target="_blank"><u>MyData平臺</u></a>。</span>
                            <span>●勞工保險被保險人投保資料(明細)<br>●財產資料<br>●個人所得資料</span>
                        </div>
                        <!-------------------本人已詳閱---------------------->
                        <div class="terms-group">
                            <div class="terms">
                                <input
                                v-model="doubleAgree"
                                id="checkbox1"
                                name="MyData服務授權條款"
                                value="checkbox"
                                class="checkimg position-absolute"
                                :class="{ 'is-invalid': errors['MyData服務授權條款'] }"
                                type="checkbox"
                                :validateOnChange="true"
                                @click="checkAgreement"
                                @change="checkdoubleAgree"
                                />
                                <label for="agree">本人已詳閱並同意｢ <a href="#" ><u>MyData服務授權條款</u></a>」</label>
                            </div>
                            <div class="d-flex text-center invalid-feedback my-1 px-0">
                              <div>{{errors['MyData服務授權條款']}}</div>
                            </div>
                        </div>
                        <!-------------------//本人已詳閱---------------------->
                        <!--------------------------------------------->
                        <div class="Apply_note_box">
                            <span
                                class="red_text"><strong>貼心提醒：<br>下載預覽申請書確認無誤後，需回本頁點選送出申請方可完成申辦流程。送出申請尚未完成前，請勿中途離開本網頁或做其它操作，以免上傳失敗。</strong></span>
                        </div>
                    </div>
                </div>
                <div class="text-center button_group">
                    <button
                    class="btn btn-primary btn-lg mx-1"
                    type=""
                    @click.prevent="submitSuitCase"
                    >
                    送出申請
                    </button>
                    <button
                    class="btn btn-primary btn-lg mx-1"
                    type=""
                    @click.prevent="downloadFile"
                    >
                      預覽申請書
                    </button>
                </div>
            </div>
        </div>
      </Form>
  </section>
      <!---------------------modal-財力證明範例 (彈跳視窗) -------------->
  <div ref="NoticeModal" class="modal fade" id="noticeModal" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title OnLineApply">財力證明範例</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img src="@/assets/images/form/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row mb-4">
                          <div>
                              ◆<strong>實體銀行存摺明細</strong><br>
                              (檢附存摺封面及內頁，需包含帳號、戶名、近一個月交易明細)
                          </div>
                          <div class="col-12 text-center"><img src="@/assets/images/form/FinancialProof_01.jpg" class="img-fluid"></div>
                      </div>
                      <div class="row mb-4">
                          <div>
                              ◆<strong>數位銀行</strong><br>
                              (檢附資料需包含帳號、戶名、近一個月交易明細)
                          </div>
                          <div class="col-12 text-center"><img src="@/assets/images/form/FinancialProof_02.jpg" class="img-fluid"></div>
                      </div>
                      <div class="row mb-4">
                          <div>
                              ◆<strong>薪資單</strong><br>
                              (為現職公司需包含公司名稱、姓名、薪資月份、所得明細)
                          </div>
                          <div class="col-12 text-center"><img src="@/assets/images/form/FinancialProof_03.jpg" class="img-fluid"></div>
                      </div>
                      <div class="row mb-4">
                          <div>
                              ◆<strong>扣繳憑單</strong><br>
                              (需檢附現職最近一年度完整扣繳憑單)
                          </div>
                          <div class="col-12 text-center"><img src="@/assets/images/form/FinancialProof_04.jpg" class="img-fluid"></div>
                      </div>
                      <div class="row mb-4">
                          <div>
                              ◆<strong>所得清單</strong><br>
                              (需檢附現職最近一年度完整所得清單)
                          </div>
                          <div class="col-12 text-center"><img src="@/assets/images/form/FinancialProof_05.jpg" class="img-fluid"></div>
                      </div>
                      <div class="row mb-4">
                          <div>
                              ◆<strong>健保快易通</strong>
                          </div>
                          <div class="col-12 text-center"><img src="@/assets/images/form/FinancialProof_06.jpg" class="img-fluid"></div>
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
        <!---------------------modal-財力圖片修改操作 -------------->
  <div ref="CroppieModal" class="modal fade" id="CroppieModal" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title OnLineApply">財力證明修改</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.prevent="destroy(this.num)">
                    <img src="@/assets/images/form/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
                  </button>
              </div>
              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row mb-4">
                          <div>
                              ◆<strong>原始圖片</strong><br>
                              (請框選可供辨識之大小範圍)
                              <img id="imgTemplate" :src="imgTemplateUrl" alt="" class="img-fluid">
                          </div>
                          <div id="myIdentifident" class="myIdentifident" ref="myIdentifident">
                          </div>
                          <img ref="resultImg">
                      </div>
                      <!-- <div class="row mb-4">
                          <div>
                              ◆<strong>數位銀行</strong><br>
                              (檢附資料需包含帳號、戶名、近一個月交易明細)
                          </div>
                          <div class="col-12 text-center"><img src="@/assets/images/form/FinancialProof_02.jpg" class="img-fluid"></div>
                      </div> -->
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
                          修改完成
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!---------------------上傳成功跳轉NNB--------------------------->
  <div
    ref="NNBModal"
    class="modal fade"
    id="NNBModal"
    tabindex="-1"
    data-bs-backdrop="static"
  >
      <div class="modal-dialog modal-dialog-centered MyData_modal_dialog" role="document">
          <div class="modal-content MyData_modal">
              <div class="modal-header text-center">
                  <h5 class="modal-title w-100 ps-0"><strong>上傳成功</strong></h5>
              </div>
              <p class="modal-body text-left text-md-center pt-4">
                  祝您 順心 如意 !!如您仍有其他疑問，請電洽聯邦銀行信用卡客戶服務專線： <br>(02) 2545-5168或(07) 226-9393
              </p>
              <div class="text-center">
                  <button type="button" class="btn btn-primary btn-lg mx-1" @click="goToNNB">確定</button>
              </div>
              <br/>
          </div>
      </div>
  </div>

  <!---------------------跳轉MyData--------------------------->
  <div
    ref="MyDataModal"
    class="modal fade"
    id="MsgModal"
    tabindex="-1"
    data-bs-backdrop="static"
  >
      <div class="modal-dialog modal-dialog-centered MyData_modal_dialog" role="document">
          <div class="modal-content MyData_modal">
              <div class="modal-header text-center">
                  <h5 class="modal-title w-100 pl-4"><strong>進入MyData平臺</strong></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img src="@/assets/images/form/close.png" border="0" alt="close" data-bs-dismiss="modal"></button>
              </div>
              <p class="modal-body text-left">
                  您已充分了解個人化資料自主運用(MyData)平臺服務內容，並同意<a href="#" target="_blank" @click.prevent="goToMyDataTerms"><u>服務授權條款</u></a>。接下來您即將離開聯邦銀行網頁，前往MyData平臺，您可透過自然人憑證、行動自然人憑證或健保卡取得下列資訊：<br/> ●勞工保險被保險人投保資料(明細)
                  <br/> ●財產資料
                  <br/> ●個人所得資料
                  <br/> 相關資料將轉由聯邦銀行做為您申請信用卡之財力證明使用。
              </p>
              <p class="modal-body text-left MyData-modal-note">
                  注意事項：
                  <span>• 提醒您，MyData平臺未支援IE瀏覽器；使用自然人憑證請確認您已備妥讀卡機，並安裝驅動程式。</span>
                  <span>• MyData平臺服務由國發會提供，若服務過程異常以致無法完成申請，您可轉由本行官網透過自行拍照上傳方式進行補件，以維護您的申辦權益。</span>
              </p>

              <div class="text-center">
                  <button type="button" class="btn btn-lg MyData-modal-btn" data-dismiss="modal" @click="location.replace(location.href);">取消回上一頁</button>
                  <button type="button" class="btn btn-lg MyData-modal-btn-y" data-dismiss="modal" @click="location.href='url'">同意並前往MyData</button>
              </div>
              <br/>
          </div>
      </div>
  </div>
  <!---------------------MyDataAgreeModal--------------------------->
  <div
    ref="MyDataAgreeModal"
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    data-bs-backdrop="static"
  >
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel-1">請向下滾動，仔細閱讀整份同意書所有內容<input id="myCheckCount" hidden></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img src="@/assets/images/form/close.png" border="0" alt="close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                  <!------------------1-------------------------------------------->
                  <div ref="terms_box_1" id="terms_box_1" class="terms_box oneTerms">
                      <!--uc1:wucMyData同意條款 runat="server" id="wucMyData同意條款" /-->
                      <div class="txt">
                          <h3>聯邦銀行使用申請人授權MyData個人資料之服務條款</h3>
                          <div>為協助您了解本服務之功能與內容，以保障您個人之權益，請於使用本服務前詳閱本條款內容，當您開始使用本服務時，即視為您已充分閱讀、瞭解與同意接受本條款之所有內容。
                          </div>
                          <div class="cjk-ideographic">一、服務目的與內容<br>
                              為簡化申請人辦理「信用卡申請服務」流程，聯邦銀行提供申請人於申辦金融服務文件上傳流程使用MyData服務，於前揭線上申請網頁輸入個人身分證統一編號，並完成MyData服務平臺、身分認證檢核及個人授權同意等程序後，本行即取得同意授權之資料。</div>
                          <div class="cjk-ideographic">
                              二、資料使用項目與範圍<br>
                              為使用本服務，您同意提供本行下列個人資料 (詳見附錄： MyData平臺資料傳輸項目明細表)：
                              <ol class="mb-0">
                                  <li>財政部財政資訊中心：財產資料。</li>
                                  <li>財政部財政資訊中心：個人所得資料。</li>
                                  <li>勞動部勞保局：勞工保險被保險人投保資料(明細)。</li>
                              </ol>
                          </div>
                          <div class="cjk-ideographic">
                              三、資料儲存與使用方式
                              <ol class="mb-0">
                                  <li>您因使用本服務所提供並授權本行使用之個人資料，本行將儲存於本服務資料庫中，儲存期間為自您提供並同意授權個人資料之日起，至本行因應業務執行或工作需要所訂定保存年限之截止日止。</li>
                                  <li>您因使用本服務所提供並授權本行使用之個人資料，僅限本行提供本服務內容使用。</li>
                                  <li>前揭個人資料使用對象限本行於國內及國外所在地。</li>
                                  <li>符合個人資料保護相關法令以自動化機器或其他非自動化之使用方式。</li>
                              </ol>
                          </div>
                          <div class="cjk-ideographic">
                              四、使用者相關權利：
                              <ol class="mb-0">
                                  <li>除法律另有特別規定，本行蒐集您的個人資料後，依個人資料保護法規定，您得向本行行使下列各項權利：<br>
                                  (1) 查詢或請求閱覽您的個人資料。<br>
                                  (2) 請求製給您的個人資料複製本。<br>
                                  (3) 請求補充或更正您的個人資料。<br>
                                  (4) 請求停止蒐集、處理或使用您的個人資料。<br>
                                  (5) 請求刪除您的個人資料。</li>
                                  <li>使用本服務所取得之個人資料，其權利仍歸屬於當事人，若需重新取得檔案，須重新進行授權作業。</li>
                                  <li>您可使用24小時客服專線(02)2545-5168、(07)226-9393聯繫本行，或於本行官網「留言板」線上留言，本行將儘速依相關法令規定，處理與回覆您的請求。</li>
                              </ol>
                          </div>
                          <div class="cjk-ideographic">
                              五、服務條款修訂
                              <ol class="mb-0">
                                  <li>本行有權於任何時間修改、變更本服務條款之內容，修改或變更時，以本行公告之服務條款為準，若有其他未盡事宜，悉依本行相關規定或解釋辦理。</li>
                                  <li>如您於本服務條款修改或變更後仍續使用本服務，則視為您已閱讀、瞭解與同意接受本服務條款修改或變更，若您不同意本服務條款之修改或變更，請通知本行，本行將停止使用您對本服務之授權內容。</li>
                              </ol>
                          </div>
                          <div class="cjk-ideographic">
                              六、注意事項
                              <ol class="mb-0">
                                  <li>您得自由選擇是否提供個人資料，惟您若拒絕提供相關個人資料，本行將無法進行必要之審核及處理相關作業，因此將無法受理您前揭權利之行使或提供您相關服務。</li>
                                  <li>本行對於MyData平臺取得您個人之資料係由資料提供者提供，若對資料內容有疑問，請逕洽該所屬資料提供者。</li>
                                  <li>本告知事項日後如有更新內容將於本行官網另行公告。</li>
                              </ol>
                          </div>
                          <div>附錄、MyData平臺資料傳輸項目明細表<br>
                              <table class="table table-bordered">
                                  <thead>
                                      <tr>
                                          <th width="5%" bgcolor="#f6f6f6" class="text-center">項次</th>
                                          <th width="12%" class="text-center" bgcolor="#f6f6f6">部會機關名稱</th>
                                          <th width="10%" class="text-center" bgcolor="#f6f6f6">資料集名稱</th>
                                          <th class="text-center" bgcolor="#f6f6f6">資料集欄位說明</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td align="center">1</td>
                                          <td align="center">財政部財政資訊中心</td>
                                          <td align="center">財產資料</td>
                                          <td>身分證統一編號、姓名、財產稅籍編號、縣市別、房地面積、房地現值金額、持分比率(汽缸容量)、土地標示(車廠牌名稱)、地目(車年)、房屋座落。</td>
                                      </tr>
                                      <tr>
                                          <td align="center">2</td>
                                          <td align="center">財政部財政資訊中心</td>
                                          <td align="center">個人所得資料</td>
                                          <td>所得檔案編號、所得類別、所得人身分證統一編號、所得人姓名、給付總額、扣繳稅額、所得格式代號、所得註記、證號別、總收入、可扣抵稅額。</td>
                                      </tr>
                                      <tr>
                                          <td align="center">3</td>
                                          <td align="center">勞動部勞工保險局</td>
                                          <td align="center">勞工保險被保險人投保資料(明細)</td>
                                          <td>保險別、保險證號、出生日期、勞保被保險人識別碼、單位名稱、姓名、就保註記代碼、工作部門註記、年資(年)、年資(日)、年資起日、年資迄日、投保薪資、異動別代碼、異動日期。</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>

                          <div class="py-2">*資料傳輸項目依各部會機關實際提供者為準。</div>
                      </div>
                  </div>
                  <div id="button_terms" class="button_terms">
                      <input
                      v-model="this.agreement"
                      type="checkbox"
                      id="button_termsOpt_1"
                      @click="checkTotal"
                      />
                      <label id="read_1" for="button_termsOpt_1">我已詳細閱讀。(請勾選)</label>
                  </div>
                  <!----------------//1-------------------------------------------->
              </div>
          </div>
      </div>
  </div>
    <!-- modal-提醒上傳檔案限制提醒  -->
  <div ref="ImageLimit" class="modal fade" id="noticeModal_2" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title"><input id="myCheckCount" hidden></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <img src="@/assets/images/form/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
                  </button>
              </div>
              <div class="modal-body">
                  <div class="text-center py-3">上傳格式限JPG，單一檔案上限為5MB。</div>
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

export default {
  data () {
    return {
      imgTemplateUrl: '',
      imgTemplateInfo: '',
      NoticeModal: '', //* 一進畫面財力證明格式提醒
      NNBModal: '', //* 上傳完成倒轉 NNB
      MyDataModal: '', //* 倒轉 MyData
      MyDataAgreeModal: '', // * 同意MyData
      CroppieModal: '', // * 財力證明圖片修改
      agreement: false, // *表單同意欄位
      agreementAll: false, // *modal上同意欄位
      proofType: '',
      doubleAgree: false, //* 若勾選myData，則為必填
      identitiyPack1: {
        photo: '',
        preViewImg: '',
        resultImg: '',
        file: ''
      },
      identitiyPack2: {
        photo: '',
        preViewImg: '',
        resultImg: '',
        file: ''
      },
      identitiyPack3: {
        photo: '',
        preViewImg: '',
        resultImg: '',
        file: ''
      },
      identitiyPack4: {
        photo: '',
        preViewImg: '',
        resultImg: '',
        file: ''
      },
      num: '', // *修改完成要呈現的照片序
      ImageLimit: '', //* 提醒上傳檔案限制提醒
      form: {
        upload1: '',
        upload2: '',
        upload3: '',
        upload4: '',
        isMydata: null
      },
      url: ''
    }
  },
  methods: {
    async pickFiles (e) {
      // ? 轉base64
      const reader = new FileReader()
      const file = await e.target.files[0]
      const maxAllowedSize = 5 * 1024 * 1024
      if (file.size > maxAllowedSize || file.type !== 'image/jpeg') {
        this.ImageLimit.show()
      } else {
        this.imgTemplateUrl = URL.createObjectURL(file)
        reader.readAsDataURL(file)
        reader.onload = () => {
          this[`identitiyPack${this.num}`].photo = reader.result
          this.makeModify(this.num)
        }
      }
      // ? 清空value
      // this.clearFiles(this.num)
    },
    async makeModify (num) {
      // ?呼叫modal準備呈現
      this.CroppieModal.show()
      // await this.$refs.CroppieModal.addEventListener('shown.bs.modal', () => {
      //   console.log(document.getElementById('imgTemplate').clientWidth)
      //   return 123
      // })
      const imgTemplate = document.getElementById('imgTemplate')
      imgTemplate.onload = function () {
        console.log(document.getElementById('imgTemplate').clientWidth)
      }
      setTimeout(async () => {
        const imgTemplate = document.getElementById('imgTemplate')
        this.imgTemplateInfo = {
          width: imgTemplate.clientWidth,
          height: imgTemplate.clientHeight
        }
        this.imgTemplateUrl = ''
        try {
        // ?要呈現畫面的區域(在modal上)
          const croppieE = this.$refs.myIdentifident
          this[`identitiyPack${num}`].preViewImg = new this.$custom.Croppie(croppieE, {
            viewport: { width: this.imgTemplateInfo.width, height: this.imgTemplateInfo.height },
            boundary: { width: this.imgTemplateInfo.width + 20, height: this.imgTemplateInfo.height + 20 },
            showZoomer: true,
            enableResize: true,
            enableOrientation: true,
            enableZoom: true,
            enforceBoundary: true,
            mouseWheelZoom: 'ctrl'
          })
          // const cropImage = document.querySelector('.cr-image')
          // cropImage.classList.add('crop-test')
          await this[`identitiyPack${num}`].preViewImg.bind({
            url: this[`identitiyPack${num}`].photo
          })
        } catch (error) {
          alert(error)
        }
      }, 500)
    },
    async result () {
      // ?在頁面上各欄位自呈現
      const num = this.num
      const resultImg = this.$refs[`resultImg${num}`]
      await this[`identitiyPack${num}`].preViewImg.result('base64').then(function (base64) {
        resultImg.src = base64
      })
      // ?
      setTimeout(() => {
        // ?將編輯完成的base64準備起來打API
        // this[`identitiyPack${num}`].file = this.jpeg2png(this.$refs[`resultImg${num}`].src)
        this[`identitiyPack${num}`].file = this.$refs[`resultImg${num}`].src
      }, 100)
      // ?編輯結束將相關物件資料銷毀
      this.CroppieModal.hide()
      this.destroy(this.num)
    },
    destroy (num) {
      this[`identitiyPack${num}`].preViewImg.destroy()
      document.getElementById('myIdentifident').innerHTML = ''
      document.getElementById('myIdentifident').classList.remove('croppie-container')
      this.num = ''
    },
    clearFiles (num) {
      // ?清空暫存檔案
      document.querySelector(`#upload${num}`).value = null
    },
    async goToNNB () {
      await this.NNBModal.hide()
      this.$router.push('/dspApplicationNNB')
    },
    async submitSuitCase () {
      this.checkIsPics()
      this.checkdoubleAgree()
      const collection = await this.$refs.myForm.validate()
      collection.errors = await this.$refs.myForm.getErrors()
      if (Object.keys(collection.errors).length === 0) {
        // ** ===全部通過打API才前往下一頁===
        // ** ===整理資料===
        this.form.upload1 = this.identitiyPack1.file
        this.form.upload2 = this.identitiyPack2.file
        this.form.upload3 = this.identitiyPack3.file
        this.form.upload4 = this.identitiyPack4.file
        if (this.proofType === 'option2') {
          this.form.isMydata = true
        }
        if (this.proofType === 'option1') {
          this.form.isMydata = false
        }
        const res = await PublicService.CardSendApply(this.form)
        console.log(res)
        PublicService.showAPIMsg(res.data.message)
        if (res.status === 200) {
          if (res.data.status === '00800') {
            setTimeout(() => {
              this.$router.push('/dspApplicationNNB')
            }, 1000)
          }
          if (res.data.status === '00801') {
            this.MyDataModal.show()
          }
          if (res.data.status === '00802') {
            this.url = res.result.MyDataUrl
            setTimeout(() => {
              window.open(this.url, '_blank')
            }, 1000)
          }
        }
        // ? ===選擇自行上傳===
        // ? ===選擇MyData上傳===
      } else {
        // ** ===錯誤訊息彙整===
        this.$custom.validate.showErrors(collection.errors)
      }
    },
    goToMyDataTerms () {
      // ?路由反向解析
      const routeData = this.$router.resolve({ name: '非卡友- MyData服務授權條款' })
      window.open(routeData.href, '_blank')
    },
    scrollEvent () {
      this.$refs.terms_box_1.onscroll = function () {
        if (this.scrollHeight - this.scrollTop <= this.clientHeight + 50) {
          const btn = document.querySelector('#button_termsOpt_1')
          const label = document.querySelector('#read_1')
          btn.removeAttribute('disabled')
          label.classList.add('text-checked')
        }
      }
    },
    checkAgreement () {
      this.MyDataAgreeModal.show()
      const ck = document.querySelector('#checkbox')
      if (!this.agreement) {
        ck.checked = false
        return
      }
      this.agreementAll = true
      ck.checked = true
    },
    checkTotal () {
      this.agreementAll = true
      const ck = document.querySelector('#checkbox1')
      ck.checked = true
      this.MyDataAgreeModal.hide()
    },
    checkdoubleAgree () {
      const dom = this.$refs.myForm
      dom.setFieldError('MyData服務授權條款', '')
      if (this.proofType === 'option2') {
        if (this.doubleAgree) {
          return true
        } else {
          dom.setFieldError('MyData服務授權條款', '請勾選同意條款')
          return false
        }
      } else {
        return true
      }
    },
    checkIsPics () {
      const dom = this.$refs.myForm
      dom.setFieldError('財力證明資料', '')
      if (this.proofType === 'option1') {
        if (this.identitiyPack1.photo || this.identitiyPack2.photo || this.identitiyPack3.photo || this.identitiyPack4.photo) {
          return true
        } else {
          dom.setFieldError('財力證明資料', '勾選上傳財力資料請上傳任一證明')
          // return false
        }
      } else {
        return true
      }
    },
    async downloadFile () {
      const response = await PublicService.previewPdf()
      console.log(response)
      const blob = new Blob([response], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'test.pdf'
      link.click()
    }
  },
  mounted () {
    this.CroppieModal = new this.$custom.bootstrap.Modal(this.$refs.CroppieModal)
    this.NNBModal = new this.$custom.bootstrap.Modal(this.$refs.NNBModal)
    this.MyDataModal = new this.$custom.bootstrap.Modal(this.$refs.MyDataModal)
    this.MyDataAgreeModal = new this.$custom.bootstrap.Modal(this.$refs.MyDataAgreeModal)
    this.ImageLimit = new this.$custom.bootstrap.Modal(this.$refs.ImageLimit)
    this.scrollEvent()
    // *進場先跳範例提醒
    this.NoticeModal = new this.$custom.bootstrap.Modal(this.$refs.NoticeModal)
    this.NoticeModal.show()
  },
  watch: {
    num (n) {
      document.getElementById('myIdentifident').classList.remove('croppie-container')
    }
  }
}
</script>
