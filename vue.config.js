module.exports = {
  publicPath: '/card_apply/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/card_apply/' : '/',
  transpileDependencies: [
    'vue-meta'
  ],
  devServer: {
    /* proxy: {
      '/ecardApi/': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/ecardApi/': ''
        }
      }
    } */
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const version = new Date().getTime()
      config.output.filename = `js/[name].[chunkhash]._${version}.js`
      config.output.chunkFilename = `js/[id].[chunkhash]._${version}.js`
    }
  }
}
