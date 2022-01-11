const { Book, Author } = require('../models')

class CAuthor {

    async list(req, res)
    {
        try {
            res.status(200).json({ result: true })
        }
        catch (e)
        {
            res.json({ error: true, message: e.message })
        }
    }

    async add(req, res)
    {
        try
        {
            res.status(200).json({ result: true })
        }
        catch (e)
        {
            res.json({ error: true, message: e.message })
        }

    }

    async update(req, res)
    {
        try
        {
            res.status(200).json({ result: true })
        }
        catch (e)
        {
            res.json({ error: true, message: e.message })
        }
    }

    async remove(req, res)
    {
        try {
            res.status(200).json({ result: true })
        }
        catch (e) {
            res.json({ error: true, message: e.message })
        }
    }

}

module.exports = new CAuthor()