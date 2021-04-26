exports.up = function (knex) {
  console.log("purchase table is creating");
  return knex.schema.createTable("purchase", (purchase) => {
    purchase.increments("p_id").primary();
    purchase.string("amount").notNullable();
    purchase.string("address").notNullable();
    purchase.string("user").notNullable();
    purchase.string("postcode").notNullable();
  });
};

exports.down = function (knex) {
  console.log("purchase table dwon");
  return knex.schema.dropTable("purchase");
};
