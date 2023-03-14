<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="css">
  @import "~@/assets/css/animate.min.css";
  @import "~@/assets/css/form_Common.css";
  @import "~@/assets/css/OnLineApply.css";
  @import "~@/assets/css/NNB.css";
  @import "~@/assets/css/terms.css";
  @import "~@/assets/css/alert.css";
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin:0;
  }
  .form-control.is-invalid {
    background-image: none;
  }
  .form-select.is-invalid:not([multiple]):not([size]){
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  }
  .card-body{
    padding: 1rem 1rem;
  }
  .form-check-input.is-invalid{
    border-color: #dc3545 !important;
  }
</style>
