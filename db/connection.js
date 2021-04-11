const ENV = process.env.NODE_ENV || "development";
const connection = require("knex");

const dbConfig =
  ENV === "production"
    ? { client: "pg", connection: process.env.DATABASE_URL }
    : require("../Knexfile");
console.log(ENV);
module.exports = connection(dbConfig);
