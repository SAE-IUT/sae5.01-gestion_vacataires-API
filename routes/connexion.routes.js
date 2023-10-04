const express = require("express")
const { getPasswordValid } = require("../controllers/login.controllers")
const router = express.Router()

router.post("/", getPasswordValid)


module.exports = router