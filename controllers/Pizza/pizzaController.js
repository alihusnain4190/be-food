const {
  getALLPizzaModel,
  deletePizzaModelByID,
  getPizzaModelByID,
  addPizzaModel,
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
  res.status(200).send(pizzaById[0]);
};
exports.deletePizzaControllerByID = async (req, res, next) => {
  const { id } = req.params;
  const pizzaById = await deletePizzaModelByID(id);

  res.status(204).send();
};
exports.addPizzaController = async (req, res) => {
  const data = req.body;
  const pizza = await addPizzaModel(data);
console.log(pizza)
  res.status(201).send(pizza);
};
