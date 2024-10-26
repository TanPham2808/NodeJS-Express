const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        desctiption: String
    },
    { timestamps: true } // tự động sinh ra CreateAt & UpdateAt
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;