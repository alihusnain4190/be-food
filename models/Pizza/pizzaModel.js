const connection = require("../../db/connection");
exports.getALLPizzaModel = async () => {
  const data = await connection.select("*").from("pizza");

  return data;
};
exports.getPizzaModelByID = async (id) => {
  const data = await connection("pizza").where("p_id", id);
  if (data.length === 0) {
    return Promise.reject({ status: 404, msg: "Invalid id" });
  } else {
    return data;
  }
};
exports.deletePizzaModelByID = async (id) => {
  const data = await connection("pizza").where({ p_id: id }).del();

  if (!data) {
    return Promise.reject({ status: 404, msg: "Invalid id" });
  } else {
    return data;
  }
};

exports.addPizzaModel = async (data) => {
  const result = await connection("pizza").insert(data).returning("*");
  console.log(result);
  // if (result.length === 0) {
  //   return Promise.reject({ status: 400, messege: "empty object" });
  // }
  return result[0];
};
