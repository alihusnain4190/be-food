exports.up = function (knex) {
  console.log("pizza drink is creating");
  return knex.schema.createTable("drink", (pizza) => {
    pizza.increments("d_id").primary();
    pizza.string("d_name").notNullable();
    pizza.string("d_price").notNullable();
  });
};

exports.down = function (knex) {
   console.log("drink table dwon");
  return knex.schema.dropTable("drink");
};
