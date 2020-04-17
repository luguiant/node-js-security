const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const fileController = require('./../controllers/file.controller');
const { upload } = require("./../milddleware/multer.milddleware");
const { fileMilddleware } = require("./../milddleware/file_validation.milddleware");


router.post(
    '/file_attack',
    [
        upload.single('file'), 
        fileMilddleware
    ],
    fileController.fileAttack
);

module.exports = router;
