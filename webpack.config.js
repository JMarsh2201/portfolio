const path =  require('path')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  mode: env,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: 'css-loader'
      }
    ]
  }
};
