
exports.up = function(knex) {
    return knex.schema
        .createTable('recipe_ingredients', tbl => {
            tbl.text('quantity').notNullable();
            tbl.text('measurement', 128).notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id');
            tbl.primary(['recipe_id', 'ingredient_id'])
            
        })
};

exports.down = function(knex) {
   return knex.schema
    .dropTableIfExists('recipe_ingredients')
};
