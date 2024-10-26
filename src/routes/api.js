const express = require('express');
const { getUserAPI, postUserAPI, putUserAPI, deleteUserAPI,
    postUploadSingleFileAPI,
} = require('../controllers/apiController')

const routerAPI = express.Router();

routerAPI.get('/users', getUserAPI);
routerAPI.post('/users', postUserAPI);
routerAPI.put('/users', putUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

module.exports = routerAPI