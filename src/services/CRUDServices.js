const connection = require('../config/database');

// Lấy Model
const User = require('../models/User');

const getAllUsers = async () => {
    try {
        return await User.find({});
    }
    catch (err) {
        console.log(err);
    }
}

const getUserById = async (userId) => {
    try {
        let user = await User.findById(userId).exec();
        return user;
    }
    catch (err) {
        console.log(err);
    }
}

const createUser = async (email, name, city) => {
    try {
        // Nó tự thêm xuống DB ko cần save (lý do mình đang thao tác với model)
        await User.create({
            email: email,
            name: name,
            city: city
        })
    } catch (err) {
        return console.log(err);
    }
}

const updateUser = async (id, email, name, city) => {
    await User.updateOne
        (
            { _id: id },
            { email: email, name: name, city: city }
        );
}

const deleteUser = async (userId) => {
    try {
        let [result, fields] = await connection.query(
            `Delete from Users Where id= ${userId} `
        )
        return result;
    } catch (err) {
        return console.log(err);
    }
}

module.exports = {
    getAllUsers, getUserById, createUser, updateUser, deleteUser
}