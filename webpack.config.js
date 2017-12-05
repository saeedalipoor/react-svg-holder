var path = require("path");
module.exports = {
  entry: "./src/index.es.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "stage-2"]
          }
        }
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
