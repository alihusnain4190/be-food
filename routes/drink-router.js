const drinkRouter = require("express").Router();
const {
  getAllDrinkController,
  addDrinkController,
  deleteDrinkControllerByID,
  ptachDrinkControllerByID,
} = require("../controllers/drink/drinkController");

const { withErrorHandling, methodNotAllowed } = require("../errors/index");
drinkRouter
  .route("/")
  .get(withErrorHandling(getAllDrinkController))
  .post(withErrorHandling(addDrinkController))
  .all(methodNotAllowed);
drinkRouter
  .route("/:id")
  .delete(withErrorHandling(deleteDrinkControllerByID))
  .patch(withErrorHandling(ptachDrinkControllerByID))
  .all(methodNotAllowed);
module.exports = drinkRouter;
