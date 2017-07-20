var path = require('path')
var webpack = require('webpack')
var Dotenv = require('dotenv-webpack')

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
        // new webpack.NoEmitOnErrorsPlugin(),
        new Dotenv({
          path: '.env.local',
          systemvars: true
        })
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
}
