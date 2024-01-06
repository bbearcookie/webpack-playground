const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: "production",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 3000,
    hot: true,
  },

  optimization: {
    minimize: false, // 빌드 결과물 확인하려고 임시로 false 설정
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
