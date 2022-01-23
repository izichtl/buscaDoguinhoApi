const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const DoguinhoRouter = require('./routers/DoguinhoRouter')


//Starts app
class App {
    constructor(){
        this.app = express()
        this.middlewares()
        this.database()
        this.routers()
    }

//Call de middlewares
    middlewares(){
        this.app.use(cors())
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }
//Call Database
    database(){
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then( () => {
            console.log('Conectado ao Mongo')
        })
        .catch ( (error) => {
            console.log(error)
        })
    }
    
//Call instance routers 
    routers(){
        this.app.use(DoguinhoRouter)
    }
}

module.exports = new App().app