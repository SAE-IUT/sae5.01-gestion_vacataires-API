const express = require("express")
const { getVacataires, addVacataire, editVacataire, deleteVacataire, affecteVacataire, desaffecteVacataire } = require("../controllers/vacataires.controllers")
const router = express.Router()
const security = require('../middlewares/security');


router.get("/",security.checkJWT, getVacataires)

router.post("/newVacataire",security.checkJWT, addVacataire)

router.put("/editVacataire/:id",security.checkJWT, editVacataire)

router.delete("/deleteVacataire/:id",security.checkJWT, deleteVacataire)

router.patch("/affecteVacataire/:id",security.checkJWT ,affecteVacataire)

router.patch("/desaffecteVacataire/:id",security.checkJWT, desaffecteVacataire)

module.exports = router