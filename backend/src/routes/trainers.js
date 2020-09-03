const { Router } = require("express");
const { route } = require("./trainers");
const router = Router();

const {
  getTrainers,
  createTrainer,
  updateTrainers,
  deleteTrainers,
  getTrainer,
  recreateTrainer,
  updateTrainer,
  deleteTrainer,
} = require("../controllers/trainers_controller");

router
  .route("/")
  .get(getTrainers)
  .post(createTrainer)
  .put(updateTrainers)
  .delete(deleteTrainers);

router
  .route("/:id")
  .get(getTrainer)
  .post(recreateTrainer)
  .put(updateTrainer)
  .delete(deleteTrainer);

module.exports = router;
