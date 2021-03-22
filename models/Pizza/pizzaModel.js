const connection = require("../../db/connection");
exports.getALLPizzaModel = () => {
  return connection.select("*").from("pizza");
};
exports.getPizzaModelByID = (id) => {
  return connection("pizza").where("p_id", id);
};
