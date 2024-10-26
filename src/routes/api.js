const express = require('express');
const { getUserAPI } = require('../controllers/apiController')

const routerAPI = express.Router();

routerAPI.get('/users', getUserAPI);

module.exports = routerAPI