const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./libs/parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'node_modules', 'muicss', 'lib', 'css', 'mui.css'),
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
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React-Redux'
    })
  ],
};

let config;

// Detect how npm i run and brandh based on that
switch(process.env.npm_lifecycle_event) {
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
      parts.extractBundle({ name: 'vendor', entries: ['react'] }),
      parts.minify(),
      parts.setupJSX(PATHS.app),
      parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.app])
    );
    break;
  default:
    config = merge(
      common,
      { devtool: 'eval-source-map' },
      parts.setupJSX(PATHS.app),
      parts.setupCSS(PATHS.style),
      parts.devServer({
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 8080
      })
    );
}

// Run validator in quiet mode to avoid output in stats
module.exports = validate(config, {
  quiet: true
});
