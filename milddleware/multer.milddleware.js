const multer = require('multer');

exports.upload = multer({
    limits: {
        fileSize: 2 * 1024 *1024,
        fields: 50,
        files: 1,
        parts: 51
    }
});

