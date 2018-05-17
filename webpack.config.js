var path = require('path')
var webpack = require('webpack')
var Dotenv = require('dotenv-webpack')

module.exports = {
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    // new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, './src/.env.testing'),
      systemvars: true
    }),
    new webpack.DefinePlugin({
      'process.env.SUPERTEST': JSON.stringify('This is a test')
    })
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
}
