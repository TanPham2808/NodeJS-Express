const express = require('express');
const { getUserAPI, postUserAPI, putUserAPI, deleteUserAPI,
    postUploadSingleFileAPI, postUploadMutipleFileAPI
} = require('../controllers/apiController')

const routerAPI = express.Router();

routerAPI.get('/users', getUserAPI);
routerAPI.post('/users', postUserAPI);
routerAPI.put('/users', putUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMutipleFileAPI);

module.exports = routerAPI