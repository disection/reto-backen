const User = require("../models/user.model")
const createError = require('http-errors')

// Usercase
const getAll = () => {
    return User.find( {} )    
}

const getById = (id) => {
    const user = User.findById( id )
    if( !user ) {
        const error = createError( 404, "Post no encontrado" )
        throw error
    }
    return user
}

const create = ( userData ) => {
    return User.create(userData)   
}

const update = ( id, userData ) =>{
    const user = User.findByIdAndUpdate( id, userData, { returnDocument: 'after'} )
    if( !user ) {
        const error = createError( 404, "Usuario no encontrado" )
        throw error
    }
    return user
}

const remove = ( id ) => {
    const user = User.findByIdAndDelete( id )
}

module.exports = { getAll, getById, create, update, remove}