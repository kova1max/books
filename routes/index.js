const { Router } = require('express')
const bookRouter = require('./book')

const router = Router()

router.use('/book', bookRouter)

module.exports = router

// todo: All routes must work properly
// todo: Add error handling to your app (If something went wrong, show it in a response.
// todo: Also you have to control some unhandled rejections inside the app)
// todo: If you worked with database indexes or did normalization - use it in your app (optional)
// todo: When writing the code try to use some known methodologies like MVC (optional)
// todo: It’s better to use hosted database instead of local (optional)
// todo: When finished with your app, please create small documentation inside the README.md file