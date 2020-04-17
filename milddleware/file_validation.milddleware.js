exports.fileMilddleware = (req, __, next ) =>{
    if( req.file && req.file.buffer ){
        req.body.file = {
            name: req.file.originalname ? req.file.originalname : null,
            type: req.file.mimetype ? req.file.mimetype : null,
            size: req.file.size ? req.file.size : null 
        }
    }
    next();
}