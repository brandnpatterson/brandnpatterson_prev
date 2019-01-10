const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: isDev && 'inline-source-map',
  devServer: {
    contentBase: 'public',
    proxy: {
      '/api': 'http://localhost:5000'
    },
    stats: 'minimal'
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
          'stylelint-custom-processor-loader'
        ]
      }
    ]
  }
};
