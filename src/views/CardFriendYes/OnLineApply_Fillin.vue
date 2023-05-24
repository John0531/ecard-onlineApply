<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable no-tabs -->
<template>
  <!--nav end-->
    <!-- 主視覺 -->
  <div>
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
        <div class="row justify-content-md-center pt-1 pt-md-3">
          <div class="formGroup">
            <Form :validation-schema="customSchema" @submit="onSubmit" @invalid-submit="onInvalidSubmit"
                v-slot="{ errors }" ref="form">
                <ul class="formList-even">
                    <li class="col-12 col-md-6">
                      <label for="">申請人身分證字號</label>
                      <div class="form-text">{{ id }}</div>
                    </li>
                    <li class="col-12 col-md-6">
                      <label for="">姓名</label>
                      <div class="form-text">{{ name }}</div>
                    </li>
                    <li class="col-12 col-md-6">
                      <label for="">行動電話</label>
                      <div class="form-text">{{ phone }}</div>
                    </li>
                    <li class="col-12 col-md-6">
                    <label for="">電子信箱</label>
                    <Field
                      name="電子信箱"
                      type="text"
                      placeholder=""
                      :class="{ 'is-invalid': errors['電子信箱'],'form-control':true}"
                      class="form-control"
                      v-model="onLineApply_Fillin_Data.email"
                      :validateOnInput="true"
                    >
                    </Field>
                    <div>
                      <span  v-if="errors['電子信箱']" class="field-error">{{errors['電子信箱']}}</span>
                    </div>
                    </li>
                    <li class="col-12 col-md-6" v-if="amwayNo === 'Y'? true: false">
                      <label for="">*安麗直銷商會員編號</label>
                      <Field
                      name="安麗直銷商會員編號"
                      type="text"
                      placeholder="" :validateOnInput="true"
                      :class="{ 'is-invalid': errors['安麗直銷商會員編號'],'form-control':true}"
                      v-model="onLineApply_Fillin_Data.amwayNo" value="tbAmwayNo"></Field>
                      <span class="field-error">{{errors['安麗直銷商會員編號']}}</span>
                    </li>
                    <li class="col-12 col-md-6">
                      <label for="">推廣單位代號</label>
                      <Field
                        name="推廣單位代號"
                        type="text"
                        maxlength="6"
                        :class="{ 'is-invalid': errors['推廣單位代號'],'form-control':true, 'form-text':isEditUnitCode,'is-hasval-input':isEditUnitCode}"
                        v-model="onLineApply_Fillin_Data.unitCode"
                        :validateOnInput="true"
                        :disabled="isEditUnitCode"
                      ></Field>
                      <span v-if="errors['推廣單位代號']" class="field-error">{{errors['推廣單位代號']}}</span>
                    </li>
                    <li class="col-12 col-md-6">
                      <label for="">推廣人員編號</label>
                      <Field name="推廣人員編號" maxlength="11" type="text" class="form-control" :class="{ 'is-invalid': errors['推廣人員編號'],'form-control':true, 'form-text':isEditUserCode,'is-hasval-input':isEditUserCode}"
                      v-model="onLineApply_Fillin_Data.userCode" :validateOnInput="true" :disabled="isEditUserCode"></Field>
                      <span v-if="errors['推廣人員編號']" class="field-error">{{errors['推廣人員編號']}}</span>
                    </li>
                    <li class="col-12 col-md-12">
                      <label for="" >*帳單形式</label>
                      <div class="d-flex flex-wrap flex-column flex-md-row">
                      <div class="form-check me-4">
                        <Field  class="form-check-input mt-2 position-absolute" id="emailbill" type="radio" name="帳單形式"  value="1" :class="{ 'is-invalid': errors['帳單形式']}" v-model="onLineApply_Fillin_Data.billType" :validateOnChange="true"></Field>
                        <label class="form_Apply_txts" for="emailbill">
                                        EMAIL帳單
                        </label>
                      </div>
                      <div class="form-check me-4">
                        <Field  class="form-check-input mt-2 position-absolute" id="phonebill" type="radio" name="帳單形式"  value="2" :class="{ 'is-invalid': errors['帳單形式']}" v-model="onLineApply_Fillin_Data.billType" :validateOnChange="true"></Field>
                        <label class="form_Apply_txts" for="phonebill">
                                        行動帳單(簡訊)
                        </label>
                      </div>
                      <div class="form-check me-4" v-if="!isDisableBillType('line')">
                        <Field  class="form-check-input mt-2 position-absolute" id="linebill" type="radio" name="帳單形式"  value="3" :class="{ 'is-invalid': errors['帳單形式']}" v-model="onLineApply_Fillin_Data.billType" :validateOnChange="true"></Field>
                        <label class="form_Apply_txts" for="linebill">
                                        LINE帳單
                        </label>
                      </div>
                      <div class="form-check" v-if="!isDisableBillType('paper')">
                        <Field  class="form-check-input mt-2 position-absolute" id="paperbill" type="radio" name="帳單形式"  value="4" :class="{ 'is-invalid': errors['帳單形式']}" v-model="onLineApply_Fillin_Data.billType" :validateOnChange="true"></Field>
                        <label class="form_Apply_txts" for="paperbill">
                                        紙本帳單
                        </label>
                      </div>
                      <div class="invalid-feedback d-block mt-auto ">
                        <span class="field-error" v-if="errors['帳單形式']">{{errors['帳單形式']}}</span>
                      </div>
                      <div class="form_Apply_txt">
                        <span class="red_text">※申請E-mail帳單請務必收取聯邦銀行電子帳單認證信，點選驗證網址始完成申請。<br>
                        ※帳單接收型式將依本次選擇做為日後帳單寄送依據，如未點選E-mail認證信則依原帳單型式或紙本寄送。</span>
                      </div>
                      </div>
                    </li>
                    <li class="col-12 col-md-12">
                        <label for="">*寄卡地址</label>
                        <div class="d-flex flex-wrap flex-column flex-md-row">
                          <div class="form-check me-4" v-if="billAddr">
                            <Field class="form-check-input mt-2 position-absolute" id="samebill" type="radio" name="寄卡地址" value="1"
                            v-model="onLineApply_Fillin_Data.sendCardType" :class="{ 'is-invalid': errors['寄卡地址']}" :validateOnChange="true"/>
                            <label class="form_Apply_txts" for="samebill">
                                    同帳單地址
                            </label>
                          </div>
                          <div class="form-check me-4" v-if="compAddr">
                            <Field class="form-check-input mt-2 position-absolute" id="samecompany" type="radio" name="寄卡地址" value="2"
                            v-model="onLineApply_Fillin_Data.sendCardType" :class="{ 'is-invalid': errors['寄卡地址']}" :validateOnChange="true"/>
                            <label class="form_Apply_txts" for="samecompany">
                                    同公司地址
                            </label>
                          </div>
                          <div class="form-check me-4">
                            <Field class="form-check-input mt-2 position-absolute" id="sendotheer" type="radio" name="寄卡地址" value="3"
                            v-model="onLineApply_Fillin_Data.sendCardType"  :class="{ 'is-invalid': errors['寄卡地址']}" :validateOnChange="true"/>
                            <label class="form_Apply_txts" for="sendotheer">
                                    其他
                            </label>
                          </div>
                          <div class="invalid-feedback d-block mt-auto" >
                            <span class="field-error" v-if="errors['寄卡地址']">{{errors['寄卡地址']}}</span>
                          </div>
                        </div>
                        <div class="form_Apply_txt">{{ selectedContent}}</div>
                        <div class="d-flex flex-wrap justify-content-start align-items-center" v-if="onLineApply_Fillin_Data.sendCardType === '3'">
                          <div class="d-flex flex-wrap justify-content-start align-items-center">
                            <label for="" class="me-0">請輸入您持有之本行任一卡號末四碼：</label>
                            <div>
                              <Field v-model="onLineApply_Fillin_Data.sendCardlast4no" name="卡號末四碼" maxlength="4" type="text" class="form-control end_four" :class="{ 'is-invalid': errors['卡號末四碼'] }" :validateOnInput="true" @keyup="onLineApply_Fillin_Data.sendCardlast4no = $custom.validate.OnlyNumPress(onLineApply_Fillin_Data.sendCardlast4no)"/>
                              <span v-if="errors['卡號末四碼']" class="field-error">{{ errors["卡號末四碼"] }}</span>
                            </div>
                          </div>
                          <li style="padding-left: 0px;" class="mt-3Address.L mt-4 w-100">
                            <div class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center">
                              <!-- 下拉選單型別Field => select -->
                              <Field v-model="onLineApply_Fillin_Data.sendCardAddr.County" as="select" name="郵遞區號" class="form-select form-control ZIP mb-2" type="select" :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" @change="getAddress('1')" :validateOnBlur="true" >
                                <option v-for="cardAddress in selectJson.County" :key="cardAddress.SORT" :value="cardAddress.VALUE">{{ cardAddress.SHOW }}</option>
                            </Field>
                            <Field v-model="onLineApply_Fillin_Data.sendCardAddr.Area" as="select" name="市區" class="form-select form-control Area mx-1 mx-md-2 mb-2" type="select" :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" @change="getAddress('2')" :validateOnBlur="true" >
                                <option value="">-----</option>
                                <option v-for="cardAddress in homeAddrList.area" :key="cardAddress.varArea" :value="cardAddress.varArea">{{ cardAddress.varArea }}</option>
                            </Field>
                            <Field v-model="onLineApply_Fillin_Data.sendCardAddr.Road" as="select" name="路段" class="form-select form-control Road mb-2" type="select" :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" :validateOnBlur="true">
                                <option value="">-----</option>
                                <option v-for="cardAddress in homeAddrList.road" :key="cardAddress.varRoad" :value="cardAddress.varRoad">{{ cardAddress.varRoad }}</option>
                              </Field>
                            </div>
                            <div class="d-flex apply_address align-items-center">
                                <!-- errors不要綁錯 -->
                                <Field v-model="onLineApply_Fillin_Data.sendCardAddr.Lane" name="巷" maxlength="5" type="text" class="form-control input_number me-1"
                                :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" :validateOnBlur="true" @keyup="onLineApply_Fillin_Data.sendCardAddr.Lane = $custom.validate.OnlyNumPress(onLineApply_Fillin_Data.sendCardAddr.Lane)"></Field>巷
                                <Field v-model="onLineApply_Fillin_Data.sendCardAddr.Aly" name="弄" maxlength="5" type="text" class="form-control input_number mx-1"
                                :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" :validateOnBlur="true" @keyup="onLineApply_Fillin_Data.sendCardAddr.Aly = $custom.validate.OnlyNumPress(onLineApply_Fillin_Data.sendCardAddr.Aly)"></Field>弄
                                <Field v-model="onLineApply_Fillin_Data.sendCardAddr.Num" name="號" maxlength="5" type="text" class="form-control input_number mx-1"
                                :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" :validateOnBlur="true" @keyup="onLineApply_Fillin_Data.sendCardAddr.Num = $custom.validate.OnlyNumPress(onLineApply_Fillin_Data.sendCardAddr.Num)"></Field>-
                                <Field v-model="onLineApply_Fillin_Data.sendCardAddr.Of"  name="號2" maxlength="5" type="text" class="form-control input_number ms-sm-1 me-1"
                                :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" :validateOnBlur="true" @keyup="onLineApply_Fillin_Data.sendCardAddr.Of = $custom.validate.OnlyNumPress(onLineApply_Fillin_Data.sendCardAddr.Of)"></Field>號
                                <Field v-model="onLineApply_Fillin_Data.sendCardAddr.Flr" name="樓" maxlength="5" type="text" class="form-control input_number mx-1"
                                :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" :validateOnBlur="true" @keyup="onLineApply_Fillin_Data.sendCardAddr.Flr = $custom.validate.OnlyNumPress(onLineApply_Fillin_Data.sendCardAddr.Flr)"></Field>樓
                                <Field v-model="onLineApply_Fillin_Data.sendCardAddr.Other" name="其他" maxlength="100" type="text" class="form-control mb-2 ms-md-0 ms-lg-1"
                                :class="{ 'is-invalid': errors['郵遞區號'] || errors['市區'] || errors['路段'] || errors['巷'] || errors['弄'] || errors['號'] || errors['號2'] || errors['樓'] || errors['其他']}" :validateOnBlur="true"></Field>
                            </div>
                            <!-- 郵遞區號9個欄位是一組，所以共用一個errorMessage -->
                            <div>
                              <span v-if="errors['郵遞區號']||errors['市區']||errors['路段']||errors['其他']||errors['巷']||errors['弄']||errors['號']||errors['號2']||errors['樓']" class="field-error">{{ addressErrMsg(errors) }}</span>
                            </div>
                          </li>
                        </div>
                    </li>
                    <li class="col-12 col-md-12" v-if="digiFlag === 'Y'? true: false">
                      <label for="">申請數位卡</label>
                      <div class="d-flex flex-wrap flex-column flex-md-row">
                        <div class="form-check me-4">
                            <Field class="form-check-input mt-2 position-absolute" id="digitrue" type="radio" name="申請數位卡" value="yes" v-model="onLineApply_Fillin_Data.digiFlag"/>
                            <label class="form_Apply_txts text-nowrap" for="digitrue">
                                    是 (有效期至核卡後次月底)
                            </label>
                        </div>
                        <div class="form-check me-4">
                            <Field class="form-check-input mt-2 position-absolute" id="digifalse" type="radio" name="申請數位卡" value="no" v-model="onLineApply_Fillin_Data.digiFlag"/>
                            <label class="form_Apply_txts" for="digifalse">
                                    否
                            </label>
                        </div>
                      </div>
                      <div class="note_text pt-0">
                        <strong>(非必填欄位)</strong><br>
                        數位卡說明：如果您急需用卡，請勾選「是」，將立即享有網路購物及行動支付之便利，本行將於審核通過後先行發送簡訊代碼至申請人之行動電話，您可憑此代碼至本行網站中查詢信用卡資訊。
                      </div>
                    </li>
                </ul>
                <!-------------------本人已詳閱---------------------->
                <div
                  class="terms-group"
                >
                  <div class="terms">
                    <Field
                      v-model="onLineApply_Fillin_Data.allTerms"
                      ref="allTerms"
                      @click.prevent
                      name="有關條款"
                      :class="{
                        'is-invalid': errors['有關條款'],
                      }"
                      class="checkimg position-absolute"
                      type="checkbox"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      :value = "true"
                    />
                    <label for="agree"
                      >同意，本人對
                      <span v-for="item in termsName" :key="item">
                        「<a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        ><u>{{item}}</u>
                        </a>」
                      </span>
                      內容。(請務必勾選)
                    </label>
                    <p v-if="errors['有關條款']" class="field-error">{{ errors["有關條款"] }}</p>
                  </div>
                </div>
                <!-------------------//本人已詳閱---------------------->
                <div class="text-center button_group">
                    <button class="btn btn-primary btn-lg mx-1" type="submit">下一步</button>
                </div>
            </Form>
          </div>
        </div>
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
              src="@/assets/images/form/close.png"
              border="0"
              alt="close"
              data-bs-dismiss="modal"
            />
          </button>
        </div>
        <div class="modal-body">
          <template v-for="(item, index) in termsHtml" :key="index">
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
            <button id="btnTermClose" type="button" class="btn btn-primary btn-lg d-none" data-bs-dismiss="modal" aria-label="Close">確定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- Modal-1 end -->
</template>

<script>
import { defineRule } from 'vee-validate'
import service from '../../service/Public.Service'
import serviceY from '../../service/CardFriend_Y.Service.js'

export default {
  data () {
    return {
      termsModal: '',
      termsName: [],
      termsHtml: [],
      checkTerms: [],
      agreement: false,
      agreementAll: false,
      schema: {},
      // get
      id: '',
      name: '',
      phone: '',
      email: '',
      billAddr: '',
      compAddr: '',
      unitCode: '',
      userCode: '',
      amwayNo: '',
      disableBillType: [
        'paper'
      ],
      digiFlag: '',
      termsList: [],
      // post
      onLineApply_Fillin_Data: {
        email: '',
        unitCode: '',
        userCode: '',
        billType: '',
        sendCardType: '',
        sendCardAddr: {
          County: '',
          Area: '',
          Road: '',
          Lane: '',
          Aly: '',
          Num: '',
          Of: '',
          Flr: '',
          Other: ''
        },
        sendCardlast4no: '',
        amwayNo: '',
        digiFlag: '',
        allTerms: false
      },
      homeAddrList: {
        area: [],
        road: []
      },
      selectJson: null, // ? 下拉
      tempOnlineApply: {
        OnlineApply_y_Data: '',
        onLineApply_Fillin_Data: '',
        onLineApply_Fillin_Card: ''
      },
      contract: false
    }
  },
  computed: {
  // ?判斷寄卡地址是否有勾選其他
    selectedContent () {
      const selected = this.onLineApply_Fillin_Data.sendCardType
      if (selected === '3') {
        return ''
      } else if (selected === '2') {
        return this.compAddr
      } else if (selected === '1') {
        return this.billAddr
      } else {
        return ''
      }
    },
    // ? 客製化驗證郵遞區號schema 電子信箱與寄件地址
    customSchema () {
      const schema = { ...this.schema }
      if (this.onLineApply_Fillin_Data.billType === '1') {
        schema.電子信箱 = 'email|required'
      } else {
        schema.電子信箱 = 'email'
      }
      if (this.onLineApply_Fillin_Data.sendCardType === '3') {
        schema.卡號末四碼 = 'required|checkCode'
        schema.郵遞區號 = 'required'
        schema.市區 = 'required'
        schema.路段 = 'required'
        schema.巷 = 'customAddressVaild'
        schema.弄 = 'customAddressVaild'
        schema.號 = 'required'
        schema.號2 = 'customAddressVaild'
        schema.樓 = 'customAddressVaild'
        schema.其他 = 'customAddressVaild'
      } else {
        schema.卡號末四碼 = ''
        schema.郵遞區號 = ''
        schema.市區 = ''
        schema.路段 = ''
        schema.巷 = ''
        schema.弄 = ''
        schema.號 = ''
        schema.號2 = ''
        schema.樓 = ''
        schema.其他 = ''
      }
      return schema
    },
    isEditUserCode () {
      const result = Boolean(this.onLineApply_Fillin_Data.userCode)
      return result
    },
    isEditUnitCode () {
      const result = Boolean(this.onLineApply_Fillin_Data.unitCode)
      return result
    }
  },
  watch: {
  // ?檢查說明書是否有5個都勾選
    checkTerms (n, o) {
      if (n.length >= this.termsHtml.length) {
        this.onLineApply_Fillin_Data.allTerms = true
      } else {
        this.onLineApply_Fillin_Data.allTerms = false
      }
    },
    // ? 寄卡地址類型
    'onLineApply_Fillin_Data.sendCardType': {
      handler (newVal, oldVal) {
        if (newVal === '1') {
          this.onLineApply_Fillin_Data.billAddress = this.billAddr
        } else if (newVal === '2') {
          this.onLineApply_Fillin_Data.companyAddress = this.compAddr
        }
      },
      deep: true
    }
  },
  methods: {
    async getAddress (UseType, CallType) {
      const postData = {
        spName: 'AddressMapping',
        info: {
          UseType: UseType,
          varCity: this.onLineApply_Fillin_Data.sendCardAddr.County,
          varArea: this.onLineApply_Fillin_Data.sendCardAddr.Area,
          rtncode: ''
        }
      }
      const result = await service.getAddress(postData)
      if (UseType === '1') {
        if (CallType !== 'session') {
          this.onLineApply_Fillin_Data.sendCardAddr.Area = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Road = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Lane = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Aly = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Num = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Of = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Flr = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Other = '' // ? 清除表單原始值
        }
        this.homeAddrList.road = []
        this.homeAddrList.area = result.Table
      } else if (UseType === '2') {
        if (CallType !== 'session') {
          this.onLineApply_Fillin_Data.sendCardAddr.Road = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Lane = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Aly = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Num = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Of = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Flr = '' // ? 清除表單原始值
          this.onLineApply_Fillin_Data.sendCardAddr.Other = '' // ? 清除表單原始值
        }
        this.homeAddrList.road = result.Table
      }
    },
    // ? 客製化地址錯誤訊息(頁面上顯示)
    addressErrMsg (errors) {
      const errMsgs = []
      if (errors.郵遞區號) {
        errMsgs.push(errors.郵遞區號)
      }
      if (errors.市區) {
        errMsgs.push(errors.市區)
      }
      if (errors.路段) {
        errMsgs.push(errors.路段)
      }
      if (errors.巷) {
        errMsgs.push(errors.巷)
      }
      if (errors.弄) {
        errMsgs.push(errors.弄)
      }
      if (errors.號) {
        errMsgs.push(errors.號)
      }
      if (errors.號2) {
        errMsgs.push(errors.號2)
      }
      if (errors.樓) {
        errMsgs.push(errors.樓)
      }
      if (errors.其他) {
        errMsgs.push(errors.其他)
      }
      const distinctArr = Array.from(new Set(errMsgs))
      return distinctArr.join('、')
    },
    // ?送出表單
    async onSubmit (values) {
    // ?如果選擇其他的類型就會清空
      const { sendCardType } = this.onLineApply_Fillin_Data
      if (sendCardType === '3') {
        this.onLineApply_Fillin_Data.billAddress = '' // 同帳單地址的值
        this.onLineApply_Fillin_Data.companyAddress = '' // 同公司地址的值
      } else if (sendCardType === '2') {
        this.onLineApply_Fillin_Data.sendCardlast4no = ''
        this.onLineApply_Fillin_Data.sendCardAddr.County = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Area = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Road = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Lane = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Aly = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Num = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Of = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Flr = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Other = ''
        this.onLineApply_Fillin_Data.billAddress = ''
      } else if (sendCardType === '1') {
        this.onLineApply_Fillin_Data.sendCardlast4no = ''
        this.onLineApply_Fillin_Data.sendCardAddr.County = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Area = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Road = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Lane = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Aly = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Num = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Of = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Flr = ''
        this.onLineApply_Fillin_Data.sendCardAddr.Other = ''
        this.onLineApply_Fillin_Data.companyAddress = ''
      }

      const postResult = await serviceY.postDWInformation(this.onLineApply_Fillin_Data)
      const { status } = postResult
      if (status === '00200') {
        const temp$data = { ...this.$data }
        temp$data.termsModal = {}
        temp$data.termsHtml = []
        temp$data.schema = {}
        this.tempOnlineApply.onLineApply_Fillin_Data = JSON.stringify(temp$data)
        sessionStorage.setItem('tempOnlineApply', JSON.stringify(this.tempOnlineApply))
      }
      switch (status) {
        case '00200' :
          this.$router.push('/OnLineApply_Fillin_Card')
          break
        default:
          service.showAPIMsg(postResult.message)
          break
      }
    },
    // ?驗證表單
    onInvalidSubmit ({ values, errors, results }) {
      const addressKeys = ['郵遞區號', '市區', '路段', '巷', '弄', '號', '號2', '樓', '其他']
      let isHaveAddressKey = false
      for (const key of addressKeys) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          isHaveAddressKey = true
          break
        }
      }
      if (isHaveAddressKey) {
        errors['寄卡地址'] = this.addressErrMsg(errors)
      }
      for (const key of addressKeys) {
        delete errors[key]
      }

      //* 調整順序
      const orderSet = new Map()
      orderSet.set('電子信箱', 1)
      orderSet.set('推廣單位代號', 2)
      orderSet.set('推廣人員編號', 3)
      orderSet.set('帳單形式', 4)
      orderSet.set('寄卡地址', 5)
      orderSet.set('卡號末四碼', 6)
      orderSet.set('有關條款', 7)

      //* 排序且重新賦值
      const orderedData = {}
      Object.keys(errors)
        .sort((a, b) => (orderSet.get(a) > orderSet.get(b) ? 1 : -1))
        .forEach((key) => {
          orderedData[key] = errors[key]
        })
      this.$custom.validate.showErrors(orderedData)
    },
    // ?檢查滾軸是否有到底部
    checkTermsScroll (event, num) {
      if (event.target.scrollTop >= event.target.scrollHeight - event.target.offsetHeight - 50) {
        document.querySelector(`#button_termsOpt_${num}`).removeAttribute('disabled')
        document.querySelector(`#read_${num}`).classList.add('text-checked')
      }
    },
    // ?如果沒有勾選完畢的提醒
    // ?五項都勾選我已詳閱才算OK
    checkAgreement ($event) {
      if (this.checkTerms.length) {
        this.agreementAll = true
        $event.target.checked = true
      } else {
        this.agreementAll = false
        $event.target.checked = false
      }
    },
    checkAllTerms () {
      if (this.checkTerms.length < this.termsHtml.length) {
        alert('您尚有部份條款未勾選，請詳閱並同意全部條款，以確保自身權益！')
      } else {
        this.termsModal.hide()
      }
    },
    // ?帳單形式不顯示紙本
    isDisableBillType (type) {
    // 陣列迴圈方法
      const result = this.disableBillType.find(x => x === type)
      if (result) {
        return true
      } else {
        return false
      }
    },
    async init () {
      const getInformation = await serviceY.getDWInformation()
      const { status, result } = getInformation
      switch (status) {
        case '00200':
          this.id = result.id
          this.name = result.name
          this.phone = result.phone
          this.onLineApply_Fillin_Data.email = result.email
          this.billAddr = result.billAddr
          this.compAddr = result.compAddr
          this.onLineApply_Fillin_Data.unitCode = result.unitCode
          this.onLineApply_Fillin_Data.userCode = result.userCode
          this.digiFlag = result.digiFlag
          this.onLineApply_Fillin_Data.amwayNo = result.amwayNo
          this.termsName = result.termsList
          this.termsHtml = await service.getTermsHtml(this.termsName)
          break
        default:
          service.showAPIMsg(getInformation.message)
          break
      }
    }
  },
  async mounted () {
    const session = JSON.parse(sessionStorage.getItem('tempOnlineApply'))
    await this.getAddress('1', 'session')
    await this.getAddress('2', 'session')
    if (session?.onLineApply_Fillin_Data) {
      const temp = JSON.parse(session.onLineApply_Fillin_Data)
      Object.keys(temp).forEach(key => {
        this.$data[key] = temp[key]
      })
    } else {
      await this.init()
    }

    if (session) {
      this.tempOnlineApply = { ...session }
    }

    this.selectJson = JSON.parse(localStorage.getItem('SELECT_JSON'))
    // ?預設規則
    this.schema = {
      電子信箱: 'email',
      // 安麗直銷商會員編號: 'required|OnlyNumEngPress',
      推廣單位代號: 'chkKeyValueNumEng',
      推廣人員編號: 'chkKeyValueNumEng',
      帳單形式: 'required',
      寄卡地址: 'required',
      卡號末四碼: '',
      郵遞區號: '',
      市區: '',
      路段: '',
      巷: '',
      弄: '',
      號: '',
      號2: '',
      樓: '',
      其他: '',
      申請數位卡: '',
      有關條款: 'customAgreeTerms'
    }
    defineRule('customAddressVaild', value => {
      const tempAddress = this.onLineApply_Fillin_Data.sendCardAddr.Lane + this.onLineApply_Fillin_Data.sendCardAddr.Aly + this.onLineApply_Fillin_Data.sendCardAddr.Num + this.onLineApply_Fillin_Data.sendCardAddr.Of + this.onLineApply_Fillin_Data.sendCardAddr.Flr + this.onLineApply_Fillin_Data.sendCardAddr.Other
      if (tempAddress.length < 1 || !this.onLineApply_Fillin_Data.sendCardAddr.County ||
        !this.onLineApply_Fillin_Data.sendCardAddr.Area || !this.onLineApply_Fillin_Data.sendCardAddr.Road) {
        return ''
      }
      return true
    })
    defineRule('customAgreeTerms', value => {
      if (!value) {
        return '您尚未勾選詳細閱讀並同意服務約定書。'
      }
      return true
    })
    this.termsModal = new this.$custom.bootstrap.Modal(this.$refs.termsModal, { backdrop: 'static' })
  }
}
</script>

<style scoped>
.is-invalid-important {
border-color: #dc3545 !important;
}

.terms-group .terms {
padding-bottom: 0px;
}

.form_Apply_txts {
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 2px;
  color: #6c757d;
  font-weight: normal;
}

.is-hasval-input {
  outline:none;
  caret-color: transparent;
  box-shadow: none;
}

</style>
