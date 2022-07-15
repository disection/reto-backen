const Post = require( "../models/post.model" )
const createError = require( 'http-errors' )

// Usercase
const getAll = () => {
    return Post.find( {} )    
}

const getById = (id) => {
    const post = Post.findById( id )
    if( !post ) {
        const error = createError( 404, "Post no encontrado" )
        throw error
    }
    return post
}

const create = ( postData ) => {
    return Post.create(postData)   
}

const update = ( id, postData ) =>{
    const post = Post.findByIdAndUpdate( id, postData, { returnDocument: 'after'} )
    if( !post ) {
        const error = createError( 404, "Post no encontrado" )
        throw error
    }
    return post
}

const remove = ( id ) => {
    const post = Post.findByIdAndDelete( id )
}

module.exports = { getAll, getById, create, update, remove}