<template>
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
        <Form
          v-slot="{errors}"
          ref="form"
          >
          <div class="row justify-content-md-center pt-1 pt-md-3">
              <div class="formGroup">
                  <ul class="formList Apply_ChkSZ">
                    <li class="col-12 align-items-start">
                      <label for="" class="mt-1">行動電話</label>
                      <div class="d-flex flex-column">
                        <Field
                        v-model="form.mbleTelNbr"
                        id="mbleTelNbr" name="行動電話"
                        type="text" maxlength="10"
                        class="form-control"
                        :class="{ 'is-invalid': errors['行動電話'] }"
                        @keyup="form.mbleTelNbr = $custom.validate.OnlyNumPress(form.mbleTelNbr)"
                        rules="checkPhone"
                        />
                        <span class="not_text">請填寫信用卡申請時之行動電話，以利資訊驗證</span>
                        <div class="d-flex text-center invalid-feedback my-1" >
                          {{errors['行動電話']}}
                        </div>
                      </div>
                    </li>
                  </ul>
              </div>
              <!-------------------本人已詳閱---------------------->
          <div
            class="terms-group"
          >
            <div class="terms">
              <input
                v-model="form.agreeTerms"
                id="checkbox"
                name="agreeTerms"
                :class="{
                  'is-invalid': errors['有關條款'],
                  'form-check-input': errors['有關條款'],
                }"
                class="checkimg position-absolute"
                type="checkbox"
              />
              <label for="agree"
                >同意，本人對
                <span v-for="item in pageLoad.terms" :key="item">
                  「<a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  ><u>{{item}}</u>
                  </a>」
                </span>
                內容。(請務必勾選)
              </label>
              <p class="d-block text-danger ms-2">{{ errors["有關條款"] }}</p>
            </div>
          </div>
          <!-------------------//本人已詳閱---------------------->
          <div class="text-center button_group">
              <button
              @click.prevent="applySubmit"
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
  <!-- 主要內容 END -->
  <!-- Modal-1 -->
  <div
    ref="termsModal"
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel-1">
            請向下滾動，仔細閱讀整份同意書所有內容<input
              id="myCheckCount"
              hidden
            />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img
              src="@/assets/images/close.png"
              border="0"
              alt="close"
              data-bs-dismiss="modal"
            />
          </button>
        </div>
        <div class="modal-body">
          <template v-for="(item, index) in termsHtml" :key="item">
            <div
              @scroll="checkTermsScroll($event, index + 1)"
              :id="`terms_box_${index + 1}`"
              class="terms_box"
            >
              <div v-html="item"></div>
            </div>
            <div :id="`button_terms_${index + 1}`" class="button_terms">
              <input
                type="checkbox"
                :id="`button_termsOpt_${index + 1}`"
                v-model="checkTerms"
                :value="index + 1"
                disabled
              />
              <label
                :id="`read_${index + 1}`"
                :for="`button_termsOpt_${index + 1}`"
                >我已詳細閱讀。(請勾選)</label
              >
            </div>
          </template>
        </div>

        <div class="modal-footer">
          <div class="col-12 text-center">
            <button
              @click.prevent="checkAllTerms"
              class="btn btn-primary btn-lg"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal-1 end -->
</template>

<script>
import PublicService from '@/service/Public.Service.js'
import CardFriendNService from '@/service/CardFriend_N.Service.js'

export default {
  data () {
    return {
      pageLoad: {},
      termsHtml: [],
      termsModal: '',
      checkTerms: [],
      form: {
        mbleTelNbr: '',
        agreeTerms: false,
        personalDataAuthorized: false
      }
    }
  },
  watch: {
    checkTerms (n, o) {
      if (n.length >= this.termsHtml.length) {
        this.form.agreeTerms = true
      } else {
        this.form.agreeTerms = false
      }
      this.checkRadioAll()
    },
    'form.agreeTerms': {
      handler (n, o) {
        if (n) {
          this.termsHtml.forEach((item, index) => {
            this.checkTerms.push(index + 1)
          })
        } else {
          this.checkTerms = []
        }
        this.checkRadioAll()
      }
    }
  },
  methods: {
    checkTermsScroll (event, num) {
      if (event.target.scrollTop >= event.target.scrollHeight - event.target.offsetHeight - 50) {
        document.querySelector(`#button_termsOpt_${num}`).removeAttribute('disabled')
        document.querySelector(`#read_${num}`).classList.add('text-checked')
      }
    },
    checkAllTerms () {
      if (this.checkTerms.length < this.termsHtml.length) {
        alert('您尚有部份條款未勾選，請詳閱並同意全部條款，以確保自身權益！')
      } else {
        this.termsModal.hide()
      }
    },
    checkRadioAll () {
      this.$refs.form.setFieldError('有關條款', '')
      if (!this.form.agreeTerms) {
        this.$refs.form.setFieldError(
          '有關條款',
          '您尚未勾選詳細閱讀並同意有關內容。'
        )
      }
    },
    async applySubmit () {
      // ? 前端驗證檢查
      await this.$refs.form.validate()
      this.checkRadioAll()
      const errors = this.$refs.form.getErrors()
      console.log(errors)
      if (Object.keys(errors).length !== 0) {
        this.$custom.validate.showErrors(errors)
        return
      }
      // ? 前端驗證檢查 end
      const result = await CardFriendNService.Chkw_Submit(this.form)
      if (result) {
        this.$router.push('/OnLineApply_Written_OTP')
      }
    }
  },
  async mounted () {
    sessionStorage.setItem('Apply_N_Type', 'Written')
    this.pageLoad = await CardFriendNService.Chkw_PageLoad()
    if (this.pageLoad.mbleTelNbr === null) {
      this.pageLoad.mbleTelNbr = ''
    }
    this.form.mbleTelNbr = this.pageLoad.mbleTelNbr
    this.termsModal = new this.$custom.bootstrap.Modal(this.$refs.termsModal, {
      backdrop: 'static'
    })
    this.termsHtml = await PublicService.getTermsHtml(this.pageLoad.terms)
  }
}
</script>
