const mongoose = require("mongoose")

// Schemas

const postSchema = new mongoose.Schema({
    tittle: { 
        type: String, 
        required: true , 
        unique: true
    },
    content: { 
        type: String, 
        required: true, 
        unique: true, 
        index: true 
    },
    tags: { 
        type: String, 
        required: true,  
    },
    urlCoverImage: { 
        type: String,
        required: true 
    },
    author: {
        type: String,
        require: true,
        maxlength: 20,
        minlength: 3
    },   
    createDate: { 
        type: Date, 
        default: Date.now()
    },
    minToRead: { 
        type: String,
        required: true 
    },
    avatarAuthor: { 
        type: String,
        required: true 
    }
   
    

    
})

module.exports = mongoose.model("post", postSchema)