const path = require('path');
const isDev = module.exports.mode === 'development';

module.exports = {
  devtool: isDev && 'inline-source-map',
  devServer: {
    contentBase: 'public',
    historyApiFallback: true,
    overlay: true,
    proxy: {
      '/api': 'http://localhost:5000'
    }
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
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true
            }
          },
          'stylelint-custom-processor-loader'
        ]
      }
    ]
  }
};
