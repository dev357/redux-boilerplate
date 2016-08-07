const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

exports.devServer = function(options) {
  return {
    /*
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,
      // Poll using interval (in ms, accepts boolean too)
      poll: 1000
    },
    */
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host, // Defaults to 'localhost'
      port: options.port // Defaults to 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
};

exports.html = function(options) {
  return {
    plugins: [
      new HtmlWebpackPlugin(options)
    ],
  }
};

exports.setupJSX = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: paths
        }
      ]
    }
  }
};

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /(\.scss|\.css)$/,
          loader: 'style',
          include: paths
        }, {
          test: /(\.scss|\.css)$/,
          loader: 'css',
          query: {
            modules: true,
            localIdentName: '[name]__[local]__[hash:base64:5]'
          },
          include: paths
        }, {
          test: /\.scss$/,
          loader: 'postcss',
          include: paths
        }, {
          test: /\.scss$/,
          loader: 'sass',
          include: paths
        },

      ]
    },
    postcss: [autoprefixer],
    sassLoader: {
      data: '@import "styles/_config.scss";',
      includePaths: paths
    }
  }
};

exports.extractCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /(\.scss|\.css)$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
          }),
          include: paths
        }
      ]
    },
    postcss: [autoprefixer],
    sassLoader: {
      data: '@import "styles/_config.scss";',
      includePaths: paths
    },
    plugins: [
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  }
};

exports.purifyCSS = function(paths) {
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        paths: paths
      })
    ]
  };
};

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })
    ]
  };
};

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
};

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
};

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  };
};

exports.dedupe = function() {
  return {
    plugins: [
      new webpack.optimize.DedupePlugin()
    ]
  };
};
