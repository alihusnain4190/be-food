const {
  fetchAllUserModel,
  addUserModel,
  updateUserModel,

  deleteUserModelByID,
} = require("../../models/user/userModel");
exports.fetchAllUserController = async (req, res) => {
  const { email } = req.query;
  const user = await fetchAllUserModel(email);
  res.status(200).send(user);
};
exports.addUserController = async (req, res) => {
  console.log(req.body);
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
exports.deleteUserControllerByID = async (req, res) => {
  const { id } = req.params;

  const user = await deleteUserModelByID(id);
  res.status(204).send();
};
exports.getUserByEmail = (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log("controller user email");
};
