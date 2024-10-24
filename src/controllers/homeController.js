const connection = require('../config/database');
const { getAllUsers, getUserById, updateUser } = require('../services/CRUDServices');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", { lstUsers: results });
}

const getABC = (req, res) => {
    res.send('Hello ABC')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    if (!user) {
        user = {};
    }
    res.render('edit.ejs', { userEdit: user });
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

const postUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body
    let response = await updateUser(id, email, name, city);
    console.log(">>>>check: ", response);
    if (response) {
        return res.send(' Updated user succeed !');
    }
    return res.send(' Error Update user !');
}

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser
}