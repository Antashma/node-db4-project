const server =  require('./server.js')



const PORT = 3333;

server.listen(PORT, () => {
    console.log(`
       *** Hello! Server is running on port ${PORT} ***
    `)
})