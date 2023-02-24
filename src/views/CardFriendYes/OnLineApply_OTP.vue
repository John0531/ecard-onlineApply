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
    <!-- //主視覺 -->
    <section class="mainArea">
        <div class="container-xl">
            <div class="row justify-content-md-center pt-1 pt-md-3">
                <div class="mb-4 text-md-center DarkRed_text">按下「獲取簡訊驗證碼」，系統將發送至您留存本行信用卡資料之手機號碼，驗證碼於10分鐘內有效。</div>
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
                <div class="text-center button_group">
                    <button @click="$router.push('OnLineApply_Fillin')" class="btn btn-primary btn-lg mx-1" type="submit" value="">下一步</button>
                </div>
            </div>
        </div>
    </section>
    <!-- 主要內容 END -->
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
