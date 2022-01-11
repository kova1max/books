const { Book, Author } = require('../models')

class CBook {

    async list(req, res)
    {
        try {
            const books = await Book.findAll()

            const result = []

            books.forEach(({ dataValues }) => {
                result.push(dataValues)
            })

            res.status(200).json({ result })
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
            const { title, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status } = req.body

            await Book.create({title, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status})

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
            const { id, title, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status } = req.body
            const book = await Book.findOne({ where: { _id: id } })

            if(!book)
            {
                res.status(404)
                throw new Error('Book not found')
            }

            book.title = title || book.dataValues.title
            book.pageCount = pageCount || book.dataValues.pageCount
            book.publishedDate = publishedDate || book.dataValues.publishedDate
            book.thumbnailUrl = thumbnailUrl || book.dataValues.thumbnailUrl
            book.shortDescription = shortDescription || book.dataValues.shortDescription
            book.longDescription = longDescription || book.dataValues.longDescription
            book.status = status || book.dataValues.status

            await book.save()

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
            const { id } = req.body
            await Book.destroy({ where: { _id: id } })
            res.status(200).json({ result: true })
        }
        catch (e) {
            res.json({ error: true, message: e.message })
        }
    }

}

module.exports = new CBook()