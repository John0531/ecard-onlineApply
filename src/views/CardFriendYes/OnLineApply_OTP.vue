<template>
  <!--nav end-->
  <!-- 主視覺 -->
  <div class="shortKv">
    <div class="fill-shortKv topimg-OnLineApply">
      <div class="container-xlr shortKv-title-4">
        <h2>線上辦卡</h2>
      </div>
    </div>
  </div>
  <!-- //主視覺 -->
  <section class="mainArea">
    <div class="container-xl">
      <div class="row justify-content-md-center pt-1 pt-md-3">
        <div class="mb-4 text-md-center DarkRed_text">
          按下「獲取簡訊驗證碼」，系統將發送至您留存本行信用卡資料之手機號碼，驗證碼於10分鐘內有效。
        </div>
        <Form v-slot="{ errors }" @invalid-submit="invalidSubmit" @submit="otpSubmit">
          <div class="formGroup">
            <ul class="formList">
              <li class="inOpt">
                <label for="">簡訊驗證碼</label>
                <Field
                  name="簡訊驗證碼"
                  type="text"
                  maxlength="6"
                  placeholder="請輸入驗證碼"
                  class="form-control"
                  :class="{ 'is-invalid': errors['簡訊驗證碼'] }"
                  v-model="form.msg"
                  :validateOnBlur="true"
                  :rules="$custom.validate.chkKeyValue"
                />
                <ErrorMessage name="簡訊驗證碼" class="invalid-feedback"></ErrorMessage>
                <button
                  class="ResendOpt"
                  type="submit"
                  value=""
                  @click.prevent="getMsgCode"
                  :disabled="!show"
                >
                  <span v-show="show">獲取簡訊驗證碼</span>
                  <span v-show="!show">{{ count }}秒後重新發送</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="text-center button_group">
            <button class="btn btn-primary btn-lg mx-1" type="submit" value="">
              下一步
            </button>
          </div>
        </Form>
      </div>
    </div>
  </section>
  <!-- 主要內容 END -->
</template>

<script>
export default {
  data () {
    return {
      show: true,
      timer: 0,
      count: 0,
      msg: {
        phoneNum: ''
      },
      form: {
        msg: ''
      }
    }
  },
  methods: {
    getMsgCode () {
      this.msg.phoneNum = this.form.msg
      this.count = 5
      this.show = false
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= 5) {
          this.count--
        } else {
          this.show = true
          clearInterval(this.timer)
          this.timer = null
        }
      }, 1000)
    },
    invalidSubmit ({ values, errors, results }) {
      this.$swal.fire({
        title: '尚有必填欄位格式有誤',
        showConfirmButton: false,
        // timer: 2500,
        customClass: {
          title: 'text-class'
        }
      })
    },
    otpSubmit () {
      if (!this.form.msg) {
        this.$swal.fire({
          title: '尚有必填欄位未填寫',
          showConfirmButton: false,
          customClass: {
            title: 'text-class'
          }
          // timer: 2500
        })
      } else {
        this.$router.push('/OnLineApply_Fillin')
      }
    }
  },
  mounted () {}
}
</script>
