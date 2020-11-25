const db = require('./db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeByIngredient
}

async function getRecipes() {
    try {
        return db('recipes')
    } catch (error) {
        throw error; 
    }
}

async function getShoppingList(recipeID) {
    try {
        return await db('recipe_ingredients')
            .where({recipe_id: recipeID})
            .join('ingredients','ingredients.id', 'recipe_ingredients.ingredient_id')
            .select('ingredients.name', 'recipe_ingredients.quantity', 'recipe_ingredients.measurement')
    } catch (error) {
        throw error;
    }
}

async function getInstructions(recipeId) {
    try {
        const instructions =  await db('steps')
            .select('step_number', 'instructions')
            .where({recipe_id:recipeId})
            .orderBy('step_number')
        return instructions;
    } catch (error) {
        throw error;
    }
}

async function getRecipeByIngredient(ingID) {
    try {
        return await db('recipe_ingredients')
            .where({ingredient_id: ingID})
            .join('recipes','recipes.id', 'recipe_ingredients.recipe_id')
            .select('recipes.recipe_title')
    } catch (error) {
        throw error;
    }
}
