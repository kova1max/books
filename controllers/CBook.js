const { Book, AuthorToBook } = require('../models')

class CBook
{

    async list(req, res)
    {
        try
        {
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
            // expected type of authors is array

            const { title, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status, authors } = req.body
            const book = await Book.create({title, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status})

            if(book._id > 0 && authors.length > 0)
            {
                authors.forEach(async (authorId) => { // Sorry
                    await CBook.createLinkedItem(book._id, authorId) // Here we are creating intermediary record of many-to-many
                })
            }

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
        try
        {
            const { id } = req.body
            await Book.destroy({ where: { _id: id } })
            res.status(200).json({ result: true })
        }
        catch (e)
        {
            res.json({ error: true, message: e.message })
        }
    }

    static async createLinkedItem(bookId, author)
    {
        if(typeof bookId === 'number' && typeof author === 'number')
        {
            await AuthorToBook.create({bookId: bookId, authorId: author })
        }
    }

}

module.exports = new CBook()