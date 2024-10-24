const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDServices');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", { lstUsers: results });
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

const getUpdatePage = (req, res) => {
    res.render('edit.ejs')
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
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
    getCreatePage, getUpdatePage
}