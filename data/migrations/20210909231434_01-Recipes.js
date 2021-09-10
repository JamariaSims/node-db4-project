exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipes_id").primary();
      tbl.text("recipes_name").unique().notNullable();
      tbl.timestamp("created_at").notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.integer("steps_number").notNullable();
      tbl.text("steps_instructions").notNullable();
      tbl
        .integer("recipes_key")
        .unsigned()
        .references("recipes_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.text("ingredient_name").notNullable();
      tbl.integer("quantity").notNullable();
      tbl
        .integer("ingredient_key")
        .unsigned()
        .references("recipes_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};
// table.foreign(columns).references(columns).inTable(table)
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
