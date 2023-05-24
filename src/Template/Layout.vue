<template>
    <div class="position-fixed w-100 h-100 d-flex justify-content-center align-items-center" style="background:rgba(120,120,120,0.8);z-index:9999" v-if="$store.state.isLoading">
      <img src="@/assets/images/ajaxDog.gif" alt="">
    </div>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
  <ErrorModal></ErrorModal>
  <APIModal></APIModal>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ErrorModal from '@/components/ErrorModal.vue'
import APIModal from '@/components/APIModal.vue'

export default {
  components: {
    Header,
    Footer,
    ErrorModal,
    APIModal
  }
}
</script>

<style lang="css">
  /* @import "~@/assets/css/animate.min.css";
  @import "https://card-beta.uitc.com.tw/eCard_source/css/style_B5.css";
  @import "~@/assets/css/form_Common.css";
  @import "~@/assets/css/OnLineApply.css";
  @import "~@/assets/css/NNB.css";
  @import "https://card-beta.uitc.com.tw/eCard_source/includeBlock/yesgogogo.css";
  @import "https://card-beta.uitc.com.tw/eCard_source/terms/css/terms.css";
  @import "~@/assets/css/alert.css"; */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin:0;
  }
  .form-control.is-invalid {
    background-image: none;
    padding-right: 0;
  }
  .form-select.is-invalid:not([multiple]):not([size]){
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
    padding-right: 0.3rem;
  }
  .card-body{
    padding: 1rem 1rem;
  }
  .form-check-input.is-invalid{
    border-color: #dc3545 !important;
  }
  input.checkimg[type="checkbox"].is-invalid {
    border-color: #db0031 !important;
  }
  div.is-invalid {
    color: #db0031 !important;
    border-color: #db0031 !important;
  }
  span.is-invalid {
    /* color: #db0031 !important; */
    border-color: #db0031 !important;
  }
  .crop-width {
    max-width: 400px !important;
    max-height: 273px !important;
    height: auto;
  }
  .crop-test {
    max-width: 420px !important;
    max-height: 300px !important;
    height: auto;
  }
  .form-text{
    margin-top: 0;
  }
  .field-error {
    display: block;
    position: relative;
    width: fit-content;
    font-size: 0.875em;
    padding: 2px 8px;
    border-radius: 3px;
    color: #ffffff;
    background-color: #dc3545;
    margin-top: 6px;
  }
  .field-error::before {
    border: 6px solid transparent;
    border-bottom-color: #dc3545;
    position: absolute;
    content: "";
    left: 47%;
    top: -10px;
  }

  /* @font-face {
  font-family: ubFont;
    src: url(https://card-beta.uitc.com.tw/eCard_source/font/EUDC.TTE)
  } */
  p,a,span,font,input,select,table,label,button,ul,li,div {
      font-family: "RobotoSlab",ubFont;
  }
  input [type="text"]{
      font-family: "RobotoSlab",ubFont;
  }
  .v-leave {
    opacity: 1;
  }
  .v-leave-active {
    transition: opacity 0.8s;
  }
  .v-leave-to {
    opacity: 0.4;
  }
  .v-enter {
    opacity: 0.4;
  }
  .v-enter-active {
    transition: opacity 0.8s;
  }
  .v-enter-to {
    opacity: 1;
  }
  /* .modal-content-bg {
    background-color:rgba(60,60,60,0.2) !important;
  } */

  .modal-backdrop {
    background-color:rgba(120,120,120,0.8) !important;
  }

</style>
