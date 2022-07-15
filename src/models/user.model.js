const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength : 3,
        maxlength : 20,
        
    },
    email: {
        type: String,
        match: /^.*@*\..*$/,
        required: true,
        unique: true
    },

    password:{
        type : String,
        required : true,
        minlength : 3,
        
    },
    
    isActiveUser:{
        type:Boolean
    }
    
})

module.exports = mongoose.model("user", userSchema)