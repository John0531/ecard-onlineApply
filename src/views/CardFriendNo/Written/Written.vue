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
    <section class="mainArea">
        <div class="container-xl">
            <div class="row justify-content-md-center pt-1 pt-md-3">
                <!------------------------步驟---------------------------------->
                <div class="stepGroup">
                    <ul class="step">
                        <li class="active">
                            <div class="counter_step">1</div><span>申請人資料</span></li>
                        <li>
                            <div class="counter_step">2</div><span>職業資料</span></li>
                        <li>
                            <div class="counter_step">3</div><span>個人資料使用特別商議條款</span></li>
                    </ul>
                </div>
                  <!------------------------//步驟---------------------------------->
                <div class="mb-4 text-left"><strong>申請人資料</strong> <small class="red_text">*請務必填寫</small></div>
                <div class="blue_box mb-4">
                    <div class="blue_box_bg">
                        <ul class="formList-even">
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>身分證字號</label>
                                <input required="" name="login[id]" type="text" placeholder="" class="form-control">
                            </li>
                            <li class="col-12 col-md-6 d-none d-md-block">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>身分證發證日期</label>
                                <div class="d-flex align-items-center">
                                    <span class="text-nowrap">民國</span>
                                    <select name="" runat="server" class="form-select form-control mx-1 mx-md-2">
                                        <option>99</option>
                                        <option>100</option>
                                        <option>101</option>
                                        <option>102</option>
                                        <option>103</option>
                                        <option>104</option>
                                        <option>105</option>
                                        <option>106</option>
                                        <option>107</option>
                                        <option>108</option>
                                        <option>109</option>
                                        <option>110</option>
                                        <option>111</option>
                                    </select>年
                                    <select name="" runat="server" id="SelM" class="form-select form-control mx-1 mx-md-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>月
                                    <select name="" runat="server" id="SelD" class="form-select form-control mx-1 mx-md-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>日
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">發證地點</label>
                                <div class="d-flex ID_date align-items-center">
                                    <select name="" runat="server" class="form-select form-control IDCounty mr-1 mr-md-2">
                                        <option>台北市</option>
                                        <option>新北市</option>
                                    </select>
                                    <select name="" runat="server" id="" class="form-select form-control IDissue mx-1 mx-md-2">
                                        <option>換發</option>
                                        <option>補發</option>
                                        <option>初發</option>
                                    </select>
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>中文姓名</label>
                                <input required="" name="login[id]" type="text" placeholder="" class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>英文姓名</label>
                                <div class="d-block d-md-flex align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder="" class="form-control me-0 me-md-2">
                                    <span class="red_text text-nowrap">(必須與護照相同)</span>
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>性別</label>
                                <select name="" runat="server" class="form-select form-control">
                                    <option>男</option>
                                    <option>女</option>
                                </select>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>出生日期</label>
                                <div class="d-flex align-items-center">
                                    <select name="" runat="server" class="form-select form-control me-1 me-md-2">
                                        <option>99</option>
                                        <option>100</option>
                                        <option>101</option>
                                        <option>102</option>
                                        <option>103</option>
                                        <option>104</option>
                                        <option>105</option>
                                        <option>106</option>
                                        <option>107</option>
                                        <option>108</option>
                                        <option>109</option>
                                        <option>110</option>
                                        <option>111</option>
                                    </select>年
                                    <select name="" runat="server" id="" class="form-select form-control mx-1 mx-md-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>月
                                    <select name="" runat="server" id="" class="form-select form-control mx-1 mx-md-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>日
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>出生地</label>
                                <select name="" runat="server" id="" class="form-select form-control">
                                    <option>台北市</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>國籍</label>
                                <select name="" runat="server" id=" " class="form-select form-control">
                                    <option>中華民國</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">教育程度</label>
                                <select name="" runat="server" id=" " class="form-select form-control">
                                    <option>高中</option>
                                    <option>大學</option>
                                    <option>碩士</option>
                                    <option>博士</option>
                                </select>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">婚姻狀況</label>
                                <select name="" runat="server" id="SelM" class="form-select form-control">
                                    <option>已婚</option>
                                    <option>未婚</option>
                                </select>
                            </li>
                            <li class="col-12 col-md-12">
                                <label for=""><span class="red_text">* </span>戶籍地址</label>
                                <div class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center">
                                    <select name="" runat="server" class="form-select form-control ZIP mb-2">
                                        <option>110000</option>
                                        <option>110000</option>
                                    </select>
                                    <select name="" runat="server" id="" class="form-select form-control Area mx-1 mx-md-2 mb-2">
                                        <option>南港區</option>
                                        <option>松山區</option>
                                        <option>內湖區</option>
                                    </select>
                                    <select name="" runat="server" id="" class="form-select form-control Road mb-2">
                                        <option>忠孝東路五段</option>
                                        <option>忠孝東路五段</option>
                                        <option>忠孝東路五段</option>
                                    </select>
                                </div>
                                <div class="d-flex apply_address align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control me-1">巷
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">弄
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">-
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">號
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">樓
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control ms-1">
                                </div>
                            </li>
                            <li class="col-12 col-md-12">
                                <label for=""><span class="red_text">* </span>居住地址</label>
                                <div class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center">
                                    <select name="" runat="server" class="form-select form-control ZIP mb-2">
                                        <option>110000</option>
                                        <option>110000</option>
                                    </select>
                                    <select name="" runat="server" id="" class="form-select form-control Area mx-1 mx-md-2 mb-2">
                                        <option>南港區</option>
                                        <option>松山區</option>
                                        <option>內湖區</option>
                                    </select>
                                    <select name="" runat="server" id="" class="form-select form-control Road mb-2">
                                        <option>忠孝東路五段</option>
                                        <option>忠孝東路五段</option>
                                        <option>忠孝東路五段</option>
                                    </select>
                                </div>
                                <div class="d-flex apply_address align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control me-1">巷
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">弄
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">-
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">號
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1">樓
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control ms-1">
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                                    <div class="form_Apply_txt">
                                        同戶籍地址
                                    </div>
                                </div>
                            </li>
                            <li class="col-12 col-md-12">
                                <label for=""><span class="red_text">* </span>帳單地址</label>
                                <div class="d-flex flex-wrap flex-column flex-md-row">
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="" value="option1">
                                        <div class="form_Apply_txt">
                                            同戶籍地址
                                        </div>
                                    </div>
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="" value="option1">
                                        <div class="form_Apply_txt">
                                            同居住地址
                                        </div>
                                    </div>
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="" value="option1">
                                        <div class="form_Apply_txt">
                                            同公司地址
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-12 col-md-12">
                                <label for=""><span class="red_text">* </span>寄卡地址</label>
                                <div class="d-flex flex-wrap flex-column flex-md-row">
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="" value="option1">
                                        <div class="form_Apply_txt">
                                            同戶籍地址
                                        </div>
                                    </div>
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="" value="option1">
                                        <div class="form_Apply_txt">
                                            同居住地址
                                        </div>
                                    </div>
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="" value="option1">
                                        <div class="form_Apply_txt">
                                            同公司地址
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>戶籍電話</label>
                                <div class="d-flex office_tel align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control AreaCode me-1">-
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control ms-1">
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>居住電話</label>
                                <div class="d-flex office_tel align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control AreaCode me-1">-
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control ms-1">
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>行動電話</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">住所狀態</label>
                                <select name="" runat="" id="" class="form-select form-control">
                                    <option>自有</option>
                                    <option> </option>
                                </select>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">居住年數</label>
                                <div class="d-flex align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control me-1">年</div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">電子信箱</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                            <li class="col-12">
                                <span class="red_text">* 為響應環保及維護個人隱私，將依您以上留存之「電子信箱」寄送信用卡活動及權益通知。</span>
                            </li>
                            <li class="col-12 col-md-12">
                                <label for=""><span class="red_text">* </span>帳單形式</label>
                                <div class="d-flex flex-wrap flex-column flex-md-row">
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id=" " value="option1">
                                        <div class="form_Apply_txt">
                                            EMAIL帳單
                                        </div>
                                    </div>
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id=" " value="option1">
                                        <div class="form_Apply_txt">
                                            行動帳單(簡訊)
                                        </div>
                                    </div>
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id=" " value="option1">
                                        <div class="form_Apply_txt">
                                            LINE帳單
                                        </div>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id=" " value="option1">
                                        <div class="form_Apply_txt">
                                            紙本帳單
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-12 col-md-12">
                                <label for=""><span class="red_text">* </span>申請數位卡</label>
                                <div class="d-flex flex-wrap flex-column flex-md-row">
                                    <div class="form-check me-4">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                                        <div class="form_Apply_txt">
                                            是
                                        </div>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 position-absolute" type="radio" name="exampleRadios" id="exampleRadios3" value="option1">
                                        <div class="form_Apply_txt">
                                            否
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-12 col-md-12 text-left">
                                <span>數位卡說明：同意進件申請後，本行於審核通過即以簡訊發送個人代碼至申請之行動電話，您可憑代碼至指定網站中查詢信用卡資訊，以更快體驗聯邦銀行提供予您在行動支付或網路購物上更便利的服務。</span>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>畢業國小名稱</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">推廣單位代號</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">推廣人員編號</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mb-4 text-left text-md-center red_text">* 請務必填寫至最後步驟並列印出「簽名欄位」及黏貼「身份證影本欄位」，<br> 切勿自行按瀏覽器之列印功能以免資料不全造成辦卡時間之延誤。</div>
                <div class="text-center button_group">
                    <button @click.prevent="$router.push('/Written_1')" class="btn btn-primary btn-lg mx-1">下一步</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  methods: {

  }
}
</script>
