const userModel = require('../models/UserModel')


//Create REST methods controllers

class UserController {
    async create(req, res) {
        const { body } = req;
        
        await userModel.create(body)
        .then( doc => {
            return res.json(doc)
        }, (reason) => {
            console.log(reason)
        })
    }
    async delete(req, res){
        const { id } = req.params
        
        await userModel.remove({_id: id}, (error) => {
            if(error){
                return res.json({status: false, messsage: error })
            } else {
                return res.json({status: true, message: 'User Deletado'})
            }
        })
    }    
    async listUsers(req, res){
        await userModel.find((error, doc) => {
            if (error) {
                return res.json( {status: false, message: error} )
            } else {
                return res.json(doc)
            }
        })
    }
    async listById(req, res){
        const { id } = req.params

        await userModel.findById( id, (error, doc) => {
            if (error) {
                return res.json({status: false, message: error})
            } else {
                return res.json(doc)
            }
        })
    }
    async update(req, res){
        const { body } = req
        const { id } = req.params

        await userModel.updateOne({_id: id}, body, (error, raw) => {
            if (erro) 
                return res.json({status: false, message: error})
            return res(raw)
            
        })
    }
}

module.exports = new UserController()