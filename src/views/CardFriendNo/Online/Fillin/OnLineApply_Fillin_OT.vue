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
                  <div class="form-text">{{Form.id}}</div>
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
                    class="text-danger ms-2"
                  /> -->
                </li>
                <li class="col-12 col-md-6 d-none d-md-block"></li>
                <li class="col-12 col-md-6">
                  <label for=""
                    ><span class="red_text">* </span>身分證發證日期</label
                  >
                  <div class="d-flex align-items-center ID_date">
                    <span class="text-nowrap">民國</span>
                    <Field
                      v-model="Form.iddate.Year"
                      as="select"
                      name="iddate_Year"
                      runat="server"
                      class="birth_date form-select form-control mx-1 mx-md-2"
                      :class="{ 'is-invalid': errors['身分證發證日期'] }"
                    >
                      <option value="" selected>---</option>
                      <option v-for="n in iddateList.year" :key="n" :value="n">{{n}}</option>
                    </Field
                    >年
                    <Field
                      v-model="Form.iddate.Month"
                      as="select"
                      name="iddate_Month"
                      runat="server"
                      id="SelM"
                      class="form-select form-control mx-1 mx-md-2"
                      :class="{ 'is-invalid': errors['身分證發證日期'] }"
                    >
                      <option value="" selected>---</option>
                      <option v-for="n in iddateList.month" :key="n" :value="n">{{n}}</option>
                    </Field
                    >月
                    <Field
                      v-model="Form.iddate.Day"
                      as="select"
                      name="iddate_Day"
                      runat="server"
                      id="SelD"
                      class="form-select form-control mx-1 mx-md-2"
                      :class="{ 'is-invalid': errors['身分證發證日期'] }"
                      @blur="$custom.validate.checkDate(Form.iddate,$refs.form,'身分證發證日期')"
                    >
                      <option value="" selected>---</option>
                      <option v-for="n in iddateList.day" :key="n" :value="n">{{n}}</option>
                    </Field
                    >日
                  </div>
                  <p v-if="errors['身分證發證日期']" class="field-error">{{ errors['身分證發證日期'] }}</p>
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>發證地點</label>
                  <div class="d-flex ID_date align-items-center">
                    <Field
                      v-model="Form.idCounty"
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
                      v-model="Form.idissue"
                      as="select"
                      rules="required"
                      :class="{ 'is-invalid': errors['發證類型'] }"
                      name="發證類型"
                      runat="server"
                      class="form-select form-control IDissue mx-1 mx-md-2"
                    >
                      <option value="" selected>-----</option>
                      <option value="1">初發</option>
                      <option value="2">補發</option>
                      <option value="3">換發</option>
                    </Field>
                  </div>
                  <p v-if="errors['發證地點']||errors['發證類型']" class="field-error">{{ errors['發證地點']?errors['發證地點']:errors['發證類型'] }}</p>
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>中文姓名</label>
                  <Field
                    v-model="Form.cName"
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
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>英文姓名</label>
                  <div class="d-block d-md-flex align-items-center">
                    <Field
                      v-model="Form.eName"
                      maxlength="30"
                      rules="required|chkKeyValueEng|chkKeyValue"
                      :class="{ 'is-invalid': errors['英文姓名'] }"
                      name="英文姓名"
                      type="text"
                      class="form-control me-0 me-md-2"
                      @change="Form.eName=$custom.validate.watchToUpper(Form.eName)"
                    />
                    <span class="red_text text-nowrap">(必須與護照相同)</span>
                  </div>
                  <ErrorMessage
                    name="英文姓名"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">出生日期</label>
                  <div class="form-text">{{Form.brthDt}}</div>
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
                  <div class="d-flex Birthplace align-items-center">
                    <Field
                      v-model="Form.birth.birthplaceKey"
                      as="select"
                      rules="required"
                      :class="{ 'is-invalid': errors['出生地'],'BirthCounty': Form.birth.birthplaceKey==='其它'}"
                      name="出生地"
                      runat="server"
                      class="form-select form-control"
                      @change="Form.birth.birthplaceKey!=='其它'?Form.birth.birthOther='':''"
                    >
                      <option v-for="item in selectJson.BIRTHPLACE" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      v-if="Form.birth.birthplaceKey==='其它'"
                      v-model="Form.birth.birthOtherKey"
                      as="select"
                      rules="required"
                      :class="{ 'is-invalid': errors['出生地-其他'] }"
                      name="出生地-其他"
                      runat="server"
                      class="form-select form-control"
                    >
                      <option v-for="item in selectJson.NATIONALITY.filter((item=>item.VALUE!=='TW'))" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                  </div>
                  <ErrorMessage
                    name="出生地"
                    class="field-error"
                  />
                  <ErrorMessage
                    name="出生地-其他"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>國籍</label>
                  <Field
                    v-model="Form.nationalityKey"
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
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">教育程度</label>
                  <Field
                    v-model="Form.eduLevelKey"
                    as="select"
                    name="教育程度"
                    runat="server"
                    class="form-select form-control"
                  >
                    <option :value="0">-----</option>
                    <option v-for="item in eduLevelList" :key="item.value" :value="item.value">{{item.name}}</option>
                  </Field>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">行動電話</label>
                  <div class="form-text">{{Form.mbleTelNbr}}</div>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">電子信箱</label>
                  <template v-if="Form.billType===1">
                    <Field
                      v-model="Form.email"
                      rules="required|email"
                      :class="{ 'is-invalid': errors['電子信箱'] }"
                      name="電子信箱"
                      type="text"
                      class="form-control"
                    />
                    <ErrorMessage
                      name="電子信箱"
                      class="field-error"
                    />
                  </template>
                  <Field
                    v-else
                    v-model="Form.email"
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
                      name="homeAddr_County"
                      v-model="Form.homeAddr.County"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                      @change="getAddress('1','homeAddr');clearAddressInput('homeAddr')"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="homeAddr_Area"
                      v-model="Form.homeAddr.Area"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                      @change="getAddress('2','homeAddr');clearAddressInput('homeAddr')"
                    >
                      <option value="">-----</option>
                      <option v-for="item in addrList.homeAddr.area" :key="item.varArea" :value="item.varArea">{{item.varArea}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="homeAddr_Road"
                      v-model="Form.homeAddr.Road"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                      @change="clearAddressInput('homeAddr')"
                    >
                      <option value="">-----</option>
                      <option v-for="item in addrList.homeAddr.road" :key="item.varRoad" :value="item.varRoad">{{item.varRoad}}</option>
                    </Field>
                  </div>
                  <div class="d-flex apply_address align-items-center">
                    <Field
                      name="homeAddr_Lane"
                      type="text"
                      v-model="Form.homeAddr.Lane"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Lane = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Lane)"
                      maxlength="5"
                      class="form-control input_number me-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />巷
                    <Field
                      name="homeAddr_Aly"
                      type="text"
                      v-model="Form.homeAddr.Aly"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Aly)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />弄
                    <Field
                      name="homeAddr_Num"
                      type="text"
                      v-model="Form.homeAddr.Num"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Num = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Num)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />-
                    <Field
                      name="homeAddr_Of"
                      type="text"
                      v-model="Form.homeAddr.Of"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Of = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Of)"
                      maxlength="5"
                      class="form-control input_number ms-sm-1 me-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />號
                    <Field
                      name="homeAddr_Flr"
                      type="text"
                      v-model="Form.homeAddr.Flr"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      @keyup="Form.homeAddr.Flr = $custom.validate.NumOnlyWithoutFirstZero(Form.homeAddr.Flr)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />樓
                    <Field
                      name="homeAddr_Other"
                      type="text"
                      v-model="Form.homeAddr.Other"
                      @blur="$custom.validate.CheckAddressAll(Form.homeAddr,$refs.form,'戶籍地址')"
                      maxlength="100"
                      class="form-control mb-2 ms-md-0 ms-lg-1"
                      :class="{ 'is-invalid': errors['戶籍地址'] }"
                    />
                  </div>
                  <p v-if="errors['戶籍地址']" class="field-error">{{ errors['戶籍地址'] }}</p>
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>居住地址</label>
                  <div
                    class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                  >
                    <Field
                      as="select"
                      name="liveAddr_County"
                      v-model="Form.liveAddr.County"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                      @change="getAddress('1','liveAddr');clearAddressInput('liveAddr')"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="liveAddr_Area"
                      v-model="Form.liveAddr.Area"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                      @change="getAddress('2','liveAddr');clearAddressInput('liveAddr')"
                    >
                      <option value="">-----</option>
                      <option v-for="item in addrList.liveAddr.area" :key="item.varArea" :value="item.varArea">{{item.varArea}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="liveAddr_Road"
                      v-model="Form.liveAddr.Road"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                      @change="clearAddressInput('liveAddr')"
                    >
                      <option value="">-----</option>
                      <option v-for="item in addrList.liveAddr.road" :key="item.varRoad" :value="item.varRoad">{{item.varRoad}}</option>
                    </Field>
                  </div>
                  <div class="d-flex apply_address align-items-center">
                    <Field
                      name="liveAddr_Lane"
                      type="text"
                      v-model="Form.liveAddr.Lane"
                      @blur="$custom.validate.CheckAddressAll(Form.liveAddr,$refs.form,'居住地址')"
                      @keyup="Form.liveAddr.Lane = $custom.validate.NumOnlyWithoutFirstZero(Form.liveAddr.Lane)"
                      maxlength="5"
                      class="form-control input_number me-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />巷
                    <Field
                      name="liveAddr_Aly"
                      type="text"
                      v-model="Form.liveAddr.Aly"
                      @blur="$custom.validate.CheckAddressAll(Form.liveAddr,$refs.form,'居住地址')"
                      @keyup="Form.liveAddr.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.liveAddr.Aly)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />弄
                    <Field
                      name="liveAddr_Num"
                      type="text"
                      v-model="Form.liveAddr.Num"
                      @blur="$custom.validate.CheckAddressAll(Form.liveAddr,$refs.form,'居住地址')"
                      @keyup="Form.liveAddr.Num = $custom.validate.NumOnlyWithoutFirstZero(Form.liveAddr.Num)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />-
                    <Field
                      name="liveAddr_Of"
                      type="text"
                      v-model="Form.liveAddr.Of"
                      @blur="$custom.validate.CheckAddressAll(Form.liveAddr,$refs.form,'居住地址')"
                      @keyup="Form.liveAddr.Of = $custom.validate.NumOnlyWithoutFirstZero(Form.liveAddr.Of)"
                      maxlength="5"
                      class="form-control input_number ms-sm-1 me-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />號
                    <Field
                      name="liveAddr_Flr"
                      type="text"
                      v-model="Form.liveAddr.Flr"
                      @blur="$custom.validate.CheckAddressAll(Form.liveAddr,$refs.form,'居住地址')"
                      @keyup="Form.liveAddr.Flr = $custom.validate.NumOnlyWithoutFirstZero(Form.liveAddr.Flr)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />樓
                    <Field
                      name="liveAddr_Other"
                      type="text"
                      v-model="Form.liveAddr.Other"
                      @blur="$custom.validate.CheckAddressAll(Form.liveAddr,$refs.form,'居住地址')"
                      maxlength="100"
                      class="form-control mb-2 ms-md-0 ms-lg-1"
                      :class="{ 'is-invalid': errors['居住地址'] }"
                    />
                  </div>
                  <div class="form-check">
                    <input
                      @click="sameHomeAddr"
                      class="form-check-input mt-2 position-absolute"
                      type="radio"
                      name="exampleRadios"
                      id="居住地址-同戶籍地址"
                      value="option1"
                    />
                    <label class="form_Apply_txt fw-normal" for="居住地址-同戶籍地址">同戶籍地址</label>
                  </div>
                  <p v-if="errors['居住地址']" class="field-error">{{ errors['居住地址'] }}</p>
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>帳單地址</label>
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單地址'] }"
                        v-model="Form.billAddr"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單地址"
                        value="1"
                        :validateOnInput="true"
                        id="帳單地址-同戶籍地址"
                      />
                      <label class="form_Apply_txt fw-normal" for="帳單地址-同戶籍地址">同戶籍地址</label>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單地址'] }"
                        v-model="Form.billAddr"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單地址"
                        value="2"
                        :validateOnInput="true"
                        id="帳單地址-同居住地址"
                      />
                      <label class="form_Apply_txt fw-normal" for="帳單地址-同居住地址">同居住地址</label>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單地址'] }"
                        v-model="Form.billAddr"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單地址"
                        value="3"
                        :validateOnInput="true"
                        id="帳單地址-同公司地址"
                      />
                      <label class="form_Apply_txt fw-normal" for="帳單地址-同公司地址">同公司地址</label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="帳單地址"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>寄卡地址</label>
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['寄卡地址'] }"
                        v-model="Form.sendCardAddr"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="寄卡地址"
                        value="1"
                        :validateOnInput="true"
                        id="寄卡地址-同戶籍地址"
                      />
                      <label class="form_Apply_txt fw-normal" for="寄卡地址-同戶籍地址">同戶籍地址</label>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['寄卡地址'] }"
                        v-model="Form.sendCardAddr"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="寄卡地址"
                        value="2"
                        :validateOnInput="true"
                        id="寄卡地址-同居住地址"
                      />
                      <label class="form_Apply_txt fw-normal" for="寄卡地址-同居住地址">同居住地址</label>
                    </div>
                    <div class="form-check me-4">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['寄卡地址'] }"
                        v-model="Form.sendCardAddr"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="寄卡地址"
                        value="3"
                        :validateOnInput="true"
                        id="寄卡地址-同公司地址"
                      />
                      <label class="form_Apply_txt fw-normal" for="寄卡地址-同公司地址">同公司地址</label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="寄卡地址"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">戶籍電話</label>
                  <div class="d-flex office_tel align-items-center">
                    <Field
                      v-model="Form.home.homeAreaCode"
                      name="home_homeAreaCode"
                      type="text"
                      class="form-control AreaCode me-1"
                      :class="{ 'is-invalid': errors['戶籍電話區碼'] }"
                      maxlength="4"
                      @change="Form.home.homeAreaCode?$custom.validate.chkKeyValueLength(Form.home.homeAreaCode,$refs.form,'戶籍電話區碼',2,4):''"
                      @keyup="Form.home.homeAreaCode = $custom.validate.OnlyNumPress(Form.home.homeAreaCode)"
                    />-
                    <Field
                      v-model="Form.home.homeTel"
                      name="home_homeTel"
                      type="text"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['戶籍電話號碼'] }"
                      maxlength="8"
                      @change="Form.home.homeTel?$custom.validate.chkKeyValueLength(Form.home.homeTel,formDom,'戶籍電話號碼',6,8):''"
                      @keyup="Form.home.homeTel = $custom.validate.OnlyNumPress(Form.home.homeTel)"
                    />
                  </div>
                  <p v-if="errors['戶籍電話區碼']||errors['戶籍電話號碼']" class="field-error">{{ errors['戶籍電話區碼']?errors['戶籍電話區碼']:errors['戶籍電話號碼'] }}</p>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">居住電話</label>
                  <div class="d-flex office_tel align-items-center">
                    <Field
                      v-model="Form.live.liveAreaCode"
                      name="live_liveAreaCode"
                      type="text"
                      class="form-control AreaCode me-1"
                      :class="{ 'is-invalid': errors['居住電話區碼'] }"
                      maxlength="4"
                      @change="Form.live.liveAreaCode?$custom.validate.chkKeyValueLength(Form.live.liveAreaCode,formDom,'居住電話區碼',2,4):''"
                      @keyup="Form.live.liveAreaCode = $custom.validate.OnlyNumPress(Form.live.liveAreaCode)"
                    />-
                    <Field
                      v-model="Form.live.liveTel"
                      name="live_liveTel"
                      type="text"
                      class="form-control ms-1"
                      :class="{ 'is-invalid': errors['居住電話號碼'] }"
                      maxlength="8"
                      @change="Form.live.liveTel?$custom.validate.chkKeyValueLength(Form.live.liveTel,formDom,'居住電話號碼',6,8):''"
                      @keyup="Form.live.liveTel = $custom.validate.OnlyNumPress(Form.live.liveTel)"
                    />
                  </div>
                  <p v-if="errors['居住電話區碼']||errors['居住電話號碼']" class="field-error">{{ errors['居住電話區碼']?errors['居住電話區碼']:errors['居住電話號碼'] }}</p>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">住所狀態</label>
                  <select
                    v-model="Form.liveStatusKey"
                    class="form-select form-control"
                  >
                    <option v-for="item in selectJson.DOMICILE" :key="item.VALUE" :value="item.VALUE">{{item.SHOW}}</option>
                  </select>
                </li>
                <li class="col-12 col-md-12">
                  <label for=""><span class="red_text">* </span>帳單形式</label>
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4" v-if="pageLoad.billType?.includes('mail')">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單形式'] }"
                        v-model="Form.billType"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單形式"
                        :value="1"
                        :validateOnInput="true"
                        id="帳單形式-EMAIL帳單"
                      />
                      <label class="form_Apply_txt fw-normal" for="帳單形式-EMAIL帳單">EMAIL帳單</label>
                    </div>
                    <div class="form-check me-4" v-if="pageLoad.billType?.includes('sms')">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單形式'] }"
                        v-model="Form.billType"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單形式"
                        :value="2"
                        :validateOnInput="true"
                        id="帳單形式-行動帳單(簡訊)"
                      />
                      <label class="form_Apply_txt fw-normal" for="帳單形式-行動帳單(簡訊)">行動帳單(簡訊)</label>
                    </div>
                    <div class="form-check me-4" v-if="pageLoad.billType?.includes('line')">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單形式'] }"
                        v-model="Form.billType"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單形式"
                        :value="3"
                        :validateOnInput="true"
                        id="帳單形式-LINE帳單"
                      />
                      <label class="form_Apply_txt fw-normal" for="帳單形式-LINE帳單">LINE帳單</label>
                    </div>
                    <div class="form-check" v-if="pageLoad.billType?.includes('paper')">
                      <Field
                        rules="required"
                        :class="{ 'is-invalid': errors['帳單形式'] }"
                        v-model="Form.billType"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="帳單形式"
                        :value="4"
                        :validateOnInput="true"
                        id="帳單形式-紙本帳單"
                      />
                      <div class="form_Apply_txt fw-normal" for="帳單形式-紙本帳單">紙本帳單</div>
                    </div>
                  </div>
                  <ErrorMessage
                    name="帳單形式"
                    class="field-error"
                  />
                  <div class="form_Apply_txt">
                      <span class="red_text">※申請E-mail帳單請務必收取聯邦銀行電子帳單認證信，點選驗證網址始完成申請。<br>
                      ※帳單接收型式將依本次選擇做為日後帳單寄送依據，如未點選E-mail認證信則依原帳單型式或紙本寄送。</span>
                  </div>
                </li>
                <li class="col-12 col-md-12 mb-0" v-if="Apply_N_Type==='Online'&&pageLoad.flgDigi!=='N'">
                  <label for=""
                    >申請數位卡</label
                  >
                  <div class="d-flex flex-wrap flex-column flex-md-row">
                    <div class="form-check me-4">
                      <Field
                        :class="{ 'is-invalid': errors['申請數位卡'] }"
                        v-model="Form.digiFlag"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="申請數位卡"
                        id="申請數位卡-是"
                        value="true"
                        :disabled="pageLoad.flgDigi==='M'"
                      />
                      <label class="form_Apply_txt fw-normal" for="申請數位卡-是">是</label>
                    </div>
                    <div class="form-check">
                      <Field
                        :class="{ 'is-invalid': errors['申請數位卡'] }"
                        v-model="Form.digiFlag"
                        class="form-check-input mt-2 position-absolute"
                        type="radio"
                        name="申請數位卡"
                        id="申請數位卡-否"
                        value="false"
                        :disabled="pageLoad.flgDigi==='M'"
                      />
                      <label class="form_Apply_txt fw-normal" for="申請數位卡-否">否</label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="申請數位卡"
                    class="field-error"
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
                    v-model="Form.primarySchool"
                    rules="required|chkKeyValue"
                    :class="{'is-invalid':errors['畢業國小名稱']}"
                    name="畢業國小名稱"
                    type="text"
                    class="form-control"
                    maxlength="8"
                  />
                  <ErrorMessage
                    name="畢業國小名稱"
                    class="field-error"
                  />
                </li>
                <!-----新增學生欄位------->
                <template v-if="pageLoad.flgStudent==='Y'">
                  <li class="col-12 col-md-12 mb-0">
                    <label for=""><span class="red_text">* </span>是否為學生
                    </label>
                    <div class="d-flex flex-wrap flex-column flex-md-row">
                      <div class="form-check me-4">
                        <Field
                          rules="required"
                          :class="{ 'is-invalid': errors['是否為學生'] }"
                          v-model="Form.isStudent"
                          class="form-check-input mt-2 position-absolute"
                          type="radio"
                          name="是否為學生"
                          value="true"
                          :validateOnInput="true"
                          id="是否為學生-是"
                        />
                        <label class="form_Apply_txt fw-normal" for="是否為學生-是">
                          是
                        </label>
                      </div>
                      <div class="form-check me-4">
                        <Field
                          rules="required"
                          :class="{ 'is-invalid': errors['是否為學生'] }"
                          v-model="Form.isStudent"
                          class="form-check-input mt-2 position-absolute"
                          type="radio"
                          name="是否為學生"
                          value="false"
                          :validateOnInput="true"
                          id="是否為學生-否"
                        />
                        <label class="form_Apply_txt fw-normal" for="是否為學生-否">
                          否
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="是否為學生"
                      class="field-error"
                    />
                  </li>
                  <li class="col-12 col-md-12 mb-2">
                    <div>
                      <span>※貼心提醒：學生辦卡依金融法令規範發卡行應將發卡情事通知父母或法定代理人，請您提供1.家長姓名(直系血親尊親屬)、2.家長手機、3.通知書寄送地址以利後續通知事宜。
                      </span>
                    </div>
                  </li>
                </template>
                <template v-if="Form.isStudent==='true'">
                  <li class="col-12 col-md-6">
                    <label for=""><span class="red_text">* </span>家長姓名</label>
                    <Field
                      v-model="Form.parentName"
                      rules="required"
                      :class="{'is-invalid':errors['家長姓名']}"
                      name="家長姓名"
                      type="text"
                      maxlength="13"
                      class="form-control"
                    />
                    <ErrorMessage
                      name="家長姓名"
                      class="field-error"
                    />
                  </li>
                  <li class="col-12 col-md-6">
                    <label for=""><span class="red_text">* </span>家長聯絡電話</label>
                    <Field
                      v-model="Form.parentTel"
                      rules="required"
                      :class="{'is-invalid':errors['家長聯絡電話']}"
                      name="家長聯絡電話"
                      type="text"
                      maxlength="10"
                      class="form-control"
                      @keyup="Form.parentTel = $custom.validate.OnlyNumPress(Form.parentTel)"
                    />
                    <ErrorMessage
                      name="家長聯絡電話"
                      class="field-error"
                    />
                  </li>
                  <li class="col-12 col-md-12">
                    <label for=""><span class="red_text">* </span>家長通訊地址</label>
                    <div
                      class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                    >
                      <Field
                        as="select"
                        name="parentAddr_County"
                        v-model="Form.parentAddr.County"
                        runat="server"
                        class="form-select form-control ZIP mb-2"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                        @change="getAddress('1','parentAddr');clearAddressInput('parentAddr')"
                      >
                        <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                      </Field>
                      <Field
                        as="select"
                        name="parentAddr_Area"
                        v-model="Form.parentAddr.Area"
                        runat="server"
                        class="form-select form-control Area mx-1 mx-md-2 mb-2"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                        @change="getAddress('2','parentAddr');clearAddressInput('parentAddr')"
                      >
                        <option value="">-----</option>
                        <option v-for="item in addrList.parentAddr.area" :key="item.varArea" :value="item.varArea">{{item.varArea}}</option>
                      </Field>
                      <Field
                        as="select"
                        name="parentAddr_Road"
                        v-model="Form.parentAddr.Road"
                        runat="server"
                        class="form-select form-control Road mb-2"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                        @change="clearAddressInput('parentAddr')"
                      >
                        <option value="">-----</option>
                        <option v-for="item in addrList.parentAddr.road" :key="item.varRoad" :value="item.varRoad">{{item.varRoad}}</option>
                      </Field>
                    </div>
                    <div class="d-flex apply_address align-items-center">
                      <Field
                        name="parentAddr_Lane"
                        type="text"
                        v-model="Form.parentAddr.Lane"
                        @blur="$custom.validate.CheckAddressAll(Form.parentAddr,$refs.form,'家長通訊地址')"
                        @keyup="Form.parentAddr.Lane = $custom.validate.NumOnlyWithoutFirstZero(Form.parentAddr.Lane)"
                        maxlength="5"
                        class="form-control input_number me-1"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                      />巷
                      <Field
                        name="parentAddr_Aly"
                        type="text"
                        v-model="Form.parentAddr.Aly"
                        @blur="$custom.validate.CheckAddressAll(Form.parentAddr,$refs.form,'家長通訊地址')"
                        @keyup="Form.parentAddr.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.parentAddr.Aly)"
                        maxlength="5"
                        class="form-control input_number mx-1"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                      />弄
                      <Field
                        name="parentAddr_Num"
                        type="text"
                        v-model="Form.parentAddr.Num"
                        @blur="$custom.validate.CheckAddressAll(Form.parentAddr,$refs.form,'家長通訊地址')"
                        @keyup="Form.parentAddr.Num = $custom.validate.NumOnlyWithoutFirstZero(Form.parentAddr.Num)"
                        maxlength="5"
                        class="form-control input_number mx-1"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                      />-
                      <Field
                        name="parentAddr_Of"
                        type="text"
                        v-model="Form.parentAddr.Of"
                        @blur="$custom.validate.CheckAddressAll(Form.parentAddr,$refs.form,'家長通訊地址')"
                        @keyup="Form.parentAddr.Of = $custom.validate.NumOnlyWithoutFirstZero(Form.parentAddr.Of)"
                        maxlength="5"
                        class="form-control input_number ms-sm-1 me-1"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                      />號
                      <Field
                        name="parentAddr_Flr"
                        type="text"
                        v-model="Form.parentAddr.Flr"
                        @blur="$custom.validate.CheckAddressAll(Form.parentAddr,$refs.form,'家長通訊地址')"
                        @keyup="Form.parentAddr.Flr = $custom.validate.NumOnlyWithoutFirstZero(Form.parentAddr.Flr)"
                        maxlength="5"
                        class="form-control input_number mx-1"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                      />樓
                      <Field
                        name="parentAddr_Other"
                        type="text"
                        v-model="Form.parentAddr.Other"
                        @blur="$custom.validate.CheckAddressAll(Form.parentAddr,$refs.form,'家長通訊地址')"
                        maxlength="100"
                        class="form-control mb-2 ms-md-0 ms-lg-1"
                        :class="{ 'is-invalid': errors['家長通訊地址'] }"
                      />
                    </div>
                    <p v-if="errors['家長通訊地址']" class="field-error">{{ errors['家長通訊地址'] }}</p>
                  </li>
                </template>
                <!-----//新增學生欄位----->
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>公司名稱</label>
                  <Field
                    v-model="Form.compName"
                    rules="required|chkKeyValue"
                    :class="{'is-invalid':errors['公司名稱']}"
                    name="公司名稱"
                    type="text"
                    class="form-control"
                    maxlength="15"
                  />
                  <ErrorMessage
                    name="公司名稱"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">公司統一編號</label>
                  <Field
                    v-model="Form.uniformNum"
                    rules="validUniformNum"
                    :class="{'is-invalid':errors['公司統一編號']}"
                    name="公司統一編號"
                    maxlength="8"
                    @keyup="Form.uniformNum = $custom.validate.OnlyNumPress(Form.uniformNum)"
                    type="text"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="公司統一編號"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">公司電話</label>
                  <div class="d-flex office_tel align-items-center">
                    <Field
                      v-model="Form.comp.compAreaCode"
                      name="compAreaCode"
                      maxlength="3"
                      @keyup="Form.comp.compAreaCode = $custom.validate.OnlyNumPress(Form.comp.compAreaCode)"
                      type="text"
                      class="form-control AreaCode me-1"
                    />-
                    <Field
                      v-model="Form.comp.compTel"
                      name="compTel"
                      maxlength="8"
                      @keyup="Form.comp.compTel = $custom.validate.OnlyNumPress(Form.comp.compTel)"
                      type="text"
                      class="form-control mx-1"
                    /><span class="text-nowrap">分機</span>
                    <Field
                      v-model="Form.comp.compExt"
                      name="compExt"
                      maxlength="8"
                      @keyup="Form.comp.compExt = $custom.validate.OnlyNumPress(Form.comp.compExt)"
                      type="text"
                      class="form-control Ext ms-1"
                    />
                  </div>
                </li>
                <li class="col-12 col-md-12">
                  <label for="">公司地址</label>
                  <div
                    class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
                  >
                    <Field
                      as="select"
                      name="compAddr_County"
                      v-model="Form.compAddr.County"
                      runat="server"
                      class="form-select form-control ZIP mb-2"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                      @change="getAddress('1','compAddr');clearAddressInput('compAddr')"
                    >
                      <option v-for="item in selectJson.County" :key="item.SORT" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="compAddr_Area"
                      v-model="Form.compAddr.Area"
                      runat="server"
                      class="form-select form-control Area mx-1 mx-md-2 mb-2"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                      @change="getAddress('2','compAddr');clearAddressInput('compAddr')"
                    >
                      <option value="">-----</option>
                      <option v-for="item in addrList.compAddr.area" :key="item.varArea" :value="item.varArea">{{item.varArea}}</option>
                    </Field>
                    <Field
                      as="select"
                      name="compAddr_Road"
                      v-model="Form.compAddr.Road"
                      runat="server"
                      class="form-select form-control Road mb-2"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                      @change="clearAddressInput('compAddr')"
                    >
                      <option value="">-----</option>
                      <option v-for="item in addrList.compAddr.road" :key="item.varRoad" :value="item.varRoad">{{item.varRoad}}</option>
                    </Field>
                  </div>
                  <div class="d-flex apply_address align-items-center">
                    <Field
                      name="compAddr_Lane"
                      type="text"
                      v-model="Form.compAddr.Lane"
                      @change="(Form.billAddr==='3'||Form.sendCardAddr==='3')?$custom.validate.CheckAddressAll(Form.compAddr,$refs.form,'公司地址'):''"
                      @keyup="Form.compAddr.Lane = $custom.validate.NumOnlyWithoutFirstZero(Form.compAddr.Lane)"
                      maxlength="5"
                      class="form-control input_number me-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />巷
                    <Field
                      name="compAddr_Aly"
                      type="text"
                      v-model="Form.compAddr.Aly"
                      @change="(Form.billAddr==='3'||Form.sendCardAddr==='3')?$custom.validate.CheckAddressAll(Form.compAddr,$refs.form,'公司地址'):''"
                      @keyup="Form.compAddr.Aly = $custom.validate.NumOnlyWithoutFirstZero(Form.compAddr.Aly)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />弄
                    <Field
                      name="compAddr_Num"
                      type="text"
                      v-model="Form.compAddr.Num"
                      @change="(Form.billAddr==='3'||Form.sendCardAddr==='3')?$custom.validate.CheckAddressAll(Form.compAddr,$refs.form,'公司地址'):''"
                      @keyup="Form.compAddr.Num = $custom.validate.NumOnlyWithoutFirstZero(Form.compAddr.Num)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />-
                    <Field
                      name="compAddr_Of"
                      type="text"
                      v-model="Form.compAddr.Of"
                      @change="(Form.billAddr==='3'||Form.sendCardAddr==='3')?$custom.validate.CheckAddressAll(Form.compAddr,$refs.form,'公司地址'):''"
                      @keyup="Form.compAddr.Of = $custom.validate.NumOnlyWithoutFirstZero(Form.compAddr.Of)"
                      maxlength="5"
                      class="form-control input_number ms-sm-1 me-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />號
                    <Field
                      name="compAddr_Flr"
                      type="text"
                      v-model="Form.compAddr.Flr"
                      @change="(Form.billAddr==='3'||Form.sendCardAddr==='3')?$custom.validate.CheckAddressAll(Form.compAddr,$refs.form,'公司地址'):''"
                      @keyup="Form.compAddr.Flr = $custom.validate.NumOnlyWithoutFirstZero(Form.compAddr.Flr)"
                      maxlength="5"
                      class="form-control input_number mx-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />樓
                    <Field
                      name="compAddr_Other"
                      type="text"
                      v-model="Form.compAddr.Other"
                      @change="(Form.billAddr==='3'||Form.sendCardAddr==='3')?$custom.validate.CheckAddressAll(Form.compAddr,$refs.form,'公司地址'):''"
                      maxlength="100"
                      class="form-control mb-2 ms-md-0 ms-lg-1"
                      :class="{ 'is-invalid': errors['公司地址'] }"
                    />
                  </div>
                  <p v-if="errors['公司地址']" class="field-error">{{ errors['公司地址'] }}</p>
                </li>
                <li class="col-12 col-md-6">
                  <label for="">職稱</label>
                  <Field
                    v-model="Form.jobTitle"
                    rules="chkKeyValue"
                    :class="{ 'is-invalid': errors['職稱'] }"
                    name="職稱"
                    type="text"
                    class="form-control"
                    maxlength="15"
                  />
                  <ErrorMessage
                    name="職稱"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">年資</label>
                  <Field
                    v-model="Form.jobTenure"
                    rules="chkKeyValue"
                    :class="{ 'is-invalid': errors['年資'] }"
                    @keyup="Form.jobTenure = $custom.validate.NumOnlyWithoutFirstZero(Form.jobTenure)"
                    name="年資"
                    type="text"
                    class="form-control"
                    maxlength="2"
                  />
                  <ErrorMessage
                    name="年資"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>職業別</label>
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Field
                      v-model="Form.job.jobTypeKey"
                      rules="required"
                      :class="{ 'is-invalid': errors['職業別'] }"
                      as="select"
                      name="職業別"
                      runat="server"
                      id="SelM"
                      class="form-select form-control me-1"
                      @change="Form.job.jobTypeKey!=='0'?Form.job.jobOther='':''"
                    >
                      <option v-for="item in selectJson.JOBTYPE" :key="item.VALUE" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <div class="d-flex align-items-center" v-if="Form.job.jobTypeKey==='0'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        v-model="Form.job.jobOther"
                        rules="required"
                        :class="{ 'is-invalid': errors['職業別-其他'] }"
                        name="職業別-其他"
                        type="text"
                        class="form-control other_input ms-1 my-2 my-md-0"
                        maxlength="25"
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    name="職業別"
                    class="field-error"
                  />
                  <ErrorMessage
                    name="職業別-其他"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>職級別</label>
                  <Field
                    v-model="Form.jobLVKey"
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
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""
                    ><span class="red_text">* </span>主要所得及資金來源</label
                  >
                  <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Field
                      v-model="Form.IncomeMain.incomeKey"
                      rules="required"
                      :class="{ 'is-invalid': errors['主要所得及資金來源'] }"
                      as="select"
                      name="主要所得及資金來源"
                      runat="server"
                      id="SelM"
                      class="form-select form-control me-1"
                      @change="Form.IncomeMain.incomeKey!=='9'?Form.IncomeMain.incomeOther='':''"
                    >
                      <option v-for="item in selectJson.INCOME" :key="item.VALUE" :value="item.VALUE">{{item.SHOW}}</option>
                    </Field>
                    <div class="d-flex align-items-center" v-if="Form.IncomeMain.incomeKey==='9'">
                      <span class="text-nowrap">其他</span>
                      <Field
                        v-model="Form.IncomeMain.incomeOther"
                        rules="required"
                        :class="{ 'is-invalid': errors['主要所得及資金來源-其他'] }"
                        name="主要所得及資金來源-其他"
                        type="text"
                        class="form-control other_input ms-1 my-2 my-md-0"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    name="主要所得及資金來源"
                    class="field-error"
                  />
                  <ErrorMessage
                    name="主要所得及資金來源-其他"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for=""><span class="red_text">* </span>月收入</label>
                  <Field
                    v-model="Form.salary"
                    rules="required"
                    :class="{ 'is-invalid': errors['月收入'] }"
                    name="月收入"
                    type="text"
                    class="form-control"
                    maxlength="8"
                    @keyup="Form.salary = $custom.validate.NumOnlyWithoutFirstZero(Form.salary)"
                  />
                  <ErrorMessage
                    name="月收入"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">推廣單位代號</label>
                  <Field
                    v-model="Form.unitCode"
                    rules="chkKeyValueNumEng"
                    :class="{'is-invalid':errors['推廣單位代號']}"
                    name="推廣單位代號"
                    maxlength="6"
                    type="text"
                    class="form-control"
                    @change="Form.unitCode=$custom.validate.watchToUpper(Form.unitCode)"
                    :disabled="pageLoad.unitCode!==''"
                  />
                  <ErrorMessage
                    name="推廣單位代號"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6">
                  <label for="">推廣人員編號</label>
                  <Field
                    v-model="Form.userCode"
                    rules="chkKeyValueNumEng"
                    :class="{'is-invalid':errors['推廣人員編號']}"
                    name="推廣人員編號"
                    maxlength="11"
                    type="text"
                    class="form-control"
                    @change="Form.userCode=$custom.validate.watchToUpper(Form.userCode)"
                    :disabled="pageLoad.userCode!==''"
                  />
                  <ErrorMessage
                    name="推廣人員編號"
                    class="field-error"
                  />
                </li>
                <li class="col-12 col-md-6" v-if="pageLoad.flgAmwayNo==='Y'">
                    <label for=""><span class="red_text">* </span>安麗直銷商/會員編號</label>
                    <Field
                      v-model="Form.amwayNo"
                      rules="required"
                      :class="{'is-invalid':errors['安麗直銷商/會員編號']}"
                      name="安麗直銷商/會員編號"
                      type="text"
                      class="form-control"
                    />
                    <ErrorMessage
                      name="安麗直銷商/會員編號"
                      class="field-error"
                    />
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
import PublicService from '@/service/Public.Service.js'
import service from '@/service/CardFriend_N.Service.js'
import sortJson from '@/assets/json/Fillin_OT_sort.json'

class Address {
  constructor (address) {
    this.County = address?.County || ''
    this.Area = address?.Area || ''
    this.Road = address?.Road || ''
    this.Lane = address?.Lane || ''
    this.Aly = address?.Aly || ''
    this.Num = address?.Num || ''
    this.Of = address?.Of || ''
    this.Flr = address?.Flr || ''
    this.Other = address?.Other || ''
  }
}

export default {
  data () {
    return {
      // sortJson: sortJson,
      pageLoad: {},
      Apply_N_Type: sessionStorage.getItem('Apply_N_Type'),
      selectJson: JSON.parse(localStorage.getItem('SELECT_JSON')),
      eduLevelList: [{ name: '博士', value: 1 }, { name: '碩士', value: 2 }, { name: '大學', value: 3 }, { name: '專科', value: 4 }, { name: '高中高職', value: 5 }, { name: '其他', value: 6 }],
      Form: {
        id: '',
        iddate: {
          Year: '',
          Month: '',
          Day: ''
        },
        idCounty: '',
        idissue: '',
        cName: '',
        eName: '',
        brthDt: '',
        birth: {
          birthplaceKey: '',
          birthplace: '',
          birthOther: '',
          birthOtherKey: ''
        },
        nationalityKey: '',
        nationality: '',
        eduLevelKey: 0,
        eduLevel: '',
        homeZIP: '',
        homeAddr: new Address(),
        liveZIP: '',
        liveAddr: new Address(),
        billAddr: '',
        sendCardAddr: '',
        home: {
          homeAreaCode: '',
          homeTel: ''
        },
        live: {
          liveAreaCode: '',
          liveTel: ''
        },
        liveStatusKey: '',
        liveStatus: '',
        billType: '',
        mbleTelNbr: '',
        email: '',
        digiFlag: '',
        primarySchool: '',
        isStudent: '',
        parentName: '',
        parentTel: '',
        parentZIP: '',
        parentAddr: new Address(),
        compName: '',
        uniformNum: '',
        comp: {
          compAreaCode: '',
          compTel: '',
          compExt: ''
        },
        compZIP: '',
        compAddr: new Address(),
        jobTitle: '',
        jobTenure: '',
        job: {
          jobTypeKey: '',
          jobType: '',
          jobOther: ''
        },
        jobLVKey: '',
        jobLV: '',
        IncomeMain: {
          incomeKey: '',
          income: '',
          incomeOther: ''
        },
        salary: '',
        unitCode: '',
        userCode: '',
        amwayNo: ''
      },
      addrList: {
        homeAddr: {
          area: [],
          road: []
        },
        liveAddr: {
          area: [],
          road: []
        },
        parentAddr: {
          area: [],
          road: []
        },
        compAddr: {
          area: [],
          road: []
        }
      }
    }
  },
  computed: {
    iddateList () {
      return this.$custom.validate.getDateSelect(this.Form.iddate, '民國')
    },
    /* BirthDateList () {
      return this.$custom.validate.getDateSelect(this.Form.BirthDay, '民國')
    }, */
    formDom () {
      return this.$refs.form
    }
  },
  watch: {
    Form: {
      handler (n, o) {
        if (n.billAddr !== '3' && n.sendCardAddr !== '3') {
          this.$refs.form.setFieldError('公司地址', '')
        }
        if (!n.home.homeAreaCode && !n.home.homeTel) {
          this.$refs.form.setFieldError('戶籍電話區碼', '')
          this.$refs.form.setFieldError('戶籍電話號碼', '')
        }
        if (!n.live.liveAreaCode && !n.live.liveTel) {
          this.$refs.form.setFieldError('居住電話號碼', '')
          this.$refs.form.setFieldError('居住電話號碼', '')
        }
        // ? 出生地
        if (n.birth.birthplaceKey) {
          n.birth.birthplace = n.birth.birthplaceKey
          if (n.birth.birthplaceKey !== '其它') {
            n.birth.birthOther = ''
            n.birth.birthOtherKey = ''
          }
        } else {
          n.birth.birthplace = ''
        }
        // ? 出生地-其他
        if (n.birth.birthOtherKey) {
          n.birth.birthOther = this.selectJson.NATIONALITY.find(item => item.VALUE === n.birth.birthOtherKey).SHOW
        } else {
          n.birth.birthOther = ''
        }
        // ? 國籍
        if (n.nationalityKey) {
          n.nationality = this.selectJson.NATIONALITY.find(item => item.VALUE === n.nationalityKey).SHOW
        } else {
          n.nationality = ''
        }
        // ? 教育程度
        if (n.eduLevelKey) {
          n.eduLevel = this.eduLevelList.find(item => item.value === n.eduLevelKey).name
        } else {
          n.eduLevel = ''
        }
        // ? 住所狀態
        if (n.liveStatusKey) {
          n.liveStatus = this.selectJson.DOMICILE.find(item => item.VALUE === n.liveStatusKey).SHOW
        } else {
          n.liveStatus = ''
        }
        // ? 主要收入來源
        if (n.IncomeMain.incomeKey) {
          n.IncomeMain.income = this.selectJson.INCOME.find(item => item.VALUE === n.IncomeMain.incomeKey).SHOW
        } else {
          n.IncomeMain.income = ''
        }
        // ? 職業別
        if (n.job.jobTypeKey) {
          n.job.jobType = this.selectJson.JOBTYPE.find(item => item.VALUE === n.job.jobTypeKey).SHOW
        } else {
          n.job.jobType = ''
        }
        // ? 職級別
        if (n.jobLVKey) {
          n.jobLV = this.selectJson.JOBLV.find(item => item.VALUE === n.jobLVKey).SHOW
        } else {
          n.jobLV = ''
        }
      },
      deep: true
    }
  },
  methods: {
    async getPageData () {
      // ? 取得 sessionStorage 資料
      // * OCR 身分證資料
      const OCRData = JSON.parse(sessionStorage.getItem('OCR_Data'))
      this.Form.cName = OCRData.cName
      this.Form.homeAddr = OCRData.homeAddr
      this.Form.idCounty = OCRData.idCounty
      this.Form.idissue = OCRData.idissue
      this.Form.iddate = OCRData.iddate
      // * 以填寫資料暫存
      const FillinData = JSON.parse(sessionStorage.getItem('FillinData'))
      // ? 取得 PageLoad API 資料
      this.pageLoad = await service.fillin_OT_PageLoad()
      if (this.pageLoad.flgDigi === 'M') {
        this.Form.digiFlag = 'true'
      }
      if (FillinData?.OT) {
        FillinData.OT.liveStatusKey = FillinData.OT.liveStatusKey.toString()
        FillinData.OT.IncomeMain.incomeKey = FillinData.OT.IncomeMain.incomeKey.toString()
        FillinData.OT.job.jobTypeKey = FillinData.OT.job.jobTypeKey.toString()
        FillinData.OT.jobLVKey = FillinData.OT.jobLVKey.toString()
        if (FillinData.OT.compAddr === null) {
          FillinData.OT.compAddr = {
            County: '',
            Area: '',
            Road: '',
            Lane: '',
            Aly: '',
            Num: '',
            Of: '',
            Flr: '',
            Other: ''
          }
        }
        this.Form = FillinData.OT
      } else {
        this.Form.id = this.pageLoad.id
        // this.Form.cName = this.pageLoad.cName
        this.Form.eName = this.pageLoad.eName === null ? '' : this.pageLoad.eName
        this.Form.brthDt = this.pageLoad.brthDt
        this.Form.mbleTelNbr = this.pageLoad.mbleTelNbr
        this.Form.email = this.pageLoad.email === null ? '' : this.pageLoad.email
        this.Form.unitCode = this.pageLoad.unitCode
        this.Form.userCode = this.pageLoad.userCode
      }
      if (this.Form.homeAddr.County) {
        await this.getAddress('1', 'homeAddr', 'session')
        await this.getAddress('2', 'homeAddr', 'session')
      }
      if (this.Form.liveAddr.County) {
        await this.getAddress('1', 'liveAddr', 'session')
        await this.getAddress('2', 'liveAddr', 'session')
      }
      if (this.Form.parentAddr.County) {
        await this.getAddress('1', 'parentAddr', 'session')
        await this.getAddress('2', 'parentAddr', 'session')
      }
      if (this.Form.compAddr.County) {
        await this.getAddress('1', 'compAddr', 'session')
        await this.getAddress('2', 'compAddr', 'session')
      }
    },
    async getAddress (UseType, AddrType, CallType) {
      const postData = {
        spName: 'AddressMapping',
        info: {
          UseType: UseType,
          varCity: this.Form[AddrType].County,
          varArea: this.Form[AddrType].Area,
          rtncode: ''
        }
      }
      const result = await PublicService.getAddress(postData)
      if (UseType === '1') {
        if (CallType !== 'session') {
          this.Form[AddrType].Area = ''// ? 清除表單原始值
          this.Form[AddrType].Road = ''// ? 清除表單原始值
        }
        this.addrList[AddrType].road = []
        this.addrList[AddrType].area = result.Table
      } else if (UseType === '2') {
        if (CallType !== 'session') {
          this.Form[AddrType].Road = ''// ? 清除表單原始值
        }
        this.addrList[AddrType].road = result.Table
      }
    },
    async sameHomeAddr () {
      this.Form.liveAddr = { ...this.Form.homeAddr }
      await this.getAddress('1', 'liveAddr', 'session')
      await this.getAddress('2', 'liveAddr', 'session')
      this.$custom.validate.CheckAddressAll(this.Form.liveAddr, this.$refs.form, '居住地址')
    },
    clearAddressInput (addressType) {
      this.Form[addressType].Lane = ''
      this.Form[addressType].Aly = ''
      this.Form[addressType].Num = ''
      this.Form[addressType].Of = ''
      this.Form[addressType].Flr = ''
      this.Form[addressType].Other = ''
    },
    async submit () {
      this.$refs.form.setErrors({}) // ? 先清除所有上次驗證的錯誤再驗證
      // ? 前端驗證所有規則
      this.$custom.validate.checkDate(this.Form.iddate, this.$refs.form, '身分證發證日期')
      await this.$refs.form.validate()
      this.$custom.validate.CheckAddressAll(this.Form.homeAddr, this.$refs.form, '戶籍地址')
      this.$custom.validate.CheckAddressAll(this.Form.liveAddr, this.$refs.form, '居住地址')
      if (this.Form.home.homeAreaCode || this.Form.home.homeTel) {
        this.$custom.validate.chkKeyValueLength(this.Form.home.homeAreaCode, this.$refs.form, '戶籍電話區碼', 2, 4)
        this.$custom.validate.chkKeyValueLength(this.Form.home.homeTel, this.$refs.form, '戶籍電話號碼', 6, 8)
      }
      if (this.Form.live.liveAreaCode || this.Form.live.liveTel) {
        this.$custom.validate.chkKeyValueLength(this.Form.live.liveAreaCode, this.$refs.form, '居住電話區碼', 2, 4)
        this.$custom.validate.chkKeyValueLength(this.Form.live.liveTel, this.$refs.form, '居住電話號碼', 6, 8)
      }
      if (this.Form.isStudent === 'true') {
        this.$custom.validate.CheckAddressAll(this.Form.parentAddr, this.$refs.form, '家長通訊地址')
      }
      if (this.Form.billAddr === '3' || this.Form.sendCardAddr === '3') {
        this.$custom.validate.CheckAddressAll(this.Form.compAddr, this.$refs.form, '公司地址')
      }
      const errors = this.$refs.form.getErrors()
      if (Object.keys(errors).length !== 0) {
        this.$custom.validate.showErrors(errors, sortJson)
        return
      }
      // ? 前端驗證所有規則 end
      if (this.pageLoad.flgDigi === 'N') {
        this.Form.digiFlag = ''
      }
      if (this.pageLoad.flgStudent === 'N') {
        this.Form.isStudent = ''
      }
      if (this.pageLoad.flgAmwayNo === 'N') {
        this.Form.amwayNo = ''
      }
      if (this.Form.isStudent === 'false') {
        this.Form.parentName = ''
        this.Form.parentTel = ''
        this.Form.parentAddr = {
          County: '',
          Area: '',
          Road: '',
          Lane: '',
          Aly: '',
          Num: '',
          Of: '',
          Flr: '',
          Other: ''
        }
      }
      const postData = JSON.parse(JSON.stringify(this.Form))
      postData.iddate = {
        ...this.Form.iddate,
        idyear: this.Form.iddate.Year,
        idMonth: this.Form.iddate.Month,
        idDay: this.Form.iddate.Day
      }
      const FillinData = JSON.parse(sessionStorage.getItem('FillinData'))
      if (FillinData?.OT) {
        FillinData.OT = postData
        sessionStorage.setItem('FillinData', JSON.stringify(FillinData))
      } else {
        sessionStorage.setItem('FillinData', JSON.stringify({ OT: postData }))
      }
      sessionStorage.setItem('FillinDataFlag', JSON.stringify({
        flgDigi: this.pageLoad.flgDigi,
        flgStudent: this.pageLoad.flgStudent,
        flgAmwayNo: this.pageLoad.flgAmwayNo
      }))
      const result = await service.fillin_OT_Submit(postData)
      if (result) {
        this.$router.push('/OnLineApply_Fillin_OT_1')
      }
    }
  },
  mounted () {
    this.getPageData()
  }
}
</script>
