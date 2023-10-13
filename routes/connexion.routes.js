const express = require("express");
const { login, getUser, putNewPassword } = require("../controllers/login.controllers");
const router = express.Router();
const security = require('../middlewares/security');

router.post("/", login);

router.post("/getUser", getUser);

router.post("/changePassword",security.checkJWT, putNewPassword);


module.exports = router;
