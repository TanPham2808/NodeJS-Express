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

const uploadMutipleFiles = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++) {
            //get image extension
            let extName = path.extname(filesArr[i].name);

            //get image's name (without extension)
            let baseName = path.basename(filesArr[i].name, extName);

            //create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`
            let finalPath = `${uploadPath}/${finalName}`;

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }

        return {
            countSuccess: countSuccess,
            detail: resultArr
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    uploadSingleFile, uploadMutipleFiles
}