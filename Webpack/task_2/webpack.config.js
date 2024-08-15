const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/, // Règle pour gérer les fichiers CSS
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i, // Règle pour gérer les images
        type: 'asset/resource'
      }
    ]
  }
};

