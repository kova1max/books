const { Author } = require('../models')

class CAuthor {

    async add(req, res)
    {
        try
        {
            if( req.body.name !== undefined )
            {
                await Author.create({ name: req.body.name })
                res.status(200).json({ result: true })
            }
            res.status(404).json({ error: true, message: 'Error.' })
        }
        catch (e)
        {
            res.json({ error: true, message: e.message })
        }
    }

    async remove(req, res)
    {
        try
        {
            if( req.body.id !== undefined )
            {
                await Author.destroy({ where: { _id: req.body.id } })
                res.status(200).json({ result: true })
            }
            res.status(404).json({ error: true, message: 'Error.' })
        }
        catch (e)
        {
            res.json({ error: true, message: e.message })
        }
    }

}

module.exports = new CAuthor()