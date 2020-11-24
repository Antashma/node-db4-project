const express =  require('express');
const server = express();

server.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Sam G's Node DB4 Project!</h1>
        <p>This is a recipe app! Please use Postman to interact!</p>
    `)
});

server.get('/api', (req, res) => {
    res.send(`
        <h1>Api Link acheived!</h1>
    `)
});

module.exports = server;