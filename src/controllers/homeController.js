const connection = require('../config/database');


const getHomePage = (req, res) => {
    let users = [];

    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results;
            res.send(JSON.stringify(users))
        }
    );
}

const getABC = (req, res) => {
    res.send('Hello ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT
}