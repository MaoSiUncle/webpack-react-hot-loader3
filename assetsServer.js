/**
 * Created by yunlong on 16/9/27.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var args=process.argv;
var hot=args.indexOf('--hot')>-1;
config.entry.app.unshift('react-hot-loader/patch');
config.entry.app.unshift('webpack-dev-server/client?http://127.0.0.1:5000');
if(hot===true){
    config.entry.app.unshift('webpack/hot/only-dev-server');
    //config.module.loaders[0].loaders.unshift('react-hot');
   config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
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
    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: true
}).listen(5000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:5000');
});