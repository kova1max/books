const { Router } = require('express')
const bookRouter = require('./book')
const authorRouter = require('./author')

const router = Router()

router.use('/book', bookRouter)
router.use('/author', authorRouter)

module.exports = router