const { Router } = require("express");
const { route } = require("./teams");
const router = Router();

router
  .route("/")
  .get((req, res) => res.send("Teams Route"))
  .post((req, res) => res.send("Teams POST Route"))
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /api/teams");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /api/teams");
  });

router
  .route("/:id")
  .get((req, res) => res.send(`Team ${req.params.id} Route`))
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /api/teams/${req.params.id}`);
  })
  .put((req, res) => res.send(`Team ${req.params.id} PUT Route`))
  .delete((req, res) => res.send(`Team ${req.params.id} DELETE Route`));

module.exports = router;
