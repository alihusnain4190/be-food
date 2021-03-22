const { pizza, drinks, user } = require("../data/index");
console.log(drinks);
exports.seed = async (knex) => {
  await knex.migrate.rollback();
  await knex.migrate.latest();

  const pizzas = knex("pizza").insert(pizza);
  const drink = knex("drink").insert(drinks);
  const users = knex("user").insert(user);
  const data = await Promise.all([pizzas, drink, users]);
  try {
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};
