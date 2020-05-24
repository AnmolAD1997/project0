"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv = require("dotenv");
dotenv.config();
function verify(req, res, next) {
    var token = req.header('token');
    if (!token) {
        return res.status(401).send('Access Denied');
    }
    try {
        var secret = process.env.SECRET_TOKEN;
        var verified = jsonwebtoken_1["default"].verify(token, secret);
        req.user = verified;
        next();
    }
    catch (e) {
        res.status(400).send("Invalid Token");
    }
}
exports.verify = verify;
