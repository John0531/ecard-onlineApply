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
        <div class="col-lg-2 mb-4 Card_img text-start text-md-center">
          <img
            :src="FillinData.cardInfoPicture"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="col-lg-10 mb-4 Apply_text">
          <p>
            <img
              src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/Apply_icon.gif"
              class="img-fluid me-1"
              alt=""
            />{{FillinData.cardInfoCardName}}
          </p>
          <p>
            <img
              src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/Apply_icon.gif"
              class="img-fluid me-1"
              alt=""
            />推廣資料<span class="red_text">專案代號：{{FillinData.projNum}}</span>
          </p>
          <p v-if="FillinData.firstGift">
            <img
              src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/Apply_icon.gif"
              class="img-fluid me-1"
              alt=""
            />首刷禮：{{FillinData.firstGift}}
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
                    <span class="red_text">* </span>身分證發證日期
                  </div>
                  <div class="input-data_confirm">
                    <p>民國{{FillinData.form.iddate?.idyear}}年{{FillinData.form.iddate?.idMonth}}月{{FillinData.form.iddate?.idDay}}日({{FillinData.form.idCounty}})
                      <span v-if="FillinData.form.idissue==='1'">初發</span>
                      <span v-if="FillinData.form.idissue==='2'">補發</span>
                      <span v-if="FillinData.form.idissue==='3'">換發</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>中文姓名
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.cName}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>英文姓名
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.eName}}</p>
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
                    <p v-if="FillinData.form.birth?.birthplace!=='其它'">{{FillinData.form.birth?.birthplace}}</p>
                    <p v-else>{{FillinData.form.birth?.birthplace}}-{{FillinData.form.birth?.birthOther}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>國籍
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.nationality}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">教育程度</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.eduLevel}}</p>
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
                    <p>{{FillinData.form.email}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>戶籍地址
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.form.homeAddr?.County}}{{FillinData.form.homeAddr?.Area}}{{FillinData.form.homeAddr?.Road}}<span v-if="FillinData.form.homeAddr?.Lane">{{FillinData.form.homeAddr?.Lane}}巷</span>
                      <span v-if="FillinData.form.homeAddr?.Aly">{{FillinData.form.homeAddr?.Aly}}弄</span>
                      <span v-if="FillinData.form.homeAddr?.Num&&FillinData.form.homeAddr?.Of">{{FillinData.form.homeAddr?.Num}}-{{FillinData.form.homeAddr?.Of}}號</span>
                      <span v-if="FillinData.form.homeAddr?.Num&&!FillinData.form.homeAddr?.Of">{{FillinData.form.homeAddr?.Num}}號</span>
                      <span v-if="!FillinData.form.homeAddr?.Num&&FillinData.form.homeAddr?.Of">{{FillinData.form.homeAddr?.Of}}號</span>
                      <span v-if="FillinData.form.homeAddr?.Flr">{{FillinData.form.homeAddr?.Flr}}樓</span>
                      <span v-if="FillinData.form.homeAddr?.Other">{{FillinData.form.homeAddr?.Other}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>居住地址
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.form.liveAddr?.County}}{{FillinData.form.liveAddr?.Area}}{{FillinData.form.liveAddr?.Road}}<span v-if="FillinData.form.liveAddr?.Lane">{{FillinData.form.liveAddr?.Lane}}巷</span>
                      <span v-if="FillinData.form.liveAddr?.Aly">{{FillinData.form.liveAddr?.Aly}}弄</span>
                      <span v-if="FillinData.form.liveAddr?.Num&&FillinData.form.liveAddr?.Of">{{FillinData.form.liveAddr?.Num}}-{{FillinData.form.liveAddr?.Of}}號</span>
                      <span v-if="FillinData.form.liveAddr?.Num&&!FillinData.form.liveAddr?.Of">{{FillinData.form.liveAddr?.Num}}號</span>
                      <span v-if="!FillinData.form.liveAddr?.Num&&FillinData.form.liveAddr?.Of">{{FillinData.form.liveAddr?.Of}}號</span>
                      <span v-if="FillinData.form.liveAddr?.Flr">{{FillinData.form.liveAddr?.Flr}}樓</span>
                      <span v-if="FillinData.form.liveAddr?.Other">{{FillinData.form.liveAddr?.Other}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>帳單地址
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      <span>{{FillinData.form.billAddr}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>寄卡地址
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      <span>{{FillinData.form.sendCardAddr}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">戶籍電話</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.home?.homeAreaCode}}<span v-if="FillinData.form.home?.homeAreaCode">-</span>{{FillinData.form.home?.homeTel}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">居住電話</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.live?.liveAreaCode}}<span v-if="FillinData.form.home?.homeAreaCode">-</span>{{FillinData.form.live?.liveTel}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">住所狀態</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.liveStatus}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>帳單形式
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      <span v-if="FillinData.form.billType===1">EMAIL帳單</span>
                      <span v-if="FillinData.form.billType===2">行動帳單(簡訊)</span>
                      <span v-if="FillinData.form.billType===3">紙本帳單</span>
                      <span v-if="FillinData.form.billType===4">LINE帳單</span>
                    </p>
                  </div>
                </li>
                <li v-if="Apply_N_Type==='Online'&&FillinDataFlag.flgDigi!=='N'">
                  <div class="label_confirm">
                    申請數位卡
                  </div>
                  <div class="input-data_confirm">
                    <p v-if="FillinData.form.digiFlag==='true'">是</p>
                    <p v-if="FillinData.form.digiFlag==='false'">否</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>畢業國小名稱
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.primarySchool}}</p>
                  </div>
                </li>
                <li v-if="FillinDataFlag.flgStudent==='Y'">
                  <div class="label_confirm">
                    <span class="red_text">* </span>是否為學生
                  </div>
                  <div class="input-data_confirm">
                    <p v-if="FillinData.form.isStudent==='true'">是</p>
                    <p v-if="FillinData.form.isStudent==='false'">否</p>
                  </div>
                </li>
                <template v-if="FillinData.form.isStudent==='true'">
                  <li>
                    <div class="label_confirm">
                      <span class="red_text">* </span>家長姓名
                    </div>
                    <div class="input-data_confirm">
                      <p>{{FillinData.form.parentName}}</p>
                    </div>
                  </li>
                  <li>
                    <div class="label_confirm">
                      <span class="red_text">* </span>家長聯絡電話
                    </div>
                    <div class="input-data_confirm">
                      <p>{{FillinData.form.parentTel}}</p>
                    </div>
                  </li>
                  <li>
                    <div class="label_confirm">
                      <span class="red_text">* </span>家長通訊地址
                    </div>
                    <div class="input-data_confirm">
                      <p>
                        {{FillinData.form.parentAddr?.County}}{{FillinData.form.parentAddr?.Area}}{{FillinData.form.parentAddr?.Road}}<span v-if="FillinData.form.parentAddr?.Lane">{{FillinData.form.parentAddr?.Lane}}巷</span>
                      <span v-if="FillinData.form.parentAddr?.Aly">{{FillinData.form.parentAddr?.Aly}}弄</span>
                      <span v-if="FillinData.form.parentAddr?.Num&&FillinData.form.parentAddr?.Of">{{FillinData.form.parentAddr?.Num}}-{{FillinData.form.parentAddr?.Of}}號</span>
                      <span v-if="FillinData.form.parentAddr?.Num&&!FillinData.form.parentAddr?.Of">{{FillinData.form.parentAddr?.Num}}號</span>
                      <span v-if="!FillinData.form.parentAddr?.Num&&FillinData.form.parentAddr?.Of">{{FillinData.form.parentAddr?.Of}}號</span>
                      <span v-if="FillinData.form.parentAddr?.Flr">{{FillinData.form.parentAddr?.Flr}}樓</span>
                      <span v-if="FillinData.form.parentAddr?.Other">{{FillinData.form.parentAddr?.Other}}</span>
                      </p>
                    </div>
                  </li>
                </template>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>公司名稱
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.compName}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">公司統一編號</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.uniformNum}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">公司電話</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.comp?.compAreaCode}}<span v-if="FillinData.form.comp?.compAreaCode">-</span>{{FillinData.form.comp?.compTel}}{{FillinData.form.comp?.compExt?`分機${FillinData.form.comp?.compExt}`:''}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">公司地址</div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.form.compAddr?.County}}{{FillinData.form.compAddr?.Area}}{{FillinData.form.compAddr?.Road}}<span v-if="FillinData.form.compAddr?.Lane">{{FillinData.form.compAddr?.Lane}}巷</span>
                      <span v-if="FillinData.form.compAddr?.Aly">{{FillinData.form.compAddr?.Aly}}弄</span>
                      <span v-if="FillinData.form.compAddr?.Num&&FillinData.form.compAddr?.Of">{{FillinData.form.compAddr?.Num}}-{{FillinData.form.compAddr?.Of}}號</span>
                      <span v-if="FillinData.form.compAddr?.Num&&!FillinData.form.compAddr?.Of">{{FillinData.form.compAddr?.Num}}號</span>
                      <span v-if="!FillinData.form.compAddr?.Num&&FillinData.form.compAddr?.Of">{{FillinData.form.compAddr?.Of}}號</span>
                      <span v-if="FillinData.form.compAddr?.Flr">{{FillinData.form.compAddr?.Flr}}樓</span>
                      <span v-if="FillinData.form.compAddr?.Other">{{FillinData.form.compAddr?.Other}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">職稱</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.jobTitle}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">年資</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.jobTenure}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>職業別
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.form.job?.jobType}}
                      <span v-if="FillinData.form.job?.jobOther">-{{FillinData.form.job?.jobOther}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>職級別
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.form.jobLV}}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>所得及資金來源
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.form.IncomeMain?.income.filter(item=>item!=='9其他').join('、')}}<span v-if="FillinData.form.IncomeMain?.income.includes('9其他')">、9其他-{{FillinData.form.IncomeMain?.incomeOther}}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>月收入
                  </div>
                  <div class="input-data_confirm">
                    <p>{{$custom.currency(FillinData.form.salary)}}元</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">推廣單位代號</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.unitCode}}</p>
                  </div>
                </li>
                <li>
                  <div class="label_confirm">推廣人員編號</div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.userCode}}</p>
                  </div>
                </li>
                <li v-if="FillinDataFlag.flgAmwayNo==='Y'">
                  <div class="label_confirm">
                    <span class="red_text">* </span>安麗直銷商/會員編號
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.amwayNo}}</p>
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
        <div class="mb-4 text-left"><strong>第三人行銷</strong></div>
        <div class="blue_box mb-4">
          <div class="blue_box_bg">
            <div class="col-12 dashed_line mb-3">
              <div class="mb-3">
                <input
                  v-model="FillinData.term.parentType"
                  class="Apply_input"
                  runat="server"
                  type="radio"
                  :value="true"
                  disabled
                />
                <label class="form-check-label red_text me-3" for="redWord"
                  >同意</label
                ><input
                  v-model="FillinData.term.parentType"
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
                  v-model="FillinData.term.sharedType"
                  type="radio"
                  class="Apply_input"
                  :value="true"
                  runat="server"
                  disabled
                />
                <label class="form-check-label red_text me-3" for="redWord"
                  >同意</label
                ><input
                  v-model="FillinData.term.sharedType"
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
              <span class="red_text">
                  本人確認業經合理期間詳細審閱並完全同意上述條款係經個別商議所訂定，並完成系統驗證，提醒您如未勾選視為不同意，恐無法取得相關服務與優惠，另您亦得隨時來電客服中心辦理同意事項變更為不同意。(拒絕接受行銷專線0800-066678)
              </span>
            </div>
          </div>
        </div>
        <template v-if="flag.flgLine==='Y'">
          <div class="mb-4 text-left">
            <strong>聯邦銀行LINE官方綁定個人化服務：</strong>
          </div>
          <div class="blue_box mb-4">
            <div class="blue_box_bg">
              <div class="col-12 dashed_line mb-3">
                <div class="my-3">
                  <input
                    v-model="FillinData.term.linePNPType"
                    type="radio"
                    class="Apply_input"
                    :value="true"
                    runat="server"
                    disabled
                  />
                  <label class="form-check-label red_text me-3" for="redWord"
                    >申請</label
                  ><input
                    v-model="FillinData.term.linePNPType"
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
        <template v-if="flag.cardType==='悠遊卡'">
          <div class="mb-4 text-left">
            <strong>申請悠遊聯名卡者同意卡片已開啟自動加值功能</strong>
          </div>
          <div class="blue_box mb-4">
            <div class="blue_box_bg">
              <div class="col-12 mb-3">
                <div class="my-3">
                  <input
                    v-model="FillinData.term.autoBonus"
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
        </template>
        <div class="Apply_note_box mb-4" v-if="Apply_N_Type==='Online'">
          <span class="blue_text"
            ><strong
              >＊申請書資料已確認完成請按下一步同意送出，並請繼續完成證件及財力上傳流程。</strong
            ></span
          >
        </div>
        <div class="Apply_note_box mb-4" v-if="Apply_N_Type==='Written'">
          <span class="blue_text"><strong>＊申請書資料已確認完成請按下一步同意送出，並請繼續完成財力上傳流程。</strong></span><br>
          <span class="blue_text"><strong>＊您為<span class="red_text">『書面申請』</span>，請於線上完成申請後，務必<span class="red_text">列印申請書</span>並於<span class="red_text">簽名欄位親簽</span>，依回郵資訊寄回本行。</strong></span>
        </div>
        <div class="text-center button_group">
          <router-link
            to="/OnLineApply_Fillin_OT"
            class="btn btn-primary btn-lg mx-1"
          >
            修改資料
          </router-link>
          <button
            @click.prevent="nextPage"
            class="btn btn-primary btn-lg mx-1"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import service from '@/service/CardFriend_N.Service.js'
import PublicService from '@/service/Public.Service.js'

export default {
  data () {
    return {
      selectJson: JSON.parse(localStorage.getItem('SELECT_JSON')),
      Apply_N_Type: sessionStorage.getItem('Apply_N_Type'),
      FillinData: {
        form: {},
        term: {}
      },
      FillinDataFlag: JSON.parse(sessionStorage.getItem('FillinDataFlag')),
      consent: JSON.parse(sessionStorage.getItem('FillinData')).OT_1_TermsContent.consent,
      ticketInfo: JSON.parse(sessionStorage.getItem('FillinData')).OT_1_TermsContent.ticketInfo,
      flag: JSON.parse(sessionStorage.getItem('FillinData')).OT_1_Flag
    }
  },
  methods: {
    async pageLoad () {
      this.FillinData = await service.fillin_OT2_PageLoad()
      for (const i in this.FillinData.term) {
        if (this.FillinData.term[i] === 'true') {
          this.FillinData.term[i] = true
        } else if (this.FillinData.term[i] === 'false') {
          this.FillinData.term[i] = false
        }
      }
      // this.FillinData.term.autoBonus = !this.FillinData.term.autoBonus
    },
    async nextPage () {
      const result = await PublicService.createPdf()
      if (result) {
        if (this.flag.flgTravel === 'Y') {
          const res = await PublicService.CardSendApply({})
          PublicService.showAPIMsg(res.data.message)
          if (res.status === 200) {
            this.$store.dispatch('clearSession')
            if (res.data.status === '00800') {
              // ? ===選擇自行上傳===
              // ?未來卡成功
              setTimeout(() => {
                this.$router.push('/OnLineApply_Fillin_OT_finish')
              }, 1000)
              return
            }
            if (res.data.status === '00801') {
              // ? ===選擇自行上傳===
              // ?顯示NNB畫面
              setTimeout(() => {
                this.$router.push('/OnLineApply_Fillin_OT_finish_NNB')
              }, 1000)
              return
            }
            if (res.data.status === '00802') {
              // ? ===選擇MyData上傳===
              // ?讀取result內的URL轉導MyData上傳財力
              this.url = res.data.result.MyDataUrl
              setTimeout(() => {
                window.open(this.url, '_blank')
              }, 1000)
            }
          }
        } else {
          sessionStorage.setItem('FinancialStatement', this.FillinData.financialStatement)
          sessionStorage.setItem('MydataOpen', this.FillinData.mydataOpen)
          this.$router.push('/OnLineApply_Fillin_OT_Up')
        }
      }
    }
  },
  mounted () {
    this.pageLoad()
  }
}
</script>
