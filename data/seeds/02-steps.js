const Steps = [
  {
    recipes_key: 1,
    steps_number: 1,
    steps_instructions:
      "Bring 2-1/2 cups of water to a boil in a small saucepan",
  },
  {
    recipes_key: 1,
    steps_number: 2,
    steps_instructions: "Add the noodles and cook for 2 minute",
  },
  {
    recipes_key: 1,
    steps_number: 3,
    steps_instructions:
      "Add the flavor packet, stir, and continue to cook for another 30 seconds",
  },
  {
    recipes_key: 1,
    steps_number: 4,
    steps_instructions:
      "Remove the pan from the heat and carefully add 1 tbsp of butter",
  },
  {
    recipes_key: 2,
    steps_number: 1,
    steps_instructions: "Remove lid and cheese sauce",
  },
  {
    recipes_key: 2,
    steps_number: 2,
    steps_instructions: "Add water to fill line in cup",
  },
  {
    recipes_key: 2,
    steps_number: 3,
    steps_instructions:
      "Microwave uncovered for 3-1/2 min or until pasta is tender",
  },
  {
    recipes_key: 2,
    steps_number: 4,
    steps_instructions: "Stir in cheese sauce mix until well blended",
  },
];
exports.seed = async function (knex) {
  await knex("steps").truncate();
  await knex("steps").insert(Steps);
};
