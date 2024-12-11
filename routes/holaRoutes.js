const express = require("express")
const router = express.Router()
const holaControllers = require("../controllers/holaController")
//../ es para salir del directorio

router.get("/",holaControllers.holaMundo)

module.exports = router
