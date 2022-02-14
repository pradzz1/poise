const path = require("path");
module.exports = {
  entry: "/src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  module: {
    mode: 'development',
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};