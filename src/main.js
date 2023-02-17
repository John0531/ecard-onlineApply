import { createApp } from 'vue'

// ? axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// ? vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// ? sweetalert2
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import '../src/assets/scss/helpers/_alert.scss'

// ?vue-meta
// import { createMetaManager } from 'vue-meta'

// ?vue-gtag-next
// import VueGtag from 'vue-gtag-next'

import App from './App.vue'
import store from './store'
import router from './router'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(VueSweetalert2)

// app.use(createMetaManager())

// ? GA 追蹤碼設定
// app.use(VueGtag, {
//   property: [
//     { id: 'G-XVW7SKD91W' } // ? yesgogogo
//   ]
// })

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
