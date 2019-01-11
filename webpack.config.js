const path =  require('path')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  mode: env,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      { test: /\.js$/,
        include: [ path.resolve(__dirname, 'src') ],
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
