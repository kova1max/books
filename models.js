const sequelize = require('./db')
const { DataTypes } = require('sequelize')

const Book = sequelize.define('book', {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, minLength: 5, allowNull: false },
    pageCount: { type: DataTypes.INTEGER, minLength: 1, allowNull: true },
    publishedDate: { type: DataTypes.DATE, allowNull: false },
    thumbnailUrl: { type: DataTypes.STRING, allowNull: true },
    shortDescription: { type: DataTypes.TEXT, allowNull: true },
    longDescription: { type: DataTypes.TEXT, allowNull: true },
    status: { type: DataTypes.STRING, defaultValue: 'NOT_PUBLISHED' },
})

const AuthorToBook = sequelize.define('atb', {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Author = sequelize.define('author', {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
})

Book.belongsToMany(Author, { through: AuthorToBook })
Author.belongsToMany(Book, { through: AuthorToBook })

module.exports = { Book, Author }