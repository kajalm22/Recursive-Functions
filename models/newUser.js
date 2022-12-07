const mongoose = require("mongoose")

const newUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("newUser" , newUserSchema)