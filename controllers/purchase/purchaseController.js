const Stripe = require("stripe");
require("dotenv").config();
console.log(require("dotenv").config());
const stripe = new Stripe(process.env.STRIPE_PAYMENT_SECRET_KEY);

const { purchaseModel } = require("../../models/purchase/purchaseModel");
exports.purchaseController = async (req, res) => {
  const { id, amount } = req.body;
  console.log(process.env.STRIPE_PAYMENT_SECRET_KEY);
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Test",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    res.status(200).send({ confirm: "success" });
  } catch (err) {
    console.log("ali");
    return Promise.reject({ status: err.statusCode, msg: err.message });
  }
};
