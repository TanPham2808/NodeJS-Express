const express = require('express');
const router = express.Router();
const { getHomePage, getABC,
    postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser,
    postDeleteUser, getDeletePage } = require('../controllers/homeController'); // Đây là Controller

// router.Method('/route', handler)  | handler ở đây là Controller (chỉ ra thằng nào chịu trách nhiệm cho Route đó)
router.get('/', getHomePage)
router.get('/abc', getABC)

router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)

// Truyền động param 'id' 
router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser)

router.post('/delete/:id', getDeletePage)
router.post('/delete-user', postDeleteUser)


module.exports = router