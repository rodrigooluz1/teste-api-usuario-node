const multer = require('multer')

module.exports = (multer({
     storage: multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, './src/uploads')
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();

        let ext = file.originalname.split('.').pop();

        //callback(null, `${time}_${file.originalname}`)
        callback(null, `${time}.${ext}`)
    }
})}));


