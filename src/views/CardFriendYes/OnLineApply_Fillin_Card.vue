<template>
  <!--nav end-->
  <!-- 主視覺 -->
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
                <button type="button" class="OnLineApply_button">變更</button>
              </div>
            </li>
            <li class="col-12 col-md-12">
              <div
                class="d-flex flex-wrap flex-md-nowrap apply_address align-items-center"
              >
                <select name="" runat="server" class="form-select form-control ZIP mb-2">
                  <option>110000</option>
                  <option>110000</option>
                </select>
                <select
                  name=""
                  runat="server"
                  id=""
                  class="form-select form-control Area mx-1 mx-md-2 mb-2"
                >
                  <option>南港區</option>
                  <option>松山區</option>
                  <option>內湖區</option>
                </select>
                <select
                  name=""
                  runat="server"
                  id=""
                  class="form-select form-control Road mb-2"
                >
                  <option>忠孝東路五段</option>
                  <option>忠孝東路五段</option>
                  <option>忠孝東路五段</option>
                </select>
              </div>
              <div class="d-flex apply_address align-items-center">
                <input
                  required=""
                  name="login[id]"
                  type="text"
                  placeholder=" "
                  class="form-control me-1"
                />巷
                <input
                  required=""
                  name="login[id]"
                  type="text"
                  placeholder=" "
                  class="form-control mx-1"
                />弄
                <input
                  required=""
                  name="login[id]"
                  type="text"
                  placeholder=" "
                  class="form-control mx-1"
                />-
                <input
                  required=""
                  name="login[id]"
                  type="text"
                  placeholder=" "
                  class="form-control mx-1"
                />號
                <input
                  required=""
                  name="login[id]"
                  type="text"
                  placeholder=" "
                  class="form-control mx-1"
                />樓
                <input
                  required=""
                  name="login[id]"
                  type="text"
                  placeholder=" "
                  class="form-control ms-1"
                />
              </div>
            </li>
            <li class="col-12 col-md-6">
              <label for="">3.出生地</label>
              <select name="" runat="server" id="" class="form-select form-control">
                <option></option>
                <option></option>
                <option></option>
              </select>
            </li>
            <li class="col-12 col-md-6">
              <label for="">4.國籍</label>
              <select name="" runat="server" id="" class="form-select form-control">
                <option></option>
                <option></option>
                <option></option>
              </select>
            </li>
            <li class="col-12 col-md-6">
              <label for="">5.職業別</label>
              <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                <select
                  name=""
                  runat="server"
                  id=""
                  class="form-select form-control me-1"
                >
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
                <div class="d-flex align-items-center">
                  <span class="text-nowrap">其他</span>
                  <input
                    required=""
                    name="login[id]"
                    type="text"
                    placeholder=" "
                    class="form-control other_input ms-1 my-2 my-md-0"
                  />
                </div>
              </div>
            </li>
            <li class="col-12 col-md-6">
              <label for="">6.職級別</label>
              <select name="" runat="server" id="" class="form-select form-control">
                <option></option>
                <option></option>
                <option></option>
              </select>
            </li>
            <li class="col-12 col-md-6">
              <label for="">7.主要所得及資金來源</label>
              <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
                <select
                  name=""
                  runat="server"
                  id=""
                  class="form-select form-control me-1"
                >
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
                <div class="d-flex align-items-center">
                  <span class="text-nowrap">其他</span>
                  <input
                    required=""
                    name="login[id]"
                    type="text"
                    placeholder=" "
                    class="form-control other_input ms-1 my-2 my-md-0"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="mb-3">
          <span class="d-block red_text OnLineApply_text pb-0 pb-mb-3"
            ><strong
              >※如1~3項資料有異動，需檢附身分證正反面，並填寫發證日期及地點。</strong
            ></span
          >
        </div>
        <!-------------------檢附證件---------------------->
        <div class="">
          <h3 class="upload_title mt-5">檢附身分證</h3>
          <div class="text-md-center mb-3">
            <span class="d-block red_text"
              >※上傳格式限JPG及GIF檔，單一檔案上限為5MB。</span
            >
          </div>
          <div class="row upload_group">
            <div class="col-12 col-md-6">
              <div class="upload_items text-center">
                <img
                  src="@/assets/images/form/upload_photo.png"
                  class="img-fluid"
                  alt=""
                />
                <input
                  type="file"
                  name="upload1"
                  id="upload1"
                  accept="image/*"
                  class="upload"
                  data-sigil="file-input"
                /><textarea
                  name="TBupload1"
                  id="TBupload1"
                  style="display: none"
                ></textarea>
              </div>
              <div class="upload_IDtxt text-center">身分證正面</div>
            </div>
            <div class="col-12 col-md-6">
              <div class="upload_items text-center">
                <img
                  src="@/assets/images/form/upload_photo.png"
                  class="img-fluid"
                  alt=""
                />
                <input
                  type="file"
                  name="upload2"
                  id="upload2"
                  accept="image/*"
                  class="upload"
                  data-sigil="file-input"
                /><textarea
                  name="TBupload2"
                  id="TBupload2"
                  style="display: none"
                ></textarea>
              </div>
              <div class="upload_IDtxt text-center">身分證反面</div>
            </div>
          </div>
        </div>
        <!-------------------//檢附證件---------------------->
        <div>
          <ul class="formList-even">
            <li class="col-12 col-md-6">
              <label for=""><span class="red_text">* </span>身分證發證日期</label>
              <div class="d-flex align-items-center">
                <span class="text-nowrap">民國</span>
                <select
                  name=""
                  runat="server"
                  class="form-select form-control mx-1 mx-md-2"
                >
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
                  <option>111</option></select
                >年
                <select
                  name=""
                  runat="server"
                  id="SelM"
                  class="form-select form-control mx-1 mx-md-2"
                >
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
                  <option>12</option></select
                >月
                <select
                  name=""
                  runat="server"
                  id="SelD"
                  class="form-select form-control mx-1 mx-md-2"
                >
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
                  <option>12</option></select
                >日
              </div>
            </li>
            <li class="col-12 col-md-6">
              <label for="">發證地點</label>
              <div class="d-flex ID_date align-items-center">
                <select
                  name=""
                  runat="server"
                  class="form-select form-control IDCounty mr-1 mr-md-2"
                >
                  <option>台北市</option>
                  <option>新北市</option>
                </select>
                <select
                  name=""
                  runat="server"
                  id=""
                  class="form-select form-control IDissue mx-1 mx-md-2"
                >
                  <option>換發</option>
                  <option>補發</option>
                  <option>初發</option>
                </select>
              </div>
            </li>
          </ul>
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
            onclick="location.href='OnLineApply_Fillin_1'"
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
  <!---------------modal---------------->
  <!-- modal-注意事項 -->
  <div class="modal fade" ref="noticeModal"  id="noticeModal" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable act_T">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title"><input id="myCheckCount" hidden></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img src="@/assets/images/form/close.png" border="0" alt="close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                  親愛的客戶您好：<br>
                  為因應洗錢防制相關法令規定，請您配合本行辦理個人基本資料確認及更新作業(如:行/職業別、主要所得及資金來源...等)，以避免可能影響您使用信用卡權益，如有疑問請進線本行客服洽詢。
                  <hr>
                  <div class="text-center mb-3">
                      <div class="col-12 text-center">
                          <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" aria-label="Close">關閉</button>
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
      noticeModal: ''
    }
  },
  methods: {
    getNotice () {
      const url = window.location.href
      if (url.indexOf('') !== -1) {
        var noticeModal = new bootstrap.Modal(document.getElementById('noticeModal'), {
          keyboard: false,
          backdrop: 'static'
        })
        noticeModal.show()
      }
    }
  },
  mounted () {
    this.getNotice()
  }
}
</script>
