const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack/parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'node_modules', 'react-toolbox'),
    path.join(__dirname, 'app', 'main.css')
  ],
  build: path.join(__dirname, 'build')
};


const common = {
  entry: {
    style: PATHS.style,
    app: PATHS.app
  },

  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  resolve: {
    modules: [PATHS.app, 'node_modules'],
    extensions: ['', '.scss', 'css', '.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};

let config;

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats': // http://webpack.github.io/analyse/
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable('process.env.NODE_ENV', 'production'),
      parts.extractBundle({name: 'vendor', entries: Object.keys(pkg.dependencies)}),
      parts.dedupe(),
      parts.minify(),
      parts.setupJSX(PATHS.app),
      parts.extractCSS([PATHS.app, ...PATHS.style]),
      parts.purifyCSS([PATHS.app]),
      parts.html({
        title: 'react-redux-muicss',
        appMountId: 'app',
        template: path.join(PATHS.app, 'index.ejs'),
        mobile: true,
        inject: false,
        baseHref: '/',
        favicon: path.join(PATHS.app, 'favicon.ico'),
        // minify: { removeComments: true, collapseWhitespace: true }
      })
    );
    break;
  default:
    config = merge(
      common,
      {devtool: 'eval-source-map'},
      parts.setupJSX(PATHS.app),
      parts.setupCSS([PATHS.app, ...PATHS.style])
    );
}

module.exports = config;
