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
                <div id="NNB_Intro" class="new-new-bank">
                    <div class="new-new-bank-txt">
                        <div class="new-new-bank-title-blue text-center mb-3">還沒有聯邦帳戶嗎?<br>快來體驗【New New Bank】</div>
                        <div class="new-new-bank-title-red text-left col-10 col-sm-5 col-lg-4 mx-auto mb-3 ps-lg-4">
                            ☑ 優利活期儲蓄存款<br>
                            ☑ 每月跨行提款/轉帳優惠<br>
                            ☑ 線上外幣結匯優惠<br>
                        </div>
                        <h4 class="text-center my-4">~ 數位存款帳戶線上開戶方便又快速 ~</h4>
                    </div>
                    <div class="text-center">
                        <router-link to='/dspApplicationNNB_Apply' class="btn new-new-bank-btn" >手刀開戶</router-link>
                        <button onclick="location.href='https://card.ubot.com.tw/eCard/'" class="btn new-new-bank-btn" type="" value="">下次再來</button>
                        <button onclick="location.href='https://web.ubot.com.tw/UB/new_bank_a/index.aspx'" class="btn new-new-bank-btn" type="" value="">更多優惠</button>
                    </div>
                    <div class="new-new-bank-txt text-left text-md-center">＊ 如您已有本行帳戶則無法申請數位帳戶，如有任何問題請與我們聯絡02-25451788。</div>
                </div>
            </div>
        </div>
    </section>
</template>
