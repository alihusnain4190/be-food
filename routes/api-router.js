const pizzaRouter = require("./pizza-router");
const drinkRouter = require("./drink-router");
const userRouter = require("./user-router");
const apiRouter = require("express").Router();
apiRouter.use("/pizza", pizzaRouter);
apiRouter.use("/drink", drinkRouter);
apiRouter.use("/user", userRouter);
apiRouter
  .route("/")
  .get((req, res) => {
    res.status(200).send("All OK with GET request");
  })
  .post((req, res) => {
    res.status(200).send("ALL OK with patch request");
  })
  .patch((req, res) => {
    res.status(200).send("ALL OK with patch request");
  });
module.exports = apiRouter;
