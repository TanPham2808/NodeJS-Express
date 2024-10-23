const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render("home.ejs");
}

const getABC = (req, res) => {
    res.send('Hello ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    res.send('Create a new user')
    console.log(">>>>check req.body: ", req.body)
}

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT,
    postCreateUser
}