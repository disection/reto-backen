const express = require("express")
const { getAll, getById, create, update, remove } = require("../usecases/user.usecase")
const auth = require("../middlewares/auth.middleware")

const router = express.Router()

router.use(auth)

// getAll users
router.get("/", async (request,response) => {
    try {
        const users = await getAll()
        response.json({
            success: true,
            message: "Todo el listado de usuarios esta aquí",
            
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

// GetByID detail
router.get("/detail",auth, async (request, response) => {   
    console.log("estamos en detalle de id")
    try {
        const user = await getById( request.params.id )
        response. json({
            success: true,
            message: "encontre el usuario que buscabas",
            
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

// GetByID
router.get("/:id", async (request, response) => {   
    console.log("estamos en detalle de id")
    try {
        const user = await getById( request.params.id )
        response. json({
            success: true,
            message: "encontre el usuario que buscabas",
            
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
            data: { user }          
            
        })
    } catch (error) {
        response.status( error.status || 500)
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

// User delete
router.delete("/:id", async (request, response) => {
    try {
        const user = await remove( request.params.id )
        response.json({
            success : true,
            message: "El usuario ha sido eliminado...",
            
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