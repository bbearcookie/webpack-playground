const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node-modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
