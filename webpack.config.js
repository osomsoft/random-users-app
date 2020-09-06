const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  console.log(env);
  return {
    entry: './src/index.js',
    output: {
      filename: 'app.bundle.js',
      path: path.join(__dirname, 'public'),
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: path.join(__dirname, 'public'),
              },
            },
            'css-loader'
          ],
          test: /\.css/,
        },
      ],
    },
    mode: env ? 'production' : 'development',
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.css',
        chunkFilename: 'main.css',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
};
