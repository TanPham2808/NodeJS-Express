require('dotenv').config()
const express = require('express')
const configViewEngine = require('../src/config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('../src/config/database');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Config template Engine
configViewEngine(app);

// Khai báo Router
//app.use('/v1', webRoutes);  URL:http://localhost:3000/v1/.... 
app.use('/', webRoutes);

// A simple SELECT query
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>>> check result: ", results); // results contains rows returned by server
        console.log(">>>> check fields: ", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})