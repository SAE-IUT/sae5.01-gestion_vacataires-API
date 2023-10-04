const loginModels = require("../models/login.models")


module.exports.getPasswordValid = async (req, res) => {
    try {
        const user = await loginModels.findOne({ pseudo: req.body.pseudo, password: req.body.password });

        if (user) {
            res.send("Success");
        } else {
            res.send("Not");
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}