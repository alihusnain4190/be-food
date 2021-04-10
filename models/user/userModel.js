const connection = require("../../db/connection");
exports.fetchAllUserModel = async () => {
  const user = await connection("user").select("*");
  return user;
};

exports.addUserModel = async (data) => {
  const user = await connection("user").insert(data).returning("*");
  return user[0];
};
exports.updateUserModel = async ({ id }, { u_name, u_email }) => {
  if (u_name || u_email) {
    const user = await connection("user")
      .update({ u_name, u_email })
      .where({ u_id: id })
      .returning("*");
    if (user.length === 0) {
      return Promise.reject({ status: 404, msg: "Invalid id" });
    } else {
      return user[0];
    }
  } else {
    return Promise.reject({ status: 400, msg: "Bad Request" });
  }
};
