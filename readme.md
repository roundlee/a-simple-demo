### 这是一个webpack和angular框架结合的一个简单的项目。
>##### 该项目实现了商品的展示
>#### 1.本项目使用到的技术
>>. webpack框架  
>>. jquery框架中的ajax  
>>. localStorage本地存储  
>>. angular框架
>#### 1. 本项目需要npm包管理工具
>#### 2.项目环境搭建
>>1）初始化项目
>>```bash
>> npm init
>>```
>>2）本地安装webpack
>>```bash
>> npm install --save-dev webpack webpack-cli
>>```
>>3）创建webpack.config.js 文件，并配置。可参考[官方文档](https://www.webpackjs.com/)  
>>>配置之前，需用npm install 本地安装所用到的webpack的loader和插件 
>>>（1）安装html-webpack-plugin插件等插件和loader
>>>```bash
>>>npm install --save-dev html-webpack-plugin
>>>npm install --save-dev mini-css-extract-plugin
>>>npm install --save-dev css-minimizer-webpack-plugin
>>>npm install --save-dev clean-webpack-plugin
>>>npm install --save-dev webpack-dev-server
>>>npm install --save-dev copy-webpack-plugin
>>>npm install --save-dev css-loader
>>>```
>>>（2）配置webpack.config.js，这里就展示并介绍出基本结构
>>>```js
>>>const path = require('path');
>>>module.exports = {
>>>    entry: './src/js/index.js',//打包文件是的入口
>>>    output: {//出口
>>>        path: path.resolve(__dirname, 'dist'),//出口路径
>>>        filename: 'js/index.js'//文件名
>>>    },
>>>    module: { //文件规则
>>>        rules: [
>>>            {
>>>                test: /\.css$/i,
>>>                use: [MiniCssExtractPlugin.loader, 'css-loader'],
>>>            },
>>>        ],
>>>    },
>>>    plugins: [//文件插件配置
>>>         new CleanWebpackPlugin(),//清除插件
>>>        new HtmlWebpackPlugin({//打包html
>>>            filename: 'index.html',
>>>            template: './src/index.html'
>>>        }),
>>>],
>>>     optimization: {//css打包成单行
>>>        minimize: true,
>>>        minimizer: [
>>>            new CssMinimizerPlugin(),
>>>        ],
>>>    },
>>>    devServer: {//配置webpack服务器
>>>        contentBase: path.join(__dirname, "dist"),//对外提供的访问内容的路径
>>>        // compress: true,//是否启用gzip压缩
>>>        port: 9000,//提供访问的端口
>>>        // open:true//true 运行时自动打开页面
>>>    }
>>>};
>>>```
>>>（3）配置package.json文件中的
>>>```json
>>>"scripts": {
>>>    "build": "webpack",
>>>    "start": "webpack-dev-server"
>>>  },
>>>```
>>4）测试webpack是否配置成功
>>> （1）在src/js目录下床件index.js文件,同时在src/css目录下创建index.css文件，然后通过index.js文件引入.css文件
>>>```js
>>>require('../css/index.css');
>>>require('../css/public.css');
>>>```
>>>（2）通过npm run build测试,成功后src目录下的文件会打包到dist目录下
>>>```bash
>>>npm run build
>>>```
>>5）本地安装angular 可参考[官方文档](https://angular.cn/docs)
>>```bash
>>npm install --save-dev angular@1.7
>>```
>>6）查看package.json文件中devDependencies属性下是否有angular，有则安装成功  
>>7）测试angular可查看文档进行编写测试[参考文档](AngularJS参考手册.CHM)
