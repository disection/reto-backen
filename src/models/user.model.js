const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength : 3,
        maxlength : 20,
        unique: true
    },
    
    isActiveUser:{
        type:Boolean
    }
    
})

module.exports = mongoose.model("user", userSchema)