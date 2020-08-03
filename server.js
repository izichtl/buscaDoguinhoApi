//Create a express server
const app = require('./app')
const favicon = require('express-favicon')
const PORT = process.env.PORT || 8080;
const path = require('path');

app.use(favicon(__dirname + '/client/build/favicon.ico'));

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(___'client/build'));
// }

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})