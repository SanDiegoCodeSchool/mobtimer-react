const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  devtool:"inline-source-map",
  
  entry: [
    path.resolve(__dirname, 'src', 'js','index.jsx'), 
    path.resolve(__dirname, 'src', 'styles','main.scss'),
    path.resolve(__dirname, 'src', 'styles','people.scss'),
    path.resolve(__dirname, 'src', 'styles','timer.scss'),
    path.resolve(__dirname, 'src', 'styles','variables.scss'),
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
    
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },

      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
};
