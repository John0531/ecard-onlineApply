<template>
  <div ref="errorModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
            <button @click.prevent="closeModal" type="button" class="close" aria-label="Close">
              <img src="https://activity.ubot.com.tw/eCardWeb/OnLineApply_img/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
            </button>
          </div>
          <div class="modal-body">
            <span v-html="$store.state.errorMsg" style="font-size:1rem"></span>
          </div>
          <div class="modal-footer">
              <div class="text-center">
              <button @click.prevent="closeModal" type="button" class="btn btn-primary btn-lg" style="border-radius: 0.3rem;">關閉</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      errors: ''
    }
  },
  watch: {
    '$store.state.errorMsg': {
      handler (n) {
        const errorMsg = JSON.parse(JSON.stringify(n))
        if (errorMsg.includes('有關條款')) {
          this.$store.commit('getErrorMsg', errorMsg.replace('*【有關條款】 : ', '*'))
        }
      }
    }
  },
  methods: {
    closeModal () {
      if (this.$store.state.errorRedirect === 'cardFamily') {
        sessionStorage.clear()
        window.location = 'https://card.ubot.com.tw/eCard/dspPageContent.aspx?strID=2008060014'
      }
      this.$store.state.errorModal.hide()
    }
  },
  mounted () {
    this.$store.commit('getErrorModal', new this.$custom.bootstrap.Modal(this.$refs.errorModal, { backdrop: 'static' }))
  }
}
</script>

<style scoped>
  .modal-header .close{
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
  }
  button.close{
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .close{
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
  }
  .close:hover {
    opacity: .75;
  }
  .btn.btn-primary:hover{
    background-color:#707070!important;
  }
</style>
