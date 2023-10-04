const mongoose = require("mongoose")

const loginSchema = mongoose.Schema(
    {
        pseudo: {
            type: String,
        },
        password: {
            type: String,
        },
    }

)

module.exports = mongoose.model('login', loginSchema)