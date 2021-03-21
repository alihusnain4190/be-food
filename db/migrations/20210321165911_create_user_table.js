exports.up = function (knex) {
  console.log("user table is creating");
  return knex.schema.createTable("user", (user) => {
    user.increments("u_id").primary();
    user.string("p_name").notNullable();
    user.string("p_email").notNullable();
  });
};

exports.down = function (knex) {
  console.log("user table dwon");
  return knex.schema.dropTable("user");
};
