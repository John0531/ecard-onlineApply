<template>
  <OTP></OTP>
</template>

<script>
import OTP from '@/components/OTP.vue'

export default {
  components: {
    OTP
  }
}
</script>

<style scoped>
.invalid-feedback-important {
  color: #db0031;
  font-size: 1em !important;
  width: auto;
  margin-top: .25rem;
}
.form-control.is-invalid {
  padding-right: 0px;
}

@media (min-width: 992px) {
  .mainArea  {
    padding: 50px 10px 82px;
  }
}
</style>
