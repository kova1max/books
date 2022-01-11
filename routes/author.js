const { Router } = require('express')
const AuthorController = require("../controllers/CAuthor")

const router = Router()

router.post('/add', AuthorController.add)
router.delete('/remove', AuthorController.remove)

module.exports = router;