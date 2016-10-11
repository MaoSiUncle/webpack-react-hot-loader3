仅仅是一个 react-hot-loader v3.x.x，babel，webpack，webpack-dev-server的Demo
(上传原因：手贱升级了下react-hot-loader 才发现已经3.0.0了。然后就是逛作者博客，填坑。。)


环境：    

node 6.6.0(否则react-hot-loader 会报关于core-js的错--报错版本 node stable（4.4.x）  


 
react-hot-loader @latest(3.x.x-beta)  升级到最新版本  

最新版本需要：  

1.react-hot-loader 中的 AppContainer包裹入口文件。  

2.需要在.babelrc 添加plugins react-hot-loader/babel 为了与babel   

3.新版本的react-hot-loader 需要在webpack.config.js entry 头部添加 'react-hot-loader/patch'

解释：需要在你的入口文件中添加AppContainer包裹 具体参考 app/main.js
     
如果你使用了babel-loader 和 es6 的话 需要 在.babel中添加plugins 具体参考 .babelrc文件 而不需要在webpack.config中的loaders添加 react-hot，其他情况相反。

入口entry 需添加'react-hot-loader/patch'。

补充遇到的坑：

部署到docker中的时候，webpack加上uglyfy的问题

关于process.env.NODE_ENV不识别
踩坑链接：
https://github.com/webpack/webpack/issues/868

这里要在webpack.config.js中添加

new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })





