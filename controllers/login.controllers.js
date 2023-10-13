const loginModels = require("../models/login.models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const ModuleModel = require("../models/module.models");

module.exports.login = async (req, res) => {
    try {

        const pass = req.body.password
        const user = await loginModels.findOne({pseudo: req.body.pseudo});

        if (user) {
            bcrypt.compare(pass, user.password, function (err, result) {
                if (result) {

                    const token = jwt.sign({
                            userId: user._id
                        },
                        process.env.SECRET_KEY,
                        {
                            expiresIn: 24 * 60 * 60
                        });
                    res.header('Authorization', 'Bearer ' + token);

                    res.status(200).json({msg: token});
                } else {
                    res.status(500).json({error: "Credentials not valid"});
                }
            })
        } else {
            res.status(404).json({error: "User not exist"});
        }

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports.getUser = async (req, res) => {
    const {pseudo, password} = req.body;

    try {

        const user = await loginModels.findOne({
            pseudo: pseudo,
            password: password
        });
        if (user.length > 0) {
            res.status(200).json(user);
        } else {
            res.status(404).json({message: "Aucun user trouvé avec ce login et pass."});
        }
    } catch (error) {
        res.status(500).json({message: "message"});
    }
}

module.exports.putNewPassword = async (req, res) => {
    const {password, newPassword} = req.body;
    try {
        const user = await loginModels.findById(req.userId);
        console.log(req.userId)
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    bcrypt
                        .genSalt()
                        .then(salt => {
                            return bcrypt.hash(newPassword, salt)
                        })
                        .then(async hash => {
                            user.password = hash
                            user.save()
                            res.status(200).json({message: "Password changed"})
                        })
                        .catch(err => console.error(err.message))
                } else {
                    res.status(500).json({error: "Credentials not valid"});
                }
            })
        } else {
            res.status(404).json({error: "User not exist"});
        }
    } catch (error) {
        res.status(500).json({message: "message"});
    }


}