
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_title: 'Pumpkin Mug Cake'},
        {recipe_title: 'Matcha Mug Cake'},
        {recipe_title: 'Snikerdoodle Mug Cake'}
      ]);
    });
};
