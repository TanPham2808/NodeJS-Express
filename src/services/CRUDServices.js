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

module.exports = {
    getAllUsers
}