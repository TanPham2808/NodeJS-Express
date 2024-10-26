const User = require('../models/User');

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

module.exports = {
    getUserAPI, postUserAPI, putUserAPI, deleteUserAPI
}