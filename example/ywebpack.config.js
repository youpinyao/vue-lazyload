const path = require('path')

module.exports = {
  port: '8080',
  host: '0.0.0.0',
  publicPath: '/',
  path: 'dist',
  vendors: ['vue'],
  hash: true,
  entrys: [{
    template: 'example/index.html',
    filename: 'index.html',
    entry: 'example/index.js'
  }],
  cssOptions: undefined,
  lessOptions: undefined,
  sassOptions: undefined,
  extraBabelPresets: [],
  extraBabelPlugins: [],
  webpackMerge: {
    resolve: {
      alias: {
        vue: path.resolve('node_modules/vue/dist/vue.js')
      }
    }
  },
  // eslint-disable-next-line
  afterBuild() {
    console.log('afterBuild')
  },
  // 对应环境独立的配置
  development: {},
  // 对应环境独立的配置
  production: {},
  // 如果某些的特定的依赖需要同项目一样构建，正则表达式
  // eslint-disable-next-line
  buildInclude: undefined,
}
