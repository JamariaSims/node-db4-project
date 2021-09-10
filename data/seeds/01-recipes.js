const RecipeBook = [
  {
    recipes_name: "Instant Ramen Noodles",
    created_at: "2021-01-01 08:23:19.120",
  },
  {
    recipes_name: "Instant Mac N Cheese",
    created_at: "2020-07-01 02:23:19.120",
  },
];
exports.seed = async function (knex) {
  await knex("recipes").truncate();
  await knex("recipes").insert(RecipeBook);
};
