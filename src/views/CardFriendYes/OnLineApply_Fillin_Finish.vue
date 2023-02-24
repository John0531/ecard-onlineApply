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
        <div class="blue_box mb-4">
          <div class="blue_box_bg">
            <div class="my-4 text-center">感謝您的申請，本案將進入後續審核程序。</div>
          </div>
        </div>
        <div class="text-center button_group">
          <button
            onclick="location.href='#'"
            class="btn btn-primary btn-lg mx-1"
            type="submit"
            value=""
          >
            回首頁
          </button>
        </div>
      </div>
    </div>
    <div class="container-xl">
      <div class="row justify-content-md-center pt-1 pt-md-3">
        <div class="new-new-bank-title">
          <img
            id="NewNewBank_img"
            src="@/assets/images/form/NewNewBank_banner.gif"
            class="img-fluid d-none d-lg-block mx-auto"
            alt=""
          />
          <img
            id="NewNewBank_img_s"
            src="@/assets/images/form/NewNewBank_banner_s.gif"
            class="img-fluid d-lg-none"
            alt=""
          />
        </div>
        <div id="NNB_Intro" class="new-new-bank">
          <div class="new-new-bank-txt">
            <div class="new-new-bank-title-blue text-center mb-3">
              還沒有聯邦帳戶嗎?<br />快來體驗【New New Bank】
            </div>
            <div
              class="new-new-bank-title-red text-left col-10 col-sm-5 col-lg-4 mx-auto mb-3 ps-lg-4"
            >
              ☑ 優利活期儲蓄存款<br />
              ☑ 每月跨行提款/轉帳優惠<br />
              ☑ 線上外幣結匯優惠<br />
            </div>
            <h4 class="text-center my-4">~ 數位存款帳戶線上開戶方便又快速 ~</h4>
          </div>
          <div class="text-center">
            <button
              onclick="location.href='dspApplicationNNB_Apply.htm'"
              class="btn new-new-bank-btn"
              value=""
            >
              手刀開戶
            </button>
            <button
              onclick="location.href='https://card.ubot.com.tw/eCard/'"
              class="btn new-new-bank-btn"
              value=""
            >
              下次再來
            </button>
            <button
              onclick="location.href='https://web.ubot.com.tw/UB/new_bank_a/index.aspx'"
              class="btn new-new-bank-btn"
              value=""
            >
              更多優惠
            </button>
          </div>
          <div class="new-new-bank-txt text-left text-md-center">
            ＊ 如您已有本行帳戶則無法申請數位帳戶，如有任何問題請與我們聯絡02-25451788。
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 主要內容 END -->
</template>
