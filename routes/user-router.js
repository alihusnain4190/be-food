const userRouter = require("express").Router();
const {
  fetchAllUserController,
  addUserController,
  updateUserController,
} = require("../controllers/user/userController");
const { withErrorHandling, methodNotAllowed } = require("../errors/index");
userRouter
  .route("/")
  .get(withErrorHandling(fetchAllUserController))
  .post(withErrorHandling(addUserController));
userRouter.route("/:id").patch(withErrorHandling(updateUserController));
module.exports = userRouter;
