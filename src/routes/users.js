"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var express_2 = require("express");
var everything = require("../database/index");
exports.userRoute = express_2.Router();
var user_1 = require("../model/user");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var tokenVerification_1 = require("./tokenVerification");
var app = express_1["default"]();
exports.userRoute.get('/', function (req, res) {
    console.log("Gettting to the user page successful.");
    res.send("<h1>Welcome to Users Page!!</h1> \n                You can Login In or Register From here\n                Just Go to user/login OR user/register to continue to page");
});
exports.userRoute.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var salt, _a, firstname, lastname, email, dateOfBirth, hashedPassword, user, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, bcryptjs_1["default"].genSalt(10)];
            case 1:
                salt = _b.sent();
                _a = req.body, firstname = _a.firstname, lastname = _a.lastname, email = _a.email, dateOfBirth = _a.dateOfBirth;
                return [4 /*yield*/, bcryptjs_1["default"].hash(req.body.password, salt)];
            case 2:
                hashedPassword = _b.sent();
                _b.label = 3;
            case 3:
                _b.trys.push([3, 5, , 6]);
                console.log(firstname + " " + hashedPassword);
                return [4 /*yield*/, everything.RegisterUser(new user_1.User(firstname, lastname, email, dateOfBirth, hashedPassword), res)];
            case 4:
                user = _b.sent();
                //res.status(201).json(user);
                console.log("Registrarion Success!!");
                res.send("Registration Complete");
                return [3 /*break*/, 6];
            case 5:
                err_1 = _b.sent();
                res.status(500).send("Cannot Register You!!");
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
//this route is for the login purpose.
exports.userRoute.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, checkValue, accessedToken, token, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, everything.CheckUser(email, password)];
            case 2:
                user = _b.sent();
                if (!!user[0]) return [3 /*break*/, 3];
                console.log("Invalid email. Sorry!!");
                res.send("Invalid email. Sorry!!");
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, bcryptjs_1["default"].compare(password, user[0].password)];
            case 4:
                checkValue = _b.sent();
                if (checkValue == true) {
                    accessedToken = process.env.SECRET_TOKEN;
                    token = jsonwebtoken_1["default"].sign({ email: user[0].email }, accessedToken);
                    res.header('token', token).send("Welcome " + user[0].firstname + "  " + user[0].lastname + "   \n                Login Successful!! Your access token is: " + token);
                    console.log("The JWT for this session is: " + token);
                }
                else {
                    console.log("Invalid Password!! Try again!!");
                    res.send("Invalid Password!! Try again!!");
                }
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                err_2 = _b.sent();
                res.status(500).send(err_2.message);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
exports.userRoute.get('/logout', tokenVerification_1.verify, function (req, res) {
    res.header('token', "").send("Logout Successful!! Thankyou for Visiting Superhero Zone");
});
exports.userRoute.get('/superhero/Specialheroes', tokenVerification_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, err_3;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, everything.findSpecialData()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _c.sent();
                res.status(500).send(err_3.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.userRoute.get('/superhero/Allheroes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, err_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, everything.findAllData(0)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _c.sent();
                res.status(500).send(err_4.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.userRoute.get('/superhero/:value', tokenVerification_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var url, _a, _b, _c, _d, err_5;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                url = req.params.value;
                _e.label = 1;
            case 1:
                _e.trys.push([1, 7, , 8]);
                if (!(url == "")) return [3 /*break*/, 2];
                console.log("Thank you");
                return [3 /*break*/, 6];
            case 2:
                if (!((Boolean(url >= 0)) == true)) return [3 /*break*/, 4];
                _b = (_a = res).json;
                return [4 /*yield*/, everything.findDataById(url)];
            case 3:
                _b.apply(_a, [_e.sent()]);
                return [3 /*break*/, 6];
            case 4:
                _d = (_c = res).json;
                return [4 /*yield*/, everything.findDataByHero(url)];
            case 5:
                _d.apply(_c, [_e.sent()]);
                _e.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                err_5 = _e.sent();
                res.status(500).send(err_5.message);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
exports.userRoute.get('/superhero/:value/image', tokenVerification_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var url, ab, ab, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("hello world");
                url = req.params.value;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                if (!(url == "")) return [3 /*break*/, 2];
                console.log("Thank you");
                return [3 /*break*/, 6];
            case 2:
                if (!((Boolean(url >= 0)) == true)) return [3 /*break*/, 4];
                return [4 /*yield*/, everything.findImageById(url)];
            case 3:
                ab = _a.sent();
                res.send("<img src='../images/" + ab[0].image + ".jpg' width=\"500\" height=\"600\"'>");
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, everything.findDataByHero(url)];
            case 5:
                ab = _a.sent();
                res.send("<img src='../images/" + ab[0].image + ".jpg' width=\"500\" height=\"600\"'>");
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                err_6 = _a.sent();
                res.status(500).send(err_6.message);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
