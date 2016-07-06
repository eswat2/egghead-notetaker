module.exports = {
  entry: "./app/App.jsx",
  output: {
    path: "./public/",
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './public/',
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  }
}
