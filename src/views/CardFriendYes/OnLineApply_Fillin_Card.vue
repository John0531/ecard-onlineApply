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
    <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit" v-slot="{ errors }" ref="addressForm">
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
                  <div class="d-flex">
                    <div class="form_Apply_txt">{{ homeAddr }}</div>
                  </div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">3.出生地</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center Birthplace">
                  <Field
                    rules="required"
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
                    rules="required"
                    name="出生地的其他"
                    as="select"
                    type="select"
                    class="form-control other_input ms-1 my-2 my-md-0 form-select"
                    :class="{ 'is-invalid':  errors['出生地的其他'], 'form-control':true}"
                    v-if="onLineApply_Fillin_Card.birthplaceKey === '其它'"
                    v-model="onLineApply_Fillin_Card.birthOtherKey"
                    runat="server"
                    :validateOnChange="true"
                  >
                  <option v-for="national in option.citizenShip.filter((item=>item.VALUE!=='TW'))" :key="national.SORT" :value="national.VALUE">{{national.SHOW}}</option>
                  </Field>
                  </div>
                  <span v-if="errors['出生地'] || errors['出生地的其他']" class="field-error">{{ errors['出生地'] ? errors['出生地'] : errors['出生地的其他'] }}</span>
                  <!-- <span v-if="errors['出生地的其他']" class="field-error">{{ errors['出生地的其他'] }}</span> -->
                </li>
                <li class="col-12 col-md-6">
                  <label for="">4.國籍</label>
                  <Field
                    rules="required"
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
                  <span v-if="errors['國籍']" class="field-error">{{ errors['國籍'] }}</span>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">5.職業類別</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Field
                      rules="required"
                      name="職業類別"
                      as="select"
                      runat="server"
                      class="form-select form-control me-1"
                      v-model="onLineApply_Fillin_Card.jobTypeKey"
                      value="jobSort"
                      :class="{ 'is-invalid':  errors['職業類別'], 'form-control':true}"
                      :validateOnChange="false"
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
                        name="職業類別的其他"
                        type="text"
                        placeholder=" "
                        class="form-control other_input ms-1 my-2 my-md-0"
                        :class="{ 'is-invalid':  errors['職業類別的其他'], 'form-control':true}"
                        v-model="onLineApply_Fillin_Card.jobOther"
                        :validateOnChange="true"
                        maxlength="25"
                      />
                    </div>
                  </div>
                  <span v-if="errors['職業類別'] || errors['職業類別的其他']" class="field-error">{{ errors['職業類別'] ?errors['職業類別'] : errors['職業類別的其他'] }}</span>
                  <!-- <span v-if="errors['職業類別的其他']" class="field-error">{{ errors['職業類別的其他'] }}</span> -->
                </li>
                <li class="col-12 col-md-6">
                  <label for="">6.職級別</label>
                  <Field
                    rules="required"
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
                  <span v-if="errors['職級別']" class="field-error">{{ errors['職級別'] }}</span>
                </li>
                <li class="col-12 col-md-12">
                  <label for="">7.所得及資金來源</label>
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <template  v-for="incomes in option.incomeOptions" :key="incomes.VALUE">
                      <Field v-if="incomes.VALUE.trim()!== '9'" v-slot="{ field }" name="所得及資金來源" type="checkbox" :value="Number(incomes.VALUE)" :validateOnChange="true" :class="{ 'is-invalid': errors['所得及資金來源']}"  v-model="onLineApply_Fillin_Card.incomeKey" rules="required">
                        <div class="form-check me-4">
                          <label>
                            <input class="form-check-input mt-2 position-absolute" type="checkbox" v-bind="field" name="所得及資金來源"  :value="Number(incomes.VALUE)">
                            <div class="form_Apply_txt">
                              0{{ incomes.SHOW }}
                            </div>
                          </label>
                        </div>
                      </Field>
                      <Field v-else v-slot="{ field }" name="所得及資金來源" type="checkbox" :value="Number(incomes.VALUE)" :validateOnChange="true" :class="{ 'is-invalid': errors['所得及資金來源']}"  v-model="onLineApply_Fillin_Card.incomeKey" rules="required">
                        <div class="form-check">
                          <label>
                            <input class="form-check-input mt-2 position-absolute" type="checkbox" v-bind="field" name="所得及資金來源"  :value="Number(incomes.VALUE)">
                            <div class="d-flex align-items-center">
                              <span class="text-nowrap form_Apply_txt">0{{ incomes.SHOW }}</span>
                              <Field
                                rules="required"
                                name="所得及資金來源的其他"
                                type="text"
                                :class="{ 'is-invalid':  errors['所得及資金來源的其他']}"
                                v-model="onLineApply_Fillin_Card.incomeOther"
                                maxlength="10"
                                class="form-control other_input ms-1"
                                v-if="onLineApply_Fillin_Card.incomeKey.includes(9)"
                                :validateOnChange="true"
                              />
                            </div>
                          </label>
                        </div>
                      </Field>
                    </template>
                  </div>
                  <span v-if="errors['所得及資金來源'] || errors['所得及資金來源的其他']" class="field-error">{{ errors['所得及資金來源'] ? errors['所得及資金來源'] : errors['所得及資金來源的其他']}}</span>
                  <!-- <span v-if="errors['所得及資金來源的其他']" class="field-error">{{ errors['所得及資金來源的其他'] }}</span> -->
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
                src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/close.png"
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
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import serviceY from '../../service/CardFriend_Y.Service'
import service from '../../service/Public.Service'

export default {
  data () {
    return {
      noticeModal: '',
      // get
      id: '',
      brth: '',
      cName: '',
      homeAddr: '',
      birthOther: '',
      jobOther: '',
      incomeOther: '',
      // post
      onLineApply_Fillin_Card: {
        birthplaceKey: '',
        birthplace: '',
        birthOtherKey: '',
        birthOther: '',
        nationalityKey: '',
        nationality: '',
        jobTypeKey: '',
        jobType: '',
        jobOther: '',
        jobLVKey: '',
        jobLV: '',
        incomeKey: [],
        income: [],
        incomeOther: ''
      },
      tempOnlineApply: {
        OnlineApply_y_Data: '',
        onLineApply_Fillin_Data: '',
        onLineApply_Fillin_Card: ''
      },
      option: {
        //* 出生地
        birthPlace: [],
        //* 所得及資金來源的其他
        incomeOptions: [],
        //* 國籍
        citizenShip: [],
        //* 職業類別
        jobSort: [],
        //* 職業級
        jobLevel: []
      }
    }
  },
  watch: {
    'onLineApply_Fillin_Card.jobTypeKey': {
      handler (n, o) {
        if (n !== '0') {
          this.onLineApply_Fillin_Card.jobOther = ''
        }
      }
    },
    'onLineApply_Fillin_Card.incomeKey': {
      handler (n, o) {
        if (!n.includes(9)) {
          this.onLineApply_Fillin_Card.incomeOther = ''
        }
      }
    },
    'onLineApply_Fillin_Card.birthplaceKey': {
      handler (n, o) {
        if (n !== '其它') {
          this.onLineApply_Fillin_Card.birthOtherKey = ''
          this.onLineApply_Fillin_Card.birthOther = ''
        }
      }
    }
  },
  methods: {
    getUtilities () {
      const res = JSON.parse(localStorage.getItem('SELECT_JSON'))
      this.option.birthPlace = res.BIRTHPLACE
      this.option.incomeOptions = res.INCOME.slice(1, 12)
      this.option.citizenShip = res.NATIONALITY
      this.option.jobSort = res.JOBTYPE
      this.option.jobLevel = res.JOBLV
    },
    async onSubmit (values) {
      this.onLineApply_Fillin_Card.birthplace = this.option.birthPlace.find(
        (item) => item.VALUE === this.onLineApply_Fillin_Card.birthplaceKey
      ).SHOW
      // *出生地的其他選項
      this.onLineApply_Fillin_Card.birthOther = this.option.citizenShip.find(
        (item) => item.VALUE === this.onLineApply_Fillin_Card.birthOtherKey
      ).SHOW
      this.onLineApply_Fillin_Card.nationality = this.option.citizenShip.find(
        (item) => item.VALUE === this.onLineApply_Fillin_Card.nationalityKey
      ).SHOW
      this.onLineApply_Fillin_Card.jobType = this.option.jobSort.find(
        (item) => item.VALUE === this.onLineApply_Fillin_Card.jobTypeKey
      ).SHOW
      this.onLineApply_Fillin_Card.jobLV = this.option.jobLevel.find(
        (item) => item.VALUE === this.onLineApply_Fillin_Card.jobLVKey
      ).SHOW
      const tempIncome = this.onLineApply_Fillin_Card.incomeKey.map((key) => {
        const temp = this.option.incomeOptions.find((item) => item.VALUE === String(key))
        return temp.SHOW
      })

      tempIncome.sort((a, b) => parseFloat(a) - parseFloat(b))

      this.onLineApply_Fillin_Card.income = tempIncome

      this.onLineApply_Fillin_Card.income = tempIncome
      if (this.onLineApply_Fillin_Card.birthOther === '-----') {
        this.onLineApply_Fillin_Card.birthOther = ''
      }
      const response = await serviceY.postKYC(this.onLineApply_Fillin_Card)
      const { status } = response
      if (status === '01100') {
        const attrs = ['noticeModal']
        const temp$data = { ...this.$data }
        attrs.forEach(attr => {
          temp$data[attr] = null
        })
        this.tempOnlineApply.onLineApply_Fillin_Card = JSON.stringify(temp$data)
        sessionStorage.setItem('tempOnlineApply', JSON.stringify(this.tempOnlineApply))
      }
      switch (status) {
        case '01100':
          this.$router.push('/OnLineApply_Fillin_1')
          break
      }
    },
    // ?驗證表單
    onInvalidSubmit ({ values, errors, results }) {
      this.$custom.validate.showErrors(errors)
    },
    async init () {
      const kycInformation = await serviceY.getKYC()
      const { status, result } = kycInformation
      switch (status) {
        case '01101' :
          this.id = result.id
          this.brth = result.brth
          this.cName = result.cName
          break
        case '01100':
          this.id = result.id
          this.brth = result.brth
          this.cName = result.cName
          this.homeAddr = result.homeAddr
          this.onLineApply_Fillin_Card.birthplaceKey = result.birthplace
          if (result.birthplace === '其它') {
            this.onLineApply_Fillin_Card.birthOther = result.birthOther
          }
          this.onLineApply_Fillin_Card.nationalityKey = result.nationality
          this.onLineApply_Fillin_Card.jobTypeKey = result.jobType
          if (result.jobType === '0') {
            this.onLineApply_Fillin_Card.jobOther = result.jobOther
          }
          this.onLineApply_Fillin_Card.jobLVKey = result.jobLV
          if (result.income && result.income.trim().length > 0) {
            this.onLineApply_Fillin_Card.incomeKey = [...result.income.split(',').map(i => Number(i))]
          } else {
            this.onLineApply_Fillin_Card.incomeKey = []
          }
          if (result.income.includes(9)) {
            this.onLineApply_Fillin_Card.incomeOther = result.incomeOther
          }
          break
        default:
          service.showAPIMsg(kycInformation.message)
          break
      }
    }
  },
  async mounted () {
    const session = JSON.parse(sessionStorage.getItem('tempOnlineApply'))
    if (session?.onLineApply_Fillin_Card) {
      const temp = JSON.parse(session.onLineApply_Fillin_Card)
      Object.keys(temp).forEach(key => {
        this.$data[key] = temp[key]
      })
    } else {
      await this.init()
    }

    if (session) {
      this.tempOnlineApply = { ...session }
    }
    this.getUtilities()
    this.noticeModal = new bootstrap.Modal(this.$refs.noticeModal, {
      keyboard: false,
      backdrop: 'static'
    })
    this.noticeModal.show()
  }
}
</script>
