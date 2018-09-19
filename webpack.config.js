const path = require('path');
require('babel-core/register');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'js_dist/')
  },
  optimization: {
    minimize: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
    ]
  },
};
