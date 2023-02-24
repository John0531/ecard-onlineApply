<template>
  <!--nav end-->
  <!-- 主視覺 -->
  <div class="shortKv">
    <div class="fill-shortKv topimg-OnLineApply">
      <div class="container-xlr shortKv-title-4">
        <h2>線上辦卡</h2>
      </div>
    </div>
  </div>
  <!-- 主要內容 -->
  <section class="mainArea">
    <div class="container-xl">
      <div class="row justify-content-md-center">
        <div class="mb-4">
          <strong>聯邦銀行個人資料使用同意條款</strong>
          <small class="red_text">*請務必勾選</small>
        </div>
        <div class="blue_box mb-4">
          <div class="blue_box_bg">
            <input
              class="Apply_input"
              name="radioALL"
              id="radioALL"
              runat="server"
              type="radio"
              value="Y"
            />
            <label class="form-check-label fw-bold" for="radioALL">全部同意</label>
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
                    ※申請聯邦微風聯名卡包括成為Breeze Rewards微風積點禮遇會員。<br />
                    ※本人確認業經合理期間詳細審閱並完全了解貴行依個人資料保護法第八條所進行之告知內容及本申請書所列信用卡相關利率、費用項目及收取標準(詳如信用卡利率/費用一覽表)，並就上述聲明事項、正反面所載有關申請聯邦銀行信用卡用卡須知、重要約定事項之內容及Breeze
                    Rewards微風積點禮遇會員同意及注意事項表列之重要告知，同意提供個人資料予貴行及遵守信用卡約定條款之規定，茲簽名如下以示負責。【附卡申請人同意貴行將約定條款或其他業務上應為之通知（如帳單等)，向正卡申請人送達即對附卡申請人發生相同之效力。】<br />
                    ※申請一卡通聯名卡者同意卡片已開啟自動加值功能。(AUTOLOAD)<br />
                    ※申請聯邦全國加油聯名卡包括成為全國大利點會員，同享全國大利點會員優惠。
                    <br />
                    ※若不符聯邦全國加油聯名卡片申請資格，將同意由全國加油站改發現金大利會員卡一張(限每人一卡)。<br />
                    若申請人未依約繳款，本行除得委外催收或依法聲請強制執行外，並得依規就逾期未清償帳款，出售予資產管理公司，另依相關規定登錄於財團法人金融聯合徵信中心，可能影響申請人未來申辦其他貸款、信用卡之權利。上述紀錄揭露期間，請上聯徵中心網站www.jcic.org.tw「社會大眾專區」之「資料揭露期限」查詢。
                    <br />
                    <span class="blue_text"
                      >貴行之聯名/認同集團與有特約合作之第三人，為行銷、提供各項產品、服務、權益及各式優惠資訊(包含特定商店、商品、保險等)之目的範圍內，貴行得將本人之中英文姓名、身分證字號、生日、電話、地址、電子郵件、卡號及消費屬性等個人基本資料，由貴行提供予聯名/認同集團與有特約合作之第三人、並基於特定目的範圍內，得為蒐集、處理、國際傳輸及利用。貴行之聯名/認同集團與有特約合作之第三人應對個人資料依法保密。<br /></span
                    >全國加油站為行銷、提供各項產品、服務、權益及各式優惠資訊(包含特定商店、商品、保險等)之目的範圍內，得將本人之中英文姓名、身分證字號、生日、電話、地址、電子郵件、全國加油站會員資料、大利點及消費屬性等個人基本資料，提供予貴行，並基於特定目的範圍內，得為蒐集、處理、國際傳輸及利用。貴行應對該等個人資料依法保密。
                  </div>
                  <div class="card-body" id="PersonNote_Travel">
                    ※本人確認業經合理期間詳細審閱並完全了解貴行依個人資料保護法第八條所進行之告知內容及本申請書所列信用卡相關利率、費用項目及收取標準(詳如信用卡利率/費用一覽表)，並就上述聲明事項、正反面所載有關申請聯邦銀行信用卡用卡須知、重要約定事項之內容及注意事項表列之重要告知，同意提供個人資料予貴行及遵守信用卡約定條款之規定，茲簽名如下以示負責。【附卡申請人同意貴行將約定條款或其他業務上應為之通知（如帳單等)，向正卡申請人送達即對附卡申請人發生相同之效力。】<br />
                    ※申請一卡通聯名卡者同意卡片已開啟自動加值功能。(AUTOLOAD)<br />
                    若申請人未依約繳款，本行除得委外催收或依法聲請強制執行外，並得依規就逾期未清償帳款，出售予資產管理公司，另依相關規定登錄於財團法人金融聯合徵信中心，可能影響申請人未來申辦其他貸款、信用卡之權利。上述紀錄揭露期間，請上聯徵中心網站www.jcic.org.tw「社會大眾專區」之「資料揭露期限」查詢。<br />
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
                  <span class="red_text">*</span><strong> 第三人行銷：</strong>
                </div>
                <div class="col-12 mb-3">
                  <div class="mb-3">
                    <input
                      class="Apply_input"
                      name=""
                      id=""
                      runat="server"
                      type="radio"
                      value="Y"
                    />
                    <label class="form-check-label red_text fw-bold me-3" for="redWord"
                      >同意</label
                    ><input
                      class="Apply_input"
                      name=""
                      id=""
                      runat="server"
                      type="radio"
                      value="Y"
                    />
                    <label class="form-check-label fw-bold red_text" for="redWord"
                      >不同意</label
                    ><span class="red_text">提供個人資料予貴行有特約合作之第三人</span>
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
                  <div>
                    <span class="red_text">*</span><strong>聯名集團共同行銷：</strong>
                  </div>
                  <div><strong>票證功能及帳單形式同意條款：</strong></div>
                </div>
                <div class="col-12 mb-3">
                  <input
                    class="Apply_input"
                    name=""
                    id=""
                    runat="server"
                    type="radio"
                    value="Y"
                  />
                  <label class="form-check-label red_text fw-bold me-3" for="redWord"
                    >同意</label
                  ><input
                    class="Apply_input"
                    name=""
                    id=""
                    runat="server"
                    type="radio"
                    value="Y"
                  />
                  <label class="form-check-label fw-bold red_text" for="redWord"
                    >不同意</label
                  >
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <span class="red_text"
                      >提供個人資料予貴行聯名/認同集團包含連加網路商業股份有限公司、台灣連線股份有限公司(LINE帳單)及個人選擇或附加電票功能之悠遊卡股份有限公司或一卡通票證股份有限公司等；申請聯名/認同卡所屬之該聯名/認同集團，包含但不限於全國加油站股份有限公司、萊爾富股份有限公司、微風廣場實業股份有限公司及其相關企業與合作廠商</span
                    >，聯名/認同集團有權於行銷、提供各項產品、服務、權益及各項優惠資訊之目的範圍內使用本人之個人資料，如不同意將無法核發所申請之聯名/認同卡或電子化帳單，並同意貴行得轉發其他信用卡或其他帳單形式(另配合個人資料保護法實施，悠遊卡公司、一卡通公司已將應告知事項載於官網www.easycard.com.tw、www.i-pass.com.tw，若有任何疑義，歡迎您撥打悠遊卡客服專線412-8880及一卡通客服專線(07)791-2000)<br />
                    <span class="red_text"
                      >本人確認業經合理期間詳細審閱並完全同意上述條款係經個別商議所訂定，並完成系統驗證，提醒您如未勾選視為不同意，恐無法取得相關服務與優惠，另您亦得隨時來電客服中心辦理同意事項變更為不同意。(拒絕接受行銷專線0800-066678)</span
                    >
                  </div>
                  <div class="card-body" id="ShareNote_Travel">
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
              <div class="dashed_line mb-3">
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
                  <input
                    class="Apply_input"
                    name=""
                    id=""
                    runat="server"
                    type="radio"
                    value="Y"
                  />
                  <label class="form-check-label red_text fw-bold me-3" for="redWord"
                    >同意</label
                  ><input
                    class="Apply_input"
                    name=""
                    id=""
                    runat="server"
                    type="radio"
                    value="Y"
                  />
                  <label class="form-check-label fw-bold red_text" for="redWord"
                    >不同意</label
                  >
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
                    class="Apply_input"
                    name=""
                    id=""
                    runat="server"
                    type="checkbox"
                    value="Y"
                  />
                  <label class="form-check-label fw-bold me-3" for="redWord"
                    >不同意開啟</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-center button_group">
          <button
            onclick="location.href='#'"
            class="btn btn-primary btn-lg mx-1"
            type="submit"
            value=""
          >
            上一步
          </button>
          <button
            onclick="location.href='OnLineApply_Fillin_Download.htm'"
            class="btn btn-primary btn-lg mx-1"
            type="submit"
            value=""
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- 主要內容 END -->
</template>
