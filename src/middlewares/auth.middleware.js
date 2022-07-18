const jwt = require("../lib/jwt.lib")
const createError = require('http-errors')
const auth = (request,response, next) => {
    try {
        const authorization = request.headers.authorization || ""
        const token = authorization.replace("Bearer ", "")        

        const isverifiedToken = jwt.verify(token)  

        
        
        next() 

    } catch (error) {
        response.status( error.status || 401)
        response.json({
            success:false,
            error: error.message

        })
    }   
}

module.exports = auth