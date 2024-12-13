const express = require("express")
const {leerInventario, crear, leerElementoPorId} =require("../controllers/inventario")
const router = express.Router()

// router.get("/", (req,res)=>{
//     console.log("hola desde routes inventario")
//     res.send("hola desde routes inventario")
// })

router.get("/", leerInventario)
router.get("/:id",leerElementoPorId)
//routes cuando seas de esta forma :id, traeme el texto que esta despues del id y traemelo como si fuera un id
//Estoy mandando un parametro por la url
router.post("/", crear)
//post verbo para crear

module.exports = router
