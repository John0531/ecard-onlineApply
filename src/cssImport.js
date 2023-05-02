const url = [
  `${process.env.VUE_APP_STATIC}/applyCss/animate.min.css`,
  `${process.env.VUE_APP_STATIC}/css/style_B5.css`,
  `${process.env.VUE_APP_STATIC}/applyCss/form_Common.css`,
  `${process.env.VUE_APP_STATIC}/applyCss/OnLineApply.css`,
  `${process.env.VUE_APP_STATIC}/applyCss/NNB.css`,
  `${process.env.VUE_APP_STATIC}/includeBlock/yesgogogo.css`,
  `${process.env.VUE_APP_STATIC}/terms/css/terms.css`,
  `${process.env.VUE_APP_STATIC}/applyCss/alert.css`
]

url.forEach((item) => {
  const cssLink = document.createElement('link')
  cssLink.setAttribute('rel', 'stylesheet')
  cssLink.setAttribute('type', 'text/css')
  cssLink.setAttribute('href', item)
  document.head.appendChild(cssLink)
})

// ? 難字字體檔案引入
const newStyle = document.createElement('style')
newStyle.appendChild(document.createTextNode(`\
@font-face {\
    font-family: ubFont;\
    src: url(${process.env.VUE_APP_STATIC}/font/EUDC.TTE);\
}\
`))
document.head.appendChild(newStyle)
