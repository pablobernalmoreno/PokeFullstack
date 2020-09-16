const express = require("express");
const cors = require("cors");
const app = express();

//Settings

app.set("port", process.env.PORT || 4000);

//Middlewares

app.use(cors());
app.use(express.json());

//Routes

app.use("/api/trainers", require("./routes/trainers"));
app.use("/api/teams", require("./routes/teams"));

module.exports = app;
