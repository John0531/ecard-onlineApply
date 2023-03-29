<template>
    <div class="shortKv">
      <div class="fill-shortKv topimg-OnLineApply">
          <div class="container-xl shortKv-title-4">
              <h2>線上辦卡</h2>
          </div>
      </div>
    </div>
    <!-- CHK -->
    <section v-if="$route.path === '/OnLineApply_Chk_OTP'"  class="mainArea">
      <div class="container-xl">
          <Form
            v-slot="{errors}"
            ref="myForm"
          >
            <div class="row justify-content-md-center pt-1 pt-md-3">
                <div class="formGroup">
                    <ul class="formList">
                        <li class="form-group">
                            <label class="label" for="">行動電話</label>
                            <div class="form-text">0999***888</div>
                        </li>
                        <li class="inOpt align-items-start">
                            <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <Field
                                      v-model="mobileMsgCode"
                                      name="驗證碼" type="text" maxlength="4"
                                      placeholder="請輸入驗證碼" class="form-control"
                                      :class="{ 'is-invalid': errors['驗證碼'] }"
                                      @focus="this.mobileMsgCode=''"
                                      @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                      rules="checkOTP"
                                    />
                                    <button
                                    class="ResendOpt"
                                    type="button"
                                    value=""
                                    >
                                    <div v-show="show" @click.prevent="getMobileMsgCode">獲取驗證碼</div>
                                    <div v-show="!show" class="countdown text-white">{{this.count}}秒後可重新發送</div>
                                    </button>
                                </div>
                                <div class="d-flex justify-content-start invalid-feedback my-1">
                                  <span>{{errors['驗證碼']}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-11 col-xxl-9 note_text text-left  mb-3">
                    <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，系統將產生一組簡訊驗證碼至您行動電話，若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消。<br> 按
                    <span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，可重送簡訊驗證碼，一天最多重送兩次，如有疑問，請洽(02)2545-5168、(07)226-9393與本行客服中心聯繫。
                </div>
                <div class="text-center button_group">
                    <button
                    @click.prevent="applySubmit()"
                    class="btn btn-primary btn-lg mx-1"
                    type=""
                    >
                    下一步
                    </button>
                </div>
            </div>
          </Form>
      </div>
    </section>
    <!-- Chksz -->
    <section v-if="$route.path === '/OnLineApply_SZ_OTP'"  class="mainArea">
      <div class="container-xl">
          <Form
            v-slot="{errors}"
            ref="myForm"
          >
            <div class="row justify-content-md-center pt-1 pt-md-3">
                <div class="formGroup">
                    <ul class="formList">
                        <li class="inOpt align-items-start">
                          <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                          <div class="d-flex flex-column">
                            <div class="d-flex align-items-center">
                              <Field
                                v-model="mobileMsgCode"
                                name="驗證碼" type="text" maxlength="4"
                                placeholder="請輸入驗證碼" class="form-control"
                                :class="{ 'is-invalid': errors['驗證碼'] }"
                                @focus="this.mobileMsgCode=''"
                                @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                rules="checkOTP"
                              />
                              <button
                                class="ResendOpt"
                                type="button"
                                value=""
                                >
                                <div v-show="show" @click.prevent="getMobileMsgCode">獲取驗證碼</div>
                                <div v-show="!show" class="countdown text-white">{{this.count}}秒後可重新發送</div>
                              </button>
                                        </div>
                            <div class="d-flex justify-content-start invalid-feedback my-1">
                              <span>{{errors['驗證碼']}}</span>
                            </div>
                          </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-10 note_text text-left mb-3">
                    <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，系統將產生一組簡訊驗證碼至您行動電話，若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消。<br> 按
                    <span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，可重送簡訊驗證碼，一天最多重送兩次，如有疑問，請洽(02)2545-5168、(07)226-9393與本行客服中心聯繫。
                </div>
                <div class="text-center button_group">
                    <button
                    @click.prevent="applySubmit()"
                    class="btn btn-primary btn-lg mx-1"
                    type=""
                    >
                    下一步
                    </button>
                </div>
            </div>
          </Form>
      </div>
    </section>
    <!-- Written -->
    <section v-if="$route.path === '/OnLineApply_Written_OTP'" class="mainArea">
      <div class="container-xl">
          <Form
            v-slot="{errors}"
            ref="myForm"
          >
            <div class="row justify-content-md-center pt-1 pt-md-3">
                <div class="formGroup">
                    <ul class="formList">
                        <li class="form-group">
                            <label class="label" for="">行動電話</label>
                            <div class="form-text">0999***888</div>
                        </li>
                        <!-- <li class="form-group">
                            <label class="label" for="">行動電話</label>
                            <input required="" name="login[id]" type="text" maxlength="10" placeholder="" class="formApply_form_control form-control">
                        </li> -->
                        <li class="inOpt align-items-start">
                            <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <Field
                                      v-model="mobileMsgCode"
                                      name="驗證碼" type="text" maxlength="4"
                                      placeholder="請輸入驗證碼" class="form-control"
                                      :class="{ 'is-invalid': errors['驗證碼'] }"
                                      @focus="this.mobileMsgCode=''"
                                      @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                      rules="checkOTP"
                                    />
                                    <button
                                    class="ResendOpt"
                                    type="button"
                                    value=""
                                    >
                                    <div v-show="show" @click.prevent="getMobileMsgCode">獲取驗證碼</div>
                                    <div v-show="!show" class="countdown text-white">{{this.count}}秒後可重新發送</div>
                                    </button>
                                </div>
                                <div class="d-flex justify-content-start invalid-feedback my-1">
                                  <span>{{errors['驗證碼']}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-11 col-xxl-9 note_text text-left mb-3">
                    <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，系統將產生一組簡訊驗證碼至您行動電話，若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消。<br> 按
                    <span class="Green_text">「獲取簡訊驗證碼」</span>按鈕，可重送簡訊驗證碼，一天最多重送兩次，如有疑問，請洽(02)2545-5168、(07)226-9393與本行客服中心聯繫。
                </div>
                <div class="text-center button_group">
                    <button
                    @click.prevent="applySubmit()"
                    class="btn btn-primary btn-lg mx-1"
                    type=""
                    >
                    下一步
                    </button>
                </div>
            </div>
          </Form>
      </div>
    </section>
    <!-- 卡友 -->
    <section v-if="$route.path === '/OnLineApply_OTP'" class="mainArea">
      <div class="container-xl">
        <div class="row justify-content-md-center pt-1 pt-md-3">
          <div class="mb-4 text-md-center DarkRed_text">
            按下「獲取簡訊驗證碼」，系統將發送至您留存本行信用卡資料之手機號碼，驗證碼於10分鐘內有效。
          </div>
          <Form
            v-slot="{ errors }"
            ref="myForm"
          >
            <div class="formGroup">
              <ul class="formList">
                <li class="inOpt align-items-start">
                  <label class="label mt-0 mt-md-3">請輸入簡訊驗證碼</label>
                  <div class="d-flex flex-column">
                    <div class="d-flex align-items-center">
                      <Field
                        v-model="mobileMsgCode"
                        name="驗證碼" type="text" maxlength="4"
                        placeholder="請輸入驗證碼" class="form-control"
                        :class="{ 'is-invalid': errors['驗證碼']}"
                        @focus="this.mobileMsgCode=''"
                        @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                        rules="checkOTP"
                      />
                      <button
                      class="ResendOpt"
                      type="submit"
                      value=""
                      >
                      <div v-show="show" @click.prevent="getMobileMsgCode">獲取驗證碼</div>
                      <div v-show="!show" class="countdown text-white">{{this.count}}秒後可重新發送</div>
                      <!-- <span v-show="!show">{{ count }}秒後重新發送</span> -->
                      </button>
                    </div>
                    <div class="d-flex justify-content-start invalid-feedback my-1">
                      <span>{{errors['驗證碼']}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="text-center button_group">
              <button
              class="btn btn-primary btn-lg mx-1"
              type="submit"
              @click.prevent="applySubmit()"
              >
              下一步
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
</template>

<script>
export default ({
  data () {
    return {
      agreeModal: '', // ? 同意Modal
      agreement: [], // ? 四項同意欄
      agreementAll: false, // ?同意申請條款
      agreePersonalData: false, // ?同意個資聲明
      mobileMsgCode: '', // *手機驗證碼
      count: 0, // *手機驗證碼倒數秒數
      timer: 0,
      show: true,
      N_Chk: '', // *路由-chk非卡友[他行卡]判斷值
      N_Chksz: '', // *路由-chksz非卡友[他行帳戶]判斷值
      N_Written: '', // *路由-Written非卡友[書面申請]判斷值
      Y: ''// *路由-卡友判斷值
    }
  },
  methods: {
    //* 手機驗證碼
    getMobileMsgCode () {
      // this.isLoading = true
      const time = new Date()
      const getTimer = time.getTime()
      //* 一天的時間(86400)
      time.setTime(getTimer + 1000 * (86400 - 100))
      //* 確認手機是否有填寫
      // const url = `/api/Otp/Send`
      // this.axios
      //  .get(url, {
      //    // get params用法
      //    params: this.mobileMsgCode
      //  })
      //  .then(res => {
      //      if (res.data.rtnCode !== 0) {
      // alert(`${res.data.rtnMsg}`)
      //      } else {
      //        //* 有成功打入API才算
      alert('驗證碼已發送！！')
      //* 驗證碼倒數計時
      this.count = 30
      this.show = false
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= 30) {
          this.count--
        } else {
          this.show = true
          clearInterval(this.timer)
          this.timer = null
        }
      }, 1000)
    },
    async applySubmit () {
      const collection = await this.$refs.myForm.validate()
      collection.errors = await this.$refs.myForm.getErrors()
      if (Object.keys(collection.errors).length === 0) {
        // ** ===全部通過打API才前往下一頁===
        // ?路由判斷導頁 卡友或非卡友
        console.log(this.$route.path)
        if (this.$route.path === '/OnLineApply_OTP') {
          console.log('12')
          this.$router.push('/OnLineApply_Fillin')
        } else {
          console.log('123')
          this.$router.push('/OnLineApply_Fillin_OT')
        }
      } else {
        // ** ===錯誤訊息彙整===
        this.$custom.validate.showErrors(collection.errors)
      }
    }
  },
  mounted () {
    // this.getMobileMsgCode()
    // ?路由判斷
    console.log(this.$route)
  }
})
</script>
