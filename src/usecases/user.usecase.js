const User = require("../models/user.model")
const createError = require('http-errors')
const bcrypt = require("bcrypt")
const jwt = require("../lib/jwt.lib")


// Usercase
const getAll = () => {
    return User.find( {} )    
}

const getById = (id) => {
    const user = User.findById( id )
    if( !user ) {
        const error = createError( 404, "Usuario no encontrado" )
        throw error
    }
    return user
}



const  create = async(userData) => {
    const hash = await bcrypt.hash(userData.password, 10)
    userData.password = hash 
    const user = User.create( userData )
    
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
    return User.findByIdAndDelete( id )
}

const login = async (email, textPlainPassword) =>{
    const user= await User.findOne( { email } )
    if(!user) throw createError( 401, "Invalid data" )
    
    const isValidPassword = await bcrypt.compare(textPlainPassword, user.password)
    if(!isValidPassword) throw createError(401, "Invalid data")

    const token = jwt.sign( { id : user._id } )
    
    return token;
}

module.exports = { getAll, getById, create, update, remove, login}