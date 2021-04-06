const drinkRouter = require("express").Router();
const {
  getAllDrinkController,
  addDrinkController,
  deleteDrinkControllerByID,
} = require("../controllers/drink/drinkController");

const { withErrorHandling, methodNotAllowed } = require("../errors/index");
drinkRouter
  .route("/")
  .get(withErrorHandling(getAllDrinkController))
  .post(withErrorHandling(addDrinkController));
drinkRouter.route("/:id").delete(withErrorHandling(deleteDrinkControllerByID));
module.exports = drinkRouter;
