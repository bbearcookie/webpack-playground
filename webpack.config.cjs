const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/webpack/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },
};
