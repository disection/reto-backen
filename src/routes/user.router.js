const express = require("express")
const app = require("../server")
const { getAll, getById, create, update, remove } = require("../usecases/user.usecase")

const router = express.Router()

// getAll users
router.get("/", async (request,response) => {
    try {
        const users = await getAll()
        response.json({
            success: true,
            message: "Todo el listado de usuarios esta aquí",
            payload: "Se imprimen todos los usuarios",
            data: {
                users
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
        const user = await getById( id )
        response. json({
            success: true,
            message: "encontre el usuario que buscabas",
            payload: "Usuario encontrado",
            data: {
                user
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

// User create
router.post("/", async (request,response) =>{
    try {
        const user = await create(request.body)
        response.status(201)
        response.json({            
            success: true,
            message: "El usuario ha sido creado correctamente",
            payload: "Usuario creado",
            data: {
                user
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



// Update user
router.patch("/:id", async (request, response) =>{
    try {
        const user = await update(request.params.id, request.body)
        response.json({
            success: true,
            message: "el usuario ha sido correctamente actualizado",
            payload: "Usuario actualizado",
            data: {
                user
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
        const user = await remove( request.params.id )
        response.json({
            success : true,
            message: "El usuario ha sido eliminado...",
            payload: "Usuario eliminado"
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