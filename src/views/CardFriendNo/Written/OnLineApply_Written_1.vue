<template>
  <!-- 主視覺 -->
  <div class="shortKv">
    <div class="fill-shortKv topimg-OnLineApply">
      <div class="container-xl shortKv-title-4">
        <h2>線上辦卡</h2>
      </div>
    </div>
  </div>
  <!-- //主視覺 -->
  <!-- 主要內容 -->
  <Form ref="form" v-slot={errors}>
    <section class="mainArea">
      <div class="container-xl">
        <div class="row justify-content-md-center pt-1 pt-md-3">
          <!------------------------步驟---------------------------------->
          <div class="stepGroup">
            <ul class="step">
              <li class="completed">
                <div class="counter_step">1</div>
                <span>申請人資料</span>
              </li>
              <li class="active">
                <div class="counter_step">2</div>
                <span>職業資料</span>
              </li>
              <li>
                <div class="counter_step">3</div>
                <span>個人資料使用特別商議條款</span>
              </li>
            </ul>
          </div>
          <!------------------------//步驟---------------------------------->
          <div class="mb-4 text-left">
            <strong>職業資料</strong> <small class="red_text">*請務必填寫</small>
          </div>
          <div class="blue_box mb-4">
            <div class="blue_box_bg">
              <ul class="formList-even">
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>公司名稱</label>
                  <Field
                    v-model="Form.CompanyName"
                    rules="required|chkKeyValue"
                    :class="{'is-invalid':errors['公司名稱']}"
                    name="公司名稱"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="公司名稱"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">統一編號：</label>
                  <Field
                    v-model="Form.TaxId"
                    rules="chkKeyValue"
                    :class="{'is-invalid':errors['統一編號']}"
                    name="統一編號"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="統一編號"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>公司地址</label>
                  <div
                    class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                  >
                    <Field
                      as="select"
                      name="CompanyAddress_ZipCode"
                      v-model="Form.CompanyAddress.ZipCode"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    >
                      <option value="110000" selected>110000</option>
                      <option value="110000">110000</option>
                    </Field>
                    <Field
                      as="select"
                      name="CompanyAddress_Dist"
                      v-model="Form.CompanyAddress.Dist"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    >
                      <option value="南港區" selected>南港區</option>
                      <option value="松山區">松山區</option>
                      <option value="內湖區">內湖區</option>
                    </Field>
                    <Field
                      as="select"
                      name="CompanyAddress_Rd"
                      v-model="Form.CompanyAddress.Rd"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    >
                      <option value="忠孝東路五段" selected>忠孝東路五段</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                    </Field>
                  </div>
                  <div class="d-flex apply_address align-items-center">
                    <Field
                      name="CompanyAddress_Ln"
                      type="text"
                      v-model="Form.CompanyAddress.Ln"
                      @change="$custom.validate.CheckAddressAll(Form.CompanyAddress,$refs.form,'公司地址')"
                      @keyup="Form.CompanyAddress.Ln = $custom.validate.NumOnlyWithoutFirstZero(Form.CompanyAddress.Ln)"
                      maxlength="5"
                      class="form-control me-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />巷
                    <Field
                      name="CompanyAddress_Aly"
                      type="text"
                      v-model="Form.CompanyAddress.Aly"
                      @change="$custom.validate.CheckAddressAll(Form.CompanyAddress,$refs.form,'公司地址')"
                      @keyup="Form.CompanyAddress.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.CompanyAddress.Aly)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />弄
                    <Field
                      name="CompanyAddress_No_1"
                      type="text"
                      v-model="Form.CompanyAddress.No_1"
                      @change="$custom.validate.CheckAddressAll(Form.CompanyAddress,$refs.form,'公司地址')"
                      @keyup="Form.CompanyAddress.No_1 = $custom.validate.NumOnlyWithoutFirstZero(Form.CompanyAddress.No_1)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />-
                    <Field
                      name="CompanyAddress_No_2"
                      type="text"
                      v-model="Form.CompanyAddress.No_2"
                      @change="$custom.validate.CheckAddressAll(Form.CompanyAddress,$refs.form,'公司地址')"
                      @keyup="Form.CompanyAddress.No_2 = $custom.validate.NumOnlyWithoutFirstZero(Form.CompanyAddress.No_2)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />號
                    <Field
                      name="CompanyAddress_Floor"
                      type="text"
                      v-model="Form.CompanyAddress.Floor"
                      @change="$custom.validate.CheckAddressAll(Form.CompanyAddress,$refs.form,'公司地址')"
                      @keyup="Form.CompanyAddress.Floor = $custom.validate.NumOnlyWithoutFirstZero(Form.CompanyAddress.Floor)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />樓
                    <Field
                      name="CompanyAddress_Other"
                      type="text"
                      v-model="Form.CompanyAddress.Other"
                      @change="$custom.validate.CheckAddressAll(Form.CompanyAddress,$refs.form,'公司地址')"
                      maxlength="100"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />
                  </div>
                  <p class="text-danger ms-2 mt-1">{{ errors['公司地址'] }}</p>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">公司電話</label>
                  <div class="d-flex office_tel align-items-center">
                    <Field
                      v-model="Form.CompanyPhone.Area"
                      name="Area"
                      maxlength="3"
                      @keyup="Form.CompanyPhone.Area = $custom.validate.OnlyNumPress(Form.CompanyPhone.Area)"
                      type="text"
                      class="form-control AreaCode me-1"
                    />-
                    <Field
                      v-model="Form.CompanyPhone.Number"
                      name="Number"
                      maxlength="7"
                      @keyup="Form.CompanyPhone.Number = $custom.validate.OnlyNumPress(Form.CompanyPhone.Number)"
                      type="text"
                      class="form-control mx-1"
                    /><span class="text-nowrap">分機</span>
                    <Field
                      v-model="Form.CompanyPhone.Ext"
                      name="Ext"
                      maxlength="8"
                      @keyup="Form.CompanyPhone.Ext = $custom.validate.OnlyNumPress(Form.CompanyPhone.Ext)"
                      type="text"
                      class="form-control Ext ms-1"
                    />
                  </div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">部門名稱</label>
                  <Field
                    v-model="Form.Department"
                    rules="chkKeyValue"
                    :class="{ 'is-invalid': errors['部門名稱'] }"
                    name="部門名稱"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="部門名稱"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">職稱</label>
                  <Field
                    v-model="Form.JobTitle"
                    rules="chkKeyValue"
                    :class="{ 'is-invalid': errors['職稱'] }"
                    name="職稱"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="職稱"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>職業別</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Field
                      v-model="Form.Profession.Job"
                      rules="required"
                      :class="{ 'is-invalid': errors['職業別'] }"
                      as="select"
                      name="職業別"
                      runat="server"
                      id="SelM"
                      class="form-select form-control me-1"
                      @change="Form.Profession.Job!=='0'?Form.Profession.Other='':''"
                    >
                      <option v-for="item in selectJson.JOBTYPE" :key="item.VALUE" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <div class="d-flex align-items-center" v-if="Form.Profession.Job==='0'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        v-model="Form.Profession.Other"
                        rules="required"
                        :class="{ 'is-invalid': errors['職業別-其他'] }"
                        name="職業別-其他"
                        type="text"
                        class="form-control other_input ms-1 my-2 my-md-0"
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    name="職業別"
                    class="text-danger ms-2"
                  />
                  <ErrorMessage
                    name="職業別-其他"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""
                    ><span class="red_text">* </span>主要所得及資金來源</label
                  >
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Field
                      v-model="Form.IncomeSource.Income"
                      rules="required"
                      :class="{ 'is-invalid': errors['主要所得及資金來源'] }"
                      as="select"
                      name="主要所得及資金來源"
                      runat="server"
                      id="SelM"
                      class="form-select form-control me-1"
                      @change="Form.IncomeSource.Income!=='9'?Form.IncomeSource.Other='':''"
                    >
                      <option v-for="item in selectJson.INCOME" :key="item.VALUE" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <div class="d-flex align-items-center" v-if="Form.IncomeSource.Income==='9'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        v-model="Form.IncomeSource.Other"
                        rules="required"
                        :class="{ 'is-invalid': errors['主要所得及資金來源-其他'] }"
                        name="主要所得及資金來源-其他"
                        type="text"
                        class="form-control other_input ms-1 my-2 my-md-0"
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    name="主要所得及資金來源"
                    class="text-danger ms-2"
                  />
                  <ErrorMessage
                    name="主要所得及資金來源-其他"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>職級別</label>
                  <Field
                    v-model="Form.JobLevel.Level"
                    rules="required"
                    :class="{ 'is-invalid': errors['職級別'] }"
                    as="select"
                    name="職級別"
                    runat="server"
                    id="SelM"
                    class="form-select form-control"
                  >
                    <option v-for="item in selectJson.JOBLV" :key="item.VALUE" :value="item.VALUE">{{item.SHOW}}</option>
                  </Field>
                  <ErrorMessage
                    name="職級別"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>現職月收入</label>
                  <Field
                    v-model="Form.JobIncome"
                    rules="required"
                    :class="{ 'is-invalid': errors['現職月收入'] }"
                    name="現職月收入"
                    type="text"
                    class="form-control"
                    @keyup="Form.JobIncome = $custom.validate.NumOnlyWithoutFirstZero(Form.JobIncome)"
                  />
                  <ErrorMessage
                    name="現職月收入"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">到職日期</label>
                  <div class="d-flex align-items-center">
                    <Field
                      v-model="Form.OnboardDate.Year"
                      as="select"
                      name="到職日期-年"
                      runat="server"
                      class="form-select form-control me-1 me-md-2"
                    >
                      <option v-for="n in OnboardDateList.year" :key="n" :value="n">{{n}}</option>
                    </Field
                    >年
                    <Field
                      v-model="Form.OnboardDate.Month"
                      as="select"
                      name="到職日期-月"
                      runat="server"
                      class="form-select form-control mx-1 mx-md-2"
                    >
                      <option v-for="n in OnboardDateList.month" :key="n" :value="n">{{n}}</option>
                    </Field
                    >月
                    <Field
                      v-model="Form.OnboardDate.Day"
                      as="select"
                      name="到職日期-日"
                      runat="server"
                      class="form-select form-control mx-1 mx-md-2"
                    >
                      <option v-for="n in OnboardDateList.day" :key="n" :value="n">{{n}}</option>
                    </Field
                    >日
                  </div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">年資</label>
                  <Field
                    v-model="Form.JobYear"
                    rules="chkKeyValue"
                    :class="{ 'is-invalid': errors['年資'] }"
                    name="年資"
                    type="text"
                    maxlength="2"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="年資"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">前服務單位名稱</label>
                  <div class="d-flex align-items-center">
                    <Field
                      v-model="Form.ExUnitName"
                      rules="chkKeyValue"
                      :class="{ 'is-invalid': errors['前服務單位名稱'] }"
                      name="前服務單位名稱"
                      type="text"
                      class="form-control me-1"
                    /><span class="red_text text-nowrap"
                      >(現職未滿一年者填寫)</span
                    >
                  </div>
                  <ErrorMessage
                    name="前服務單位名稱"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">前服務單位職稱</label>
                  <Field
                    v-model="Form.ExUnitJobTitle"
                    rules="chkKeyValue"
                    :class="{ 'is-invalid': errors['前服務單位職稱'] }"
                    name="前服務單位職稱"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="前服務單位職稱"
                    class="text-danger ms-2"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-4 text-md-center red_text">
            *
            請務必填寫至最後步驟並列印出「簽名欄位」及黏貼「身份證影本欄位」，<br />
            切勿自行按瀏覽器之列印功能以免資料不全造成辦卡時間之延誤。
          </div>
          <div class="text-center button_group">
            <button
              @click.prevent="submit"
              class="btn btn-primary btn-lg mx-1"
            >
              下一步
            </button>
          </div>
        </div>
      </div>
    </section>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      selectJson: JSON.parse(localStorage.getItem('SELECT_JSON')),
      Form: {
        CompanyName: '',
        TaxId: '',
        CompanyAddress: {
          ZipCode: '110000',
          Dist: '南港區',
          Rd: '忠孝東路五段',
          Ln: '',
          Aly: '',
          No_1: '',
          No_2: '',
          Floor: '',
          Other: ''
        },
        CompanyPhone: {
          Area: '',
          Number: '',
          Ext: ''
        },
        Department: '',
        JobTitle: '',
        Profession: {
          Job: '',
          Other: ''
        },
        IncomeSource: {
          Income: '',
          Other: ''
        },
        JobLevel: {
          Level: '',
          Other: ''
        },
        JobIncome: '',
        OnboardDate: {
          Year: new Date().getFullYear() - 18 - 1911,
          Month: 1,
          Day: 1
        },
        JobYear: '',
        ExUnitName: '',
        ExUnitJobTitle: ''
      }
    }
  },
  computed: {
    OnboardDateList () {
      return this.$custom.validate.getDateSelect(this.Form.OnboardDate)
    }
  },
  methods: {
    async submit () {
      this.$custom.validate.CheckAddressAll(this.Form.CompanyAddress, this.$refs.form, '公司地址')
      await this.$refs.form.validate()
      const errors = this.$refs.form.getErrors()
      if (Object.keys(errors).length === 0) {
        this.$router.push('/OnLineApply_Written_2')
      } else {
        this.$custom.validate.showErrors(this.$refs.form.getErrors(errors))
      }
    }
  }
}
</script>
