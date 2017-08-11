config = {
  entry: __dirname + '/src/game.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devtool: 'source-map'
}

module.exports = config;