const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength : 3,
        maxlength : 20
    },
    
})

module.exports = mongoose.model("user", userSchema)