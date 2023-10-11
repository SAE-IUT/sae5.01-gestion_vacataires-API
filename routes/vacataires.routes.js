const express = require("express")
const { getVacataires, addVacataire, editVacataire, deleteVacataire, affecterVacataire, desaffecterVacataire } = require("../controllers/vacataires.controllers")
const router = express.Router()
const security = require('../middlewares/security');


router.get("/",security.checkJWT, getVacataires)

router.post("/newVacataire",security.checkJWT, addVacataire)

router.put("/editVacataire/:id",security.checkJWT, editVacataire)

router.patch("/affecterVacataire/:id", affecterVacataire)

router.patch("/desaffecterVacataire/:id", desaffecterVacataire)

module.exports = router