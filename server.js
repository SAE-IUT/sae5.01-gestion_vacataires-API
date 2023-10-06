const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000
const cors = require('cors');

// connexion à la DB
connectDB();

const app = express();

app.use(cors());

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/vacataires", require("./routes/vacataires.routes"));
app.use("/api/modules", require("./routes/modules.routes"));
app.use("/api/connexion", require("./routes/connexion.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port));


