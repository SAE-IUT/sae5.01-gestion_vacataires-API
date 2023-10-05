const loginModels = require("../models/login.models")
const bcrypt = require("bcryptjs");

module.exports.getPasswordValid = async (req, res) => {
    try {
        let pwd
        bcrypt
            .genSalt()
            .then(salt => {
                console.log('Salt: ', salt)
                return bcrypt.hash(req.body.password, salt)
            })
            .then(hash => {
                pwd = hash
            })
            .catch(err => console.error(err.message))
        const user = await loginModels.findOne({ pseudo: req.body.pseudo, password: pwd });

        if (user) {
            res.send("Success, hash: " + pwd );
        } else {
            res.send("Not");
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports.getUser = async (req, res) => {
    const { pseudo, password} = req.body;


    
    try {
        
        const user= await loginModels.findOne({
            pseudo: pseudo,
            password: password
        });
        if (user.length > 0) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Aucun user trouvé avec ce login et pass." });
        }
    } catch (error) {
        res.status(500).json({message: "message"});
    }
}