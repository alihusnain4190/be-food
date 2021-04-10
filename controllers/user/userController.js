const {
  fetchAllUserModel,
  addUserModel,
  updateUserModel,
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

exports.updateUserController = async (req, res) => {
  const id = req.params;
  const data = req.body;
  const user = await updateUserModel(id, data);
  res.status(201).send(user);
};
