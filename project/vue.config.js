const path = require('path')

function resove(dir) {
  return path.join(__dirname, dir)
}

const port = 7070;
const title = 'vue项目最佳实践'

module.exports = {
  devServer: {
    port,
    proxy: {
      // 代理
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:3000/`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  configureWebpack: {
    name: title
  },
  chainWebpack(config) {
    console.log('config')
    console.log(config)
    // svg规则配置一下，排除icons目录
    config.module.rule('svg')
      .exclude.add(resove('src/icons'))
      .end;
    // 新增icons规则，设置svg-sprite-loader
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resove('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]'}) // 使用图标的名称
      .end()
  }
}