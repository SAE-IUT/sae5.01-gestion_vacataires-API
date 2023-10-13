const loginModels = require("../models/login.models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

module.exports.getPasswordValid = async (req, res) => {
    try {

        const pass = req.body.password 
        // recherche du identifiant/pseudo dans la table "logins"
        const user = await loginModels.findOne({ pseudo: req.body.pseudo });
        
        if (user) {
            //on compare le mot de passe en claire et le mot de passe hashé en base
            bcrypt.compare(pass,user.password,function(err, result){
                if(result){

                    //Création d'un token qui expire 2h après
                    const token = jwt.sign({
                        user: user
                    },
                    process.env.SECRET_KEY,
                    {
                        expiresIn: "2h"
                    });
                    res.header('Authorization', 'Bearer ' + token);

                    res.status(200).json({msg:token});
                }else {
                    res.status(500).json({ error: "Credentials not valid" });
                }
            })
       } else {
        res.status(404).json({ error: "User not exist" });
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
