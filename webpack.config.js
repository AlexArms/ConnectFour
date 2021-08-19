const path = require('path');

const ENTRY = path.join(__dirname, 'client');
const OUTPUT = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(ENTRY, 'index.js'),
  output: {
    path: OUTPUT,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  mode: 'development', // production
  resolve: {
    extensions: ['.js', '.jsx']
  }
}