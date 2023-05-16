<template>
  <!--nav end-->
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
                              <button class="btn btn-primary btn-md mx-1" value="" @click="downloadPdf()">下載/列印申請書</button>
                          </div>
                          <p class="text-center">如您為<span class="red_text">『書面申請』</span>，請務必列印申請書並親簽後寄回，以完成申請，謝謝</p>
                        </div>
                        <div class="d-flex flex-wrap my-2 my-md-3 justify-content-center">
                          <div class="col-12 col-md-4 Apply_OT">
                            <div class="Apply_OT_pic">
                                <a href="https://lin.ee/15Gfbt4" target="_blank"><img src="../../assets/images/form/OT_icon01.png" alt="聯邦LINE官方好友" title="聯邦LINE官方好友" /></a>
                            </div>
                            <div class="Apply_OT_txt pt-3">
                                <h3>聯邦LINE官方好友</h3>
                                <h4>享筆筆消費通知不漏接</h4>
                            </div>
                            <div class="text-center mb-3">
                                <button onclick="window.open('https://lin.ee/15Gfbt4')" class="btn btn-primary btn-md mx-1" type="submit" value="">立即綁定</button>
                            </div>
                          </div>
                          <div class="col-12 col-md-4 Apply_OT">
                            <div class="Apply_OT_pic">
                              <a href="https://web.ubot.com.tw/reload/transferUbotAPP.htm" target="_blank"><img src="../../assets/images/form/OT_icon02.png" alt="聯邦行動銀行" title="聯邦行動銀行" /></a>
                            </div>
                            <div class="Apply_OT_txt pt-3">
                              <h3>聯邦行動銀行</h3>
                              <h4>各項服務隨時掌握</h4>
                            </div>
                            <div class="text-center mb-3">
                              <button onclick="window.open('https://web.ubot.com.tw/reload/transferUbotAPP.htm')" class="btn btn-primary btn-md mx-1" type="submit" value="">立即下載</button>
                            </div>
                          </div>
                        </div>
                        <div class="tks_message_end">敬祝您 順心 如意！！如您仍有其他疑問，請電洽聯邦銀行信用卡客戶服務專線：<br>(02)2545-5168或(07)226-9393或使用<a href="https://card.ubot.com.tw/eCard/activity/quickSearch/index.htm?nt01=1" target="_blank"><u>線上客服</u></a>詢問。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <!-- 主要內容 END -->
</template>

<script>
import PublicService from '@/service/Public.Service.js'

export default {
  data () {

  },
  methods: {
    async downloadPdf () {
      const response = await PublicService.previewPdf()
      if (response.status === '01799') {
        PublicService.showAPIMsg(response.message)
        return
      }
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        // ?取檔名
        link.download = response.headers['content-disposition'].split(';')[1].split('=')[1]
        link.click()
      }
    }
  }
}
</script>
