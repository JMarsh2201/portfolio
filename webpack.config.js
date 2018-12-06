const path =  require('path')

module.exports = {
  mode: 'production',
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
    ]
  }
};