const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getHoiDanIT, postCreateUser } = require('../controllers/homeController'); // Đây là Controller

// router.Method('/route', handler)  | handler ở đây là Controller (chỉ ra thằng nào chịu trách nhiệm cho Route đó)
router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/hoidanit', getHoiDanIT)

router.post('/create-user', postCreateUser)

module.exports = router