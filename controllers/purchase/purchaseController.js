const { CostExplorer } = require("aws-sdk");
const Stripe = require("stripe");
require("dotenv").config();
// console.log(require("dotenv").config());
const stripe = new Stripe(process.env.STRIPE_PAYMENT_SECRET_KEY);
// console.log(stripe);
const {
  purchaseModel,
  getPurcaseModel,
} = require("../../models/purchase/purchaseModel");
exports.purchaseController = async (req, res) => {
  const { id, user, amount, address, postcode } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Test",
      payment_method: id,
      confirm: true,
    });
    const result = await purchaseModel(user, address, amount, postcode);
    console.log(result)
    res.status(200).send({ confirm: "success" });
  } catch (err) {
    console.log(err);
    return Promise.reject({ status: err.statusCode, msg: err.message });
  }
};
exports.getPurcaseController = async (req, res) => {
  const data = await getPurcaseModel();
  res.status(200).send(data);
};
