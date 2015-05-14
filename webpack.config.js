module.exports = {
  entry: './public/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        excludes: ['node-modules'],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', 'js', 'jsx']
  }
}
