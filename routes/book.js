const { Router } = require('express')
const BookController = require("../controllers/CBook")
const auth = require('../middleware/auth')

const router = Router()

router.get('/list', BookController.list)
router.post('/add', BookController.add)
router.put('/update', BookController.update)
router.delete('/remove', BookController.remove)

module.exports = router;