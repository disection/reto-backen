const express = require("express")
const routerPosts = require("./routes/post.router")
const routerUsers = require("./routes/user.router")
const routerAuth = require("./routes/auth.router")


const app = express()


// Middleware
app.use(express.json())

// Middleware de rutas
app.use( "/posts", routerPosts )
app.use( "/users", routerUsers )
app.use( "/login", routerAuth )

//Endpoint HOME
app.get("/", (request, response) => {
    response.json({
        message: "Endponit de Home, Bienvenido a nuestra API de devTo"
    })
})

// Exportar

module.exports = app