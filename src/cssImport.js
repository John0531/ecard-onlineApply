const url = [
  `${process.env.VUE_APP_BASE}/eCard_source/applyCss/animate.min.css`,
  `${process.env.VUE_APP_BASE}/eCard_source/css/style_B5.css`,
  `${process.env.VUE_APP_BASE}/eCard_source/applyCss/form_Common.css`,
  `${process.env.VUE_APP_BASE}/eCard_source/applyCss/OnLineApply.css`,
  `${process.env.VUE_APP_BASE}/eCard_source/applyCss/NNB.css`,
  `${process.env.VUE_APP_BASE}/eCard_source/includeBlock/yesgogogo.css`,
  `${process.env.VUE_APP_BASE}/eCard_source/terms/css/terms.css`,
  `${process.env.VUE_APP_BASE}/eCard_source/applyCss/alert.css`
]

url.forEach((item) => {
  const cssLink = document.createElement('link')
  cssLink.setAttribute('rel', 'stylesheet')
  cssLink.setAttribute('type', 'text/css')
  cssLink.setAttribute('href', item)
  document.head.appendChild(cssLink)
})
