const db = require("../data/db-config");

exports.findAll = async () => {
  const results = await db("recipes")
    .join("steps", "recipes_id", "=", "recipes_key")
    .select("*");
  console.log(results);
  return results;
};
