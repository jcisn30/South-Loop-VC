const webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT

module.exports = {
  entry: {
     vendor: ['bootstrap'],
    app: './src/index.js',
  },
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
            
            },
            
         ]
       },
       {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
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
      favicon: 'public/favicon.ico',
      manifest: 'public/manifest.json'
      
    }),
     new webpack.ProvidePlugin({   
         $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Tether: 'tether'
    })
  ],
  
    optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  
  
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true
  }
};