const express = require("express")
const { getModules, addModule, editModule, deleteModule } = require("../controllers/modules.controllers")
const router = express.Router()

router.get("/", getModules)

router.post("/newModule", addModule)

router.put("/editModule/:id", editModule)

router.delete("/deleteModule/:id", deleteModule)

module.exports = router