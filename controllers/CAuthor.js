const { Book, Author } = require('../models')

class CAuthor {

    async add(req, res)
    {
        try
        {
            res.status(200)
        }
        catch (e)
        {
            res.json({ error: true, message: e.message })
        }

    }

    async remove(req, res)
    {
        try {
            res.status(200)
        }
        catch (e) {
            res.json({ error: true, message: e.message })
        }
    }

}

module.exports = new CAuthor()