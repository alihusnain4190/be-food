exports.up = function (knex) {
  console.log("pizza table is creating");
  return knex.schema.createTable("pizza", (pizza) => {
    pizza.increments("p_id").primary();
    pizza.string("p_name").notNullable();
    pizza.string("p_larg").notNullable();
    pizza.string("p_medium").notNullable();
    pizza.string("p_small").notNullable();
    pizza.string("dip").notNullable();
  });
};

exports.down = function (knex) {
  console.log("pizza table dwon");
  return knex.schema.dropTable("pizza");
};
