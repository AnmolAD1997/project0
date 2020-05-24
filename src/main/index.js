"use strict";
exports.__esModule = true;
//importing important component
var express = require("express");
var body_parser = require("body-parser");
var dotenv = require("dotenv");
dotenv.config();
var app = express();
//for parsing the json data from the user to the readable format
app.use(body_parser());
app.get('/', function (req, res) {
    res.send("welcome to the jungle");
});
//All the routing stuffs
//app.use('/',route);
//app.use('/user',userRoute);
//app.use('/admin',adminRoute);
var PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("Welcome to this WebServer.");
    console.log("Server Created at Port Number is :" + PORT);
});
