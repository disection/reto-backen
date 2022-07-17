require('dotenv').config()
const mongoose = require("mongoose")
const server = require("./src/server")

// deconstrucción
const {
    DB_USER,
    DB_PASSWORD, 
    DB_HOST, 
    DB_NAME
} = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then( () => {
    console.log( "Conneted to DB" )

    server.listen(8080, (request, response)=>{
        console.log("Nuestro servidor esta encendido")
    })
})
.catch( (error) => {

    console.log("Hubo un error", error )

})