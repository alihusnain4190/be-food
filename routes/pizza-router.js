const { getALLPizzaController } = require("../controllers/Pizza/pizzaController");
const pizzaRouter = require("express").Router();
pizzaRouter.get("/", getALLPizzaController);
module.exports = pizzaRouter;
