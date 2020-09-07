const trainersController = {};

const TrainerModel = require("../models/Trainer");

trainersController.getTrainers = async (req, res) => {
  const trainers = await TrainerModel.find();
  res.json(trainers);
};

trainersController.createTrainer = async (req, res) => {
  const { name } = req.body;
  const newTrainer = new TrainerModel({ name });
  await newTrainer.save();
  res.json({ message: "Trainers Created" });
};

trainersController.updateTrainers = (req, res) => {
  res.statusCode = 403;
  res.json({ message: "PUT operation not supported on /api/trainers" });
};

trainersController.deleteTrainers = (req, res) => {
  res.statusCode = 403;
  res.json({ message: "DELETE operation not supported on /api/trainers" });
};

trainersController.getTrainer = async (req, res) => {
  const team = await TrainerModel.findById(req.params.id);
  res.json(team);
};

trainersController.recreateTrainer = (req, res) => {
  res.statusCode = 403;
  res.json({
    message: `POST operation not supported on /api/trainers/${req.params.id}`,
  });
};

trainersController.updateTrainer = async (req, res) => {
  const { name } = req.body;
  await TrainerModel.findByIdAndUpdate({ _id: req.params.id }, { name });
  res.json({ message: `Trainer ${req.params.id} updated` });
};

trainersController.deleteTrainer = async (req, res) => {
  const trainer = await TrainerModel.findByIdAndDelete(req.params.id);
  res.json({ message: `Trainer ${req.params.id} deleted` });
};

module.exports = trainersController;
