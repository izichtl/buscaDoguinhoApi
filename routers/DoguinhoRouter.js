const router = require('express').Router()
const DoguinhoController = require('../controllers/DoguinhoController')


//Create http methods 
router.get('/doguinho', DoguinhoController.listDoguinhos)
router.get('/doguinho/:_id', DoguinhoController.listById)


module.exports = router