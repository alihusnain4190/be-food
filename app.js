const express = require("express");
const cors = require("cors")
const app = express();
const apiRouter = require("./routes/api-router");
const {
  handleErrorSQL,
  handleCustomErrors,
} = require("./errors/index");
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRouter);


app.use(handleErrorSQL);
app.use(handleCustomErrors);
app.all("/*", (req, res) => {
  res.status(404).send("Route not found");
});
module.exports = app;
