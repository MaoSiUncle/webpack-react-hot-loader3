/**
 * Created by yunlong on 16/9/27.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var args=process.argv;//根据命令 传参 为了hot是否为true。
var hot=args.indexOf('--hot')>-1;
config.entry.app.unshift('react-hot-loader/patch');// 最新版本的react-hot-loader 需要在entry最开头添加此入口文件。
config.entry.app.unshift('webpack-dev-server/client?http://127.0.0.1:5000');//dev-server 配置 没什么说的 
if(hot===true){
    config.entry.app.unshift('webpack/hot/only-dev-server');
    //config.module.loaders[0].loaders.unshift('react-hot');//之所以移除这个是因为官方说明：如果使用了babel+es6 需要在.babelrc中配置plugins，不需要在loaders中加载。
   config.plugins.push(new webpack.HotModuleReplacementPlugin())//添加热替插件。也没什么说的
}
//余下配置都是正常的。稍微懂点webpack的应该都看的懂。。
new WebpackDevServer(webpack(config), {
    publicPath:"/",
    hot: hot,
    inline: true,
    compress: true,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true
}).listen(5000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:5000');
});
