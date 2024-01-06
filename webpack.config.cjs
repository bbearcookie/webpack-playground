const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
    clean: true, // 웹팩 5부터 추가된 옵션으로 clean-webpack-plugin를 어느정도 대체할 수 있게 되었음.
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
