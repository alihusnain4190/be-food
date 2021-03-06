const connection = require("../../db/connection");
exports.fetchAllUserModel = async (email) => {
  
  if (email) {
    const user = await connection("user").select("*").where({ u_email: email });
    console.log(user);
  return user[0];
  }
  const user = await connection("user").select("*");
  return user;
};

exports.addUserModel = async (data) => {
  console.log(data);
  const user = await connection("user").insert(data).returning("*");
  console.log(user[0]);
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
exports.deleteUserModelByID = async (id) => {
  const user = await connection("user")
    .where({ u_id: id })
    .del()
    .returning("*");
  if (user.length === 0)
    return Promise.reject({ status: 404, msg: "Invalid id" });
  return user;
};
