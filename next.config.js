const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
  target: "serverless",
  ...withSass()
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
module.exports = withBundleAnalyzer({});
