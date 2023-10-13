const express = require("express");
const { getPasswordValid, getUser } = require("../controllers/login.controllers");
const router = express.Router();

router.post("/", getPasswordValid);

router.post("/getUser", getUser);

module.exports = router;
