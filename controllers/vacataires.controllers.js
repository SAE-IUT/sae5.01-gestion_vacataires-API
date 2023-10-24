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
        status : "Non Affecté",
        profilePicture: req.body.profilePicture
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

module.exports.affecterVacataire = async (req, res) => {
    try {
      const { id } = req.params; 
      const { nomCours } = req.body;
  
      // Mettez à jour le statut du vacataire
      const updatedVacataire = await VacataireModel.findByIdAndUpdate(
        id,
        { status: "affecté" },
        { new: true }
      );
  
      if (!updatedVacataire) {
        return res.status(404).json({ message: 'Vacataire non trouvé' });
      }
  
      // Ajoutez le cours à la liste des modules du vacataire
      updatedVacataire.modules.push(nomCours);
  
      // Sauvegardez les modifications
      const savedVacataire = await updatedVacataire.save();
  
      res.status(200).json(savedVacataire);
    } catch (err) {
      res.status(400).json(err);
    }
  };

module.exports.desaffecterVacataire = async (req, res) => {
    try {
      const { id } = req.params; 
      const { nomCours } = req.body;
      
  
      // Mettez à jour le statut du vacataire
      const updatedVacataire = await VacataireModel.findById(id);

      // Ajoutez le cours à la liste des modules du vacataire
      updatedVacataire.modules.pull(nomCours);

      if (updatedVacataire.modules.length === 0) {
        updatedVacataire.status = "en attente"
      }

      if (!updatedVacataire) {
        return res.status(404).json({ message: 'Vacataire non trouvé' });
      }
  
      
  
      // Sauvegardez les modifications
      const savedVacataire = await updatedVacataire.save();
  
      res.status(200).json(savedVacataire);
    } catch (err) {
      res.status(400).json(err);
    }
};
  