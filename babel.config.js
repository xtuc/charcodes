"use strict";

module.exports = function(api) {
  const env = api.env();

  let modules = "commonjs";
  if (env === "esm") {
    modules = false;
  }

  const config = {
    comments: false,
    presets: ["@babel/flow", ["@babel/env", { modules }]],
  };

  return config;
};
