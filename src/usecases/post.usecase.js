const Post = require( "../models/post.model" )
const createError = require( 'http-errors' )

// Usercase

const getAll = () => {
    const posts = Post.find( {} )
    return posts
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
    const post = Post.create(postData)
    return post
}

const update = ( id, postData ) =>{
    const post = Post.findByIdAndUpdate( id, postData, { returnDocument: 'after'} )
    return post
}

const remove = ( id ) => {
    const post = Post.findByIdAndDelete( id )
}

module.exports = { getAll, getById, create, update, remove}