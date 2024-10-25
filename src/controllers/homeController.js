const connection = require('../config/database');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../services/CRUDServices');

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
    let response = await createUser(email, name, city);
    res.send(' Created user succeed !');
}

const getDeletePage = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    if (!user) {
        user = {};
    }
    res.render('delete.ejs', { userDelete: user });
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

const postDeleteUser = async (req, res) => {
    let userId = req.body.id;
    let response = await deleteUser(userId);
    if (response) {
        return res.redirect('/');
    }
    return res.send(' Delete user fail !');
}

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser,
    getDeletePage
}