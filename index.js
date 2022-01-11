require('dotenv').config()

const express    = require('express')
const jsonParser = require('body-parser').json()
const router     = require('./routes/index')
const sequelize  = require('./db')

const server = express()

server.use(jsonParser)
server.use('/api', router)

const start = async () => {

    try {
        await sequelize.authenticate()
        await sequelize.sync()

        server.listen(process.env.PORT || 3000, () => console.log('Server started'))
    }
    catch (e)
    {
        console.error(e)
    }

}

start()