const drinkRouter = require("express").Router();
const { getAllDrinkController } = require("../controllers/drink/drinkController");
const { withErrorHandling, methodNotAllowed } = require("../errors/index");
drinkRouter.route("/").get(withErrorHandling(getAllDrinkController));
module.exports = drinkRouter;
