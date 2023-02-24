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
                        <li class="completed">
                            <div class="counter_step">1</div><span>申請人資料</span></li>
                        <li class="active">
                            <div class="counter_step">2</div><span>職業資料</span></li>
                        <li>
                          <div class="counter_step">3</div><span>個人資料使用特別商議條款</span></li>
                    </ul>
                </div>
                  <!------------------------//步驟---------------------------------->
                <div class="mb-4 text-left"><strong>職業資料</strong> <small class="red_text">*請務必填寫</small></div>
                <div class="blue_box mb-4">
                    <div class="blue_box_bg">
                        <ul class="formList-even">
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>公司名稱</label>
                                <input required="" name="login[id]" type="text" placeholder="" class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">統一編號：</label>
                                <input required="" name="login[id]" type="text" placeholder="" class="form-control">
                            </li>
                            <li class="col-12 col-md-12">
                                <label for="">公司地址</label>
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
                            <li class="col-12 col-md-6">
                                <label for="">公司電話</label>
                                <div class="d-flex office_tel align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control AreaCode me-1">-
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control mx-1"><span class="text-nowrap">分機</span>
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control Ext ms-1">
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">部門名稱</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">職稱</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>職業別</label>
                                <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                                    <select name="" runat="server" id="SelM" class="form-select form-control me-1">
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                    <div class="d-flex align-items-center">
                                        <span class="text-nowrap">其他</span>
                                        <input required="" name="login[id]" type="text" placeholder=" " class="form-control other_input ms-1 my-2 my-md-0">
                                    </div>
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>主要所得及資金來源</label>
                                <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                                    <select name="" runat="server" id="SelM" class="form-select form-control me-1">
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                    <div class="d-flex align-items-center">
                                        <span class="text-nowrap">其他</span>
                                        <input required="" name="login[id]" type="text" placeholder=" " class="form-control other_input ms-1 my-2 my-md-0">
                                    </div>
                                </div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>職級別</label>
                                <select name="" runat="server" id="SelM" class="form-select form-control">
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for=""><span class="red_text">* </span>現職月收入</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">到職日期</label>
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
                                <label for="">年資</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">前服務單位名稱</label>
                                <div class="d-flex align-items-center">
                                    <input required="" name="login[id]" type="text" placeholder=" " class="form-control me-1"><span class="red_text text-nowrap">(現職未滿一年者填寫)</span></div>
                            </li>
                            <li class="col-12 col-md-6">
                                <label for="">前服務單位職稱</label>
                                <input required="" name="login[id]" type="text" placeholder=" " class="form-control">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mb-4 text-md-center red_text">* 請務必填寫至最後步驟並列印出「簽名欄位」及黏貼「身份證影本欄位」，<br> 切勿自行按瀏覽器之列印功能以免資料不全造成辦卡時間之延誤。
                </div>
                <div class="text-center button_group">
                    <button @click.prevent="$router.push('/Written_2')" class="btn btn-primary btn-lg mx-1">下一步</button>
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
