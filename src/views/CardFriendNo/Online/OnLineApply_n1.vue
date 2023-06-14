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
    <!-- //主視覺 -->
    <!-- 主要內容 -->
    <section class="mainArea">
        <div class="container-xl">
            <div class="row justify-content-md-center pt-1 pt-md-3">
                <div class="dataTitle">
                    <h3><span>請選擇身分驗證方式</span></h3>
                </div>
                <div class="red_text pb-4 text-lg-star text-xl-center">
                    <span>您可以使用「他行信用卡」或「他行實體存款帳戶」進行身份驗證</span><span v-if="flgWritten">；若無上述驗證項目，可選擇「書面申請」方式，於線上填寫完成後列印寄回。</span>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 text-center">
                    <div class="not_UBfriend">
                        <div class="item">
                          <h3 class="mb-0">他行信用卡 <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/Apply_icon02.png" class="img-fluid" alt="" /></h3>
                          <h4 class="my-2 d-block">&ensp;</h4>
                          <button @click="toOnLineApply_Chk" class="btn btn-primary btn-lg rounded-pill" >立即辦卡 <i class="fa fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 text-center">
                    <div class="not_UBfriend">
                        <div class="item">
                          <h3 class="mb-0">他行實體存款帳戶 <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/Apply_icon03.png" class="img-fluid" alt="" /></h3>
                          <h4 class="my-2 d-block red_text">(純網銀及數位存款帳戶不適用)</h4>
                          <button @click="OnLineApply_ChkSZ" class="btn btn-primary btn-lg rounded-pill" >立即辦卡 <i class="fa fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 text-center" v-if="flgWritten">
                    <div class="not_UBfriend">
                        <div class="item">
                          <h3 class="mb-0">書面申請 <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/Apply_icon01.png" class="img-fluid" alt="" /></h3>
                          <h4 class="my-2 d-block red_text">(無他行信用卡及他行帳戶)</h4>
                          <button @click="OnLineApply_OTP" class="btn btn-primary btn-lg rounded-pill" >立即辦卡 <i class="fa fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- 主要內容 END -->
</template>

<script>
import ServiceN from '@/service/CardFriend_N.Service.js'

export default {
  data () {
    return {
      flgWritten: false
    }
  },
  methods: {
    toOnLineApply_Chk () {
      sessionStorage.setItem('Apply_N_Type', 'Online')
      this.$router.push('/OnLineApply_Chk')
    },
    OnLineApply_ChkSZ () {
      sessionStorage.setItem('Apply_N_Type', 'Online')
      this.$router.push('/OnLineApply_ChkSZ')
    },
    OnLineApply_OTP () {
      sessionStorage.setItem('Apply_N_Type', 'Written')
      this.$router.push('/OnLineApply_Chkw')
    }
  },
  async mounted () {
    this.$store.commit('changeLoading', true)
    const res = await ServiceN.applyType()
    console.log(res.data.result?.CardInfoFlgWritten)
    if (res.data.result?.CardInfoFlgWritten === 'Y') {
      console.log(res.result?.CardInfoFlgWritten)
      this.flgWritten = true
      this.$store.commit('changeLoading', false)
    } else {
      this.$store.commit('changeLoading', false)
    }
  }
}
</script>
