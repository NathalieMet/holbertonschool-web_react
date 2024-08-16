const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

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
  },
  optimization: {
    minimize: true,
    minimizer: [
      '...', // Utilise les minimizers par défaut
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['mozjpeg', { quality: 70 }], // Compression JPEG avec qualité 70%
              ['pngquant', { quality: [0.6, 0.8] }] // Compression PNG avec qualité entre 60% et 80%
            ],
          },
        },
      }),
    ],
  },
};


