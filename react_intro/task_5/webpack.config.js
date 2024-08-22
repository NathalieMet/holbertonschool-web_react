const path = require('path');

module.exports = {
    mode: 'development',
    entry: './dashboard/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dashboard/dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets',
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dashboard/dist'), // Remplacer contentBase par static
        },
        hot: true,
        open: true, // Ouvrir automatiquement le navigateur
        historyApiFallback: true,
    },
};
