const path = require('path');

module.exports = {
  entry: {
    "app": ['babel-polyfill', path.resolve(__dirname, 'src/entries/app.js')],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dev/[name].js'
  },
  devServer: {
    port: 9000,
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
    ]
  }
}