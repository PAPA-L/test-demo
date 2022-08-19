const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir);
};
// 引入webpack插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const publicPath = process.env.NODE_ENV === 'production' ? '/' : '/';
const lintOnSave = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave,
  chainWebpack: config => {
    config.entry = {
      main: ['babel-polyfill', './src/main'],
      vendors: './src/vendors'
    };
    // config.module
    //   .rule('view-design')
    //   .test(/view-design.src.*?js$/)
    //   .use('babel')
    //   .loader('babel-loader')
    //   .end();
    //设置别名
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'));
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
  configureWebpack: {
    plugins: [
      // 开启gzip压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: true,
              drop_console: true, // console
              drop_debugger: true,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        })
      ]
    }
  }
};
