import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";

const isDevelopment = process.env.NODE_ENV !== "production";
const __dirname = path.resolve(); // __dirname is not defined in ES module scope 에러를 해결하기 위한 코드

/**
 * @type {import("webpack").Configuration}
 */
export default {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
    clean: true, // 웹팩 5부터 추가된 옵션으로 clean-webpack-plugin를 어느정도 대체할 수 있게 되었음.
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    port: 3000,
    hot: true,
  },

  optimization: {
    minimize: false, // TODO: 빌드 결과물 확인하려고 임시로 false 설정
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "> 0.25%, not dead",
                    useBuiltIns: "usage",
                    shippedProposals: true,
                    corejs: 3,
                  },
                ],
              ],
              plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new DotenvWebpackPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
