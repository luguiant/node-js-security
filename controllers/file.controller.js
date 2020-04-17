const { validationResult } = require("express-validator");

exports.fileAttack = (req, res, next) => {

    console.log(req.body);
    res.status(201).json({
        message: "Request",
        req: req.body
    });
}

