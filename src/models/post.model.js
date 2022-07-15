const mongoose = require("mongoose")

// Schemas

const postSchema = new mongoose.Schema({
    tittle: { 
        type: String, 
        required: true , 
        unique: true
    },
    image: { 
        type: String,
        required: true 
    },
    content: { 
        type: String, 
        required: true, 
        unique: true, 
        index: true 
    },
    date: { 
        type: String, 
        required: true 
    },
    tags: { 
        type: String, 
        required: true,  
    },
    author: {
        type: String,
        require: true,
        maxlength: 20,
        minlength: 3
    }

    
})

module.exports = mongoose.model("post", postSchema)