<template>
    <div class="shortKv">
        <div class="fill-shortKv topimg-OnLineApply">
            <div class="container-xl shortKv-title-4">
                <h2>線上辦卡</h2>
            </div>
        </div>
    </div>
    <!-- CHK -->
    <section v-if="$route.name === '手機OTP驗證(他行信用卡)'"  class="mainArea">
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
                            <div class="form-text">{{mbleTelNbr}}</div>
                        </li>
                        <li class="inOpt OnLineApplyOpt align-items-start">
                            <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <span
                                    class="input-group-text"
                                    :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                                    >
                                    {{tag}}-
                                    </span>
                                    <Field
                                      v-model="mobileMsgCode"
                                      name="簡訊驗證碼" type="text" maxlength="6"
                                      placeholder="" class="form-control px-1"
                                      :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                                      @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                      @change="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                      rules="checkOTP"
                                    />
                                    <button
                                    class="ResendOpt"
                                    type="button"
                                    value=""
                                    id="countBtn"
                                    @click.prevent="getMobileMsgCode"
                                    >
                                    <div v-if="this.timer">獲取簡訊驗證碼</div>
                                    <div v-if="!this.timer">重發簡訊驗證碼</div>
                                    </button>
                                </div>
                                <div v-show="!show" class="countdown">({{this.count}}秒後可重新發送)</div>
                                <div v-if="errors['簡訊驗證碼']" class="d-flex justify-content-start field-error my-1">
                                  <span>{{errors['簡訊驗證碼']}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-11 col-xxl-9 note_text text-left mb-3">
                    <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>，系統將產生一組簡訊驗證碼至您行動電話(如您為本行信用卡卡友，將發送至您留存本行信用卡資料之行動電話)，<br>若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消；
                    按<span class="Green_text">「重發簡訊驗證碼」</span>，可重送簡訊驗證碼，一天最多重送兩次。<br>
                    如有疑問，請電洽聯邦銀行信用卡客戶服務專線：(02)2545-5168或(07)226-9393或使用<a href="https://card.ubot.com.tw/eCard/activity/quickSearch/index.htm?nt01=1" target="_blank"><u>線上客服</u></a>詢問。
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
    <section v-if="$route.name === '手機OTP驗證(他行帳戶)'"  class="mainArea">
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
                            <div class="form-text">{{mbleTelNbr}}</div>
                        </li>
                        <li class="inOpt OnLineApplyOpt align-items-start">
                          <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                          <div class="d-flex flex-column">
                            <div class="d-flex align-items-center">
                              <span
                              class="input-group-text"
                              :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                              >
                              {{tag}}-
                              </span>
                              <Field
                                v-model="mobileMsgCode"
                                name="簡訊驗證碼" type="text" maxlength="6"
                                placeholder="" class="form-control px-1"
                                :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                                @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                @change="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                rules="checkOTP"
                              />
                              <button
                                class="ResendOpt"
                                type="button"
                                value=""
                                id="countBtn"
                                @click.prevent="getMobileMsgCode"
                                >
                                <div>重發簡訊驗證碼</div>
                              </button>
                            </div>
                            <div v-show="!show" class="countdown">({{this.count}}秒後可重新發送)</div>
                            <div v-if="errors['簡訊驗證碼']" class="d-flex justify-content-start field-error my-1">
                              <span>{{errors['簡訊驗證碼']}}</span>
                            </div>
                          </div>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-11 col-xxl-9 note_text text-left mb-3">
                    <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>，系統將產生一組簡訊驗證碼至您行動電話(如您為本行信用卡卡友，將發送至您留存本行信用卡資料之行動電話)，<br>若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消；
                    按<span class="Green_text">「重發簡訊驗證碼」</span>，可重送簡訊驗證碼，一天最多重送兩次。<br>
                    如有疑問，請電洽聯邦銀行信用卡客戶服務專線：(02)2545-5168或(07)226-9393或使用<a href="https://card.ubot.com.tw/eCard/activity/quickSearch/index.htm?nt01=1" target="_blank"><u>線上客服</u></a>詢問。
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
    <section v-if="$route.name === '手機OTP驗證(書面)'" class="mainArea">
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
                            <div class="form-text">{{mbleTelNbr}}</div>
                        </li>
                        <!-- <li class="form-group">
                            <label class="label" for="">行動電話</label>
                            <input required="" name="login[id]" type="text" maxlength="10" placeholder="" class="formApply_form_control form-control">
                        </li> -->
                        <li class="inOpt OnLineApplyOpt align-items-start">
                            <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <span
                                    class="input-group-text"
                                    :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                                    >
                                    {{tag}}-
                                    </span>
                                    <Field
                                      v-model="mobileMsgCode"
                                      name="簡訊驗證碼" type="text" maxlength="6"
                                      placeholder="" class="form-control px-1"
                                      :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                                      @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                      @change="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                      rules="checkOTP"
                                    />
                                    <button
                                    class="ResendOpt"
                                    type="button"
                                    value=""
                                    id="countBtn"
                                    @click.prevent="getMobileMsgCode"
                                    >
                                    <div>重發簡訊驗證碼</div>
                                    </button>
                                </div>
                                <div v-show="!show" class="countdown">({{this.count}}秒後可重新發送)</div>
                                <div v-if="errors['簡訊驗證碼']" class="d-flex justify-content-start field-error my-1">
                                  <span>{{errors['簡訊驗證碼']}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-11 col-xxl-9 note_text text-left mb-3">
                    <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>，系統將產生一組簡訊驗證碼至您行動電話(如您為本行信用卡卡友，將發送至您留存本行信用卡資料之行動電話)，<br>若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消；
                    按<span class="Green_text">「重發簡訊驗證碼」</span>，可重送簡訊驗證碼，一天最多重送兩次。<br>
                    如有疑問，請電洽聯邦銀行信用卡客戶服務專線：(02)2545-5168或(07)226-9393或使用<a href="https://card.ubot.com.tw/eCard/activity/quickSearch/index.htm?nt01=1" target="_blank"><u>線上客服</u></a>詢問。
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
    <section v-if="$route.name === '卡友-手機OTP驗證'" class="mainArea">
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
                            <div class="form-text">{{mbleTelNbr}}</div>
                        </li>
                        <li class="inOpt OnLineApplyOpt align-items-start">
                          <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                          <div class="d-flex flex-column">
                            <div class="d-flex align-items-center">
                              <span
                              class="input-group-text"
                              :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                              >
                              {{tag}}-
                              </span>
                              <Field
                                v-model="mobileMsgCode"
                                name="簡訊驗證碼" type="text" maxlength="6"
                                placeholder="" class="form-control px-1"
                                :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                                @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                @change="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                rules="checkOTP"
                              />
                              <button
                                class="ResendOpt"
                                type="button"
                                value=""
                                id="countBtn"
                                @click.prevent="getMobileMsgCode"
                                >
                                <div>重發簡訊驗證碼</div>
                              </button>
                            </div>
                            <div v-show="!show" class="countdown">({{this.count}}秒後可重新發送)</div>
                            <div v-if="errors['簡訊驗證碼']" class="d-flex justify-content-start field-error my-1">
                              <span>{{errors['簡訊驗證碼']}}</span>
                            </div>
                          </div>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-11 col-xxl-9 note_text text-left mb-3">
                    <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>，系統將產生一組簡訊驗證碼至您行動電話(如您為本行信用卡卡友，將發送至您留存本行信用卡資料之行動電話)，<br>若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消；
                    按<span class="Green_text">「重發簡訊驗證碼」</span>，可重送簡訊驗證碼，一天最多重送兩次。<br>
                    如有疑問，請電洽聯邦銀行信用卡客戶服務專線：(02)2545-5168或(07)226-9393或使用<a href="https://card.ubot.com.tw/eCard/activity/quickSearch/index.htm?nt01=1" target="_blank"><u>線上客服</u></a>詢問。
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
    <section v-if="$route.name === '手機OTP驗證(自行存戶)'" class="mainArea">
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
                            <div class="form-text">{{mbleTelNbr}}</div>
                        </li>
                        <li class="inOpt OnLineApplyOpt align-items-start">
                          <label class="label mt-0 mt-md-3" for="">請輸入簡訊驗證碼</label>
                          <div class="d-flex flex-column">
                            <div class="d-flex align-items-center">
                              <span
                              class="input-group-text"
                              :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                              >
                              {{tag}}-
                              </span>
                              <Field
                                v-model="mobileMsgCode"
                                name="簡訊驗證碼" type="text" maxlength="6"
                                placeholder="" class="form-control px-1"
                                :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                                @keyup="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                @change="mobileMsgCode = $custom.validate.OnlyNumPress(mobileMsgCode)"
                                rules="checkOTP"
                              />
                              <button
                                class="ResendOpt"
                                type="button"
                                value=""
                                id="countBtn"
                                @click.prevent="getMobileMsgCode"
                                >
                                <div>重發簡訊驗證碼</div>
                              </button>
                            </div>
                            <div v-show="!show" class="countdown">({{this.count}}秒後可重新發送)</div>
                            <div v-if="errors['簡訊驗證碼']" class="d-flex justify-content-start field-error my-1">
                              <span>{{errors['簡訊驗證碼']}}</span>
                            </div>
                          </div>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-11 col-xxl-9 note_text text-left mb-3">
                    <strong>提醒您：</strong><br>按<span class="Green_text">「獲取簡訊驗證碼」</span>，系統將產生一組簡訊驗證碼至您行動電話(如您為本行信用卡卡友，將發送至您留存本行信用卡資料之行動電話)，<br>若10分鐘「內」未輸入簡訊驗證碼，本申請將自動取消；
                    按<span class="Green_text">「重發簡訊驗證碼」</span>，可重送簡訊驗證碼，一天最多重送兩次。<br>
                    如有疑問，請電洽聯邦銀行信用卡客戶服務專線：(02)2545-5168或(07)226-9393或使用<a href="https://card.ubot.com.tw/eCard/activity/quickSearch/index.htm?nt01=1" target="_blank"><u>線上客服</u></a>詢問。
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
    <!-- 簡訊寄出modal -->
    <!-- <div ref="msgModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <span  style="font-size:1rem">驗證碼已發送！！</span>
            </div>
            <div class="modal-footer" >
                <div class="text-center" >
                <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" style="border-radius: 0.3rem;">關閉</button>
            </div>
            </div>
        </div>
      </div>
    </div> -->
</template>

<script>
import PublicService from '@/service/Public.Service.js'

export default ({
  data () {
    return {
      // agreeModal: '', // ? 同意Modal
      // agreement: [], // ? 四項同意欄
      // agreementAll: false, // ?同意申請條款
      // agreePersonalData: false, // ?同意個資聲明
      mobileMsgCode: '', // *手機驗證碼
      count: 0, // *手機驗證碼倒數秒數
      timer: 0,
      show: true,
      N_Chk: '', // *路由-chk非卡友[他行卡]判斷值
      N_Chksz: '', // *路由-chksz非卡友[他行帳戶]判斷值
      N_Written: '', // *路由-Written非卡友[書面申請]判斷值
      Y: '', // *路由-卡友判斷值
      MsgModal: '', // *簡訊寄出modal
      tag: '', //* otp識別碼
      mbleTelNbr: ''
    }
  },
  methods: {
    //  ? 手機驗證碼
    async getMobileMsgCode () {
      // this.isLoading = true
      const time = new Date()
      const getTimer = time.getTime()
      //* 一天的時間(86400)
      time.setTime(getTimer + 1000 * (86400 - 100))
      //* 有成功打入API才算
      const res = await PublicService.otpGet()
      if (res.status === 200) {
        //* 更新tag
        this.tag = res.data.result?.tag
        this.mbleTelNbr = res.data.result?.mbleTelNbr
        PublicService.showAPIMsg(res.data.message)
        //* 驗證碼倒數計時
        this.count = 30
        this.show = false
        //* 鎖發送
        const btn = document.querySelector('#countBtn')
        btn.setAttribute('disabled', '')
        //* 計時
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= 30) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
            btn.removeAttribute('disabled', '')
          }
        }, 1000)
      }
    },
    async applySubmit () {
      const collection = await this.$refs.myForm.validate()
      collection.errors = await this.$refs.myForm.getErrors()
      if (Object.keys(collection.errors).length === 0) {
        // ** ===全部通過打API才前往下一頁===
        // const res = await PublicService.otpSend(`${this.tag}${this.mobileMsgCode}`)
        const res = await PublicService.otpSend(`${this.mobileMsgCode}`)
        if (res.status === 200) {
          if (res.data.status === '40198') {
            PublicService.showAPIMsg(res.data.message)
          }
          if (res.data.status === '00000') {
            if (this.$route.path === '/OnLineApply_OTP') {
              this.$router.push('/OnLineApply_Fillin')
            } else {
              this.$router.push('/OnLineApply_Fillin_OT')
            }
          }
          // ?路由判斷導頁 卡友或非卡友
        }
      } else {
        // ** ===錯誤訊息彙整===
        this.$custom.validate.showErrors(collection.errors)
      }
    }
  },
  async mounted () {
    //* pageLoad接值
    // const res = await PublicService.otpGet()
    // this.mbleTelNbr = res.data.result.mbleTelNbr
    // this.tag = res.data.result.tag
    this.getMobileMsgCode()
    //   //* 資料處理
    //   //* 確認手機是否有值?若有發送簡訊碼
  }
})
</script>

<style scoped>
  .modal-header .close{
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
  }
  button.close{
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .close{
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
  }
  .close:hover {
    opacity: .75;
  }
  .btn.btn-primary:hover{
    background-color:#707070!important;
  }
</style>
