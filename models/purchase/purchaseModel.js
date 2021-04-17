const Stripe = require("stripe");
const { reject } = require("underscore");
const stripe = new Stripe(
  "sk_test_51HhY6tGm6y8m7NFhsEoMslNvTJbkQOW900ad2ZZQidGvtpMXyNHs9UESFOpZ08uPzgSDHLSUyCAwRhmKAJN3kVgC00Wqf47SYh"
);
exports.purchaseModel = async (id, amount) => {
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Test",
      payment_method: id,
      confirm: true,
    });
    return payment;
  } catch (err) {
    return Promise.reject({ status: err.statusCode, msg: err.message });
  }
};
