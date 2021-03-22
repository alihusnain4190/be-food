const express = require("express");
const app = express();
const apiRouter = require("./routes/api-router");
const { handleErrorSQL, handleCustomErrors } = require("./errors/index");
app.use("/api", apiRouter);

app.all("/*", (req, res) => {
  res.status(404).send("Route not found");
});
app.use(handleErrorSQL);
app.use(handleCustomErrors);
module.exports = app;
