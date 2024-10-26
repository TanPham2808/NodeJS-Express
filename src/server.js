require('dotenv').config()
const express = require('express')
const configViewEngine = require('../src/config/viewEngine');
const fileUpload = require('express-fileupload');
const webRoutes = require('./routes/web');

const apiRoutes = require('./routes/api');
const connection = require('../src/config/database');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// app.use () => Đây là 1 Middleware của framework Express

// Config fileupload
app.use(fileUpload());

// Config req.body 
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// Config template Engine
configViewEngine(app);

// Khai báo Router
//app.use('/v1', webRoutes);  URL:http://localhost:3000/v1/.... 
app.use('/', webRoutes);

// Khai báo Router cho API
app.use('/v1/api', apiRoutes);

// seft running funcion
(async () => {
    // test connection MongoDB (nếu lỗi thì server ko chạy nữa)
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend Zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>> Error connect to DB: ", error)
    }
})()

