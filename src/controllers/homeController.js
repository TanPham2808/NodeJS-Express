


const getHomePage = (req, res) => {
    // Xử lý Data
    // Gọi Model
    res.send('Hello World Tui La Tan Pham')
}

const getABC = (req, res) => {
    res.send('Hello ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT
}