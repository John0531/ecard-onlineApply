<template>
    <!-- API情境彈窗 -->
    <div ref="APIModal" class="modal fade" id="noticeModal_2" tabindex="-1" aria-labelledby="exampleModalLabel-1"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><input id="myCheckCount" hidden></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <img src="@/assets/images/form/close_NoText.png" border="0" alt="close" data-bs-dismiss="modal">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center py-3" v-html="$store.state.apiMsg"></div>
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
</template>

<script>
export default ({
  data () {
    return {
      //
    }
  },
  mounted () {
    this.$store.commit('callAPIModal', new this.$custom.bootstrap.Modal(this.$refs.APIModal))
  }
})
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
