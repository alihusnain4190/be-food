const userRouter = require("express").Router();
const {
  fetchAllUserController,
  addUserController,
} = require("../controllers/user/userController");
const { withErrorHandling, methodNotAllowed } = require("../errors/index");
userRouter
  .route("/")
  .get(withErrorHandling(fetchAllUserController))
  .post(withErrorHandling(addUserController));
module.exports = userRouter;
