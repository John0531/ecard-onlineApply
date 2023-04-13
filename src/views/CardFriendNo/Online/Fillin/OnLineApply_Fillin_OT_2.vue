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
          <p>
            <img
              src="@/assets/images/form/Apply_icon.gif"
              class="img-fluid me-1"
              alt=""
            />首刷禮：(代碼1) 刷卡金500元
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
                    <!-- <p v-else>{{FillinData.form.birth?.birthplace}}-{{selectJson.NATIONALITY.filter(item=>item.VALUE===FillinData.form.birth?.birthOther)[0].SHOW}}</p> -->
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
                      <span v-if="FillinData.form.homeAddr?.Num">{{FillinData.form.homeAddr?.Num}}號</span>
                      <span v-if="FillinData.form.homeAddr?.Of">之{{FillinData.form.homeAddr?.Of}}</span>
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
                      <span v-if="FillinData.form.liveAddr?.Num">{{FillinData.form.liveAddr?.Num}}號</span>
                      <span v-if="FillinData.form.liveAddr?.Of">之{{FillinData.form.liveAddr?.Of}}</span>
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
                      <span v-if="FillinData.form.billType===3">LINE帳單</span>
                      <span v-if="FillinData.form.billType===4">紙本帳單</span>
                    </p>
                  </div>
                </li>
                <li v-if="Apply_N_Type==='Online'">
                  <div class="label_confirm">
                    <span class="red_text">* </span>申請數位卡
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.digiFlag?'是':'否'}}</p>
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
                <li>
                  <div class="label_confirm">
                    <span class="red_text">* </span>是否為學生
                  </div>
                  <div class="input-data_confirm">
                    <p>{{FillinData.form.isStudent?'是':'否'}}</p>
                  </div>
                </li>
                <template v-if="FillinData.form.isStudent">
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
                      <span v-if="FillinData.form.parentAddr?.Num">{{FillinData.form.parentAddr?.Num}}號</span>
                      <span v-if="FillinData.form.parentAddr?.Of">之{{FillinData.form.parentAddr?.Of}}</span>
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
                      <span v-if="FillinData.form.compAddr?.Num">{{FillinData.form.compAddr?.Num}}號</span>
                      <span v-if="FillinData.form.compAddr?.Of">之{{FillinData.form.compAddr?.Of}}</span>
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
                    <span class="red_text">* </span>主要所得及資金來源
                  </div>
                  <div class="input-data_confirm">
                    <p>
                      {{FillinData.form.IncomeMain?.income}}
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
                <li v-if="FillinData.form.flgAmwayNo">
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
            <div class="card-body">
              <span class="red_text"
                >※申請聯邦微風聯名卡包括成為Breeze Rewards微風積點禮遇會員。<br />
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
                如不同意將無法享有第三人提供之相關資訊與服務。(特約合作第三人名單目前為保誠人壽保險股份有限公司、安達國際人壽保險股份有限公司、新加坡商三得利健益亞太股份有限公司台灣分公司、聯閤科技股份有限公司、富日科技股份有限公司，並同意貴行如有新增或變更，得揭露於貴行信用卡網站供申請人查詢。)
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4 text-left" v-if="!FillinData.form.flgTravel"><strong>聯名集團共同行銷</strong></div>
        <div v-if="FillinData.form.flgTravel" class="mb-4 text-left">
          <strong>票證功能及帳單形式同意條款：</strong>
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
            <div v-if="!FillinData.form.flgTravel" class="card-body">
              <span class="red_text"
                >提供個人資料予貴行聯名/認同集團包含連加網路商業股份有限公司、台灣連線股份有限公司(LINE帳單)及個人選擇或附加電票功能之悠遊卡股份有限公司或一卡通票證股份有限公司等；申請聯名/認同卡所屬之該聯名/認同集團，包含但不限於全國加油站股份有限公司、萊爾富股份有限公司、微風廣場實業股份有限公司及其相關企業與合作廠商</span
              >，聯名/認同集團有權於行銷、提供各項產品、服務、權益及各項優惠資訊之目的範圍內使用本人之個人資料，如不同意將無法核發所申請之聯名/認同卡或電子化帳單，並同意貴行得轉發其他信用卡或其他帳單形式(另配合個人資料保護法實施，悠遊卡公司、一卡通公司已將應告知事項載於官網www.easycard.com.tw、www.i-pass.com.tw，若有任何疑義，歡迎您撥打悠遊卡客服專線412-8880及一卡通客服專線(07)791-2000)<br />
              <span class="red_text"
                >本人確認業經合理期間詳細審閱並完全同意上述條款係經個別商議所訂定，並完成系統驗證，提醒您如未勾選視為不同意，恐無法取得相關服務與優惠，另您亦得隨時來電客服中心辦理同意事項變更為不同意。(拒絕接受行銷專線0800-066678)</span
              >
            </div>
            <div v-if="FillinData.form.flgTravel" class="card-body" id="ShareNote_Travel">
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
        <template v-if="FillinData.form.flgLine">
          <div class="mb-4 text-left">
            <strong>聯邦銀行LINE官方綁定個人化服務：</strong>
          </div>
          <div class="blue_box mb-4">
            <div class="blue_box_bg">
              <div class="col-12 dashed_line mb-3">
                <div class="mb-3">
                  <input
                    v-model="FillinData.term.linePNPType"
                    type="radio"
                    class="Apply_input"
                    :value="true"
                    runat="server"
                    disabled
                  />
                  <label class="form-check-label red_text me-3" for="redWord"
                    >同意</label
                  ><input
                    v-model="FillinData.term.linePNPType"
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
        <div class="Apply_note_box mb-4" v-if="Apply_N_Type==='Online'">
          <span class="blue_text"
            ><strong
              >＊申請書資料已確認完成請按下一步同意送出，並請繼續完成證件及財力上傳流程。</strong
            ></span
          >
        </div>
        <div class="Apply_note_box mb-4 indentNote_star" v-if="Apply_N_Type==='Written'">
          <p><span class="blue_text"><strong>＊申請書資料已確認完成請按下一步同意送出，並請繼續完成財力上傳流程。</strong></span></p>
          <p><span class="blue_text"><strong>＊請務必填寫至最後步驟，並列印出「簽名欄位」及黏貼「身分證影本欄位」，完成後請依回郵資訊將紙本寄回本行。</strong></span></p>
        </div>
        <div class="text-center button_group">
          <router-link
            to="/OnLineApply_Fillin_OT"
            class="btn btn-primary btn-lg mx-1"
          >
            修改資料
          </router-link>
          <router-link
            to="/OnLineApply_Fillin_OT_Up"
            class="btn btn-primary btn-lg mx-1"
          >
            下一步
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import service from '@/service/CardFriend_N.Service.js'

export default {
  data () {
    return {
      selectJson: JSON.parse(localStorage.getItem('SELECT_JSON')),
      Apply_N_Type: sessionStorage.getItem('Apply_N_Type'),
      FillinData: {
        form: {},
        term: {}
      }
    }
  },
  methods: {
    async pageLoad () {
      this.FillinData = await service.fillin_OT2_PageLoad()
      this.FillinData.term.autoBonus = !this.FillinData.term.autoBonus
      // ? 回塞 sessionStorage
      const sessionData = JSON.parse(sessionStorage.getItem('FillinData'))
      const fillinData = JSON.parse(JSON.stringify(this.FillinData))
      sessionData.OT = {
        flgLine: JSON.parse(sessionStorage.getItem('FillinData')).OT.flgLine,
        flgTravel: JSON.parse(sessionStorage.getItem('FillinData')).OT.flgTravel,
        brthDt: fillinData.brthDt,
        digiFlag: fillinData.digiFlag,
        id: fillinData.id,
        mbleTelNbr: fillinData.mbleTelNbr,
        primarySchool: fillinData.primarySchool,
        ...fillinData.form
      }
      if (sessionData.OT.billAddr === '同戶籍地址') {
        sessionData.OT.billAddr = '1'
      } else if (sessionData.OT.billAddr === '同居住地址') {
        sessionData.OT.billAddr = '2'
      } else if (sessionData.OT.billAddr === '同公司地址') {
        sessionData.OT.billAddr = '3'
      }
      if (sessionData.OT.sendCardAddr === '同戶籍地址') {
        sessionData.OT.sendCardAddr = '1'
      } else if (sessionData.OT.sendCardAddr === '同居住地址') {
        sessionData.OT.sendCardAddr = '2'
      } else if (sessionData.OT.sendCardAddr === '同公司地址') {
        sessionData.OT.sendCardAddr = '3'
      }
      sessionData.OT.iddate.Year = sessionData.OT.iddate.idyear
      sessionData.OT.iddate.Month = sessionData.OT.iddate.idMonth
      sessionData.OT.iddate.Day = sessionData.OT.iddate.idDay
      sessionData.OT_1 = {
        ...fillinData.term
      }
      sessionStorage.setItem('FillinData', JSON.stringify(sessionData))
      // ? 回塞 sessionStorage end
    }
  },
  mounted () {
    this.pageLoad()
  }
}
</script>
