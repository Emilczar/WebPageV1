const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
   devtool: 'inline-source-map',
   entry: './src/index.js',
   output: {
       path: path.resolve(__dirname,'dist'),
       filename: 'bundle.js'
   },
   module: {
       rules: [
           { 
            test: /\.scss$/, 
           //use: ['style-loader', 'css-loader','sass-loader']
           use: [MiniCssExtractPlugin.loader,  'css-loader','sass-loader']
            }
       ]
   },
   plugins: [ new MiniCssExtractPlugin({
       filename: 'style.css'
   })]
}
