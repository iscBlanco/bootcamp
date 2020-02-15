const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

//estas dos lineas las necesitamos para usar sass
const ExtractTextPlugin = require ('extract-text-webpack-plugin')
let extractTextPlugin = new ExtractTextPlugin ({ filename: 'css/style.css'})

module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    mode:'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist'
    },
    plugins: [
        extractTextPlugin,//se necesita para usar sass
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html'})

    ],
    module:{
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/'
                }
              },
            
            {
                test:/\.scss$/,
                use: extractTextPlugin.extract({
                    use:['css-loader', 'sass-loader']
                })
            }
            //para usar solo con css
        /*  {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            }*/
        ]
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'js/bundle.js'
    }
}