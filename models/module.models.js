const mongoose = require("mongoose")

const moduleSchema = mongoose.Schema(
    {
      name: {
        type: String,
      },
      name_reduit: {
        type: String,
      },
      color_hexa: {
          type: String,
      },
      departement: {
          type: [String]
      },
      matiere: {
          type: String
      },
    }
)

module.exports = mongoose.model('module', moduleSchema)