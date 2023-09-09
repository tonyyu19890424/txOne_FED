// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // 程式碼的入口檔案名稱
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'), // 目的地資料夾
    filename: 'bundle.js', // 輸出的文件名稱
  },
  performance: {
    maxAssetSize: 1024 * 1024, // 1024 KB
    maxEntrypointSize: 1024*1024,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配 JavaScript 文件
        exclude: /node_modules/, // 排除 node_modules
        use: 'babel-loader', // 使用 Babel 轉譯
      },
      {
        test: /\.jsx$/, // 匹配 JSX 文件
        exclude: /node_modules/, // 排除 node_modules
        use: 'babel-loader', // 使用 Babel 轉譯
      },
      {
        test: /\.css$/, // 匹配 CSS 文件
        use: ['style-loader', 'css-loader'], // 使用 style-loader 和 css-loader 處理 CSS
      },
    ],
  },
};
