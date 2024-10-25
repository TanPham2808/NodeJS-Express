const connection = require('../config/database');

const getAllUsers = async () => {
    try {
        let [results, fields] = await connection.query('select * from Users')
        return results;
    }
    catch (err) {
        console.log(err);
    }
}

const getUserById = async (userId) => {
    try {
        let [results, fields] = await connection.query(`select * from Users where id=${userId}`);
        let user = results && results.length > 0 ? results[0] : {};
        return user;
    }
    catch (err) {
        console.log(err);
    }
}

const updateUser = async (id, email, name, city) => {
    try {
        let [result, fields] = await connection.query(
            `Update Users SET email= ?, name=?, city=? Where id=?`,
            [email, name, city, id]
        )
        return result;
    } catch (err) {
        console.log(err);
    }
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
    getAllUsers, getUserById, updateUser, deleteUser
}