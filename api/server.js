const express = require("express");
const recipeRouter = require("./recipe_router");
const server = express();

server.use(express.json());
server.use("/api/recipe", recipeRouter);
server.use("/", (req, res) => {
  res.send(`<h1>Hey! I love code but hate this =)</h1>
  `);
});
server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    custom: "Something went wrong with the router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
