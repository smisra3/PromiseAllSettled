const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    fileName: "poly.js",
    publicPath: "/",
    path: path.join(__dirname + "./dist"),
  },
};
