<template>
  <div ref="errorModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <span v-html="$store.state.errorMsg" style="font-size:1rem"></span>
          </div>
          <div class="modal-footer" >
              <div class="text-center" >
              <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" style="border-radius: 0.3rem;">關閉</button>
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
