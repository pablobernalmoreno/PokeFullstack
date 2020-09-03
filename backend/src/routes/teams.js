const { Router } = require("express");
const { route } = require("./teams");
const router = Router();

router
  .route("/")
  .get((req, res) => res.json({ message: "Teams GET Route" }))
  .post((req, res) => res.json({ message: "Teams POST Route" }))
  .put((req, res) => {
    res.statusCode = 403;
    res.json({ message: "PUT operation not supported on /api/teams" });
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.json({ message: "DELETE operation not supported on /api/teams" });
  });

router
  .route("/:id")
  .get((req, res) => res.json({ message: `Team ${req.params.id} Route` }))
  .post((req, res) => {
    res.statusCode = 403;
    res.json({
      message: `POST operation not supported on /api/teams/${req.params.id}`,
    });
  })
  .put((req, res) => res.json({ message: `Team ${req.params.id} PUT Route` }))
  .delete((req, res) =>
    res.json({ message: `Team ${req.params.id} DELETE Route` })
  );

module.exports = router;
