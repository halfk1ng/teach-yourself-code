const withSass = require("@zeit/next-sass");

module.exports = {
  target: "serverless",
  ...withSass(),

  env: {
    youTubeKey: "AIzaSyD3IF1b1VQERFQVkJSQXE2oMd6qJnkGIPk"
  }
};
