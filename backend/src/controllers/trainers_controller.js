const trainersController = {};

trainersController.getTrainers = (req, res) =>
  res.json({ message: "Trainers GET Route" });

trainersController.createTrainer = (req, res) =>
  res.json({ message: "Trainers POST Route" });

trainersController.updateTrainers = (req, res) => {
  res.statusCode = 403;
  res.json({ message: "PUT operation not supported on /api/trainers" });
};

trainersController.deleteTrainers = (req, res) => {
  res.statusCode = 403;
  res.json({ message: "DELETE operation not supported on /api/trainers" });
};

trainersController.getTrainer = (req, res) =>
  res.json({ message: `Trainer ${req.params.id} Route` });

trainersController.recreateTrainer = (req, res) => {
  res.statusCode = 403;
  res.json({
    message: `POST operation not supported on /api/trainers/${req.params.id}`,
  });
};

trainersController.updateTrainer = (req, res) =>
  res.json({ message: `Trainer ${req.params.id} PUT Route` });

trainersController.deleteTrainer = (req, res) =>
  res.json({ message: `Trainer ${req.params.id} DELETE Route` });

module.exports = trainersController;
