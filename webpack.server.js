const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = require('./webpack.config.js');

function getIPAddress() {
  const interfaces = require('os').networkInterfaces();
  for (let devName in interfaces) {
    if (interfaces.hasOwnProperty(devName)) {
      const iface = interfaces[devName];

      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }
  }

  return '0.0.0.0';
}

config.output.filename = '[name].js';
config.devtool = '#inline-source-map';
config.entry = {
  bundle: [
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    config.entry.app
  ]
};

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new BrowserSyncPlugin({
    host: getIPAddress(),
    port: 3000,
    notify: true,
    open: false,
    logPrefix: 'sia',
    proxy: 'http://localhost:3030'
  }, {
    reload: false
  })
);

const compiler = webpack(config);

// We give notice in the terminal when it starts bundling
let startTime = Date.now();
compiler.plugin('compile', function () {
  startTime = Date.now();
  console.log('Bundling...');
});
compiler.plugin('done', function () {
  console.log('Done! took', Date.now() - startTime, 'ms');
});

new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, 'src'),
  publicPath: '/',
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  stats: {colors: true}
}).listen(3030, 'localhost', function (err) {
  if (err) {
    console.log('err', err);
  }
});
