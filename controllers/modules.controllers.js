const ModuleModel = require('../models/module.models')

module.exports.getModules = async (req, res) => {
    const module = await ModuleModel.find()
    res.status(200).json(module)
}

module.exports.addModule = async(req, res) => {
    if(!req.body.name) {
        res.status(400).json({message: "Aucun message ! Ajoutez en un..."})
    }

    const module = await ModuleModel.create({
        name: req.body.name,
        name_reduit: req.body.name_reduit,
        color_hexa: req.body.color_hexa,
        departement: req.body.departement,
        matiere: req.body.matiere,
    })
    res.status(200).json(module)
}

module.exports.editModule = async (req, res) => {
    const module = await ModuleModel.findById(req.params.id)

    if(!module) {
        res.status(400).json({
            message: "Ce module n'existe pas"
        })
    }

    const updateModule = await ModuleModel.findByIdAndUpdate(
        module,
        req.body,
        {new: true}
    )

    res.status(200).json(updateModule)
}

module.exports.deleteModule = async (req, res) => {
    const module = await ModuleModel.findById(req.params.id)

    if(!module) {
        res.status(400).json({
            message: "Ce module n'existe pas"
        })
    }

    await module.deleteOne({ _id: req.params.id })
    res.status(200).json("Message supprimé " + module)
}