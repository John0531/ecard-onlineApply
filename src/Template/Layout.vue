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
    background-image: none;
  }
</style>
