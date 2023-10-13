const express = require("express");
const { getVacataires, addVacataire, editVacataire, deleteVacataire, affecterVacataire, desaffecterVacataire } = require("../controllers/vacataires.controllers");
const router = express.Router();
const security = require('../middlewares/security');

router.get("/",security.checkJWT, getVacataires);

router.post("/newVacataire",security.checkJWT, addVacataire);

router.put("/editVacataire/:id",security.checkJWT, editVacataire);

router.delete("/deleteVacataire/:id", security.checkJWT, deleteVacataire);

router.patch("/affecterVacataire/:id", security.checkJWT, affecterVacataire);

router.patch("/desaffecterVacataire/:id", security.checkJWT, desaffecterVacataire);

module.exports = router;
