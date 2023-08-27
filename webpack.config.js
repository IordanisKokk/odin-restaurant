const path = require('path');

module.exports = {
  mode: 'development', // or 'production' or 'none'
  entry: './src/index.js', // Your entry JavaScript file
  output: {
    filename: 'bundle.js', // Output bundled file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Apply loader to .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
