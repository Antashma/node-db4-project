
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.text('recipe_title', 128).notNullable()
  })
  .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number').notNullable().unique();
      tbl.text('instuctions', 128).notNullable();
      tbl.integer('recipe_id').unsigned().references('recipes.id')

  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
    
};
