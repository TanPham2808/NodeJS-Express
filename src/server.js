require('dotenv').config()
const express = require('express')
const configViewEngine = require('../src/config/viewEngine');
const webRoutes = require('./routes/web');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Config template Engine
configViewEngine(app);

// Khai báo Router
//app.use('/test', webRoutes);
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})