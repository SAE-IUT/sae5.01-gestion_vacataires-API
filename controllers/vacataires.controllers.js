const VacataireModel = require('../models/vacataire.models')
const mongoose = require("mongoose");

module.exports.getVacataires = async (req, res) => {
    const vacataire = await VacataireModel.find()
    res.status(200).json(vacataire)
}

module.exports.addVacataire = async(req, res) => {
    // if(!req.body.name) {
    //      res.status(400).json({message: "Aucun message ! Ajoutez en un..."})
    // }

    const vacataire = await VacataireModel.create({
        name: req.body.name,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        github: req.body.github,
        skills: req.body.skills,
        modules: req.body.modules,
    })
    res.status(200).json(vacataire)

}

module.exports.editVacataire = async (req, res) => {
    const vacataire = await VacataireModel.findById(req.params.id)

    if(!vacataire) {
        res.status(400).json({
            message: "Ce vacataire n'existe pas"
        })
    }

    const updateVacataire = await VacataireModel.findByIdAndUpdate(
        vacataire,
        req.body,
        {new: true}
    )

    res.status(200).json(updateVacataire)
}

module.exports.deleteVacataire = async (req, res) => {
    const vacataire = await VacataireModel.findById(req.params.id)

    if(!vacataire) {
        res.status(400).json({
            message: "Ce vacataire n'existe pas"
        })
    }

    await vacataire.deleteOne({ _id: req.params.id })
    res.status(200).json("Message supprimé " + vacataire)
}

module.exports.affecteVacataire = async (req, res) => {
    try {
        await VacataireModel.findByIdAndUpdate(
            req.params.id,
            {status: "affecter"},
            {new: true }
        ).then((data) => res.status(200).send(data))
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports.desaffecteVacataire = async (req, res) => {
    try {
        await VacataireModel.findByIdAndUpdate(
            req.params.id,
            {$pull: {likers: req.body.userId}},
            {new: true }
        ).then((data) => res.status(200).send(data))
    } catch (err) {
        res.status(400).json(err)
    }
}