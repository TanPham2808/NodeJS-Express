const path = require("path");

const uploadSingleFile = async (fileObject) => {
    // Đường dẫn tuyệt đối
    //let uploadPath = __dirname + fileObject.name;

    // Lưu ảnh vào public/images/upload
    let uploadPath = path.resolve(__dirname, "../public/images/upload")

    // chế biến lại tên ảnh
    let extName = path.extname(fileObject.name); // lây tên đuôi file
    let baseName = path.basename(fileObject.name, extName)

    // create final path: eg: /upload/your-image.png
    let finalName = `${baseName}-${Date.now()}${extName}`  // VD: abc-26102024030011.png
    let finalPath = `${uploadPath}/${finalName}`;

    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalName,
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