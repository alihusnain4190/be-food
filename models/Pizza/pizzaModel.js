const connection = require("../../db/connection");
exports.getALLPizzaModel = () => {
  return connection.select("*").from("pizza");
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
  console.log(data);
  if (data.length === 0) {
    console.log("ali");
    return Promise.require({ status: 404, msg: "Invalid ID" });
  } else {
    return data;
  }
};
