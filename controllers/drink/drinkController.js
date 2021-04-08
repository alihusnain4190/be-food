const {
  getAllDrinkModel,
  addDrinkModel,
  deleteDrinkModelByID,
  patchDrinkModelByID,
} = require("../../models/drink/drinkModel");
exports.getAllDrinkController = async (req, res) => {
  const drink = await getAllDrinkModel();

  res.status(200).send(drink);
};

exports.addDrinkController = async (req, res) => {
  const drink = await addDrinkModel(req.body);
  res.status(201).send(drink);
};
exports.deleteDrinkControllerByID = async (req, res) => {
  const { id } = req.params;
  const drink = await deleteDrinkModelByID(id);
  res.status(201).send("no content");
};

exports.ptachDrinkControllerByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const drink = await patchDrinkModelByID(id, data);
  res.status(201).send(drink);
};
