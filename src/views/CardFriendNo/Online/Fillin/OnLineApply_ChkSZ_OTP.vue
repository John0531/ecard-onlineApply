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
              <div class="formGroup">
                  <ul class="formList">
                      <li class="inOpt">
                          <label for="">簡訊驗證碼</label>
                          <input required="" name="login[]" type="text" maxlength="6" placeholder="請輸入驗證碼" class="form-control">
                          <button onclick="location.href='#'" class="ResendOpt" type="submit" value="">獲取簡訊驗證碼</button>
                          <span class="countdown">(21秒後可重新發送)</span>
                      </li>
                  </ul>
              </div>
              <div class="col-lg-10 note_text text-left mb-3">
                  <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，系統將產生一組簡訊驗證碼至您行動電話，若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消。<br> 按
                  <span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，可重送簡訊驗證碼，一天最多重送兩次，如有疑問，請洽(02)2545-5168、(07)226-9393與本行客服中心聯繫。
              </div>
              <div class="text-center button_group">
                  <button onclick="location.href='OnLineApply_Fillin_OT.htm'" class="btn btn-primary btn-lg mx-1" type="submit" value="">下一步</button>
              </div>
          </div>
      </div>
  </section>
</template>
