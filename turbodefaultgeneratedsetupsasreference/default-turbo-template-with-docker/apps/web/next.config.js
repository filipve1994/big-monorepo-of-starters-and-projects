const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui-template-docker"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
