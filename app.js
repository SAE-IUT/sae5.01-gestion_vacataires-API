const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/vacataires", require("./routes/vacataires.routes"));
app.use("/api/modules", require("./routes/modules.routes"));
app.use("/api/connexion", require("./routes/connexion.routes"));
// app.use("/api/images", require("./routes/images.routes"));

// app.use('/api/images', express.static(path.join(__dirname, 'assets', 'img')));

module.exports = app;