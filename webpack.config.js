const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    mainCatalog: './src/mainCatalog.js',
    mainDetailed: './src/mainDetailed.js',
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};