const { response } = require("express");

//Create a express server
const app = require('./app')
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})