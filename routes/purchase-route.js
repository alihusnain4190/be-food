const {
  purchaseController,
} = require("../controllers/purchase/purchaseController");

const { withErrorHandling, methodNotAllowed } = require("../errors/index");
const purchaseRoter = require("express").Router();
purchaseRoter.route("/").post((purchaseController));
// purchaseRoter.post=(req,res)=>{
//   console.log('ali')
// }
module.exports = purchaseRoter;
