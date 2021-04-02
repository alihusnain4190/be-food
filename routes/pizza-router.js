const {
  getALLPizzaController,
  getPizzaControllerByID,
  deletePizzaControllerByID,
  addPizzaController,
} = require("../controllers/Pizza/pizzaController");
const { withErrorHandling } = require("../errors/index");
const pizzaRouter = require("express").Router();
pizzaRouter.get("/", withErrorHandling(getALLPizzaController));
pizzaRouter.post("/", withErrorHandling(addPizzaController));
pizzaRouter
  .route("/:id")
  .get(withErrorHandling(getPizzaControllerByID))
  .delete(withErrorHandling(deletePizzaControllerByID));
module.exports = pizzaRouter;
