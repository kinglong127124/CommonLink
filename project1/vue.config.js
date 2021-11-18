// vue.config.js
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  }
}
