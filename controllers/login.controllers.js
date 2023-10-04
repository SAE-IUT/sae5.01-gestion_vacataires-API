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

module.exports.getUser = async (req, res) => {
    const { login, pass} = req.query;

    try {
        const user= await loginModels.find({
            login: login,
            pass: pass
        });

        if (user.length > 0) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Aucun user trouvé avec ce login et pass." });
        }
    } catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
}


router.get("getUser", getUser )