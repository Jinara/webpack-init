var path = require('path');
module.exports = {
  devtool: 'inline-source-map',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  }
}
