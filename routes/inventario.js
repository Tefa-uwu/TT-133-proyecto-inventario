const express = require("express")
const {leerInventario} =require("../controllers/inventario")
const router = express.Router()

// router.get("/", (req,res)=>{
//     console.log("hola desde routes inventario")
//     res.send("hola desde routes inventario")
// })

router.get("/", leerInventario)

module.exports = router
