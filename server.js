const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000
require("dotenv").config();

/* Connecting to the database and then starting the server. */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, console.log("Server started on port " + port+ " - mongodb connecté"));
  })
  .catch((err) => {
    console.log(err);
  });
