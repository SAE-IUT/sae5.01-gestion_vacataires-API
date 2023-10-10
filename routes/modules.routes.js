const express = require("express")
const { getModules, addModule, editModule, deleteModule } = require("../controllers/modules.controllers")
const router = express.Router()
const security = require('../middlewares/security');


router.get("/", getModules)

router.post("/newModule",security.checkJWT, addModule)

router.put("/editModule/:id",security.checkJWT, editModule)

router.delete("/deleteModule/:id",security.checkJWT, deleteModule)

module.exports = router