const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/user', userController.create)
router.get('/user', userController.listUsers)
router.get('/user/:id', userController.listById)
router.delete('/user/:id', userController.delete)
router.put('/user/:id', userController.update)

module.exports = router