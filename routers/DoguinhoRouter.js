const router = require('express').Router()
const DoguinhoController = require('../controllers/DoguinhoController')
const path = require('path')



//Create http methods 
router.get('/doguinho', DoguinhoController.listDoguinhos)
router.get('/doguinho/:_id', DoguinhoController.listById)
router.get('/*', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Busca Doguinho API, por favor acesse /doguinho ou /doguinho/id');
});



module.exports = router