var path = require('path')
var webpack = require('webpack')
var Dotenv = require('dotenv-webpack')

console.log(Dotenv)

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        // new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'TTT': '"Whatever"'
          }
          // 'process.env.TTT': 'works!',
          // 'process.env': {
          //   'test3': 'haha!'
          // }
        }),
        new Dotenv({
          path: '.env.local',
          systemvars: true
        }),
        // new webpack.DefinePlugin({
        //   'process.env.test2': 'works2!',
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // })
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
}
