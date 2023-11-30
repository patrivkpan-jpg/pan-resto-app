const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/images'));
    },
    filename: function (req, file, cb) {
        const fileName = `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}.jpg`
        cb(null, fileName)
    }
})
  
exports.upload = multer({ storage: storage })