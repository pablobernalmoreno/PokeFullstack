const teamsController = {};

const TeamModel = require("../models/Team");

teamsController.getTeams = async (req, res) => {
  const teams = await TeamModel.find();
  res.json(teams);
};

teamsController.createTeam = async (req, res) => {
  const { title, pokes, trainer } = req.body;
  const newTeam = new TeamModel({
    title,
    pokes,
    trainer,
  });
  await newTeam.save();
  res.json({ message: `Team ${title} Saved` });
};

teamsController.updateTeams = (req, res) => {
  res.statusCode = 403;
  res.json({ message: "PUT operation not supported on /api/teams" });
};

teamsController.deleteTeams = (req, res) => {
  res.statusCode = 403;
  res.json({ message: "DELETE operation not supported on /api/teams" });
};

teamsController.getTeam = async (req, res) => {
  const team = await TeamModel.findById(req.params.id);
  res.json(team);
};

teamsController.recreateTeam = (req, res) => {
  res.statusCode = 403;
  res.json({
    message: `POST operation not supported on /api/teams/${req.params.id}`,
  });
};

teamsController.updateTeam = async (req, res) => {
  const { title, pokes, trainer } = req.body;
  await TeamModel.findOneAndUpdate(
    { _id: req.params.id },
    { title, pokes, trainer }
  );
  res.json({ message: `Team ${req.params.id} updated` });
};

teamsController.deleteTeam = async (req, res) => {
  const team = await TeamModel.findByIdAndDelete(req.params.id);
  res.json({ message: `Team ${req.params.id} DELETE Route` });
};

module.exports = teamsController;
