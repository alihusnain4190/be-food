const {
  fetchAllUserModel,
  addUserModel,
} = require("../../models/user/userModel");
exports.fetchAllUserController = async (req, res) => {
  const user = await fetchAllUserModel();
  res.status(200).send(user);
};
exports.addUserController = async (req, res) => {
  const data = req.body;
  const user = await addUserModel(data);
  res.status(201).send(user);
};
