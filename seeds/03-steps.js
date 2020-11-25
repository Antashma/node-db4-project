
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        //PUMPKIN
        {recipe_id: 1, step_number: 1, instructions: 'mix DRY ingredients in microwave safe mug'},
        {recipe_id: 1, step_number: 2, instructions: 'add in all WET ingredients and mix until smooth'},
        {recipe_id: 1, step_number: 3, instructions: 'place in  microwave for 1-1 1/2 min.'},
        {recipe_id: 1, step_number: 4, instructions: 'Let cool for about 5 minutes and enjoy!'},
        //MATCHA
        {recipe_id: 2, step_number: 1, instructions: 'mix DRY ingredients in microwave safe mug'},
        {recipe_id: 2, step_number: 2, instructions: 'add in all WET ingredients and mix until smooth'},
        {recipe_id: 2, step_number: 3, instructions: 'place in  microwave for 1-1 1/2 min.'},
        {recipe_id: 2, step_number: 4, instructions: 'Let cool for about 5 minutes and enjoy!'},
        //SNICKERDOODLE
        {recipe_id: 3, step_number: 1, instructions: 'mix DRY ingredients in microwave safe mug'},
        {recipe_id: 3, step_number: 2, instructions: 'add in all WET ingredients and mix until smooth'},
        {recipe_id: 3, step_number: 3, instructions: 'place in  microwave for 1-1 1/2 min.'},
        {recipe_id: 3, step_number: 4, instructions: 'Let cool for about 5 minutes and enjoy!'}
      ]);
    });
};
