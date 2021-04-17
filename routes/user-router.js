const userRouter = require("express").Router();
const {
  fetchAllUserController,
  addUserController,
  updateUserController,
  deleteUserControllerByID,
} = require("../controllers/user/userController");
const { withErrorHandling, methodNotAllowed } = require("../errors/index");

userRouter
  .route("/")
  .get(withErrorHandling(fetchAllUserController))
  .post(withErrorHandling(addUserController))
  .all(methodNotAllowed);
userRouter
  .route("/:id")
  .patch(withErrorHandling(updateUserController))
  .delete(withErrorHandling(deleteUserControllerByID))
  .all(methodNotAllowed);

module.exports = userRouter;
