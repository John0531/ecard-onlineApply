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
      <div class="row justify-content-md-center">
        <div class="mb-4"><strong>產生預覽版申請書</strong></div>
        <div class="blue_box mb-4">
          <div class="blue_box_bg">
            <div class="my-4 text-center">
              <a href="#" target="_blank"
                ><img src="images/pdf.png" class="img-fluid" alt=""
              /></a>
              <button
                class="Down_Apply_button mx-3"
                value=""
                @click="downloadPdf()"
              >
                點選下載預覽申請書
              </button>
            </div>
          </div>
        </div>
        <div class="Apply_note_box mb-4">
          <span class="red_text"
            ><strong
              >貼心提醒：<br />
              下載預覽申請書確認無誤後，需回本頁點選送出申請方可完成申辦流程。送出申請尚未完成前，請勿中途離開本網頁或做其它操作，以免上傳失敗。</strong
            ></span
          >
        </div>
        <div class="text-center button_group">
          <button
            class="btn btn-primary btn-lg mx-1"
            value=""
            @click="onSubmit(this.request)"
          >
            確認無誤，送出申請
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- 主要內容 END -->
</template>

<script>
import service from '../../service/Public.Service'
export default {
  data () {
    return {
      sendOnlineApply: '',
      request: {
        upload1: '',
        upload2: '',
        upload3: '',
        upload4: '',
        isMydata: false
      }
    }
  },
  methods: {
    async downloadPdf () {
      const response = await service.previewPdf()
      if (response.status === '01799') {
        service.showAPIMsg(response.message)
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
    },
    async onSubmit () {
      try {
        const response = await service.CardSendApply(this.request)
        const { status, result } = response.data
        switch (status) {
          case '00800' :
            sessionStorage.clear()
            this.$router.push('/OnLineApply_Fillin_Finish')
            break
          case '00801' :
            sessionStorage.clear()
            this.$router.push('/dspApplicationNNB')
            break
          case '00802' :
            sessionStorage.clear()
            window.open(result.MyDataUrl, '_blank')
            break
          default:
            service.showAPIMsg(response.message)
            break
        }
      } catch (error) {
        console.error('onSubmit error', error)
      }
    }
  }
}
</script>
