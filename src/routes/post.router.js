const express = require("express")
const app = require("../server")
const { getAll, getById, create, update, remove } = require("../usecases/post.usecase")

const router = express.Router()

// getAll posts
router.get("/", async (request,response) => {
    try {
        const posts = await getAll()
        response.json({
            success: true,
            message: "Todo el listado de posts esta aquí",
            payload: "Se imprimen todos los posts",
            data: {
                posts
            }
        })

    } catch (error) {
        response.status( error.status || 500 )
        response.json({
            success: false,
            message: error.message
        })
    }
})

// GetByID
router.get("/:id", async (request, response) => {
    const { id } = request.params
    try {
        const post = await getById( id )
        response. json({
            success: true,
            message: "encontre el post que buscabas",
            payload: "Post encontrado",
            data: {
                post
            }
            }
        )
    } catch (error) {
        response.status( error.status || 500)
        response.json({
            success:false,
            message: error.message
        })
    }
})

// Posts create
router.post("/", async (request,response) =>{
    try {
        const post = await create(request.body)
        response.status(201)
        response.json({            
            success: true,
            message: "El post ha sido creado",
            payload: "Post create",
            data: {
                post
            }
        })
    } catch (error) {
        response.status( 400 )
        response.json({
            success: false,
            message : error.message
        })
    }
})



// Update posts
router.patch("/:id", async (request, response) =>{
    try {
        const post = await update(request.params.id, request.body)
        response.json({
            success: true,
            message: "el post ha sido correctamente actualizado",
            payload: "Post actualizado",
            data: {
                post
            }
        })
    } catch (error) {
        response.status( 404 )
        response.json({
            success: false,
            message: error.message
        })
    }
})

// Post delete
router.delete("/:id", async (request, response) => {
    try {
        const post = await remove( request.params.id )
        response.json({
            success : true,
            message: "El post ha sido eliminado...",
            payload: "Post eliminado"
        })
    } catch (error) {
        response.status( error.status || 500 )
        response.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router