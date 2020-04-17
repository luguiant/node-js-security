const express = require("express");
const { body } = require("express-validator")
const xssController = require("./../controllers/xss.controller");
const router = express.Router();

router.post(
    '/xss',
    [
    body("xss_request").exists()
        .withMessage("El campo es requerida.")
        /*.matches(/^[A-Za-z0-9_]+$/, "i")*
        .withMessage("La criptomoneda debe ser solo alfanumerica")
        .isLength({ min: 3, max: 10 })
        .withMessage("La criptomoneda debe ser entre 3-10 caracteres")*/
        .trim()
        //.escape()
    ],
    xssController.xss
);

module.exports = router;