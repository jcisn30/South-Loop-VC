const webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
       {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
   {
          test: /\.(png|svg|jpg|gif)$/,
          use: [ 
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
            }
            }
         ]
       }
 
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    
    filename: 'bundle.js'
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({ 
      template: './public/index.html', 
      filename: './index.html' 
    }),
     new webpack.ProvidePlugin({   
         $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Tether: 'tether'
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  }
};