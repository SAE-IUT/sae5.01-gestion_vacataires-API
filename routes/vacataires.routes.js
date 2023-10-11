const express = require("express")
const { getVacataires, addVacataire, editVacataire, deleteVacataire, affecterVacataire, desaffecterVacataire } = require("../controllers/vacataires.controllers")
const router = express.Router()

router.get("/", getVacataires)

router.post("/newVacataire", addVacataire)

router.put("/editVacataire/:id", editVacataire)

router.delete("/deleteVacataire/:id", deleteVacataire)

router.patch("/affecterVacataire/:id", affecterVacataire)

router.patch("/desaffecterVacataire/:id", desaffecterVacataire)

module.exports = router