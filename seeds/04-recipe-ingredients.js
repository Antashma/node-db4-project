
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        //PUMPKIN
        {recipe_id: 1, ingredient_id:1 , quantity: 3, measurement: 'Tbl'},
        {recipe_id: 1, ingredient_id:7 , quantity: 1, measurement: 'tea'},
        {recipe_id: 1, ingredient_id:2 , quantity: 0.25, measurement: 'tea'},
        {recipe_id: 1, ingredient_id:3 , quantity: 1, measurement: 'Tbl'},
        {recipe_id: 1, ingredient_id:4 , quantity: 3, measurement: 'Tbl'},
        {recipe_id: 1, ingredient_id:6 , quantity: 0.50, measurement: 'Tbl'},
        {recipe_id: 1, ingredient_id:5 , quantity: 1, measurement: 'tea'},
        //MATCHA
        {recipe_id: 2, ingredient_id:1 , quantity: 3, measurement: 'Tbl'},
        {recipe_id: 2, ingredient_id:8 , quantity: 1, measurement: 'tea'},
        {recipe_id: 2, ingredient_id:2 , quantity: 0.25, measurement: 'tea'},
        {recipe_id: 2, ingredient_id:3 , quantity: 1, measurement: 'Tbl'},
        {recipe_id: 2, ingredient_id:4 , quantity: 3, measurement: 'Tbl'},
        {recipe_id: 2, ingredient_id:6 , quantity: 0.50, measurement: 'Tbl'},
        //SNICKERDOODLE
        {recipe_id: 3, ingredient_id:1 , quantity: 3, measurement: 'Tbl'},
        {recipe_id: 3, ingredient_id:9 , quantity: 1, measurement: 'tea'},
        {recipe_id: 3, ingredient_id:2 , quantity: 0.25, measurement: 'tea'},
        {recipe_id: 3, ingredient_id:3 , quantity: 1, measurement: 'Tbl'},
        {recipe_id: 3, ingredient_id:4 , quantity: 3, measurement: 'Tbl'},
        {recipe_id: 3, ingredient_id:6 , quantity: 0.50, measurement: 'Tbl'},
        {recipe_id: 3, ingredient_id:5 , quantity: 1, measurement: 'tea'},
      ]);
    });
};
