const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = module.exports = merge(common, {

  mode: 'development',

  devtool:'source-map',
  devServer:{
      static:{
     directory:path.resolve(__dirname,'dist')
    },
    watchFiles: ['src/**/*.php', 'src/**/*'],
    port:3000,
    open:false,
    hot:true,
    compress:true,
    historyApiFallback:true,
  },

});


// {
//     mode:'development',
//     entry:{
//      main:path.resolve(__dirname,'./src/main.js'),

//     },
//     output:{
//         filename: '[name].bundle.js',
//         path:path.resolve(__dirname,'dist'),
//         clean:true,
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.css$/i,
//                 use:[
                  
//                     'style-loader',
//                     'css-loader',
//                     {
//                         loader: "postcss-loader",
//                         options: {
//                           postcssOptions: {
//                             plugins: [
//                               [
//                                 "autoprefixer",
//                                 {
//                                   // Options
//                                 },
//                               ],
//                             ],
//                           },
//                         },
//                       },
               
//                 ],
//             },
//             {

//               test: /\.(png|svg|jpg|jpeg|gif)$/i,
      
//               type: 'asset/resource',
      
//             },
//         ],
//     },
//     devtool:'source-map',
//     devServer:{
//         static:{
//        directory:path.resolve(__dirname,'dist')
//       },
//       watchFiles: ['src/**/*.php', 'src/**/*'],
//       port:3000,
//       open:false,
//       hot:true,
//       compress:true,
//       historyApiFallback:true,
//     },
//       optimization: {
//         runtimeChunk: 'single',
//       },
//     plugins:[
//       new HtmlWebpackPlugin({
//         title:'outpout mannagmengit',
//         template:path.resolve(__dirname,'./src/index.html'),
//       })
//     ],
// };