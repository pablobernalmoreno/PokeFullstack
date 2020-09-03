const { Router } = require("express");
const { route } = require("./trainers");
const router = Router();

router
  .route("/")
  .get((req, res) => res.send("Trainers GET Route"))
  .post((req, res) => res.send("Trainers POST Route"))
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /api/trainers");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /api/trainers");
  });

router
  .route("/:id")
  .get((req, res) => res.send(`Trainer ${req.params.id} Route`))
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /api/trainers/${req.params.id}`);
  })
  .put((req, res) => res.send(`Trainer ${req.params.id} PUT Route`))
  .delete((req, res) => res.send(`Trainer ${req.params.id} DELETE Route`));

module.exports = router;
