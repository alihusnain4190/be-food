const connection = require("../../db/connection");
exports.purchaseModel = async (user, amount, address, postcode) => {
  console.log(user);
  console.log(amount);
  console.log(address);
  console.log(postcode);

  const result = await connection("purchase")
    .insert({
      user: user,
      amount: amount,
      address: address,
      postcode: postcode,
    })
    .returning("*");

  return result[0];
};

exports.getPurcaseModel = async () => {
  const data = await connection.select("*").from("purchase");

  return data;
};
