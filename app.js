const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const userRouter = require('./routers/UserRouter')


class App {
    constructor(){
        this.app = express()
        this.middlewares()
        this.database()
        this.routers()
    }


    middlewares(){
        this.app.use(cors())
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }

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
    routers(){
        this.app.use(userRouter)
    }
}

module.exports = new App().app