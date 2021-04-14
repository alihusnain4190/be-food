const ENV = process.env.NODE_ENV || "development";
const development = require("./devData/index");
const test = require("./testData/index");
const data = { test, development, production: development };
module.exports = data[ENV];
