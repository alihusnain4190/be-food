const {
  getALLPizzaController,
  getPizzaControllerByID,
} = require("../controllers/Pizza/pizzaController");
const pizzaRouter = require("express").Router();
pizzaRouter.get("/", getALLPizzaController);
pizzaRouter.route("/:id").get(getPizzaControllerByID);
module.exports = pizzaRouter;
