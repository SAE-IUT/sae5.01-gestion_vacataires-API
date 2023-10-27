const express = require("express");
const multer = require("multer")
const router = express.Router();
const security = require('../middlewares/security');

// router.get("/:id", security.checkJWT,getImage)
// router.post("/addImage", security.checkJWT, addImage);
// router.put("/editImage/:id", security.checkJWT,editImage);
// router.delete("/deleteImage/:id", security.checkJWT, deleteImage)


module.exports = router;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/img/'); // Dossier de stockage sur le serveur
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  router.post('/asserts/img', upload.single('image'), (req, res) => {
    // Le middleware Multer gère le téléchargement ici
    const imageUrl = `/asserts/img/${req.file.originalname}`;
    res.json({ imageUrl });
  });