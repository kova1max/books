module.exports = (req, res, next) => {

    res.status(401).json({error: true, message: 'You are not authorized'})

}