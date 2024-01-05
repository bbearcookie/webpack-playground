const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node-modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },
};
