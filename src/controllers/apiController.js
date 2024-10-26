const User = require('../models/User');
const { uploadSingleFile, uploadMutipleFiles } = require('../services/fileService');

const getUserAPI = async (req, res) => {
    let results = await User.find({})

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postUserAPI = async (req, res) => {
    try {
        let user = await User.create({
            email: req.body.email,
            name: req.body.name,
            city: req.body.city
        })

        return res.status(200).json({
            errorCode: 0,
            data: user
        })
    } catch (err) {
        return res.json({
            errorCode: 1,
            data: "Error create User"
        })
    }

}

const putUserAPI = async (req, res) => {
    let user = await User.updateOne
        (
            { _id: req.body.id },
            { email: req.body.email, name: req.body.name, city: req.body.city }
        );
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    let result = await User.deleteOne({ _id: req.body.id });
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

// API UPLOAD FILE
const postUploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await uploadSingleFile(req.files.image) // .image chính là key nhập trong postman
    console.log(">>>>check result: ", result);

    return res.send("Ok single");
}

const postUploadMutipleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMutipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })

    } else {
        //upload single
        return await postUploadSingleFileAPI(req, res);
    }

}

module.exports = {
    getUserAPI, postUserAPI, putUserAPI, deleteUserAPI,
    postUploadSingleFileAPI, postUploadMutipleFileAPI
}