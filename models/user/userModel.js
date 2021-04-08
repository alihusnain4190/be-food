const connection = require("../../db/connection");
exports.fetchAllUserModel = async () => {
  const user = await connection("user").select("*");
  return user;
};

exports.addUserModel = async (data) => {
  const user = await connection("user").insert(data).returning("*");
  return user[0];
};
