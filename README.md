仅仅是一个 react-hot-loader v3.x.x，babel，webpack，webpack-dev-server的Demo
环境：
node 6.6.0(否则react-hot-loader 会报关于core-js的错--报错版本 node stable（4.4.x）)

react-hot-loader @latest(3.x.x-beta)  升级到最新版本 
最新版本需要：
1.react-hot-loader 中的 AppContainer包裹入口文件。
2.需要在.babelrc 添加plugins react-hot-loader/babel 为了与babel
3.新版本的react-hot-loader 需要在webpack.config.js entry 头部添加 'react-hot-loader/patch'

