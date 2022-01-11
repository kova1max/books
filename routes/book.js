// You’d use GET for getting all books or getting only one book by id. With the POST method,
// you can add a new book to the list. You’d need the PUT method for updating the existing
// book, and it’s evident that with the DELETE method, you will remove the book from the list.
// For this kind of application, you need to use the database.

const { Router } = require('express')
const BookController = require("../controllers/CBook")
const auth = require('../middleware/auth')

const router = Router()

router.get('/list', BookController.list)
router.post('/add', BookController.add)
router.put('/update', BookController.update)
router.delete('/remove', BookController.remove)

module.exports = router;