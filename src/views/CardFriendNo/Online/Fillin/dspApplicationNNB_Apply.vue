<template>
  <!-- 主視覺 -->
  <div class="shortKv">
      <div class="fill-shortKv topimg-Application">
          <div class="container-xl shortKv-title-4">
              <h2>線上申請</h2>
          </div>
      </div>
  </div>
  <!-- 主要內容 -->
  <section class="mainArea">
      <div class="container-xl">
          <div class="row justify-content-md-center">
              <div class="new-new-bank-title">
                  <img id="NewNewBank_img" src="@/assets/images/form/NewNewBank_banner.gif" class="img-fluid" alt="">
                  <img id="NewNewBank_img_s" src="@/assets/images/form/NewNewBank_banner_s.gif" class="img-fluid" alt="">
              </div>
              <div id="NNB_Apply" class="new-new-bank">
                  <div class="new-new-bank-txt">
                      <div class="text-left text-md-center mb-3">當您申請New New Bank線上立即開戶時，系統將簡化您申辦的流程與輸入之資料，讓您輕鬆完成申請。</div>
                  </div>
                  <div class="terms-group col-lg-9 mx-auto">
                      <div class="terms">
                          <input type="checkbox" class="checkimg position-absolute" id="agree1">
                          <label for="agree1">我不具美國公民身分及其他國家稅務居民身分</label>
                      </div>
                      <div class="terms">
                          <input type="checkbox" class="checkimg position-absolute" id="agree3">
                          <label for="agree3">我已審慎 <a href="https://newnewbank.com.tw/OAO/generalAgreeView.action" target="_blank"><u>閱讀並同意數位存款相關約定與條款</u></a></label>

                          <!--
                              <input id="checkbox" name="checkbox" value="checkbox" class="checkimg position-absolute" type="checkbox" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="checkAgreement(document.getElementById('button_termsOpt_1'));">
                              <label for="agree">我已審慎 <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><u>閱讀並同意數位存款相關約定與條款</u></a>
                              </label>
                          -->
                      </div>
                      <div class="terms">
                          <input type="checkbox" class="checkimg position-absolute" id="agree2">
                          <label for="agree2">我是推廣加入用戶(非必填)</label>
                          <ul class="formList">
                              <li id="UiC" class="d-none align-self-start mb-3">推廣單位(3碼)
                                  <input id="NNBUitcCode" name="NNBUitcCode" type="text" maxlength="3" placeholder="" class="p-number-box form-control">
                              </li>
                              <li id="UsC" class="d-none align-self-start mb-3">推廣員編(7碼)
                                  <input id="NNBUserCode" name="NNBUserCode" type="text" maxlength="7" placeholder="" class="p-number-box form-control">
                              </li>
                              <!-- <li id="UiC" style="display: none;" class="align-self-start mb-3">推廣單位(3碼)
                                  <input id="NNBUitcCode" name="NNBUitcCode" runat="server" type="text" maxlength="3" placeholder="" class="p-number-box form-control" onkeypress="javascript:return OnlyNumEngPress(event);" />
                              </li>
                              <li id="UsC" style="display: none;" class="align-self-start mb-3">推廣員編(7碼)
                                  <input id="NNBUserCode" name="NNBUserCode" runat="server" type="text" maxlength="7" placeholder="" class="p-number-box form-control" onkeypress="javascript:return OnlyNumEngPress(event);" />
                              </li> -->
                              <li class="align-self-start mb-3">專案代碼
                                  <input id="NNBProjCode" name="NNBProjCode" type="text" maxlength="10" placeholder="" class="p-number-box form-control">
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="text-center">
                      <button class="btn new-new-bank-btn" type="submit" @click="gotoNNBFinish">立即開戶</button>
                  </div>
                  <div class="col-lg-9 mx-auto note_text text-left mb-3">
                      <strong>注意事項：</strong>
                      <ol>
                          <li>年滿18歲本國人<br>
                              限聯邦銀行新存戶或曾開戶且已結清銷戶者。</li>
                          <li>雙證件<br>
                              國民身分證、公務機關核發且含清晰照片之第二證件(如健保卡、駕照、護照、市民卡)</li>
                          <li>身分驗證工具<br>
                              【自然人憑證】、【他行存款帳戶】或【本行信用卡】(限正卡且持卡滿六個月(含)以上)</li>
                      </ol>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  methods: {
    gotoNNBFinish () {
      this.$router.push('/dspApplicationNNB_finish')
    }
  }
}
</script>
