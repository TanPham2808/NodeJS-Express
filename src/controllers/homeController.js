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

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    // KHÔNG DÙNG ASYNC AWAIT
    // connection.query(
    //     `INSERT INTO 
    //     Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Create user successed !')
    //     }
    // );

    // DÙNG ASYNC AWAIT
    try {
        let [result, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `, [email, name, city]
        )
        console.log(">>>>Check result:", result);
        res.send(' Created user succeed !');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT,
    postCreateUser,
    getCreatePage
}