const path  = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development",
    entry:{
        index: "./src/index.js"
    },
    output:{
        filename : '[name].[contenthash].js',
        path: path.resolve(__dirname,"build"),
        clean:true,
    },
    module : {
        rules : [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            title: "List Zen",
            template: "./src/views/index.html",
            filename: "index.html",
            chunks:['index']
        })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
      },
        compress: true,
          port: 9000
    }
}