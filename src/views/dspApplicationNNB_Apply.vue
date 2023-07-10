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
    <Form
      v-slot="{errors}"
      ref="myForm"
    >
      <div class="container-xl">
          <div class="row justify-content-md-center">
              <div class="new-new-bank-title">
                  <img id="NewNewBank_img" src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/NewNewBank_banner.gif" class="img-fluid" alt="">
                  <img id="NewNewBank_img_s" src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/NewNewBank_banner_s.gif" class="img-fluid" alt="">
              </div>
              <div id="NNB_Apply" class="new-new-bank">
                  <div class="new-new-bank-txt">
                      <div class="text-left text-md-center mb-3">當您申請New New Bank線上立即開戶時，系統將簡化您申辦的流程與輸入之資料，讓您輕鬆完成申請。</div>
                  </div>
                  <div class="terms-group col-lg-9 mx-auto">
                      <div class="terms">
                          <Field
                          v-model="iAmNative"
                          type="checkbox"
                          :class="{ 'is-invalid': errors['我不具美國公民身分'] }"
                          class="checkimg position-absolute"
                          id="agree1" name="我不具美國公民身分"
                          value="agree"
                          rules="required"
                          />
                          <label for="agree1">我不具美國公民身分及其他國家稅務居民身分</label>
                          <div v-if="errors['我不具美國公民身分']" class="d-flex text-center field-error my-1">
                            <div>{{errors['我不具美國公民身分']}}</div>
                          </div>
                      </div>
                      <div class="terms">
                          <Field
                          v-model="checkErules"
                          type="checkbox"
                          :class="{ 'is-invalid': errors['數位存款相關約定與條款'] }"
                          class="checkimg position-absolute"
                          id="agree2" name="數位存款相關約定與條款"
                          value="agree"
                          rules="required"
                          />
                          <label for="agree2">我已審慎 <a href="https://newnewbank.com.tw/OAO/generalAgreeView.action" target="_blank"><u>閱讀並同意數位存款相關約定與條款</u></a></label>
                          <div v-if="errors['數位存款相關約定與條款']" class="d-flex text-center field-error my-1">
                            <div>{{errors['數位存款相關約定與條款']}}</div>
                          </div>
                          <!--
                              <input id="checkbox" name="checkbox" value="checkbox" class="checkimg position-absolute" type="checkbox" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="checkAgreement(document.getElementById('button_termsOpt_1'));">
                              <label for="agree">我已審慎 <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><u>閱讀並同意數位存款相關約定與條款</u></a>
                              </label>
                          -->
                      </div>
                      <div class="terms">
                          <Field
                          v-model="isBePromoted"
                          type="checkbox"
                          class="checkimg position-absolute"
                          id="agree3" name="我是推廣加入用戶"
                          value="agree"
                          @change="clearErrors()"
                          />
                          <label for="agree3">我是推廣加入用戶(非必填)</label>
                          <!-- <div class="d-flex text-center field-error my-1">
                            <div>{{errors['我是推廣加入用戶']}}</div>
                          </div> -->
                          <ul class="formList">
                              <li
                              v-if="isBePromoted"
                              id="UiC" class="align-self-start mb-0"
                              >推廣單位(3碼)
                                  <Field
                                  v-model="promoteUnit"
                                  id="NNBUitcCode" name="NNBUitcCode"
                                  type="text" maxlength="3"
                                  :class="{ 'is-invalid': errors['推廣單位'] }"
                                  class="p-number-box form-control"
                                  :validateOnChange="true"
                                  @keyup="promoteUnit = $custom.validate.OnlyNumPress(promoteUnit)"
                                  @change="checkCode3(promoteUnit, '推廣單位', this.$refs.myForm,'NNBUserCode');promoteUnit = $custom.validate.OnlyNumPress(promoteUnit)"
                                  />
                              </li>
                              <li v-if="errors['推廣單位']" class="text-start field-error justify-content-start mt-1 mb-3">
                                <span>{{errors['推廣單位']}}</span>
                              </li>
                              <li
                              v-if="isBePromoted"
                              id="UsC" class="align-self-start mb-0"
                              >推廣員編(7碼)
                                  <Field
                                  v-model="promoteEployeeCode"
                                  id="NNBUserCode" name="NNBUserCode"
                                  type="text" maxlength="7"
                                  :class="{ 'is-invalid': errors['推廣員編'] }"
                                  class="p-number-box form-control"
                                  @keyup="promoteEployeeCode = $custom.validate.OnlyNumPress(promoteEployeeCode)"
                                  @change="checkCode7(promoteEployeeCode, '推廣員編', this.$refs.myForm,'NNBProjCode');promoteEployeeCode = $custom.validate.OnlyNumPress(promoteEployeeCode)"
                                  />
                              </li>
                              <li v-if="errors['推廣員編']" class="text-center field-error justify-content-start  mt-1 mb-3">
                                <span>{{errors['推廣員編']}}</span>
                              </li>
                              <li class="align-self-start mb-0">專案代碼
                                  <Field
                                  v-model="projectCode"
                                  id="NNBProjCode" name="NNBProjCode"
                                  :class="{ 'is-invalid': errors['專案代碼'] }"
                                  type="text" maxlength="10"
                                  placeholder=""
                                  class="p-number-box form-control"
                                  :validateOnChange="true"
                                  @keyup="projectCode = $custom.validate.OnlyNumPress(projectCode)"
                                  @change="checkProjectCode(projectCode, '專案代碼', this.$refs.myForm);projectCode = $custom.validate.OnlyNumPress(projectCode)"
                                  />
                              </li>
                              <li v-if="errors['專案代碼']" class="text-center field-error justify-content-start mt-1 mb-3">
                                <span>{{errors['專案代碼']}}</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="text-center">
                      <button
                      class="btn new-new-bank-btn"
                      @click.prevent="submitNNB"
                      >
                      立即開戶
                      </button>
                  </div>
                  <div class="col-lg-9 mx-auto note_text text-left mb-3">
                      <strong>注意事項：</strong>
                      <ol>
                          <li>年滿18歲本國人<br>
                              限聯邦銀行新存戶或曾開戶且已結清銷戶者。</li>
                          <li>雙證件<br>
                              國民身分證、公務機關核發且含清晰照片之第二證件(如健保卡、駕照、護照、市民卡)</li>
                          <li>身分驗證工具<br>
                              【自然人憑證】、【他行存款帳戶】或【本行信用卡】(限正卡且持卡滿六個月(含)以上)</li>
                      </ol>
                  </div>
              </div>
          </div>
      </div>
    </Form>
  </section>
</template>

<script>
import ServiceN from '@/service/CardFriend_N.Service.js'
import PublicService from '@/service/Public.Service.js'

export default {
  data () {
    return {
      iAmNative: false,
      checkErules: false,
      isBePromoted: false,
      promoteUnit: '',
      promoteEployeeCode: '',
      projectCode: '',
      form: {
        nnbPromoteUnit: '',
        nnbPromoterCode: '',
        nnbProjCode: '',
        checkUSA: true,
        checkAgree: false
      },
      url: ''
    }
  },
  methods: {
    async submitNNB () {
      this.$refs.myForm.setErrors({})
      const collection = await this.$refs.myForm.validate()
      if (this.isBePromoted) {
        // ? ===選填推廣單位代號===
        const dom = this.$refs.myForm
        if (!this.promoteUnit) {
          this.checkCode3('', '推廣單位', dom)
        }
        if (!this.promoteEployeeCode) {
          this.checkCode7('', '推廣員編', dom)
        }
        if (!this.projectCode) {
          this.checkProjectCode('', '專案代碼', dom)
        }
        collection.errors = await this.$refs.myForm.getErrors()
        if (Object.keys(collection.errors).length === 0) {
          // ** ===全部檢查通過前往下一頁===
          // ** ===資料整理===
          this.form.nnbPromoteUnit = this.nnbPromoteUnit
          this.form.nnbPromoterCode = this.promoteEployeeCode
          this.form.nnbProjCode = this.projectCode
          this.form.checkUSA = this.iAmNative
          this.form.checkAgree = this.checkErules
          const res = await ServiceN.newNewBankApply
          if (res.status === 200) {
            // ?localStorage 的token全部清掉
            localStorage.clear()
            if (res.data.message) {
              PublicService.showAPIMsg(res.data.message)
            }
            if (res.data.status === '01000') {
              this.url = res.result.transUrl
              setTimeout(() => {
                window.open(this.url)
              }, 1000)
            }
          }
          this.$router.push('/dspApplicationNNB_finish')
        } else {
          // ** ===錯誤訊息彙整===
          this.$custom.validate.showErrors(collection.errors)
        }
      } else {
        collection.errors = await this.$refs.myForm.getErrors()
        if (Object.keys(collection.errors).length === 0) {
          this.$router.push('/dspApplicationNNB_finish')
        } else {
          // ** ===錯誤訊息彙整===
          this.$custom.validate.showErrors(collection.errors)
        }
      }
    },
    checkCode3 (code, fieldName, dom, nextid) {
      // ? 清空errors
      dom.setFieldError(fieldName, '')
      // ? 單位驗證
      const idRule = /^\d{3}$/
      if (idRule.test(code)) {
        document.getElementById(nextid).focus()
      } else {
        dom.setFieldError(fieldName, '請輸入3碼推廣單位代碼')
      }
    },
    checkCode7 (code, fieldName, dom, nextid) {
      // ? 清空errors
      dom.setFieldError(fieldName, '')
      // ? 員編驗證
      const idRule = /^\d{7}$/
      if (idRule.test(code)) {
        document.getElementById(nextid).focus()
      } else {
        dom.setFieldError(fieldName, '請輸入7碼推廣員編代碼')
        return false
      }
    },
    checkProjectCode (code, fieldName, dom) {
      // ? 清空errors
      dom.setFieldError(fieldName, '')
      // ? 專案代碼驗證
      const idRule = /^\d{10}$/
      if (idRule.test(code)) {
        //
      } else {
        dom.setFieldError(fieldName, '請輸入10碼專案代碼')
      }
    },
    clearErrors () {
      this.$refs.myForm.setFieldError('推廣單位', '')
      this.$refs.myForm.setFieldError('推廣員編', '')
      this.$refs.myForm.setFieldError('專案代碼', '')
    }
  },
  watch: {
    iAmNative (n) {
      if (n === 'agree') {
        this.iAmNative = true
      } else if (n) {
        this.iAmNative = true
      } else {
        this.iAmNative = false
      }
    },
    checkErules (n) {
      if (n === 'agree') {
        this.checkErules = true
      } else if (n) {
        this.checkErules = true
      } else {
        this.checkErules = false
      }
    },
    isBePromoted (n) {
      if (n === 'agree') {
        this.isBePromoted = true
      } else if (n) {
        this.isBePromoted = true
      } else {
        this.isBePromoted = false
      }
    }
  }
}
</script>
