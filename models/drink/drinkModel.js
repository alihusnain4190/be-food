const { reject } = require("underscore");
const connection = require("../../db/connection");
exports.getAllDrinkModel = async () => {
  const drink = await connection.select("*").from("drink");
  return drink;
};
exports.addDrinkModel = async (data) => {
  const drink = await connection("drink").insert(data).returning("*");
  
  return drink[0];
};
exports.deleteDrinkModelByID = async (id) => {
  const drink = await connection("drink")
    .delete()
    .where({ d_id: id })
    .returning("");
  if (!drink) {
    return Promise.reject({ status: 404, msg: "Bad Request" });
  } else {
    return drink;
  }
};

exports.patchDrinkModelByID = async (id, data) => {
  const drink = await connection("drink")
    .update(data)
    .where({ d_id: id })
    .returning("*");
  if (drink.length === 0) {
    return Promise.reject({ status: 404, msg: "Item Not Found" });
  } else {
    return drink[0];
  }
};