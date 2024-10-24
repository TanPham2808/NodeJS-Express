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

module.exports = {
    getAllUsers, getUserById
}