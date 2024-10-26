const express = require('express');
const { getUserAPI, postUserAPI } = require('../controllers/apiController')

const routerAPI = express.Router();

routerAPI.get('/users', getUserAPI);
routerAPI.post('/users', postUserAPI);

module.exports = routerAPI