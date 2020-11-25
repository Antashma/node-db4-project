
exports.up = function(knex) {
  return knex.schema
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable()
    })    
};

exports.down = function(knex) {
  return knex.schema   
    .dropTableIfExists('ingredients')
};
