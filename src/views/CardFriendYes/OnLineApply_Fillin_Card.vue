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
    <Form :validation-schema="customSchema" @submit="onSubmit" @invalid-submit="onInvalidSubmit" v-slot="{ errors }" ref="addressForm">
      <section class="mainArea">
        <div class="container-xl">
          <div class="row justify-content-md-center pt-1 pt-md-3">
            <div class="mb-4 text-left OnLineApply_pl">
              <strong>申請人基本資料確認及更新作業（空值欄位請一併更新）</strong>
            </div>
            <div class="formGroup">
              <ul class="formList-even">
                <li class="col-12 col-md-6">
                  <label for="">身分證字號</label>
                  <div class="form-text">{{ id }}</div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">出生日期</label>
                  <div class="form-text">{{ brth }}</div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">1.中文姓名</label>
                  <div class="form-text">{{ cName }}</div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">2.戶籍地址：</label>
                  <div class="d-flex flex-wrap">
                    <div class="form_Apply_txt">{{ homeAddr }}</div>
                  </div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">3.出生地</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center Birthplace">
                  <Field
                    name="出生地"
                    as="select"
                    runat="server"
                    type="select"
                    :class="{ 'is-invalid': errors['出生地'], 'BirthCounty': onLineApply_Fillin_Card.birthplaceKey === '其它'} "
                    class="form-select form-control"
                    v-model="onLineApply_Fillin_Card.birthplaceKey"
                    :validateOnChange="true"
                  >
                    <option
                      v-for="birthArea in option.birthPlace"
                      :key="birthArea.SORT"
                      :value="birthArea.VALUE"
                    >
                      {{ birthArea.SHOW }}
                    </option>
                  </Field>
                  <Field
                    name="出生地的其他"
                    as="select"
                    type="select"
                    class="form-control other_input ms-1 my-2 my-md-0 form-select"
                    :class="{ 'is-invalid':  errors['出生地的其他'], 'form-control':true}"
                    v-if="this.onLineApply_Fillin_Card.birthplaceKey === '其它'"
                    v-model="onLineApply_Fillin_Card.birthplaceKey"
                    runat="server"
                    :validateOnChange="true"
                  >
                  <option v-for="national in option.citizenShip.filter((item=>item.VALUE!=='TW'))" :key="national.SORT" :value="national.VALUE">{{national.SHOW}}</option>
                  </Field>
                  </div>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['出生地'] }}</span>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['出生地的其他'] }}</span>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">4.國籍</label>
                  <Field
                    name="國籍"
                    as="select"
                    runat="server"
                    class="form-select form-control"
                    v-model="onLineApply_Fillin_Card.nationalityKey"
                    :class="{ 'is-invalid': errors['國籍']}"
                    :validateOnChange="true"
                  >
                    <option
                      v-for="national in option.citizenShip"
                      :key="national.SORT"
                      :value="national.VALUE"
                    >
                      {{ national.SHOW }}
                    </option>
                  </Field>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['國籍'] }}</span>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">5.職業別</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Field
                      name="職業別"
                      runat="server"
                      as="select"
                      class="form-select form-control me-1"
                      v-model="onLineApply_Fillin_Card.jobTypeKey"
                      value="jobSort"
                      :class="{ 'is-invalid': errors['職業別']}"
                      :validateOnChange="true"
                    >
                      <option
                        v-for="jobType in option.jobSort"
                        :key="jobType.SORT"
                        :value="jobType.VALUE"
                      >
                        {{ jobType.SHOW }}
                      </option>
                    </Field>
                    <div class="d-flex align-items-center" v-if="this.onLineApply_Fillin_Card.jobTypeKey === '0'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        name="職業別的其他"
                        type="text"
                        placeholder=" "
                        class="form-control other_input ms-1 my-2 my-md-0"
                        :class="{ 'is-invalid':  errors['職業別的其他'], 'form-control':true}"
                        v-model="onLineApply_Fillin_Card.jobTypeKey"
                        :validateOnChange="true"
                      />
                    </div>
                  </div>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['職業別'] }}</span>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['職業別的其他'] }}</span>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">6.職級別</label>
                  <Field
                    name="職級別"
                    as="select"
                    runat="server"
                    class="form-select form-control"
                    v-model="onLineApply_Fillin_Card.jobLVKey"
                    :class="{ 'is-invalid':  errors['職級別'], 'form-control':true}"
                    :validateOnChange="true"
                  >
                    <option v-for="job in option.jobLevel" :key="job.SORT" :value="job.VALUE">
                      {{ job.SHOW }}
                    </option>
                  </Field>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['職級別'] }}</span>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">7.主要所得及資金來源</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Field
                      name="主要所得及資金來源"
                      as="select"
                      runat="server"
                      class="form-select form-control me-1"
                      v-model="onLineApply_Fillin_Card.incomeKey"
                      :class="{ 'is-invalid': errors['主要所得及資金來源']}"
                      :validateOnChange="true"
                    >
                      <option
                        v-for="incomes in option.incomeOptions"
                        :key="incomes.SORT"
                        :value="incomes.VALUE"
                      >
                        {{ incomes.SHOW }}
                      </option>
                    </Field>
                    <div class="d-flex align-items-center" v-if="this.onLineApply_Fillin_Card.incomeKey === '9'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        name="主要所得及資金來源的其他"
                        type="text"
                        :class="{ 'is-invalid':  errors['主要所得及資金來源的其他'], 'form-control':true}"
                        class="form-control other_input ms-1 my-2 my-md-0"
                        v-model="onLineApply_Fillin_Card.incomeOptions.other"
                        :validateOnChange="true"
                      />
                    </div>
                  </div>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['主要所得及資金來源'] }}</span>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['主要所得及資金來源的其他'] }}</span>
                </li>
              </ul>
            </div>
            <div>
              <div class="Apply_note_box mb-5">
                <span class="red_text"
                  ><strong
                    >貼心提醒：<br />此頁信用卡留存之基本資料項目確認完成後，本行其他業務（如：存款帳戶）之客戶基本資料，將參照一併更新（排除證券、一般信託）。</strong
                  ></span
                >
              </div>
            </div>
            <div class="text-center button_group">
              <button
                class="btn btn-primary btn-lg mx-1"
                type="submit"
                value=""
              >
                下一步
              </button>
            </div>
          </div>
        </div>
      </section>
    </Form>
    <!---------------modal---------------->
    <!-- modal-注意事項 -->
    <div
      class="modal fade"
      ref="noticeModal"
      id="noticeModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-scrollable act_T">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><input id="myCheckCount" hidden /></h5>
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
            親愛的客戶您好：<br />
            為因應洗錢防制相關法令規定，請您配合本行辦理個人基本資料確認及更新作業(如:行/職業別、主要所得及資金來源...等)，以避免可能影響您使用信用卡權益，如有疑問請進線本行客服洽詢。
            <hr />
            <div class="text-center mb-3">
              <div class="col-12 text-center">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal-注意事項end -->
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import serviceY from '../../service/CardFriend_Y.Service'

export default {
  data () {
    return {
      noticeModal: '',
      schema: {},
      // get
      id: '',
      brth: '',
      cName: '',
      homeAddr: '',
      birthplace: '',
      birthOther: '',
      nationality: '',
      jobType: '',
      jobOther: '',
      jobLV: '',
      income: '',
      incomeOther: '',
      // post
      onLineApply_Fillin_Card: {
        birthplaceKey: '',
        birthplace: '',
        nationalityKey: '',
        nationality: '',
        jobTypeKey: '',
        jobType: '',
        jobLVKey: '',
        jobLV: '',
        incomeKey: '',
        income: ''
      },
      option: {
        //* 出生地
        birthPlace: [],
        //* 主要所得及資金來源的其他
        incomeOptions: [],
        //* 國籍
        citizenShip: [],
        //* 職業別
        jobSort: [],
        //* 職業級
        jobLevel: []
      }
    }
  },
  created () {
    this.schema = {
      出生地: 'required',
      出生地的其他: '',
      國籍: 'required',
      職業別: 'required',
      職業別的其他: '',
      職級別: 'required',
      主要所得及資金來源: 'required',
      主要所得及資金來源的其他: ''
    }
  },
  computed: {
    customSchema () {
      const schema = { ...this.schema }
      // ?出生地選擇其他，其他要為必填
      if (this.onLineApply_Fillin_Card.birthplaceKey === '其它') {
        schema.出生地的其他 = 'required'
      } else {
        schema.出生地的其他 = ''
      }
      // ?職業別選擇其他，其他要為必填
      if (this.onLineApply_Fillin_Card.jobTypeKey === '0') {
        schema.職業別的其他 = 'required'
      } else {
        schema.職業別的其他 = ''
      }
      // ?主要所得及資金來源選擇其他，其他要為必填
      if (this.onLineApply_Fillin_Card.incomeKey === '9') {
        schema.主要所得及資金來源的其他 = 'required'
      } else {
        schema.主要所得及資金來源的其他 = ''
      }
      return schema
    }
  },
  watch: {
    'onLineApply_Fillin_Card.birthPlace.birthplaceKey': {
      handler (n, o) {
        if (n !== '其它') {
          this.onLineApply_Fillin_Card.birthplaceKey = ''
        }
      },
      deep: true
    },
    'onLineApply_Fillin_Card.jobTypeKey': {
      handler (n, o) {
        if (n !== '0') {
          this.onLineApply_Fillin_Card.jobTypeKey = ''
        }
      },
      deep: true
    },
    'onLineApply_Fillin_Card.incomeKey': {
      handler (n, o) {
        if (n !== '9') {
          this.onLineApply_Fillin_Card.incomeKey = ''
        }
      },
      deep: true
    }
  },
  methods: {
    getUtilities () {
      const res = JSON.parse(localStorage.getItem('SELECT_JSON'))
      this.option.birthPlace = res.BIRTHPLACE
      this.option.incomeOptions = res.INCOME
      this.option.citizenShip = res.NATIONALITY
      this.option.jobSort = res.JOBTYPE
      this.option.jobLevel = res.JOBLV
    },
    async onSubmit (values) {
      console.log(JSON.stringify(this.onLineApply_Fillin_Card))
      this.onLineApply_Fillin_Card.birthPlace = this.option.birthPlace.find(
        (item) => item.VALUE === this.onLineApply_Fillin_Card.birthplaceKey
      ).SHOW

      this.onLineApply_Fillin_Card.income = this.option.income.find(
        (item) => item.VALUE === this.onLineApply_Fillin_Card.incomeKey
      ).SHOW
      const response = await serviceY.postKYC(this.onLineApply_Fillin_Card)
      console.log(response)
      const { status } = response
      switch (status) {
        case '01100':
          this.$router.push('/OnLineApply_Fillin_1')
          break
      }
      this.$router.push('/OnLineApply_Fillin_1')
    },
    // ?驗證表單
    onInvalidSubmit ({ values, errors, results }) {
      this.$custom.validate.showErrors(errors)
      console.log(values) // current form values
      console.log(errors) // a map of field names and their first error message
      console.log(results) // a detailed map of field names and their validation results
    }
  },
  async mounted () {
    this.getUtilities()
    this.noticeModal = new bootstrap.Modal(this.$refs.noticeModal, {
      keyboard: false,
      backdrop: 'static'
    })
    this.noticeModal.show()
    const kycInformation = await serviceY.getKYC()
    const { status, result, message } = kycInformation
    switch (status) {
      case '01100':
        this.id = result.id
        this.brth = result.brth
        this.cName = result.cName
        this.homeAddr = result.homeAddr
        this.birthplace = result.birthplace
        this.birthOther = result.birthOther
        this.nationality = result.nationality
        this.jobType = result.jobType
        this.jobOther = result.jobOther
        this.jobLV = result.jobLV
        this.income = result.income
        this.incomeOther = result.incomeOther
        break
      default:
        alert(message)
        break
    }
  }
}
</script>
