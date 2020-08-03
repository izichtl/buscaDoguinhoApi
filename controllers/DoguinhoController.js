
const DogModel = require('../models/DogModel')

//Create controllers of REST methods 
class UserController {
    async listDoguinhos(req, res){
        await DogModel.find((error, doc) => {
            if (error) {
                return res.json( {status: false, message: error} )
            } else {
                return res.json(doc)
            }
        })
    }
    async listById(req, res){
        const { _id } = req.params
        const count = await DogModel.count() - 1
        await DogModel.findOne({ "_id": _id},(error, doc) => {
            if (error) {
                return res.json({status: false, message: error})
            }
            if (doc === null) {
                return res.json({status: false, message: 'Please, select id between 0 and '+ count})
            } 
            else { 
                
                return res.json(doc)
                
            }
        })
    }
}

module.exports = new UserController()

