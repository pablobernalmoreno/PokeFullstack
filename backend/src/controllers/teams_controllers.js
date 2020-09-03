const teamsController = {};

teamsController.getTeams = (req, res) =>
  res.json({ message: "Teams GET Route" });

teamsController.createTeam = (req, res) =>
  res.json({ message: "Teams POST Route" });

teamsController.updateTeams = (req, res) => {
  res.statusCode = 403;
  res.json({ message: "PUT operation not supported on /api/teams" });
};

teamsController.deleteTeams = (req, res) => {
  res.statusCode = 403;
  res.json({ message: "DELETE operation not supported on /api/teams" });
};

teamsController.getTeam = (req, res) =>
  res.json({ message: `Team ${req.params.id} Route` });

teamsController.recreateTeam = (req, res) => {
  res.statusCode = 403;
  res.json({
    message: `POST operation not supported on /api/teams/${req.params.id}`,
  });
};

teamsController.updateTeam = (req, res) =>
  res.json({ message: `Team ${req.params.id} PUT Route` });

teamsController.deleteTeam = (req, res) =>
  res.json({ message: `Team ${req.params.id} DELETE Route` });

module.exports = teamsController;
