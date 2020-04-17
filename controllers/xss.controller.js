const { validationResult } = require("express-validator");

exports.xss = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    console.log(req.body);
    res.status(201).json({
        message: "Request",
        req: req.body
    });
}
