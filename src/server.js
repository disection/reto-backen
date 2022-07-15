const express = require("express")


const app = express()


// Middleware
app.use(express.json())

// Middleware de rutas
//app.use( "/posts", routerPosts )


//Endpoint HOME
app.get("/", (request, response) => {
    response.json({
        message: "Endponit de Home, Bienvenido a nuestra API de devTo"
    })
})

// Exportar

module.exports = app