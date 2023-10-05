const express = require("express")
const { getPasswordValid, getUser } = require("../controllers/login.controllers")
const router = express.Router()

router.post("/", getPasswordValid)

router.get("getUser", getUser )

module.exports = router

