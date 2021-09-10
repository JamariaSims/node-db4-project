const Ingredients = [
  { ingredient_key: 1, ingredient_name: "pack of noodles", quantity: 1 },
  { ingredient_key: 1, ingredient_name: "water", quantity: 2.5 },
  { ingredient_key: 1, ingredient_name: "noodles", quantity: 1 },
  { ingredient_key: 1, ingredient_name: "flavor packet", quantity: 1 },
  { ingredient_key: 1, ingredient_name: "butter", quantity: 0.014 },
  { ingredient_key: 2, ingredient_name: "water", quantity: 1 },
  { ingredient_key: 2, ingredient_name: "mac n cheese cup", quantity: 1 },
  { ingredient_key: 2, ingredient_name: "flavor packet", quantity: 1 },
];
exports.seed = async function (knex) {
  await knex("ingredients").truncate();
  await knex("ingredients").insert(Ingredients);
};
