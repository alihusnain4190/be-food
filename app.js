const express = require("express");
const app = express();
const apiRouter = require("./routes/api-router");
const {
  handleErrorSQL,
  handleCustomErrors,
} = require("./errors/index");
app.use(express.json());
app.use("/api", apiRouter);


app.use(handleErrorSQL);
app.use(handleCustomErrors);
app.all("/*", (req, res) => {
  res.status(404).send("Route not found");
});
module.exports = app;
