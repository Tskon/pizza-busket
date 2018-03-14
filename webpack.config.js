//basic vars
const webpack = require('webpack');
const path = require('path');

//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['./app.js', './scss/style.scss']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: "./js/"
  },
  devtool: (isProduction) ? '' : 'source-map',
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')()
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: true}
            }
          ],
          fallback: "style-loader",
        })
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    open: 'index.html',
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin("../css/[name].css"),
    // new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin(
      [{from:'./index.html', to: '../'}]
    )
  ]
};

if (isProduction) {
  module.exports.plugins.push(
    new UglifyJSPlugin({sourceMap: true})
  );
  // module.exports.plugins.push(
  //   new ImageminPlugin({
  //     test: /\.(png|jpe?g|dif|svg)$/i
  //   })
  // );
  module.exports.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize:true
    })
  );
}