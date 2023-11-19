const express = require("express");

const app = express();

app.use('/', 
/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function(req, res, next) {
    res.status(200).json({
        message: "Welcome to jenkis test project with docker!"
    });
});

app.listen(3000, function () {
    console.log('Server started on port number http://localhost:3000');
})