const express = require("express")
const app = require("../server")
const { getAll, getById, create, update, remove } = require("../usecases/post.usecase")

const router = express.Router()

// getAll posts
router.get("/")

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

module.exports = router

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