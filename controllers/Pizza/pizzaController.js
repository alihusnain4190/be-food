const { getPizzaModel } = require("../../models/Pizza/pizzaModel");
exports.getALLPizzaController = async (req, res) => {
  const pizza = await getPizzaModel();
};
