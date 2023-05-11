<template>
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
            <Form
              v-slot="{errors}"
              ref="myForm"
            >
              <div class="row justify-content-md-center">
                  <!----------------首刷禮---------------->
                  <div class="col-12 col-lg-8 card_gift_box">
                      <h3><img src="@/assets/images/form/card_gift_icon.gif" class="img-fluid" alt="" />首刷禮：<span>(新戶定義：核卡前六個月內未曾持有任何一聯邦信用卡者。)</span>
                      </h3>
                      <div class="col-12 ">
                          <div v-html="giftNote" class="card_gift_txt"></div>
                          <div class="form-check mt-2 ms-3" v-for="gift in giftList" :key="gift+1">
                            <Field
                              v-model="applierInfo.firstGift"
                              class="form-check-input Apply_input"
                              :class="{ 'is-invalid': errors['首刷禮'] }"
                              name="首刷禮" :id="gift.giftCode" type="radio"
                              :validateOnInput="true"
                              rules="required"
                              :value="gift.giftCode"
                              />
                            <label class="form-check-label text-black fw-bold" :for="gift.giftCode">
                                {{gift.giftItem}}
                            </label>
                          </div>
                          <!-- <div class="form-check mt-2 ms-3">
                              <Field
                                v-model="applierInfo.firstGift"
                                class="form-check-input Apply_input"
                                :class="{ 'is-invalid': errors['首刷禮'] }"
                                name="首刷禮" id="firstGift2" type="radio"
                                :validateOnInput="true"
                                rules="required"
                                value="option2"
                                />
                                <label class="form-check-label text-black fw-bold" for="exampleRadios5">
                                    好禮二：20吋璀璨灰登機箱（代碼9）
                                </label>
                          </div>
                          <div class="form-check mt-2 ms-3">
                              <Field
                                v-model="applierInfo.firstGift"
                                class="form-check-input Apply_input"
                                :class="{ 'is-invalid': errors['首刷禮'] }"
                                name="首刷禮" id="firstGift3" type="radio"
                                :validateOnInput="true"
                                rules="required"
                                value="option3"
                                />
                                <label class="form-check-label text-black fw-bold" for="exampleRadios6">
                                    好禮三：刷卡金500元（代碼3）
                                </label>
                          </div>
                          <div class="form-check mt-2 ms-3">
                              <Field
                                v-model="applierInfo.firstGift"
                                class="form-check-input Apply_input"
                                :class="{ 'is-invalid': errors['首刷禮'] }"
                                name="首刷禮" id="firstGift4" type="radio"
                                :validateOnInput="true"
                                rules="required"
                                value="option4"
                                />
                                <label class="form-check-label text-black fw-bold" for="exampleRadios7">
                                    好禮四：無線行動電源（代碼2）
                                </label>
                          </div> -->
                          <div class="d-flex justify-content-start invalid-feedback my-1 ms-3">
                            <div v-if="errors['首刷禮']" class="field-error">
                                {{errors['首刷禮']}}
                            </div>
                          </div>
                      </div>
                  </div>
                  <!--------------//首刷禮---------------->
                  <div class="text-center button_group">
                    <button
                      class="btn btn-primary btn-lg mx-1"
                      @click.prevent="applySubmit"
                      >
                      下一步
                    </button>
                  </div>
              </div>
            </Form>
        </div>
    </section>
</template>

<script>
import ServiceN from '@/service/CardFriend_N.Service.js'
import PublicService from '@/service/Public.Service.js'

export default ({
  data () {
    return {
      giftNote: '',
      giftList: [],
      applierInfo: {
        firstGift: null
      }
    }
  },
  methods: {
    async applySubmit () {
      const collection = await this.$refs.myForm.validate()
      collection.errors = await this.$refs.myForm.getErrors()
      if (Object.keys(collection.errors).length === 0) {
        // ? 檢查約定條款 未打勾返回
        // ?keep user資料
        sessionStorage.setItem('keepPersonalData', JSON.stringify(this.applierInfo))
        // ** ===全部通過前往下一頁===
        const res = await ServiceN.postFirstGift(this.applierInfo.firstGift)
        if (res.status === 200) {
          if (res.data.message) {
            setTimeout(() => {
              this.$router.push('/OnLineApply_OCR')
            }, 500)
          }
        } else {
          if (res.data.message) {
            PublicService.showAPIMsg(res.data.message)
          }
        }
      } else {
        // ** ===錯誤訊息彙整===
        this.$custom.validate.showErrors(collection.errors)
      }
    }
  },
  async mounted () {
    const res = await ServiceN.getFirstGift()
    console.log(res)
    this.giftNote = res.data.giftNote
    this.giftList = res.data.giftInfoList
    // ? 無首刷禮則直接導 OCR
    if (this.giftList.length === 0) {
      this.$router.push('/OnLineApply_OCR')
    }
  }
})
</script>
