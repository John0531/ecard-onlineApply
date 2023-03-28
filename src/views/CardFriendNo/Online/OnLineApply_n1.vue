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
                <div class="col-md-4 col-lg-4 col-xl-3 text-center">
                    <div class="not_UBfriend">
                        <div class="item">
                            <h3>他行信用卡 <img src="@/assets/images/form/Apply_icon02.png" class="img-fluid" alt="" /></h3>
                            <button @click="toOnLineApply_Chk" class="btn btn-primary btn-lg rounded-pill">立即辦卡 <i class="fa fa-arrow-circle-right"></i></button><br>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 text-center">
                    <div class="not_UBfriend">
                        <div class="item">
                            <h3>他行存款帳戶 <img src="@/assets/images/form/Apply_icon03.png" class="img-fluid" alt="" /></h3>
                            <button @click="OnLineApply_ChkSZ" class="btn btn-primary btn-lg rounded-pill">立即辦卡 <i class="fa fa-arrow-circle-right"></i></button><br>
                            <h4>(純網銀或數存不適用)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 text-center">
                    <div class="not_UBfriend">
                        <div class="item">
                            <h3>書面申請 <img src="@/assets/images/form/Apply_icon01.png" class="img-fluid" alt="" /></h3>
                            <button @click="OnLineApply_OTP" class="btn btn-primary btn-lg rounded-pill">立即辦卡 <i class="fa fa-arrow-circle-right"></i></button><br>
                            <h4>(無其他銀行信用卡)</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- 主要內容 END -->
</template>

<script>
export default {
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
      this.$router.push('/OnLineApply_OTP')
    }
  }
}
</script>
