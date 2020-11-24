
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'flour'},//1
        {name: 'baking powder'},//2
        {name: 'sugar'}, //3
        {name: 'milk'},//4
        {name: 'vanilla'},//5
        {name: 'oil'},//6
        {name: 'pumpkin spice'},//7
        {name: 'matcha'},//8
        {name: 'cinnamon'}//9
      ]);
    });
};
