const mongoose = require("mongoose")

const empSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true , "Please mention your name"]
        },
        email: {
            type: String,
            required: [true , "Please mention your email"]
        },

        contact: {
            type: Number,
            required: [true , "Please mention your contact number"]
        },

        department: {
            type: String,
            required: true 
        },


    }
)


module.exports = mongoose.model("employees" , empSchema)