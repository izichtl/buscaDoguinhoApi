const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const userRouter = require('./routers/UserRouter')


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
        mongoose.connect('mongodb://localhost:27017/apinode1', {
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
        this.app.use(userRouter)
    }
}

module.exports = new App().app