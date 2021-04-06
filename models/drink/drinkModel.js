const connection = require("../../db/connection");
exports.getAllDrinkModel = async () => {
  const drink = await connection.select("*").from("drink");
  return drink;
};
exports.addDrinkModel = async (data) => {
  const drink = await connection("drink").insert(data).returning("*");
  console.log(drink);
  return drink[0];
};
exports.deleteDrinkModelByID = async (id) => {
  console.log(id);
  const drink = await connection("drink").delete().where({ d_id: id });
  return drink;
};
