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
                  <div class="form-text">A12345****</div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">出生日期</label>
                  <div class="form-text">1981/12/25</div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">1.中文姓名</label>
                  <div class="form-text">ubot@ubot.com.tw</div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">2.戶籍地址：</label>
                  <div class="d-flex flex-wrap">
                    <div class="form_Apply_txt">台北市內湖區瑞光路399號5樓</div>
                  </div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">3.出生地</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center" :class="{ 'is-invalid':  errors['職業別的其他']}">
                  <Field
                    name="出生地"
                    as="select"
                    runat="server"
                    id=""
                    type="select"
                    :class="{ 'is-invalid': errors['出生地'], 'BirthCounty': onLineApply_Fillin_Card.birthPlace === '其它'} "
                    class="form-select form-control"
                    v-model="onLineApply_Fillin_Card.birthPlace"
                  >
                    <option
                      v-for="birthArea in option.birthPlace"
                      :key="birthArea.SORT"
                      :value="birthArea.VALUE"
                    >
                      {{ birthArea.SHOW }}
                    </option>
                  </Field>
                  <div class="d-flex align-items-center" v-if="this.onLineApply_Fillin_Card.birthPlace === '其它'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        name="出生地的其他"
                        type="text"
                        placeholder=" "
                        class="form-control-birth other_input ms-1 my-2 my-md-0"
                        :class="{ 'is-invalid':  errors['出生地的其他'], 'form-control':true}"
                        :validateOnChange="true"
                        :validateOnMount="true"
                      />
                    </div>
                  </div>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['出生地的其他'] }}</span>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">4.國籍</label>
                  <Field
                    name="國籍"
                    as="select"
                    runat="server"
                    id=""
                    class="form-select form-control"
                    v-model="onLineApply_Fillin_Card.citizenShip"
                  >
                    <option
                      v-for="national in option.citizenShip"
                      :key="national.SORT"
                      :value="national.VALUE"
                    >
                      {{ national.SHOW }}
                    </option>
                  </Field>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">5.職業別</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center" :class="{ 'is-invalid':  errors['職業別的其他']}">
                    <Field
                      name="職業別"
                      runat="server"
                      id=""
                      as="select"
                      class="form-select form-control me-1"
                      v-model="onLineApply_Fillin_Card.jobSort"
                      value="jobSort"
                      :class="{ 'is-invalid': errors['職業別']}"
                    >
                      <option
                        v-for="jobType in option.jobSort"
                        :key="jobType.SORT"
                        :value="jobType.VALUE"
                      >
                        {{ jobType.SHOW }}
                      </option>
                    </Field>
                    <div class="d-flex align-items-center" v-if="this.onLineApply_Fillin_Card.jobSort === '0'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        name="職業別的其他"
                        type="text"
                        placeholder=" "
                        class="form-control other_input ms-1 my-2 my-md-0 "
                        :class="{ 'is-invalid':  errors['職業別的其他'], 'form-control':true}"
                        :validateOnChange="true"
                        :validateOnMount="true"
                      />
                    </div>
                  </div>
                  <span style="color: #db0031;font-size: 1em !important;">{{ errors['職業別的其他'] }}</span>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">6.職級別</label>
                  <Field
                    name="職級別"
                    as="select"
                    runat="server"
                    class="form-select form-control"
                    v-model="onLineApply_Fillin_Card.jobLevel"
                  >
                    <option v-for="job in option.jobLevel" :key="job.SORT" :value="job.VALUE">
                      {{ job.SHOW }}
                    </option>
                  </Field>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">7.主要所得及資金來源</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Field
                      name="主要所得及資金來源"
                      as="select"
                      runat="server"
                      id=""
                      class="form-select form-control me-1"
                      v-model="onLineApply_Fillin_Card.incomeOptions"
                    >
                      <option
                        v-for="incomes in option.incomeOptions"
                        :key="incomes.SORT"
                        :value="incomes.VALUE"
                      >
                        {{ incomes.SHOW }}
                      </option>
                    </Field>
                    <div class="d-flex align-items-center" v-if="this.onLineApply_Fillin_Card.incomeOptions === '9'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        name="主要所得及資金來源的其他"
                        type="text"
                        :class="{ 'is-invalid':  errors['主要所得及資金來源的其他'], 'form-control':true}"
                        class="form-control other_input ms-1 my-2 my-md-0"
                        :validateOnChange="true"
                        :validateOnMount="true"
                      />
                    </div>
                  </div>
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

export default {
  data () {
    return {
      noticeModal: '',
      schema: {},
      onLineApply_Fillin_Card: {
        birthPlace: '', //* 出生地
        incomeOptions: '', //* 主要所得及資金來源
        citizenShip: '', //* 國籍
        jobSort: '', //* 職業別
        jobLevel: '' //* 職業級
      },
      option: {
        birthPlace: [], //* 出生地
        incomeOptions: [], //* 主要所得及資金來源的其他
        citizenShip: [], //* 國籍
        jobSort: [], //* 職業別
        jobLevel: [] //* 職業級
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
      if (this.onLineApply_Fillin_Card.birthPlace === '其它') {
        schema.出生地的其他 = 'required'
      } else {
        schema.出生地的其他 = ''
      }
      // ?職業別選擇其他，其他要為必填
      if (this.onLineApply_Fillin_Card.jobSort === '0') {
        schema.職業別的其他 = 'required'
      } else {
        schema.職業別的其他 = ''
      }
      // ?主要所得及資金來源選擇其他，其他要為必填
      if (this.onLineApply_Fillin_Card.incomeOptions === '9') {
        schema.主要所得及資金來源的其他 = 'required'
      } else {
        schema.主要所得及資金來源的其他 = ''
      }
      return schema
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
    onSubmit (values) {
      console.log(JSON.stringify(this.onLineApply_Fillin_Card))
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
  mounted () {
    this.getUtilities()
    this.noticeModal = new bootstrap.Modal(this.$refs.noticeModal, {
      keyboard: false,
      backdrop: 'static'
    })
    this.noticeModal.show()
    this.onLineApply_Fillin_Card.birthPlace = '臺北市'
    this.onLineApply_Fillin_Card.incomeOptions = '6'
    this.onLineApply_Fillin_Card.citizenShip = 'BH'
    this.onLineApply_Fillin_Card.jobSort = '5'
    this.onLineApply_Fillin_Card.jobLevel = '3'
  }
}
</script>

<style>
.BirthCounty {
  width: 130px !important;
  margin-right: 0.5rem;
}

.formList-even .form-control-birth {
  padding: .37rem 4rem !important;
  width: 100% !important;
}
</style>
