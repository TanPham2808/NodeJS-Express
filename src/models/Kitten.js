const mongoose = require('mongoose');

// Schema là tạo ra một đối tượng mô hình mới để tương tác với DB Mongo.
const kittySchema = new mongoose.Schema({
    name: String
});

// Tạo collection với tên là kittens (quy tắc của MongoDB) cho 'Kitten'
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
