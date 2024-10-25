const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: 'string',
        email: 'string',
        city: 'string'
    }
);
const User = mongoose.model('user', userSchema);

module.exports = User;