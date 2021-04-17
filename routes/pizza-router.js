const {
  getALLPizzaController,
  getPizzaControllerByID,
  deletePizzaControllerByID,
  addPizzaController,
  updatePizzaControllerByID,
} = require("../controllers/Pizza/pizzaController");
const { withErrorHandling, methodNotAllowed } = require("../errors/index");
const pizzaRouter = require("express").Router();
pizzaRouter
  .route("/")
  .get(withErrorHandling(getALLPizzaController))
  .post(withErrorHandling(addPizzaController))
  .all(methodNotAllowed);

pizzaRouter
  .route("/:id")
  .get(withErrorHandling(getPizzaControllerByID))
  .delete(withErrorHandling(deletePizzaControllerByID))
  .patch(withErrorHandling(updatePizzaControllerByID))
  .all(methodNotAllowed);
module.exports = pizzaRouter;
