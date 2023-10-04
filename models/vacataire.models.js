const mongoose = require("mongoose")

const vacataireSchema = mongoose.Schema(
    {
      name: {
        type: [String],
      },
      lastName: {
          type: String,
      },
      department: {
          type: String
      },
      skills: {
          type: [String]
      },
      email: {
        type: String,
      },
      linkedin: {
        type: String
      },
      discord: {
        type: String
      },
      status: {
          type: String,
      },
    }
)

module.exports = mongoose.model('vacataire', vacataireSchema)
