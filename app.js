const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const xssRouter = require("./routes/xss.router");
const fileRouter = require("./routes/file.router");

const app = express();

// CABECERAS
//app.use(cors(corsOprions));

//  solo tomara en cuenta los objetos de tipo json
app.use(bodyParser.json());
//  no permitira objetos anidados
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/xssattack', xssRouter);
app.use('/api/fileattack', fileRouter);


app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

module.exports = app;