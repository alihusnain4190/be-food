const userRouter = require("express").Router();
const {
  fetchAllUserController,
  addUserController,
  updateUserController,

  deleteUserControllerByID,
  getUserByEmail,
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
// userRouter.route("/email").get(withErrorHandling(getUserByEmail));
// userRouter.get("?email=email",(req,res)=>{
//   console.log('email')
// })

module.exports = userRouter;
