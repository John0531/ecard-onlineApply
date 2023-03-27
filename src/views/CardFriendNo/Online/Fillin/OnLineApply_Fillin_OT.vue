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
  <Form ref="form" v-slot="{ errors }">
    <section class="mainArea">
      <div class="container-xl">
        <div class="row justify-content-md-center pt-1 pt-md-3">
          <!------------------------步驟---------------------------------->
          <div class="stepGroup">
            <ul class="step">
              <li class="active">
                <div class="counter_step">1</div><span>申請人資料</span>
              </li>
              <li>
                <div class="counter_step">2</div><span>個人資料使用特別商議條款</span>
              </li>
              <li>
                <div class="counter_step">3</div><span>檢附財力證明</span>
              </li>
            </ul>
          </div>
          <!------------------------//步驟---------------------------------->
          <div class="mb-4 text-left">
            <strong>申請人資料</strong>
            <small class="red_text">*請務必填寫</small>
          </div>
          <div class="blue_box mb-4">
            <div class="blue_box_bg">
              <ul class="formList-even">
                <li class="col-12 col-md-6">
                  <label for="">身分證字號</label>
                  <div class="form-text">{{Form.Id}}</div>
                  <!-- <Field
                    v-model="Form.Id"
                    maxlength="10"
                    rules="required|checkId"
                    :class="{ 'is-invalid': errors['身分證字號'] }"
                    name="身分證字號"
                    type="text"
                    class="form-control"
                    @change="Form.Id=$custom.validate.watchToUpper(Form.Id)"
                  />
                  <ErrorMessage
                    name="身分證字號"
                    class="invalid-feedback ms-2"
                  /> -->
                </li>
                <li class="col-12 col-md-6 d-none d-md-block"></li>
                <li class="col-12 col-md-6">
                  <label for=""
                    ><span class="red_text">* </span>身分證發證日期</label
                  >
                  <div class="d-flex align-items-center">
                    <span class="text-nowrap">民國</span>
                    <Field
                      v-model="Form.IdDate.Year"
                      as="select"
                      name="IdDate_Year"
                      runat="server"
                      class="form-select form-control mx-1 mx-md-2"
                      :class="{ 'is-invalid': errors['身分證發證日期'] }"
                      @blur="$custom.validate.checkDate(Form.IdDate,$refs.form,'身分證發證日期')"
                    >
                      <option value="" selected>---</option>
                      <option v-for="n in IdDateList.year" :key="n" :value="n">{{n}}</option>
                    </Field
                    >年
                    <Field
                      v-model="Form.IdDate.Month"
                      as="select"
                      name="IdDate_Month"
                      runat="server"
                      id="SelM"
                      class="form-select form-control mx-1 mx-md-2"
                      :class="{ 'is-invalid': errors['身分證發證日期'] }"
                      @blur="$custom.validate.checkDate(Form.IdDate,$refs.form,'身分證發證日期')"
                    >
                      <option value="" selected>---</option>
                      <option v-for="n in IdDateList.month" :key="n" :value="n">{{n}}</option>
                    </Field
                    >月
                    <Field
                      v-model="Form.IdDate.Day"
                      as="select"
                      name="IdDate_Day"
                      runat="server"
                      id="SelD"
                      class="form-select form-control mx-1 mx-md-2"
                      :class="{ 'is-invalid': errors['身分證發證日期'] }"
                      @blur="$custom.validate.checkDate(Form.IdDate,$refs.form,'身分證發證日期')"
                    >
                      <option value="" selected>---</option>
                      <option v-for="n in IdDateList.day" :key="n" :value="n">{{n}}</option>
                    </Field
                    >日
                  </div>
                  <p class="text-danger ms-2 mt-1">{{ errors['身分證發證日期'] }}</p>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">發證地點</label>
                  <div class="d-flex ID_date align-items-center">
                    <Field
                      v-model="Form.IdPlace.County"
                      as="select"
                      rules="required"
                      :class="{ 'is-invalid': errors['發證地點'] }"
                      name="發證地點"
                      runat="server"
                      class="form-select form-control IDCounty mr-1 mr-md-2"
                    >
                      <option v-for="item in selectJson.CountyID" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      v-model="Form.IdPlace.Type"
                      as="select"
                      name="類型"
                      runat="server"
                      class="form-select form-control IDissue mx-1 mx-md-2"
                    >
                      <option value="換發">換發</option>
                      <option value="補發">補發</option>
                      <option value="初發">初發</option>
                    </Field>
                  </div>
                  <ErrorMessage
                    name="發證地點"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>中文姓名</label>
                  <Field
                    v-model="Form.ChineseName"
                    maxlength="20"
                    rules="required|checkChinese"
                    :class="{ 'is-invalid': errors['中文姓名'] }"
                    name="中文姓名"
                    type="text"
                    placeholder=""
                    class="form-control"
                  />
                  <ErrorMessage
                    name="中文姓名"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>英文姓名</label>
                  <div class="d-block d-md-flex align-items-center">
                    <Field
                      v-model="Form.EnglishName"
                      maxlength="30"
                      rules="required|chkKeyValueNumEng|chkKeyValue"
                      :class="{ 'is-invalid': errors['英文姓名'] }"
                      name="英文姓名"
                      type="text"
                      class="form-control me-0 me-md-2"
                      @change="Form.EnglishName=$custom.validate.watchToUpper(Form.EnglishName)"
                    />
                    <span class="red_text text-nowrap">(必須與護照相同)</span>
                  </div>
                  <ErrorMessage
                    name="英文姓名"
                    class="text-danger ms-2 mt-1"
                  />
                </li>
                <!-- <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>性別</label>
                  <Field
                    v-model="Form.Gender"
                    as="select"
                    name="性別"
                    runat="server"
                    class="form-select form-control"
                  >
                    <option value="男">男</option>
                    <option value="女">女</option>
                  </Field>
                </li> -->
                <li class="col-12 col-md-6">
                  <label for="">出生日期</label>
                  <div class="form-text">{{Form.BirthDay.Year}}/{{Form.BirthDay.Month}}/{{Form.BirthDay.Day}}</div>
                  <!-- <div class="d-flex align-items-center">
                    <Field
                      v-model="Form.BirthDay.Year"
                      as="select"
                      name="出生日期-年"
                      runat="server"
                      class="form-select form-control me-1 me-md-2"
                    >
                      <option v-for="n in BirthDateList.year" :key="n" :value="n">{{n}}</option>
                    </Field
                    >年
                    <Field
                      v-model="Form.BirthDay.Month"
                      as="select"
                      name="出生日期-月"
                      runat="server"
                      class="form-select form-control mx-1 mx-md-2"
                    >
                      <option v-for="n in BirthDateList.month" :key="n" :value="n">{{n}}</option>
                    </Field
                    >月
                    <Field
                      v-model="Form.BirthDay.Day"
                      as="select"
                      name="出生日期-日"
                      runat="server"
                      class="form-select form-control mx-1 mx-md-2"
                    >
                      <option v-for="n in BirthDateList.day" :key="n" :value="n">{{n}}</option>
                    </Field
                    >日
                  </div> -->
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>出生地</label>
                  <Field
                    v-model="Form.BirthPlace"
                    as="select"
                    rules="required"
                    :class="{ 'is-invalid': errors['出生地'] }"
                    name="出生地"
                    runat="server"
                    class="form-select form-control"
                  >
                    <option v-for="item in selectJson.BIRTHPLACE" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                  </Field>
                  <ErrorMessage
                    name="出生地"
                    class="invalid-feedback"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>國籍</label>
                  <Field
                    v-model="Form.Country"
                    as="select"
                    rules="required"
                    :class="{ 'is-invalid': errors['國籍'] }"
                    name="國籍"
                    runat="server"
                    class="form-select form-control"
                  >
                    <option v-for="item in selectJson.NATIONALITY" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                  </Field>
                  <ErrorMessage
                    name="國籍"
                    class="invalid-feedback"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">教育程度</label>
                  <Field
                    v-model="Form.Education"
                    as="select"
                    name="教育程度"
                    runat="server"
                    class="form-select form-control"
                  >
                    <option value="高中">高中</option>
                    <option value="大學">大學</option>
                    <option value="碩士">碩士</option>
                    <option value="博士">博士</option>
                  </Field>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">行動電話</label>
                  <div class="form-text">{{Form.Cellphone}}</div>
                </li>
                <!-- <li class="col-12 col-md-6">
                  <label for="">婚姻狀況</label>
                  <Field
                    v-model="Form.Marriage"
                    as="select"
                    name="婚姻狀況"
                    runat="server"
                    id="SelM"
                    class="form-select form-control"
                  >
                    <option value="已婚">已婚</option>
                    <option value="未婚">未婚</option>
                  </Field>
                </li> -->
                <li class="col-12 col-md-6">
                  <label for="">電子信箱</label>
                  <template v-if="Form.PaymentType==='email'">
                    <Field
                      v-model="Form.Email"
                      rules="required|email"
                      :class="{ 'is-invalid': errors['電子信箱'] }"
                      name="電子信箱"
                      type="text"
                      class="form-control"
                    />
                    <ErrorMessage
                      name="電子信箱"
                      class="invalid-feedback ms-2"
                    />
                  </template>
                  <Field
                    v-else
                    v-model="Form.Email"
                    name="電子信箱"
                    type="text"
                    class="form-control"
                  />
                </li>
                <li class="col-12">
                  <span class="red_text">* 為響應環保及維護個人隱私，將依您以上留存之「電子信箱」寄送信用卡活動及權益通知。</span>
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>戶籍地址</label>
                  <div
                    class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                  >
                    <Field
                      as="select"
                      name="HomeAddress_County"
                      v-model="Form.HomeAddress.County"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="HomeAddress_Dist"
                      v-model="Form.HomeAddress.Dist"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    >
                      <option value="" selected>-----</option>
                      <option value="松山區">松山區</option>
                      <option value="內湖區">內湖區</option>
                    </Field>
                    <Field
                      as="select"
                      name="HomeAddress_Rd"
                      v-model="Form.HomeAddress.Rd"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    >
                      <option value="" selected>-----</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                    </Field>
                  </div>
                  <div class="d-flex apply_address align-items-center">
                    <Field
                      name="HomeAddress_Ln"
                      type="text"
                      v-model="Form.HomeAddress.Ln"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      @keyup="Form.HomeAddress.Ln = $custom.validate.NumOnlyWithoutFirstZero(Form.HomeAddress.Ln)"
                      maxlength="5"
                      class="form-control me-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />巷
                    <Field
                      name="HomeAddress_Aly"
                      type="text"
                      v-model="Form.HomeAddress.Aly"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      @keyup="Form.HomeAddress.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.HomeAddress.Aly)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />弄
                    <Field
                      name="HomeAddress_No_1"
                      type="text"
                      v-model="Form.HomeAddress.No_1"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      @keyup="Form.HomeAddress.No_1 = $custom.validate.NumOnlyWithoutFirstZero(Form.HomeAddress.No_1)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />-
                    <Field
                      name="HomeAddress_No_2"
                      type="text"
                      v-model="Form.HomeAddress.No_2"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      @keyup="Form.HomeAddress.No_2 = $custom.validate.NumOnlyWithoutFirstZero(Form.HomeAddress.No_2)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />號
                    <Field
                      name="HomeAddress_Floor"
                      type="text"
                      v-model="Form.HomeAddress.Floor"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      @keyup="Form.HomeAddress.Floor = $custom.validate.NumOnlyWithoutFirstZero(Form.HomeAddress.Floor)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />樓
                    <Field
                      name="HomeAddress_Other"
                      type="text"
                      v-model="Form.HomeAddress.Other"
                      @blur="$custom.validate.CheckAddressAll(Form.HomeAddress,$refs.form,'戶籍地址')"
                      maxlength="100"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />
                  </div>
                  <p class="text-danger ms-2 mt-1">{{ errors['戶籍地址'] }}</p>
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>居住地址</label>
                  <div
                    class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                  >
                    <Field
                      as="select"
                      name="ContactAddress_County"
                      v-model="Form.ContactAddress.County"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="ContactAddress_Dist"
                      v-model="Form.ContactAddress.Dist"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    >
                      <option value="" selected>-----</option>
                      <option value="松山區">松山區</option>
                      <option value="內湖區">內湖區</option>
                    </Field>
                    <Field
                      as="select"
                      name="ContactAddress_Rd"
                      v-model="Form.ContactAddress.Rd"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    >
                      <option value="" selected>-----</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                    </Field>
                  </div>
                  <div class="d-flex apply_address align-items-center">
                    <Field
                      name="ContactAddress_Ln"
                      type="text"
                      v-model="Form.ContactAddress.Ln"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      @keyup="Form.ContactAddress.Ln = $custom.validate.NumOnlyWithoutFirstZero(Form.ContactAddress.Ln)"
                      maxlength="5"
                      class="form-control me-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />巷
                    <Field
                      name="ContactAddress_Aly"
                      type="text"
                      v-model="Form.ContactAddress.Aly"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      @keyup="Form.ContactAddress.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.ContactAddress.Aly)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />弄
                    <Field
                      name="ContactAddress_No_1"
                      type="text"
                      v-model="Form.ContactAddress.No_1"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      @keyup="Form.ContactAddress.No_1 = $custom.validate.NumOnlyWithoutFirstZero(Form.ContactAddress.No_1)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />-
                    <Field
                      name="ContactAddress_No_2"
                      type="text"
                      v-model="Form.ContactAddress.No_2"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      @keyup="Form.ContactAddress.No_2 = $custom.validate.NumOnlyWithoutFirstZero(Form.ContactAddress.No_2)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />號
                    <Field
                      name="ContactAddress_Floor"
                      type="text"
                      v-model="Form.ContactAddress.Floor"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      @keyup="Form.ContactAddress.Floor = $custom.validate.NumOnlyWithoutFirstZero(Form.ContactAddress.Floor)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />樓
                    <Field
                      name="ContactAddress_Other"
                      type="text"
                      v-model="Form.ContactAddress.Other"
                      @blur="$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      maxlength="100"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />
                  </div>
                  <div class="form-check">
                    <input
                      @click="Form.ContactAddress = {...Form.HomeAddress};$custom.validate.CheckAddressAll(Form.ContactAddress,$refs.form,'居住地址')"
                      class="form-check-input mt-2 position-absolute"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <div class="form_Apply_txt">同戶籍地址</div>
                  </div>
                  <p class="text-danger ms-2 mt-1">{{ errors['居住地址'] }}</p>
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>帳單地址</label>
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單地址'] }"
                        v-model="Form.PayAddress"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單地址"
                        value="home"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">同戶籍地址</div>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單地址'] }"
                        v-model="Form.PayAddress"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單地址"
                        value="contact"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">同居住地址</div>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單地址'] }"
                        v-model="Form.PayAddress"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單地址"
                        value="company"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">同公司地址</div>
                    </div>
                  </div>
                  <ErrorMessage
                    name="帳單地址"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>寄卡地址</label>
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['寄卡地址'] }"
                        v-model="Form.CardAddress"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="寄卡地址"
                        value="home"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">同戶籍地址</div>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['寄卡地址'] }"
                        v-model="Form.CardAddress"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="寄卡地址"
                        value="contact"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">同居住地址</div>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['寄卡地址'] }"
                        v-model="Form.CardAddress"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="寄卡地址"
                        value="company"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">同公司地址</div>
                    </div>
                  </div>
                  <ErrorMessage
                    name="寄卡地址"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>戶籍電話</label>
                  <div class="d-flex office_tel align-items-center">
                    <Field
                      v-model="Form.HomePhone.Area"
                      name="HomePhone_Area"
                      type="text"
                      class="form-control AreaCode me-1"
                      :class="{ 'is-invalid': errors['戶籍電話區碼'] }"
                      maxlength="4"
                      @change="$custom.validate.chkKeyValueLength(Form.HomePhone.Area,$refs.form,'戶籍電話區碼',2,4)"
                      @keyup="Form.HomePhone.Area = $custom.validate.OnlyNumPress(Form.HomePhone.Area)"
                    />-
                    <Field
                      v-model="Form.HomePhone.Number"
                      name="HomePhone_Number"
                      type="text"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['戶籍電話號碼'] }"
                      maxlength="8"
                      @change="$custom.validate.chkKeyValueLength(Form.HomePhone.Number,formDom,'戶籍電話號碼',6,8)"
                      @keyup="Form.HomePhone.Number = $custom.validate.OnlyNumPress(Form.HomePhone.Number)"
                    />
                  </div>
                  <p class="text-danger ms-2 mt-1">{{ errors['戶籍電話區碼']?errors['戶籍電話區碼']:errors['戶籍電話號碼'] }}</p>
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>居住電話</label>
                  <div class="d-flex office_tel align-items-center">
                    <Field
                      v-model="Form.ContactPhone.Area"
                      name="ContactPhone_Area"
                      type="text"
                      class="form-control AreaCode me-1"
                      :class="{ 'is-invalid': errors['居住電話區碼'] }"
                      maxlength="4"
                      @change="$custom.validate.chkKeyValueLength(Form.ContactPhone.Area,formDom,'居住電話區碼',2,4)"
                      @keyup="Form.ContactPhone.Area = $custom.validate.OnlyNumPress(Form.ContactPhone.Area)"
                    />-
                    <Field
                      v-model="Form.ContactPhone.Number"
                      name="ContactPhone_Number"
                      type="text"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['居住電話號碼'] }"
                      maxlength="8"
                      @change="$custom.validate.chkKeyValueLength(Form.ContactPhone.Number,formDom,'居住電話號碼',6,8)"
                      @keyup="Form.ContactPhone.Number = $custom.validate.OnlyNumPress(Form.ContactPhone.Number)"
                    />
                  </div>
                  <p class="text-danger ms-2 mt-1">{{ errors['居住電話區碼']?errors['居住電話區碼']:errors['居住電話號碼'] }}</p>
                </li>
                <!-- <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>行動電話</label>
                  <Field
                    v-model="Form.Cellphone"
                    rules="required|checkPhone"
                    :class="{ 'is-invalid': errors['行動電話'] }"
                    name="行動電話"
                    type="text"
                    placeholder=""
                    class="form-control"
                    maxlength="10"
                  />
                  <ErrorMessage
                    name="行動電話"
                    class="invalid-feedback ms-2"
                  />
                </li> -->
                <li class="col-12 col-md-6">
                  <label for="">住所狀態</label>
                  <select
                    name=""
                    runat=""
                    id=""
                    class="form-select form-control"
                  >
                    <option>自有</option>
                    <option></option>
                  </select>
                </li>
                <!-- <li class="col-12 col-md-6">
                  <label for="">居住年數</label>
                  <div class="d-flex align-items-center">
                    <Field
                      v-model="Form.LivingYear"
                      name="居住年數"
                      maxlength="10"
                      type="text"
                      class="form-control me-1"
                      @keyup="Form.LivingYear = $custom.validate.NumOnlyWithoutFirstZero(Form.LivingYear)"
                    />年
                  </div>
                </li> -->
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>帳單形式</label>
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單形式'] }"
                        v-model="Form.PaymentType"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單形式"
                        value="email"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">EMAIL帳單</div>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單形式'] }"
                        v-model="Form.PaymentType"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單形式"
                        value="phone"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">行動帳單(簡訊)</div>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單形式'] }"
                        v-model="Form.PaymentType"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單形式"
                        value="line"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">LINE帳單</div>
                    </div>
                    <div class="form-check">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單形式'] }"
                        v-model="Form.PaymentType"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單形式"
                        value="paper"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">紙本帳單</div>
                    </div>
                  </div>
                  <ErrorMessage
                    name="帳單形式"
                    class="text-danger ms-2"
                  />
                  <div class="form_Apply_txt">
                      <span class="red_text">※申請E-mail帳單請務必收取聯邦銀行電子帳單認證信，點選驗證網址始完成申請。<br>
                      ※帳單接收型式將依本次選擇做為日後帳單寄送依據，如未點選E-mail認證信則依原帳單型式或紙本寄送。</span>
                  </div>
                </li>
                <li class="col-12 col-md-12 mb-0" v-if="Apply_N_Type==='Online'">
                  <label for=""
                    ><span class="red_text">* </span>申請數位卡</label
                  >
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4">
                      <Field
                        rules="radioRequired"
                        :class="{ 'is-invalid': errors['申請數位卡'] }"
                        v-model="Form.DigitalCard"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="申請數位卡"
                        id="exampleRadios1"
                        :value="true"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">是</div>
                    </div>
                    <div class="form-check">
                      <Field
                        rules="radioRequired"
                        :class="{ 'is-invalid': errors['申請數位卡'] }"
                        v-model="Form.DigitalCard"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="申請數位卡"
                        id="exampleRadios3"
                        :value="false"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">否</div>
                    </div>
                  </div>
                  <ErrorMessage
                    name="申請數位卡"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-12 text-left" v-if="Apply_N_Type==='Online'">
                  <span
                    >數位卡說明：同意進件申請後，本行於審核通過即以簡訊發送個人代碼至申請之行動電話，您可憑代碼至指定網站中查詢信用卡資訊，以更快體驗聯邦銀行提供予您在行動支付或網路購物上更便利的服務。</span
                  >
                </li>
                <li class="col-12 col-md-6">
                  <label for=""
                    ><span class="red_text">* </span>畢業國小名稱</label
                  >
                  <Field
                    v-model="Form.GraduateSchool"
                    rules="required|chkKeyValue"
                    :class="{'is-invalid':errors['畢業國小名稱']}"
                    name="畢業國小名稱"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="畢業國小名稱"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <!-----新增學生欄位------->
                <li class="col-12 col-md-12 mb-0">
                  <label for=""><span class="red_text">* </span>是否為學生
                  </label>
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['是否為學生'] }"
                        v-model="Form.IsStudent"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="是否為學生"
                        value="Y"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">
                        是
                      </div>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['是否為學生'] }"
                        v-model="Form.IsStudent"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="是否為學生"
                        value="N"
                        :validateOnInput="true"
                      />
                      <div class="form_Apply_txt">
                        否
                      </div>
                    </div>
                  </div>
                  <ErrorMessage
                    name="是否為學生"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-12 mb-2">
                  <div>
                    <span>※貼心提醒：學生辦卡依金融法令規範發卡行應將發卡情事通知父母或法定代理人，請您提供1.家長姓名(直系血親尊親屬)、2.家長手機、3.通知書寄送地址以利後續通知事宜。
                    </span>
                  </div>
                </li>
                <li class="col-12 col-md-6" v-if="Form.IsStudent==='Y'">
                  <label for=""><span class="red_text">* </span>家長姓名</label>
                  <Field
                    v-model="Form.ParentsName"
                    rules="required"
                    :class="{'is-invalid':errors['家長姓名']}"
                    name="家長姓名"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="家長姓名"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-6" v-if="Form.IsStudent==='Y'">
                  <label for=""><span class="red_text">* </span>家長聯絡電話</label>
                  <Field
                    v-model="Form.ParentsPhone"
                    rules="required"
                    :class="{'is-invalid':errors['家長聯絡電話']}"
                    name="家長聯絡電話"
                    type="text"
                    class="form-control"
                    @keyup="Form.ParentsPhone = $custom.validate.OnlyNumPress(Form.ParentsPhone)"
                  />
                  <ErrorMessage
                    name="家長聯絡電話"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-12"  v-if="Form.IsStudent==='Y'">
                  <label for=""><span class="red_text">* </span>家長通訊地址</label>
                  <div
                    class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                  >
                    <Field
                      as="select"
                      name="ParentsAddress_County"
                      v-model="Form.ParentsAddress.County"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="ParentsAddress_Dist"
                      v-model="Form.ParentsAddress.Dist"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    >
                      <option value="" selected>-----</option>
                      <option value="松山區">松山區</option>
                      <option value="內湖區">內湖區</option>
                    </Field>
                    <Field
                      as="select"
                      name="ParentsAddress_Rd"
                      v-model="Form.ParentsAddress.Rd"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    >
                      <option value="" selected>-----</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                      <option value="忠孝東路五段">忠孝東路五段</option>
                    </Field>
                  </div>
                  <div class="d-flex apply_address align-items-center">
                    <Field
                      name="ParentsAddress_Ln"
                      type="text"
                      v-model="Form.ParentsAddress.Ln"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      @keyup="Form.ParentsAddress.Ln = $custom.validate.NumOnlyWithoutFirstZero(Form.ParentsAddress.Ln)"
                      maxlength="5"
                      class="form-control me-1"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    />巷
                    <Field
                      name="ParentsAddress_Aly"
                      type="text"
                      v-model="Form.ParentsAddress.Aly"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      @keyup="Form.ParentsAddress.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.ParentsAddress.Aly)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    />弄
                    <Field
                      name="ParentsAddress_No_1"
                      type="text"
                      v-model="Form.ParentsAddress.No_1"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      @keyup="Form.ParentsAddress.No_1 = $custom.validate.NumOnlyWithoutFirstZero(Form.ParentsAddress.No_1)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    />-
                    <Field
                      name="ParentsAddress_No_2"
                      type="text"
                      v-model="Form.ParentsAddress.No_2"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      @keyup="Form.ParentsAddress.No_2 = $custom.validate.NumOnlyWithoutFirstZero(Form.ParentsAddress.No_2)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    />號
                    <Field
                      name="ParentsAddress_Floor"
                      type="text"
                      v-model="Form.ParentsAddress.Floor"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      @keyup="Form.ParentsAddress.Floor = $custom.validate.NumOnlyWithoutFirstZero(Form.ParentsAddress.Floor)"
                      maxlength="5"
                      class="form-control mx-1"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    />樓
                    <Field
                      name="ParentsAddress_Other"
                      type="text"
                      v-model="Form.ParentsAddress.Other"
                      @blur="$custom.validate.CheckAddressAll(Form.ParentsAddress,$refs.form,'家長通訊地址')"
                      maxlength="100"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['家長通訊地址'] }"
                    />
                  </div>
                  <p class="text-danger ms-2 mt-1">{{ errors['家長通訊地址'] }}</p>
                </li>
                <!-----//新增學生欄位----->
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
                  <label for="">公司統一編號</label>
                  <Field
                    v-model="Form.TaxId"
                    rules="chkKeyValue"
                    :class="{'is-invalid':errors['公司統一編號']}"
                    name="公司統一編號"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="公司統一編號"
                    class="invalid-feedback ms-2"
                  />
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
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>公司地址</label>
                  <div
                    class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                  >
                    <Field
                      as="select"
                      name="CompanyAddress_County"
                      v-model="Form.CompanyAddress.County"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="CompanyAddress_Dist"
                      v-model="Form.CompanyAddress.Dist"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    >
                      <option value="" selected>-----</option>
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
                      <option value="" selected>-----</option>
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
                  <label for="">年資</label>
                  <Field
                    v-model="Form.JobYear"
                    rules="chkKeyValue"
                    :class="{ 'is-invalid': errors['年資'] }"
                    name="年資"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="年資"
                    class="text-danger ms-2"
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
                  <label for=""><span class="red_text">* </span>月收入</label>
                  <Field
                    v-model="Form.JobIncome"
                    rules="required"
                    :class="{ 'is-invalid': errors['月收入'] }"
                    name="月收入"
                    type="text"
                    class="form-control"
                    @keyup="Form.JobIncome = $custom.validate.NumOnlyWithoutFirstZero(Form.JobIncome)"
                  />
                  <ErrorMessage
                    name="月收入"
                    class="text-danger ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">推廣單位代號</label>
                  <Field
                    v-model="Form.PromoteUnit"
                    rules="chkKeyValueNumEng"
                    :class="{'is-invalid':errors['推廣單位代號']}"
                    name="推廣單位代號"
                    maxlength="6"
                    type="text"
                    class="form-control"
                    @change="Form.PromoteUnit=$custom.validate.watchToUpper(Form.PromoteUnit)"
                  />
                  <ErrorMessage
                    name="推廣單位代號"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">推廣人員編號</label>
                  <Field
                    v-model="Form.PromoteCrew"
                    rules="chkKeyValueNumEng"
                    :class="{'is-invalid':errors['推廣人員編號']}"
                    name="推廣人員編號"
                    maxlength="11"
                    type="text"
                    class="form-control"
                    @change="Form.PromoteCrew=$custom.validate.watchToUpper(Form.PromoteCrew)"
                  />
                  <ErrorMessage
                    name="推廣人員編號"
                    class="invalid-feedback ms-2"
                  />
                </li>
                <li class="col-12 col-md-6">
                    <label for=""><span class="red_text">* </span>安麗直銷商/會員編號</label>
                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                </li>
              </ul>
            </div>
          </div>
          <div class="text-center mb-4" v-if="Apply_N_Type==='Written'">
            <div class="text-start d-inline-block red_text indentNote_star">
              <p>* 請務必填寫至最後步驟，並列印出「簽名欄位」及黏貼「身分證影本欄位」，完成後請依回郵資訊將紙本寄回本行。</p>
              <p>* 切勿自行按瀏覽器之列印功能，以避免資料不全造成辦卡時間之延誤。 </p>
            </div>
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
      Apply_N_Type: localStorage.getItem('Apply_N_Type'),
      selectJson: JSON.parse(localStorage.getItem('SELECT_JSON')),
      Form: {
        Id: 'A12345****',
        IdDate: {
          Year: '',
          Month: '',
          Day: ''
        },
        IdPlace: {
          County: '',
          Type: '換發'
        },
        ChineseName: '',
        EnglishName: '',
        Gender: '男',
        BirthDay: {
          Year: '1977',
          Month: '6',
          Day: '28'
        },
        BirthPlace: '',
        Country: '',
        Education: '高中',
        Marriage: '已婚',
        HomeAddress: {
          County: '',
          Dist: '',
          Rd: '',
          Ln: '',
          Aly: '',
          No_1: '',
          No_2: '',
          Floor: '',
          Other: ''
        },
        ContactAddress: {
          County: '',
          Dist: '',
          Rd: '',
          Ln: '',
          Aly: '',
          No_1: '',
          No_2: '',
          Floor: '',
          Other: ''
        },
        PayAddress: '',
        CardAddress: '',
        HomePhone: {
          Area: '',
          Number: ''
        },
        ContactPhone: {
          Area: '',
          Number: ''
        },
        Cellphone: '0999***888',
        LivingYear: '',
        Email: '',
        PaymentType: '',
        DigitalCard: '',
        GraduateSchool: '',
        IsStudent: '',
        ParentsName: '',
        ParentsPhone: '',
        ParentsAddress: {
          County: '',
          Dist: '',
          Rd: '',
          Ln: '',
          Aly: '',
          No_1: '',
          No_2: '',
          Floor: '',
          Other: ''
        },
        CompanyName: '',
        TaxId: '',
        CompanyPhone: {
          Area: '',
          Number: '',
          Ext: ''
        },
        CompanyAddress: {
          County: '',
          Dist: '',
          Rd: '',
          Ln: '',
          Aly: '',
          No_1: '',
          No_2: '',
          Floor: '',
          Other: ''
        },
        JobTitle: '',
        JobYear: '',
        Profession: {
          Job: '',
          Other: ''
        },
        JobLevel: {
          Level: '',
          Other: ''
        },
        IncomeSource: {
          Income: '',
          Other: ''
        },
        JobIncome: '',
        PromoteUnit: '',
        PromoteCrew: ''
      }
    }
  },
  computed: {
    IdDateList () {
      return this.$custom.validate.getDateSelect(this.Form.IdDate, '民國')
    },
    BirthDateList () {
      return this.$custom.validate.getDateSelect(this.Form.BirthDay, '民國')
    },
    formDom () {
      return this.$refs.form
    }
  },
  methods: {
    async submit () {
      this.$custom.validate.checkDate(this.Form.IdDate, this.$refs.form, '身分證發證日期')
      this.$custom.validate.CheckAddressAll(this.Form.HomeAddress, this.$refs.form, '戶籍地址')
      this.$custom.validate.CheckAddressAll(this.Form.ContactAddress, this.$refs.form, '居住地址')
      this.$custom.validate.chkKeyValueLength(this.Form.HomePhone.Area, this.$refs.form, '戶籍電話區碼', 2, 4)
      this.$custom.validate.chkKeyValueLength(this.Form.HomePhone.Number, this.$refs.form, '戶籍電話號碼', 6, 8)
      this.$custom.validate.chkKeyValueLength(this.Form.ContactPhone.Area, this.$refs.form, '居住電話區碼', 2, 4)
      this.$custom.validate.chkKeyValueLength(this.Form.ContactPhone.Number, this.$refs.form, '居住電話號碼', 6, 8)
      if (this.Form.IsStudent === 'Y') {
        this.$custom.validate.CheckAddressAll(this.Form.ParentsAddress, this.$refs.form, '家長通訊地址')
      }
      this.$custom.validate.CheckAddressAll(this.Form.CompanyAddress, this.$refs.form, '公司地址')
      await this.$refs.form.validate()
      const errors = this.$refs.form.getErrors()
      if (Object.keys(errors).length === 0) {
        this.$router.push('/OnLineApply_Fillin_OT_1')
      } else {
        this.$custom.validate.showErrors(this.$refs.form.getErrors(errors))
      }
    }
  }
}
</script>
