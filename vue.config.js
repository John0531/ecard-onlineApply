module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  transpileDependencies: [
    'vue-meta'
  ],
  devServer: {
    // port: 8080,
    // public: document.location.origin,
    proxy: {
      '/ecardApi/': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/ecardApi/': ''
        }
      }
    }
  }
}
