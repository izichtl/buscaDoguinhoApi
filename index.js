//Create a express server
const app = require('./server')
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})