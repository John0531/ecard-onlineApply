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
                          <div class="counter_step">3</div><span>檢附身份證及財力證明</span>
                      </li>
                  </ul>
              </div>
              <!------------------------//步驟---------------------------------->
              <div class="col-lg-10">
                  <h3 class="upload_title">檢附身分證</h3>
                  <div class="mb-3">
                      <h5 class="d-block text-primary">請留意！本網頁操作有效時間：9分40秒</h5>
                  </div>
                  <div class="text-md-end mb-3">
                      <span class="d-block red_text">※上傳格式限JPG及GIF檔，總檔案數為6個，單一檔案上限為5MB。</span>
                  </div>
                  <div class="row upload_group">
                      <div class="col-12 col-md-6">
                          <div class="upload_items text-center">
                              <img src="@/assets/images/form/upload_photo.png" class="img-fluid" alt="">
                              <input type="file" name="upload1" id="upload1" accept="image/*" class="upload" data-sigil="file-input"><textarea name="TBupload1" id="TBupload1" style="display: none;"></textarea>
                          </div>
                          <div class="upload_IDtxt text-center">身分證正面</div>
                      </div>
                      <div class="col-12 col-md-6">
                          <div class="upload_items text-center">
                              <img src="@/assets/images/form/upload_photo.png" class="img-fluid" alt="">
                              <input type="file" name="upload2" id="upload2" accept="image/*" class="upload" data-sigil="file-input"><textarea name="TBupload2" id="TBupload2" style="display: none;"></textarea>
                          </div>
                          <div class="upload_IDtxt text-center">身分證反面</div>
                      </div>
                  </div>
                  <div class="col-12">
                      <h3 class="upload_title">檢附財力證明</h3>
                  </div>
                  <div class="row upload_group mb-4">
                      <div class="form-check my-2">
                          <input class="form-check-input Apply_input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                          <label class="form-check-label text-md-center fw-bold" for="exampleRadios1">
                              自行上傳資料
                          </label>
                          <div class="p-1 mb-3 red_text">財力證明：如存褶、薪資單、扣繳憑單、稅單、權狀等。<br> ◆ 網銀帳號(請檢附含帳號、戶名資料) ◆
                              薪資單(請檢附含公司名稱、姓名資料) ◆ 存摺(請檢附封面、內頁)</div>
                      </div>
                      <!--------------------------------------------->
                      <div class="col-12 col-md-6 mb-4">
                          <div class="upload_items text-center">
                              <input type="file" name="upload3" id="upload3" accept="image/*" class="upload" data-sigil="file-input"><textarea name="TBupload3" id="TBupload3" style="display: none;"></textarea>
                              <div class="upload_txt text-center mt-2">存款(含戶名、帳號)</div>
                              <img src="@/assets/images/form/upload_photo.png" class="img-fluid" alt="">
                          </div>
                          <div class="upload_group_title text-center">財力證明(1)</div>
                      </div>
                      <div class="col-12 col-md-6 mb-4">
                          <div class="upload_items text-center">
                              <div class="upload_txt text-center mt-2">存款(含帳號之內頁)</div>
                              <img src="@/assets/images/form/upload_photo.png" class="img-fluid" alt="">
                              <input type="file" name="upload4" id="upload4" accept="image/*" class="upload" data-sigil="file-input"><textarea name="TBupload4" id="TBupload4" style="display: none;"></textarea>
                          </div>
                          <div class="upload_group_title text-center">財力證明(2)</div>
                      </div>
                      <div class="col-12 col-md-6 mb-4">
                          <div class="upload_items text-center">
                              <div class="upload_txt text-center mt-2">存款(含戶名、帳號)</div>
                              <img src="@/assets/images/form/upload_photo.png" class="img-fluid" alt="">
                              <input type="file" name="upload5" id="upload5" accept="image/*" class="upload" data-sigil="file-input"><textarea name="TBupload5" id="TBupload5" style="display: none;"></textarea>
                          </div>
                          <div class="upload_group_title text-center">財力證明(3)</div>
                      </div>
                      <div class="col-12 col-md-6 mb-4">
                          <div class="upload_items text-center">
                              <div class="upload_txt text-center mt-2">存款(含帳號之內頁)</div>
                              <img src="@/assets/images/form/upload_photo.png" class="img-fluid" alt="">
                              <input type="file" name="upload6" id="upload6" accept="image/*" class="upload" data-sigil="file-input"><textarea name="TBupload6" id="TBupload6" style="display: none;"></textarea>
                          </div>
                          <div class="upload_group_title text-center">財力證明(4)</div>
                      </div>
                      <!----------------------MyData----------------------->
                      <div class="form-check my-2">
                          <input class="form-check-input Apply_input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                          <label class="form-check-label fw-bold text-md-center" for="exampleRadios1">
                              MyData平臺服務<span class="d-block d-md-inline mt-1 mt-md-0">(使用MyData調閱個人資料)</span>
                          </label>
                      </div>
                      <div class="justify-content-center MyData_input_note">
                          <span class="red_text">※勾選此項目需使用自然人憑證、行動自然人憑證或健保卡</span>
                          <span>使用MyData調閱個人資料可於國發會個人化資料自主運用(MyData)平臺透過自然人憑證、行動自然人憑證或健保卡取得下列資訊，相關資訊將轉由聯邦銀行做為您申請信用卡相關業務之財力證明使用。更多關於
                              <a href="https://mydata.nat.gov.tw/" target="_blank"><u>MyData平臺</u></a>。</span>
                          <span>●勞工保險被保險人投保資料(明細)<br>●財產資料<br>●個人所得資料</span>
                      </div>
                      <!-------------------本人已詳閱---------------------->
                      <div class="terms-group">
                          <div class="terms">
                              <input id="checkbox" name="checkbox" value="checkbox" class="checkimg position-absolute" type="checkbox" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="checkAgreement(document.getElementById('button_termsOpt_1'));" />
                              <label for="agree">本人已詳閱並同意｢ <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><u>MyData服務授權條款</u></a>」</label>
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
                  <button class="btn btn-primary btn-lg mx-1" type="submit" value="" data-bs-toggle="modal" data-bs-target="#MsgModal">送出申請</button>
                  <button onclick="location.href='#'" class="btn btn-primary btn-lg mx-1" type="submit" value="">預覽申請書</button>
              </div>
          </div>
      </div>
  </section>
</template>
