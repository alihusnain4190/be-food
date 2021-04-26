const {
  purchaseController,
  getPurcaseController,
} = require("../controllers/purchase/purchaseController");

const { withErrorHandling, methodNotAllowed } = require("../errors/index");
const purchaseRoter = require("express").Router();
purchaseRoter
  .route("/")
  .get(withErrorHandling(getPurcaseController))
  .post(withErrorHandling(purchaseController))
  .all(methodNotAllowed);
module.exports = purchaseRoter;
