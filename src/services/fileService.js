
const uploadSingleFile = async (fileObject) => {
    // Đường dẫn tuyệt đối
    let uploadPath = __dirname + '/aa/' + fileObject.name;

    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: uploadPath,
            error: null
        }

    } catch (err) {
        return {
            status: 'fail',
            path: 'null',
            error: JSON.stringify(err)
        }
    }
}

const uploadMutipleFiles = () => {

}

module.exports = {
    uploadSingleFile, uploadMutipleFiles
}