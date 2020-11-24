const express =  require('express');
const server = express();
const Model = require('./db-model.js')

server.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Sam G's Node DB4 Project!</h1>
        <p>This is a recipe app! Please use Postman to interact!</p>
    `)
});

server.get('/api', (req, res) => {
    res.send(`
        <h1>Recipe App Methods</h1>
        <p>/api/recipes -- show all recipe titles</p>
        <p>/api/recipes/[recipe_id]/ingredients -- show all needed for selected recipe</p>
        <p>/api/recipes/recipes/[recipe_id]/steps -- show steps for selected recipe</p>
    `);

});

server.get('/api/recipes', async (req, res) => {
    try {
        const recipeTitles = await Model.getRecipes();
        res.status(200).json(recipeTitles);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
            message: `Server error. Could not retrieve recipes.`
        })
    } 
})

server.get('/api/recipes/:recipeId/ingredients', async (req, res) => {
    const {recipeId} = req.params;
    try {
        const list = await Model.getShoppingList(recipeId);
        res.status(200).json(list);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
            message: `Server error. Could not retrieve ingredients.`
        })
    } 
})

server.get('/api/recipes/:recipeId/instructions', async (req, res) => {
    const {recipeId} = req.params;
    try {
        const steps = await Model.getInstructions(recipeId);
        res.status(200).json(steps);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
            message: `Server error. Could not retrieve instructions.`
        })
    } 
})

server.get('/api/ingredients/:ingId/recipes', async (req, res) => {
    const {ingId} = req.params;
    try {
        const recipes = await Model.getRecipeByIngredient(ingId);
        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
            message: `Server error. Could not retrieve recipes.`
        })
    } 
})

module.exports = server;