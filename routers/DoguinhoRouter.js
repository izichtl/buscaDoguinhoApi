const router = require('express').Router()
const DoguinhoController = require('../controllers/DoguinhoController')
const path = require('path')



//Create http methods 
router.get('/doguinho', DoguinhoController.listDoguinhos)
router.get('/doguinho/:_id', DoguinhoController.listById)
router.get('/*', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../client','build') });
});



module.exports = router