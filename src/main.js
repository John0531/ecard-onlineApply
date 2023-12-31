import { createApp } from 'vue'

// ? axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// ? bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

// ? vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// ? sweetalert2
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import '../src/assets/scss/helpers/_alert.scss'

// ?vue-meta
import { createMetaManager } from 'vue-meta'

// ?vue-gtag-next
// import VueGtag from 'vue-gtag-next'

//  ?croppie
import Croppie from 'croppie'
import 'croppie/croppie.css'

// ?表單驗證
import validate from './utilities/validate'

import PublicService from '@/service/Public.Service.js'

import App from './App.vue'
import store from './store'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import './axios.setting.js'

// ?css外部引入
import './cssImport.js'

// ?加入validate驗證規則
Object.keys(validate).forEach((rule) => {
  defineRule(rule, validate[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: false,
  validateOnBlur: true,
  validateOnChange: false,
  validateOnModelUpdate: false
})
setLocale('zh_TW')

// ? 取得下拉 Json 資料(存入localStorage)
PublicService.getJson().then((result) => {
  localStorage.setItem('SELECT_JSON', JSON.stringify(result))
})

const app = createApp(App)

// ? 千分號
function currency (num) {
  if (num === null) {
    return null
  }
  const n = parseInt(num, 10)
  return `${n
    .toFixed(0)
    .replace(/./g, (c, i, a) =>
      i && c !== '.' && (a.length - i) % 3 === 0
        ? `, ${c}`.replace(/\s/g, '')
        : c
    )}`
}

// ?自訂全域屬性
app.config.globalProperties.$custom = {
  validate,
  bootstrap,
  Croppie,
  currency
}

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(VueSweetalert2)
// app.use(Croppie)

app.use(createMetaManager())

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
