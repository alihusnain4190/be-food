const {
  getALLPizzaModel,
  getPizzaModelByID,
} = require("../../models/Pizza/pizzaModel");
exports.getALLPizzaController = async (req, res, next) => {
  const pizza = await getALLPizzaModel();
  try {
    res.status(200).send(pizza);
  } catch (err) {
    next(err);
  }
};
exports.getPizzaControllerByID = async (req, res, next) => {
  const { id } = req.params;
  const pizzaById = await getPizzaModelByID(id);
  try {
    res.status(200).send(pizzaById[0]);
  } catch (err) {
    next(err);
  }
};
