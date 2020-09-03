const { Router } = require("express");
const { route } = require("./teams");
const {
  getTeams,
  createTeam,
  updateTeams,
  deleteTeams,
  getTeam,
  recreateTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teams_controllers");
const router = Router();

router
  .route("/")
  .get(getTeams)
  .post(createTeam)
  .put(updateTeams)
  .delete(deleteTeams);

router
  .route("/:id")
  .get(getTeam)
  .post(recreateTeam)
  .put(updateTeam)
  .delete(deleteTeam);

module.exports = router;
