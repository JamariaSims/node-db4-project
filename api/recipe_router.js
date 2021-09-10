const express = require("express");
const router = express.Router();
const recipe = require("./recipe_model");
router.get("/", (req, res, next) => {
  recipe.findAll().then((data) => {
    res.status(200).json(data);
  });
});
module.exports = router;
