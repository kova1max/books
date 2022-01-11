module.exports = (req, res) => {

    res.status(401).json({ error: true, message: 'You are not authorized' })

}