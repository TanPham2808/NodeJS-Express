const path = require('path');
const express = require('express')

const configViewEngine = (app) => {

    // config template engine (công cụ giúp tách mã HTML thành các phần nhỏ hơn và có thể sử dụng lại trên nhiều tập tin HTML)
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs')

    // config static file: image/css/js
    app.use('/static', express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;