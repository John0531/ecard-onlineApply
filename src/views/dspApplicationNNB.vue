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
                <div class="dataTitle">
                    <h3><span>申辦訊息</span></h3>
                </div>
                <div class="col-lg-10">
                  <div class="result_message mb-4">
                      <div class="py-2 py-md-3">
                          <p class="text-center"><span class="red_text">感謝您申辦聯邦銀行信用卡！</span><br>
                              我們會儘速為您處理，祝您 順心如意。
                          </p>
                      </div>
                      <div class="pb-2 pb-md-3">
                          <div class="text-center pb-2 pb-md-3">
                              <button @click.prevent="downloadFile()" class="btn btn-primary btn-md mx-1">下載/列印申請書</button>
                          </div>
                          <p class="text-center">如您為<span class="red_text">『書面申請』</span>，請務必列印申請書並親簽後寄回，以完成申請，謝謝</p>
                      </div>
                      <div class="new-new-bank-title">
                          <img id="NewNewBank_img" src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/NewNewBank_banner.gif" class="img-fluid" alt="">
                          <img id="NewNewBank_img_s" src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/NewNewBank_banner_s.gif" class="img-fluid" alt="">
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
                              <button @click='newNewBankChk()'
                              class="btn new-new-bank-btn text-white"
                              >
                              手刀開戶
                              </button>
                              <button onclick="location.href='https://card.ubot.com.tw/eCard/'" class="btn new-new-bank-btn" type="" value="">下次再來</button>
                              <button onclick="location.href='https://web.ubot.com.tw/UB/new_bank_a/index.aspx'" class="btn new-new-bank-btn" type="" value="">更多優惠</button>
                          </div>
                          <div class="new-new-bank-txt text-left text-md-center">＊ 如您已有本行帳戶則無法申請數位帳戶，如有任何問題請與我們聯絡02-25451788。</div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ServiceN from '@/service/CardFriend_N.Service.js'
import PublicService from '@/service/Public.Service.js'

export default {
  data () {
    return {
      agreeModal: '', // ? 同意Modal
      agreement: [], // ? Modal四項同意欄
      agreementAll: false, // ?已同意Modal上所有申請條款
      checkagree: false, // ?同意個資聲明
      // *接值欄位
      cardNumber: {
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        codeAll: ''
      },
      validThru: '',
      CSC: '',
      phoneNumber: '',
      termsFile: [],
      termsHtml: [],
      brthDt: '',
      oid: '',
      // *post欄位
      chkData:
      {
        obCardNo: '',
        oExpDay: '',
        oCvv: '',
        omobilePhone: '',
        agreeTerms: null,
        personalDataAuthorized: null
      }
    }
  },
  methods: {
    async newNewBankChk () {
      const res = await ServiceN.newNewBankChk()
      if (res.data.status === '00900') {
        setTimeout(() => {
          this.$router.push('/dspApplicationNNB_Apply')
        }, 1000)
      }
    },
    async downloadFile () {
      const response = await PublicService.previewPdf()
      if (response.status === '01799') {
        PublicService.showAPIMsg(response.message)
        return
      }
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.target = '_blank'
        link.download = response.headers['content-disposition'].split(';')[1].split('=')[1]
        // link.download = `test.pdf`
        link.click()
      }
    }
  },
  mounted () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>
