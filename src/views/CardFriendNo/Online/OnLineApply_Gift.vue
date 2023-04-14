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
                      <h3><img src="images/form/card_gift_icon.gif" class="img-fluid" alt="" />首刷禮：<span>(新戶定義：核卡前六個月內未曾持有任何一聯邦信用卡者。)</span>
                      </h3>
                      <div class="col-12 card_gift_txt">
                          <p>◆活動期間：111年01月01日至111年06月30日</p>
                          <p>◆活動內容：新戶核卡後30日內，消費累積滿1,288元(含)以上，且不限地點首次自動加值，即可享首刷好禮多選一；如符合首刷禮條件並有使用本行任一行動支付新增不限金額之一般消費，即可升級獲贈「無線行動電源」。
                          </p>
                          <div class="form-check mt-2 ms-3" v-for="gift in  giftList" :key="gift+1">
                            <Field
                              v-model="applierInfo.firstGift"
                              class="form-check-input Apply_input"
                              :class="{ 'is-invalid': errors['首刷禮'] }"
                              name="首刷禮" id="firstGift1" type="radio"
                              :validateOnInput="true"
                              rules="required"
                              :value="gift.giftCode"
                              />
                              <label class="form-check-label text-black fw-bold" for="exampleRadios4">
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
                            <div>
                                {{errors['首刷禮']}}
                            </div>
                          </div>
                      </div>
                  </div>
                  <!--------------//首刷禮---------------->
                  <div class="text-center button_group">
                    <button
                      class="btn btn-primary btn-lg mx-1"
                      type="submit"
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
        console.log(res)
        if (res.status === 200) {
          if (res.data.message) {
            PublicService.showAPIMsg(res.data.message)
          }
          setTimeout(() => {
            this.$router.push('/OnLineApply_OCR')
          }, 1000)
        }
      } else {
        // ** ===錯誤訊息彙整===
        this.$custom.validate.showErrors(collection.errors)
      }
    }
  },
  async mounted () {
    const res = await ServiceN.getFirstGift()
    this.giftList = res.data
  }
})
</script>
