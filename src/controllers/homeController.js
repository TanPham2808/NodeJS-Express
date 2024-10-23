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
    let { email, name, city } = req.body
    connection.query(
        `INSERT INTO 
        Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Create user successed !')
        }
    );
}

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT,
    postCreateUser
}