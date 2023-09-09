// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // 入口文件
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'), // 输出目录
    filename: 'bundle.js', // 输出文件名
  },
  performance: {
    maxAssetSize: 1024 * 1024, // 1024 KiB
    maxEntrypointSize: 1024*1024,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配 JavaScript 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: 'babel-loader', // 使用 Babel 进行转译
      },
      {
        test: /\.jsx$/, // 匹配 JSX 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: 'babel-loader', // 使用 Babel 进行转译
      },
      {
        test: /\.css$/, // 匹配 CSS 文件
        use: ['style-loader', 'css-loader'], // 使用 style-loader 和 css-loader 处理 CSS
      },
    ],
  },
};
